// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000, // Slide duration set to 3 seconds
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});




/** google_map js **/
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(13.060975735913754, 80.16817787116452),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// function myMap() {
//     var location = { lat: 13.060975735913754, lng: 80.16817787116452 };
//     var mapProp = {
//         center: new google.maps.LatLng(location.lat, location.lng),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

//     var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: "Baby Steps Fertility Centre MADURAVOYAL"
//     });

//     marker.addListener('click', function() {
        
//         // Open directions in a new tab
//         window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`, '_blank');
//     });
// }

/** contact js **/

function sendwhatsapp(){
    var phonenumber = "9445736981";

    var name = document.querySelector('.name').value;
    var number = document.querySelector('.number').value;
    var email = document.querySelector('.email').value;
    var message = document.querySelector('.message').value;

    var url = "https://wa.me/" + phonenumber + "?text="
       +"*Name :* "+name+"%0a"
       +"*Number :* "+number+"%0a"
       +"*Email:* "+email+"%0a"
       +"*Message:* "+message+"%0a%0a"
       window.open(url, '_blank').focus();
}


/* Nav-link */

  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-item .nav-link');
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active-link');
      }
    });
  });
/* Nav-link */

  // JavaScript to toggle fade-in class on Read More button click
  document.addEventListener("DOMContentLoaded", function () {
    var readMoreButtons = document.querySelectorAll('.btn1');
  
    readMoreButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Find the parent .detail-box element
        var detailBox = this.closest('.detail-box');
  
        // Add animation class
        detailBox.classList.add('animate-slide-in');
  
        // Optional: Remove animation class after animation ends
        detailBox.addEventListener('animationend', function() {
          detailBox.classList.remove('animate-slide-in');
        }, {once: true});
      });
    });
  });
  
  
//   <!-- newsletterForm  -->

    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("newsletterForm");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate email format (you may use a more sophisticated method here)
        const email = document.getElementById("emailInput").value;
        if (!isValidEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Simulate form submission (replace with actual submission logic)
        alert(`Subscribing email: ${email}`);

        // Optionally, clear the input after submission
        document.getElementById("emailInput").value = "";
      });

      function isValidEmail(email) {
        // Very basic email validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    });

//   <!--END  newsletterForm  -->


//   <!-- Gallery    -->


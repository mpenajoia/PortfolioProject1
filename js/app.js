// Contact Form Below
$('#send-button').on('click',
  function sendForm(event) {
    event.preventDefault();
    const $name = $("#contact-name").val();
    const $email = $("#contact-email").val();
    const $message = $("#message-area").val();
    const $feedback = $("#feedback");
    const $blank404 = $("<p>")
      .css({ color: "red" })
      .text("Please fill out all fields.");
    const $success = $("<p>").text("Got it, thanks.");
    if (!$name && !$email && !$message) {
      const $error = $feedback.prepend($blank404);
      $error;
      $blank404.fadeOut(2000);
    } else {
      const $serial = $("#contact-form").serializeArray();
      $.ajax({
        url: "https://api.apispreadsheets.com/data/19236/",
        type: "post",
        data: $("#contact-form").serializeArray(),
        success: function () {
          const $successMes = $("#feedback").prepend($success);
          $("#contact-name").val("");
          $("#contact-email").val("");
          $("#message-area").val("");
          $success.fadeOut(2000);
        },
        error: function () {
          $feedback.prepend(
            $("<p>").text("This mailbox is now full, try again later.")
          );
        },
      });
    }
  }
)
const $downArrow = $("#arrow-down");
const $upArrow = $("#arrow-up");
const $upArrowOn = $upArrow.css({ opacity: 0.1 });
const $upArrowOff = $upArrow.css({ opacity: 0 });
const $win = $(window);

// had to declare this variable out side the function's scope for this to work. Thanks to assistance from Jackson
let topArrowVis = false;
// function that is evoked when the window is scrolled
$win.on("scroll", function () {
  const $top = $win.scrollTop();
  if (!topArrowVis && $top >= 100) {
    $upArrow.fadeTo(600, 0.1, function () {});
    topArrowVis = true;
  }
  if (topArrowVis && $top < 100) {
    $upArrow.fadeTo(600, 0, function () {});
    topArrowVis = false;
  }
  if (topArrowVis && $top >= 1800) {
    $upArrow.css("bottom", "130px");
  } else {
    $upArrow.css("bottom", "90px");
  }
});
// function to delay the loading of the down arrow
function arrowLoad() {
  $("#arrow-down").delay(800).animate(
    {
      opacity: .1,
    },
    1000
  );
}
arrowLoad();


let downArrowVis = true;
// function that is evoked when the window is scrolled
$win.on("scroll", function () {
  const $top = $win.scrollTop();

  if (!downArrowVis && $top >= 1850) {
    $downArrow.fadeTo(600, 0, function () {});
    downArrowVis = true;
  }
  if (downArrowVis && $top < 1850) {
    $downArrow.fadeTo(600, 0.1, function () {});
    downArrowVis = false;
  }
});

// //Google Map API integration
// //function to initialize map
// function initMap() {
//   // location of my area
//   const location = { lat: 34.112, lng: -118.193 };
//   // variable to 'put' map on DOM
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: location,
//   });
// }
// project slider controls
function nextProj() {
  $("#next").on("click", function () {
    let $showMe = $("#show-me");
    let $nextImg = $showMe.next();

    if ($nextImg.length) {
      $showMe.removeAttr("id").css("z-index", -50);
      $nextImg.attr("id", "show-me").css("z-index", 50);
    }
  });
  $("#prev").on("click", function () {
    let $showMe = $("#show-me");
    let $prevImg = $showMe.prev();

    if ($prevImg.length) {
      $showMe.removeAttr("id").css("z-index", -50);
      $prevImg.attr("id", "show-me").css("z-index", 50);
    }
  });
}
nextProj();

// function to make tagline appear after half a second of page loading
function tagLine() {
  $("#tagline").delay(1000).animate(
    {
      opacity: 1,
    },
    1000
  );
}
tagLine();
//functions to default to hiding about and project content until a certain scroll height to animate a reveal
let $aboutVis = false;
let $projectVis = false;
let $contactVis = false;
$(window).on("scroll", function () {
  let $theDrop = $(window).scrollTop();
  if (!$aboutVis && $theDrop >= 370) {
    $("#about-me").slideDown(500);
  }
  if (!$aboutVis && $theDrop >= 425){
    $('.languages').show(500);
  }
  if (!$projectVis && $theDrop >= 950) {
    $("#slider").slideDown(500);
  }
  
  // if (!$contactVis && $theDrop >= 1200) {
  //   $("#map").fadeIn(600);
  // }
});

//------------//

// console.log($(document).height());
// console.log($(window).height());
// console.log($(window).scrollTop());

//   const $winHeight = $(window).height();
//   const $docHeight = $(document).height();
  
//   $(window).on("scroll", function () {
//     const $fromTop = $(window).scrollTop();
//     if(($fromTop / $docHeight) > .15 && ($fromTop / $docHeight) <= .24){
//       console.log('great success', $fromTop / $docHeight)
//     }else{
//       console.log('sorry homie')
//     }
//   })

// this function, in theory, was an attempt to go down the route of having a method 
// that was triggered when the browser window size was changed and then run a conditional 
// to confirm what size the user was viewing by checking on a particular css value of an
// element's ID that happens to be unique per screen size, per media query. Next steps would 
// be to implement the function about that controls the slideDown methods based on document 
// height however I can already forsee that the function below would not be triggered if the 
// user arrives to the website without ever making any adjustment to the size of their window. 
// $(window).resize(function(){
  
//   if(($('#arrow-down').css('right') === '40px')){
//     console.log('this is the desktop view')
//   }else{
//     console.log('this is not the desktop version')
//   }
// })

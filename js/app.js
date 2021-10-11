
/*
//Functions for animated arrows
//function animating the down arrow to move up 
function downArrowUp() {
    $('#arrow-down').animate({
        bottom: '+=10px'
    }, 400, downArrowDown)
}
//function animating the down arrow to move down
function downArrowDown() {
    $('#arrow-down').animate({
        bottom: '-=10px'
    }, 400, downArrowUp)
}
//function to trigger both functions above
function downArrowBounce() {
    downArrowDown();
    downArrowUp();
}
//envoking above functions
downArrowBounce();
*/


// function upArrowAppear() {
//     $('#arrow-up').css({'display': 'block'})
// };
// upArrowAppear().on('scroll')

/*
// mirrored functions from above with opposite settings for the up arrow
function upArrowDown() {
    $('#arrow-up').animate({
        bottom: '+=10px'
    }, 400, upArrowUp)
}

function upArrowUp() {
    $('#arrow-up').animate({
        bottom: '-=10px'
    }, 400, upArrowDown)
}
function upArrowBounce() {
    upArrowDown();
    upArrowUp();
}

upArrowBounce();
*/

// $(window).scroll(function(){
//     $('#arrow-up').fadeIn('slow', function() {}).css({'opacity': .1})
// })
// .css({'opacity': 1})

/*
$(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    if(scrollTop > 200){
        $('#arrow-up').fadeIn(4000, function(){
            $('#arrow-up').css({'opacity': .1})
        });
    }
})
*/

// const $scrollTop = $(window).scrollTop();
// if($scrollTop > 500 && $scrollTop < 900){
//     $('#arrow-up').fadeIn(400)
// }else{
//     $('#arrow-up').fadeOut(400)
// }

// $(window).scrollTop(20)

//PREVIOUS ATTEMPT AT JQUERY ANIMATIONS ABOVE - SCRAPPED


// Contact Form Below
function sendForm (){
    const $name = $('#contact-name').val();
    const $email = $('#contact-email').val();
    const $message = $('#message-area').val();
    const $feedback = $('#feedback');
    const $blank404 = $('<p>').css({'color': 'red'}).text('Please fill out all fields.');
    // const $success = $('<p>').text('Got it, thanks.');
    const $fadeAway = $feedback.fadeOut(1500);

    if(!$name && !$email && !$message){
        // const $blank404 = $feedback.prepend($('<p>').css({'color': 'red'}).text('Please fill out all fields.'))
        // $feedback.text("Please fill out all fields.");
        $feedback.prepend($blank404)
        $fadeAway

    }else{
        const $serial = $('#contact-form').serializeArray()
        $.ajax({
            url: 'https://api.apispreadsheets.com/data/19236/',
            type: 'post',
            data:$('#contact-form').serializeArray(),
            success: function(){
                // const $success = $('<p>').text('Got it, thanks.');
                // $feedback.append($success)
                // $fadeAway
                // alert('Got it, thanks.')
            },
            error: function(){
                $feedback.prepend($('<p>').text('This mailbox is now full, try again later.'))
            }
        });
    }
}


const $downArrow = $('#arrow-down');
const $upArrow = $('#arrow-up');
const $upArrowOn = $upArrow.css({'opacity': .1});
const $upArrowOff = $upArrow.css({'opacity': 0});
const $win = $(window);



// $win.on('scroll', function(){
//     const $top = $win.scrollTop();
//     // console.log($top);
//     let topArrowVis = false;
//     if(!topArrowVis && $top >= 175){
//         $upArrow.fadeTo(600, 0.1, function(){});
//         topArrowVis = true;
//     }
//     if(topArrowVis && $top < 175){
//         $upArrow.fadeTo(600, 0, function(){});
//         topArrowVis = false;
//     }

// })

// had to declare this variable out side the function's scope for this to work. Thanks to assistance from Jackson
let topArrowVis = false;
// function that is evoked when the window is scrolled
$win.on('scroll', function(){
    const $top = $win.scrollTop();
    // console.log($top);

    if(!topArrowVis && $top >= 190){
        $upArrow.fadeTo(600, 0.1, function(){});
        topArrowVis = true;
    }
    if(topArrowVis && $top < 190){
        $upArrow.fadeTo(600, 0, function(){});
        topArrowVis = false;
    }
    if(topArrowVis && $top >= 1800){
        $upArrow.css('bottom', '130px')
    }else{
        $upArrow.css('bottom', '90px')
    }

});



let downArrowVis = true;
// function that is evoked when the window is scrolled
$win.on('scroll', function(){
    const $top = $win.scrollTop();
    // console.log($top);

    if(!downArrowVis && $top >= 1650){
        $downArrow.fadeTo(600, 0, function(){});
        downArrowVis = true;
    }
    if(downArrowVis && $top < 1650){
        $downArrow.fadeTo(600, 0.1, function(){});
        downArrowVis = false;
    }

});





//Google Map API integration
//function to initialize map
function initMap() {
    // location of my area
    const location = {lat: 34.112, lng: -118.193};
    // variable to 'put' map on DOM
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
}


// slider controls
function nextProj () {
    $('#next').on('click', function (){
        let $showMe = $('#show-me');
        let $nextImg = $showMe.next();

        if($nextImg.length){
            $showMe.removeAttr('id').css('z-index', -50);
            $nextImg.attr('id', 'show-me').css('z-index', 50)
        }
        
    });
    $('#prev').on('click', function (){
        let $showMe = $('#show-me');
        let $prevImg = $showMe.prev();

        if($prevImg.length){
            $showMe.removeAttr('id').css('z-index', -50);
            $prevImg.attr('id', 'show-me').css('z-index', 50)
        }
    })
}
nextProj();
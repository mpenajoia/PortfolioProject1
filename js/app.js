
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
    const $success = $('<p>').text('Got it, thanks.');
   
    if(!$name && !$email && !$message){
        // const $blank404 = $feedback.prepend($('<p>').css({'color': 'red'}).text('Please fill out all fields.'))
        // $feedback.text("Please fill out all fields.");
        $feedback.prepend($blank404)

    }else{
        const $serial = $('#contact-form').serializeArray()
        console.log("String: " + Object.keys($serial[0]));
        console.log("String: " + $serial[0].name)
        $.ajax({
            url: 'https://api.apispreadsheets.com/data/19236/',
            type: 'post',
            data:$('#contact-form').serializeArray(),
            success: function(){
                // $feedback.prepend($success);
                // $success.fadeOut('slow')
            },
            error: function(){
                $('#contact-form').prepend($('<p>').text('Failed to send, try again.'))
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

let topArrowVis = false;
$win.on('scroll', function(){
    const $top = $win.scrollTop();
    // console.log($top);

    if(!topArrowVis && $top >= 175){
        $upArrow.fadeTo(600, 0.1, function(){});
        topArrowVis = true;
    }
    if(topArrowVis && $top < 175){
        $upArrow.fadeTo(600, 0, function(){});
        topArrowVis = false;
    }

})




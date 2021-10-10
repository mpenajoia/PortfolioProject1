
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



function sendForm (){
    const $name = $('#contact-name').val();
    const $email = $('#contact-email').val();
    const $message = $('#message-area').val();
    const $blank404 = $('#contact-form').prepend($('<p>').css({'color': 'red'}).text('Please fill out all fields.'))
    const $success = $('#contact-form').append($('<p>').text('Got it, thanks.'))
    
    if($name === false && $email === false && $message === false){
        $blank404;
    }else{
        $.ajax({
            url: 'https://api.apispreadsheets.com/data/19236/',
            type: 'post',
            data:$('#contact-form').serializeArray(),
            success: function(){
                $success.fadeOut('slow')
            },
            error: function(){
                $('#contact-form').prepend($('<p>').text('Failed to send, try again.'))
            }
        });
    }
}






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







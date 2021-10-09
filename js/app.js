function down() {
    $('#arrow').animate({
        bottom: '+=10px'
    }, 400, up)
}

function up() {
    $('#arrow').animate({
        bottom: '-=10px'
    }, 400, down)
}
function bounce() {
    down();
    up();
}

bounce();
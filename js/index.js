$(document).ready(function(){
    let audioTag = $('audio')[0];
    let muted = "media/mute.png";
    let unmute = "media/unmute.png";
    //Play audio when play button is pressed.
    $('.play-btn').click(function() {
        audioTag.play();
        $('.play-btn').animate({opacity: 1});
        $('.stop-btn, .pause-btn').animate({opacity: 0.5});
    });
    //Pause audio if it was playing else contunie playing
    $('.pause-btn').click(function() {
        if (audioTag.paused) {
            audioTag.play();
            $('.play-btn').animate({opacity: 1});
            $('.pause-btn').animate({opacity: 0.5});
        } else {
            audioTag.pause();
            $('.play-btn').animate({opacity: 0.5});
            $('.pause-btn').animate({opacity: 1});
        }
    });

    $('.stop-btn').click(function() {
        audioTag.pause();
        audioTag.currentTime = 0;
        $('.play-btn, .pause-btn, .stop-btn').animate({opacity: 1});
    });
    //Toggle mute icon
    $('.mute-btn').click(function() {
        if (audioTag.muted == true) {
            audioTag.muted = false;
            $('.mute-btn').css('background-image', 'url('+ unmute +')');
        } else {
            audioTag.muted = true;
            $('.mute-btn').css('background-image', 'url('+ muted +')');
        }
    });
})


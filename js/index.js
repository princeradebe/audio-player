$(document).ready(function(){
    const audioTag = $('audio')[0];
    const muted = "media/mute.png";
    const unmute = "media/unmute.png";
    //Play audio when play button is pressed.
    $('.play-btn').click(function() {
        audioTag.play();
        $('.play-btn').animate({opacity: 0.5});
        $('.stop-btn, .pause-btn').animate({opacity: 1});
    });
    //Pause audio if it was playing else contunie playing
    $('.pause-btn').click(function() {
        if (audioTag.paused) {
            audioTag.play();
            $('.play-btn').animate({opacity: 0.5});
            $('.pause-btn, .stop-btn').animate({opacity: 1});
        } else {
            audioTag.pause();
            $('.pause-btn, .stop-btn').animate({opacity: 0.5});
            $('.play-btn').animate({opacity: 1});
        }
    });

    $('.stop-btn').click(function() {
        audioTag.pause();
        audioTag.currentTime = 0;
        $('.play-btn').animate({opacity: 1});
        $('.pause-btn, .stop-btn').animate({opacity: 0.5});
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
    
    audioTag.addEventListener('timeupdate', function() {
        const currentTime = audioTag.currentTime;
        const duration = audioTag.duration;
        const currentTimeMs = audioTag.currentTime * 1000;
        $('.fill').stop(true, true).animate({'width': (currentTime) / duration * 100 + '%'});
        // $('.fill').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
        // $('.handle').stop(true, true).animate({'right':'-' + (currentTime + .25) / duration * 100 + 'px'}, 250, 'linear');
    });
})
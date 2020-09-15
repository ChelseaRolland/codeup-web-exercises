"use strict";
$(document).ready(function(){
    console.log("Ready to Go!");

    // $('dd').addClass('invisible');

    $('#magic').click(function(event){
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });

    // Bonus
    $('dt').click(function(){
        $(this).toggleClass('highlight');
    });

    //jQuery Traversing

    //q.1
    $('#yellow-btn').click(function(){
        $('ul').each(function(){ //you can put in the parameters of index, element for .each()
            $(this).children().last().toggleClass('yellow-highlight');
            // $(this).children().last().css('font-weight', 'bold');
            // $(element).children().last().css('font-weight', 'bold');
        });

    });

    //q.2
    $('h3').click(function(){
        $(this).next().children().toggleClass('bold-text');
        // $(this).next().children().css('font-weight', 'bold');
    });

    //q.3
    $('li').click(function(){
        $(this).parent().children().first().toggleClass('azul');
        // $(this).parent().children().first().css('color', 'blue');
    });

    // BONUS -->still working on this
    $('#left').click(function(){
        $('#pic-1').css('border-radius', '50%');
    });
    $('#center').click(function(){
        $('#pic-2').css('border-radius', '50%');
    });
    $('#right').click(function(){
        $('#pic-3').css('border-radius', '50%');
    });

    //jQuery Effects

    //q.1
    $('#no').click(function(){
        $('.question').hide();
    });
    $('#yes').click(function(){
        $('.question').show();
    });

    //q.2
    $('h3').next().hide();
    $('h3').click(function(){
        $(this).next().slideToggle();
    });

    //q.3
    $("#register-link").delay(8000).fadeIn();
    // window.setTimeout(function (){
    //     $('h2').fadeIn()
    // }, 8000);

    // $('#myModal').on('show.bs.modal', function (e) {
    //     $('#register').hide().fadeIn(8000);
    // })

});
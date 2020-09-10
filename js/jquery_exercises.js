"use strict";

// $(document).ready(function(){
//     alert("DOM has finished loading!");
// });

// var contents = $('#codeup').html();
// alert(contents);
//
// $('.important').css('background-color', 'yellow');
//
// $('p').css('font-size', '14px');
//
// $('.important, p').css('background-color', '#FF0');
//
// $('*').css('border', '1px solid #F00');


// ID Selectors

// q.3
// var contents = $('#para').html();
// alert(contents);
//
// // q.4
// var contents2 = $('#item-3').html();
// alert(contents2);
//
// //q.5 --> It selected the 1st occurrence
// var contents3 = $('#item-1').html();
// alert(contents3);

//Class Selectors

// q.3
// $('.codeup').css('border', '1px solid #f00');

//Element Selectors

// q.2
// $('li').css('font-size', '20px');
//
// //q.3
// $('li').css('background-color', '#D6B5AA');
// $('h1').css('background-color', '#E8BAE3');
// $('p').css('background-color', '#B2BD7D');
//
// //q.4 --> only shows the 1st instance of h1 in alert
// var header = $('h1').html();
// alert(header);
//
// //Multiple Selectors
//
// // q.1
// $('h1, p, li').css('border', '5px solid #FB8C65');

// JQuery Events

// q.1
$('#main-header').click(function (){
    $(this).css("background-color", "#E1B185")
});

//q.2
$('p').dblclick(function (){
    $('p').css("font-size", "18px")
});

// $('p').dblclick(function (){
//     $(this).css("font-size", "18px")
// });

//q.3
$('li').hover(function (){
    $('li').css("color", "red");
}, function (){
    $('li').css("color", "black");
});

// $('li').hover(function (){
//     $(this).css("color", "red");
// }, function (){
//     $(this).css("color", "black");
// });

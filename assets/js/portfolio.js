 const $ = require('jquery');

// $(document). ready(function(){ alert("Ready!"); });


 $(document).on('click', '[data-toggle="collapsible-nav"]', function(e) {
     let target = ($(this).data('target'));
     $('#' + target).toggleClass('show');
 });

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');

        //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}

//projet hover-box

 let classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

 $(document).ready(function() {
     // check if the mouse is hovered the element
     $('.hover-box').hover(
         function() {
             let direction ="left";
             $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
             $(this).addClass("in-" + direction); //Add mouse in animation
         },
         function() {
             let direction ="right";
             $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
             $(this).addClass("out-" + direction); //Add mouse in animation
         }
     ).data('hover', false);
 });




 // $('[data-toggle="collapsible-nav"]').on('click', function(e){
 //     let target = ($(this).data('target'));
 //     $('#' + target).toggleClass('show');
 // });



 // $(document).hover(
 //     function () {
 //         let direction ="up";
 //         $('.hover-box').on("mouseover",function(){
 //              //direction = $(this).entry({ e: event });
 //             $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
 //             $(this).addClass("in-" + direction); //Add mouse in animation
 //         })
 //     },
 //     function () {
 //         let direction ="down";
 //         $('.hover-box').on("mouseout",function(){
 //            //  direction = $(this).entry({ e: event });
 //             $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
 //             $(this).addClass("out-" + direction); //Add mouse in animation
 //         })
 //
 //     }
 // );

// $('.hover-box').hover(
//     function (event) {
//         let direction = "up";
//          if(jQuery.fn.entry){ //Check if entry js file is loaded.
//             direction = $(this).entry({ e: event }); // Get mouse in direction.
//          }
//
//         $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
//         $(this).addClass("in-" + direction); //Add mouse in animation
//
//     },
//
//     function (event) {
//
//         let direction = "up";
//          if(jQuery.fn.entry){
//             direction = $(this).entry({ e: event }); // Get mouse out direction.
//          }
//
//         $(this).removeClass(classNames.join(" "));
//         $(this).addClass("out-" + direction); //Add mouse out animation
//
//     }
// );
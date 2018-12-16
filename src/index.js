import "./styles/main.scss";

// $(window).scroll(function () {

//     var topScroll = $(window).scrollTop();

//     $('.design-container').css({
//         transform: 'skew(0deg, ' + (3 - (topScroll*0.008)) + 'deg)',
//     });

//     $('.layer-1').css({
//         transform: 'skew(0deg, ' + (-30 - (topScroll*0.08)) + 'deg)'
//     });

//     $('.layer-2').css({
//         transform: 'skew(0deg, ' + (25 + (topScroll*0.07)) + 'deg)'
//     });

//     $('.layer-3').css({
//         transform: 'skew(0deg, ' + (20 + (topScroll*0.01)) + 'deg)'
//     });
// });


// $(document).ready(function(){
  
//     function freshDot(){
//       var tempShape = $('<div>')
//                         .addClass('box')
//                         .offset({
//                             top: $('.about-container').innerHeight() * Math.random(),
//                             left: $('.about-container').innerWidth() * Math.random() 
//                         });
//       this.size = Math.floor(5 * Math.random()) + 7;
 
        
//       $('.bg-pattern').append(this.obj)
//       $('.bg-pattern').append(tempShape)
//     }
//     var dot = [];
//     for(var i = 0 ; i < 100 ; i++ ){
//       dot.push(new freshDot());
//     }
//     /*
//     $(window).resize(function(){
//       for(i=0;i<200;i++){
//         document.body.removeChild(dot[i]);
//       }
//     });
//     */
//   });
  
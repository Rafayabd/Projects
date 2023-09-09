window.addEventListener ('mousemove', function(details){
    var rect = document.querySelector ('#rect');
// console.log(details.clientX)
var xval = gsap.utils.mapRange (0, window.innerWidth,
     200+rect.getBoundingClientRect().width/2,
      window.innerWidth-(200+rect.getBoundingClientRect().width/2),
       details.clientX)


gsap.to("#rect",{
    left: details.clientX + "px",
    ease: Power3
});

});
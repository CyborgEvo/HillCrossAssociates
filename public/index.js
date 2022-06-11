window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    
    $("#navbar").css("background", "#383838");
  } else {
   
   $("#navbar").css("background" ,  "none");
  }
}


$(".navbar-toggler").click(function(event){
  $(event.target).addClass("disabled");
      $("nav").toggleClass("navbar-color");
  setTimeout(()=>{
      $(event.target).removeClass("disabled");
  },500);
})
$(".navbar-collapse a").click(function(){
  $(".navbar-collapse").collapse("hide");
});
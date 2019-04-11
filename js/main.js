window.onscroll = () => {

    // ANAMS SCROLL TO TOP BUTTON - GOOOOOD WORK
    // if ($(this).scrollTop() >= 50) {        
    //   $('.backToTop').fadeIn(200);   
    // } else {
    //     $('.backToTop').fadeOut(200);   
    // }

    // $('.backToTop').click(function() {      
    //   $('body,html').animate({
    //       scrollTop : 0                      
    //   }, 500);
    // });


    // FOR THE PROJECTS TITLE COMING OUT AND ABOUT
    // GET THE HEIGHT OF THE BUTTON
    var hT = $('.see-more-btn').offset().top,
    // GET THE TOP PIXEL OF THE BUTTON
    hH = $('.see-more-btn').outerHeight(),
    // THE DIV WHERE WE WANT TO SPIN THE "PROJECTS" TITLE
    divSecond = $('.top-div').offset().top,
    // THE TOP DIV PIXEL WHEN WE SCROLL TO SPIN
    divSecond2 = $('.top-div').outerHeight()
    // WINDOW HEIGHT
    wH = $(window).height(),
    // WINDOW SCROLL - THIS SCROLL
    wS = $(this).scrollTop();
    // IF THIS WHEN SCROLL IS BIGGER THAN THE OFFSET OF THE DIV, THEN DO THIS
    // if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //   $(".rotate-h1").css('left','45%');
    //   $(".rotate-h1").css('transform','rotate(0deg)');
    //   $(".h1-hc").text('Contact us');
    // }
  if (wS > (divSecond+divSecond2-wH)){
      $(".rotate-h1").show();
      $(".h1-hc").text('Designers');
      $(".rotate-h1").css('left','-10px');
      $(".rotate-h1").css('transform','rotate(270deg)');
      console.log('H1 on the view!');
    // ELSE IF WINDOW SCROLL IS BIGGER 
    } else if(wS > (hT+hH-wH)) {
      $(".rotate-h1").show();
      $(".rotate-h1").css('transform','rotate(-90deg)');
      $(".rotate-h1").css('left','0px');
      $(".h1-hc").text('Projects');
      console.log('hi')
    } else {
      $(".rotate-h1").css('left','-250px');
    }
    
    // NAVBAR WHEN SCROLL - MAKE WHITE

    if(this.scrollY <= 5) {
      $(".rotate-h1").css('left','-200px');
      $('.navbar').css('background-color', 'transparent');
      $(".nav-link").css('color', 'white');
      $(".find-us-button").css('color', 'white');
      $(".find-us-button").css('border','2px solid white');
      $(".navbar-brand img").css('filter', 'invert(0)');
    } else {
      $('.navbar').css('background-color', '#fff');
      $(".nav-link").css('color', 'black');
      $(".find-us-button").css('color', 'black');
      $(".find-us-button").css('border','2px solid black');
      $(".navbar-brand img").css('filter', 'invert(1)');
    }
  };



  // REPLACE THIS !!
  // kevins key = IVYyhF9w3EpIfe27nf09ehAcaywGzpM0

  // REPLACE THIS !!
  // kevins key = IVYyhF9w3EpIfe27nf09ehAcaywGzpM0
  //var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';	// Your unique key - https://www.behance.net/dev
  // https://www.behance.net/v2/projects/4889175?api_key=IVYyhF9w3EpIfe27nf09ehAcaywGzpM0
  var urlProjects = 'https://behance-mock-api.glitch.me/api/projects';

  // USE JSONP - AJAX CALLS FOR THIS CALL
  fetch(`${urlProjects}`)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  console.log('working');
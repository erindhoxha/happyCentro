    $(".button-portfolio").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".container-projects").offset().top
      }, 1000);
    });

    $(".button-designers").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".container-designers").offset().top
      }, 1000);
    });

window.onscroll = () => {


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
  // fetch(`${urlProjects}`)
  // .then((response) => response.json())
  // .then((responseJson) => {
  //   console.log(responseJson);
  // })
  // console.log('working');
// REPLACE THIS !!

$(function () {

  // REPLACE THIS !!
  var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH'; // Your unique key - https://www.behance.net/dev
  var behanceUser = 'Happycentro'; // example - Manuel from Yoobee Creative Catchup #3 | ellastoner370c

  var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser + '/projects?client_id=' + key;

  // ================================== HOME PAGE TEMPLATE (PROJECT DETAILS) ====================================================================

  // If the ID #index has been rendered on the page, then run this <code></code>
  if ($('#home').length > 0) {

    // AJAX request for PROJECT INFO
    $.ajax({

      url: urlProjects,
      dataType: 'jsonp',

      success: function (res) {
        console.log(res);
        var sourceProjects = $("#projects").html();
        var templateProjects = Handlebars.compile(sourceProjects);
        var contextProjects = {projects: res.projects.slice(0,20)};
        var htmlProjects = templateProjects(contextProjects);
        $("#render-projects-here").html(htmlProjects);
      },

      // if the ajax request fails do these things as a fallback
      error: function (res) {
        $('<h1 class="error-msg"> Error, too many requests. We\'ll be back! </h1>').appendTo('body');
      }

    }); // END ajax request

    var urlUser = 'https://api.behance.net/v2/users/' + behanceUser + '?client_id=' + key;

    // AJAX request for USER INFO
    $.ajax({
      url: urlUser,
      dataType: 'jsonp',
      success: function (res) {
        console.log(res);
      }
    }); // END ajax request

  } // END HOMEPAGE template

  // ================================== PROJECT PAGE TEMPLATE ====================================================================

  // If the ID #project has been rendered on the page, then run this code
  if ($('#project').length > 0) {
    var pageURL = new URL(document.location);
    var params = pageURL.searchParams;
    var id = params.get('id');
    var urlProject = 'http://www.behance.net/v2/projects/' + id + '?api_key=' + key;
    // AJAX request
    $.ajax({
      url: urlProject,
      dataType: 'jsonp',
      success: function (res) {
        console.log(res);
        var project = res.project;
      },
      error: function (res) {
        $('<h1> Error!! </h1>').appendTo('body');
      }
    });
  }
});


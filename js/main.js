$(".loader").show();
  // GLOBAL OBJECTS
  var labels = [];
  var names = [];
  setTimeout(() => {
    $(".loader").fadeOut(700);
  }, 2200);
      
    $(window).on('load', function() {
      $(window).scrollTop(0);
    });
    $(".button-portfolio, .see-more-btn, .portfolioButtonFooter").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".container-projects").offset().top
      }, 1000);
    });

    $(".button-designers").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".container-designers").offset().top
      }, 1000);
    });

    $(".button-get-in-touch, .contactButtonFooter").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
      }, 1000);
    });

window.onscroll = () => {

// testagain
    var hT = $('.see-more-btn').offset().top,
    // GET THE TOP PIXEL OF THE BUTTON
    hH = $('.see-more-btn').outerHeight(),
    // THE DIV WHERE WE WANT TO SPIN THE "PROJECTS" TITLE
    divSecond = $('.top-div').offset().top,
    // THE TOP DIV PIXEL WHEN WE SCROLL TO SPIN
    divSecond2 = $('.top-div').outerHeight()

    // THE DIV WHERE WE WANT TO SPIN THE "PROJECTS" TITLE
    contactForm = $('.container-form').offset().top,
    // THE TOP DIV PIXEL WHEN WE SCROLL TO SPIN
    contactForm2 = $('.container-form').outerHeight()

    chart = $('#chart-container').offset().top;
    chart2 = $('#chart-container').outerHeight()
    // WINDOW HEIGHT
    wH = $(window).height(),
    // WINDOW SCROLL - THIS SCROLL
    wS = $(this).scrollTop();
    if (wS > (chart+divSecond2-wH - 300)) {
      $(".rotate-h1").css('left','0px');
      $(".h1-hc").text('Graph');
      $(".rotate-h1").css('transform','rotate(-90deg)');
    } else if (wS > (contactForm+contactForm2-wH - 300)) {
      $(".rotate-h1").hide(300);
    }

  else if (wS > (divSecond+divSecond2-wH)){
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


  // kevins key = IVYyhF9w3EpIfe27nf09ehAcaywGzpM0
  //var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';

$(function () {
  // var urlProjects = 'https://behance-mock-api.glitch.me/api/projects';

  // REPLACE THIS !!
  var key = 'IVYyhF9w3EpIfe27nf09ehAcaywGzpM0';
  // W29COrHpD8G2egDBiXrfXUxm6xotUZL4
  // var key = 'IVYyhF9w3EpIfe27nf09ehAcaywGzpM0';
  var behanceUser = 'Happycentro';
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
        
        var projects = res.projects.slice(0, 6);

        projects.forEach(function(item){
          labels.push(item.stats.views)
          names.push(item.name);
        });
        console.log(labels);
        console.log(names);
        renderChart(labels, names)

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
    });
  } // END HOMEPAGE template
  // ================================== PROJECT PAGE TEMPLATE ====================================================================
  // If the ID #project has been rendered on the page, then run this code
  if ($('#project').length > 0) {
    var pageURL = new URL(document.location);
    var params = pageURL.searchParams;
    var id = params.get('id');
    console.log(id);
    if (id) {
      // AJAX request
      var urlUser = 'https://behance-mock-api.glitch.me/api/projects';
      fetch(urlUser)
      .then((response) => response.json())
      .then((res) => {
        // RENDER PROJECTS INSIDE THE PROJECT PAGE OF THE HAPPYCENTRO
        console.log(res.projects[id]);
        var project = res.projects[id];
        var secs = `${project.created_on}`;

        // CONVERT TO A DATE
        console.log(new Date(secs * 1000));
        var date = new Date(secs * 1000);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.toString().split(' ')[2];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $(".date").text(`Created on ${day} ${months[month]}, ${year}`)
        $(".name-of-project").text(project.name)
        $(".likes").text(`${project.stats.appreciations} appreciations - ${project.stats.comments} comments - ${project.stats.views} views`)
        $(".likes").text(`${project.stats.appreciations} appreciations - ${project.stats.comments} comments - ${project.stats.views} views`)
        $(".tags").text(`${project.fields[0]} - ${project.fields[1]} - ${project.fields[2]}`)
        $(".content-text").text(`${project.fields[0]} - ${project.fields[1]} - ${project.fields[2]}`)
        $(".name-of-the-project").text(`Tags`)
        // $(".img-project").attr('src', project.covers.original);
        $(".content-image").attr('src', project.covers.original);
        $(".content-title").text(project.name)
        $(".img-project-2").attr('src', project.modules[0].sizes.original);
        $(".img-project-6").attr('src', project.modules[0].sizes.original);
        $(".img-project-7").attr('src', project.modules[0].sizes.original);
        $(".img-project-3").attr('src', project.modules[1].sizes.original);
        $(".img-project-4").attr('src', project.modules[2].sizes.original);
        $(".img-project-5").attr('src', project.modules[2].sizes.original);
        $(".img-project-6").attr('src', project.modules[2].sizes.original);
        setTimeout(() => {
        $(".img-project-6").css('left', '-25%');
        }, 100);
        $(".loader").fadeOut(700);
        $(".tags-10").text(`${project.tags[0]} - ${project.tags[1]} - ${project.tags[2]} - ${project.tags[3]} - ${project.tags[4]}`)
      })
    }

    var pageURL = new URL(document.location);
    var params = pageURL.searchParams;
    var project = params.get('project');
    console.log(project);
    if (project) {
          // AJAX request for PROJECT INFO
    $.ajax({
        url: urlProjects,
        dataType: 'jsonp',
        success: function (res) {
          $(".loader").fadeOut(700);
          console.log(res.projects[project]);
          var projectObject = res.projects[project];
          $(".name-of-project").text(projectObject.name)
          console.log(projectObject.colors[0].r)
          console.log(projectObject.colors[0].g)
          console.log(projectObject.colors[0].b)
          var r = projectObject.colors[0].r;
          var g = projectObject.colors[0].g;
          var b = projectObject.colors[0].b;
           $(".tags-10").text(`${projectObject.owners[0].city} - ${projectObject.owners[0].company}`);
          $(".content-image").attr('src', projectObject.covers.original);
          $(".content-title").text(projectObject.name)
          $(".content-text").text(`${projectObject.fields[0]} - ${projectObject.fields[1]} - ${projectObject.fields[2]}`)
           $(".tags-11").text(`${projectObject.owners[0].website}`);
          var total = r + g + b;
          // $('body').css('background-color', `rgba(${r}, ${g}, ${b}, 0.8)`)
          // if (total < 400) {
          //   $(".name-of-project, .likes, .tags, h1, p").css('color', 'white');
          // }
          $(".name-of-the-project").text(`${projectObject.slug}`)
          $(".likes").text(`${projectObject.stats.appreciations} appreciations - ${projectObject.stats.comments} comments - ${projectObject.stats.views} views`)
          // $(".likes").text(`${project.stats.appreciations} appreciations - ${project.stats.comments} comments - ${project.stats.views} views`)
          $(".tags").text(`${projectObject.fields[0]} - ${projectObject.fields[1]} - ${projectObject.fields[2]}`)
          $(".img-project").attr('src', projectObject.covers.original);
          $(".img-project-2").attr('src', projectObject.covers.original);
          setTimeout(() => {
          $(".img-project-2").css('left','85%')
          }, 200);
          // $(".loader").fadeOut(700);
        },
        // if the ajax request fails do these things as a fallback
        error: function (res) {
          $('<h1 class="error-msg"> Error, too many requests. We\'ll be back! </h1>').appendTo('body');
        }
      }); // END ajax request
    }
  }
});
  // If the ID #index has been rendered on the page, then run this <code></code>
  if ($('#designer').length > 0) {
    var pageURL = new URL(document.location);
    var params = pageURL.searchParams;
    var id = params.get('id');
    console.log(designerDetails.people[id])
    console.log(id);
    var person = designerDetails.people[id];

    $(".name").text(person.name);
    $(".occupation").text(person.occupation);
    $(".impressions").text(`${person.likes} Likes - ${person.impressions} Impressions - ${person.followers} Followers`);
    $(".img-profile").attr('src', person.imgCircle);
    $(".description").text(`${person.description}`)

      var urlUser = 'https://behance-mock-api.glitch.me/api/projects';
      fetch(urlUser)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        var sourceProjects = $("#projects").html();
        var templateProjects = Handlebars.compile(sourceProjects);
        var contextProjects = {projects: res.projects};
        var htmlProjects = templateProjects(contextProjects);
        $("#render-projects-here").html(htmlProjects);
        $(".loader").fadeOut(700);
      })

  } // END HOMEPAGE template




  function renderChart(labels, names) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: labels,
            backgroundColor: [
                '#29364a',
                '#d82b61',
                '#bdd8d1',
                '#008b94',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          display:false,

        }
    }
});
}


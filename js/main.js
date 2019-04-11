window.onscroll = () => {
    // FOR THE PROJECTS TITLE COMING OUT AND ABOUT
    var hT = $('.see-more-btn').offset().top,
    hH = $('.see-more-btn').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
      console.log('H1 on the view!');
      $(".rotate-h1").css('left','0px');
    } else {
      $(".rotate-h1").css('left','-250px');
    }

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

  // adding object for designers

  designerDetails = 
    [ {
      name : 'Anam',
      id : '`1234545',
      impressions: 'xxx',
      img : 'images/anamPic.jpg',
    },
    {
      name : 'Erind',
      id : '`1234545',
      impressions: 'xxx',
      img : 'images/erindPic.jpg',
    },
    {
      name : 'Farisha',
      id : '`1234545',
      impressions: 'xxx',
      img : 'images/farishaPic.jpg',
    },


    ];

    // testing back to top scroll (check to see if erind has easier code)

    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        
          $('.backToTop').fadeIn(200);   
      } else {
          $('.backToTop').fadeOut(200);   
      }
  });
    $('.backToTop').click(function() {      
        $('body,html').animate({
            scrollTop : 0                      
        }, 500);
    });
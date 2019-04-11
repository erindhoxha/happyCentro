window.onscroll = () => {
    // FOR THE PROJECTS TITLE COMING OUT AND ABOUT
    var hT = $('.see-more-btn').offset().top,
    hH = $('.see-more-btn').outerHeight(),
    divSecond = $('.top-div').offset().top,
    divSecond2 = $('.top-div').outerHeight()
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (divSecond+divSecond2-wH)){
      $(".h1-hc").text('Users');
      $(".rotate-h1").css('left','30px');
      console.log('H1 on the view!');
    } else if(wS > (hT+hH-wH)) {
      $(".rotate-h1").css('left','0px');
      $(".h1-hc").text('Projects');
      console.log('hi')
    }else {
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
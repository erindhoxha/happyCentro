window.onscroll = () => {
    if(this.scrollY <= 5) {
      $('.navbar').css('background-color', 'transparent');
    } else {
      $('.navbar').css('background-color', '#01acec');
    }
  };
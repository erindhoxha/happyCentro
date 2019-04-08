window.onscroll = () => {
    var nav = document.getElementsByClassName('navbar');
    if(this.scrollY <= 5) nav.addClass = 'standardColour'; else nav.addClass = 'scrollColour';
  };
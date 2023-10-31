

export const navbarScroll = window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = '0';
        navbar.style.borderRadius =  "0 0 70px 70px";
    } else {
        navbar.style.borderRadius = "0"
    /*   navbar.style.top = '-5px'; */
    }
  };
  
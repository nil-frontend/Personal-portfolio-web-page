//////===================== toggle menu icon nav  ======================//////
//////===================== toggle menu icon nav  ======================//////

let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





//////===================== typed.js ======================//////

var typed = new Typed('#multiple-text', {
  strings: ['Frontend Developer', 'Bug Bounty Hunter', 'YouTuber','Trader', 'Blogger'],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});

// console.log(document.querySelector('#multiple-text'))


// ========================scroll section active link ==========================//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll =  () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('home');
                document.querySelector('header nav a[href*=' + id +']').classList.add('home');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this given bellow
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);  
    
    //////===================== removing toggle menu icon & nav on clicking navbar link (scroll) ======================//////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    //////============== animate footer on scroll =============///////

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


}


$(document).ready(function (){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*-----------click on event on toggle menu-------- */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
        
    })
//owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    margin: 20,
    nav: true,
    dots: false,
    items:1
   
});


});
 // social medias //
 const galleryImages = document.querySelectorAll("#gallery-image");

 galleryImages.forEach(image => {
   image.addEventListener("click", function() {
     window.location.href = "https://www.instagram.com/";
   });
 });
 
  /*
  const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

*/
//sticky//

ScrollReveal({ reset: true,
    distance: '60px',
    duration:2500,
    delay:700
});
ScrollReveal().reveal('.heading1, .dailydeal , .mtitle', { delay: 100, origin:'bottom' });
ScrollReveal().reveal('.menu-container .box-img',{ delay: 200, origin:'bottom'});
ScrollReveal().reveal('.menu1 .box',{ delay: 200, origin:'bottom'});
ScrollReveal().reveal('.row .col50 img, .row .col50 h4, .row .col50 h1',{ delay: 400, origin:'left'});
ScrollReveal().reveal('.row .col60 ', { delay: 400, origin:'right'});
ScrollReveal().reveal('.philinfo .info1',{ delay: 500, origin:'left', interval:150});
ScrollReveal().reveal('.picphi',{ delay: 500, origin:'right'});
ScrollReveal().reveal('.contact .vid',{ delay: 200, origin:'left'});
ScrollReveal().reveal('.contact .map',{ delay: 200, origin:'right'});

//-----smooth scroll--------//
const reviewSection = document.querySelector(".customer");
const contactSection = document.querySelector(".contact");
const wrapperbuttonSection = document.querySelector(".contact");
const footerSection = document.querySelector(".nav");

document.querySelector(".review-link").addEventListener('click', () => {
    reviewSection.scrollIntoView({ behavior: "smooth"});
})
document.querySelector(".contact-link").addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth"});
})
document.querySelector(".footer-logo").addEventListener('click', () => {
    footerSection.scrollIntoView({ behavior: "smooth"});
})
document.querySelector("#btn1-contact").addEventListener('click', () => {
    wrapperbuttonSection.scrollIntoView({ behavior: "smooth"});
})




window.addEventListener('load', () => {
    let change = document.querySelector(".Frontend");
    let descriptions = ["Software Dev  &#x1F4BB;","Aspiring Java Developer", "Ethical Hacking","AI Enthusiast","Project, SpeakEasy","CEO, Bitmomo",`FAANG fan &#x1F603; &#x1F603; &#x1F603;`];
    let currentIndex = 0;
  
    let intervalId;
  
    function typeDescription() {
      let currentText = "";
      let currentDescription = descriptions[currentIndex];
      let index = 0;
  
      intervalId = setInterval(() => {
        currentText += currentDescription[index];
        change.innerHTML = currentText;
        index++;
  
        if (index >= currentDescription.length) {
          clearInterval(intervalId);
          currentIndex = (currentIndex + 1) % descriptions.length;
          setTimeout(typeDescription, 2000); // Wait for 2 seconds before starting the next description
        }
      }, 120);
    }
  
    typeDescription();
  
  });
  
const headerLinks = document.querySelectorAll("ul li a");

headerLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  });
});
ScrollReveal().reveal('.list',{delay:300});
ScrollReveal().reveal('.Header_button',{delay:600});
ScrollReveal().reveal('.Hi',{delay:900});
ScrollReveal().reveal('.Herbert',{delay:1200});
ScrollReveal().reveal('.Frontend',{delay:1500});
ScrollReveal().reveal('.Item_description',{delay:1800});
ScrollReveal().reveal('.Description_button',{delay:2000});
ScrollReveal().reveal('.SVG',{delay:2000});
ScrollReveal().reveal('.About_topic',{delay:500});
ScrollReveal().reveal('.quote',{delay:800});
ScrollReveal().reveal('.My_picture',{delay:1000});
ScrollReveal().reveal('.My_Description',{delay:1400});
ScrollReveal().reveal('.whatwedo',{delay:400});
ScrollReveal().reveal('.we',{delay:500});
ScrollReveal().reveal('.Item_align',{delay:700});
ScrollReveal().reveal('#contactUs',{delay:800});
ScrollReveal().reveal('#reachOut',{delay:1000});
ScrollReveal().reveal('.small_circle3',{delay:1000});
ScrollReveal().reveal('.small_circle1',{delay:1500});
ScrollReveal().reveal('#The_form',{delay:1700});
ScrollReveal().reveal('.smaller_circle',{delay:800});
ScrollReveal().reveal('.small_circle',{delay:900});
ScrollReveal().reveal('.large_circle',{delay:1000});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
  
  var button = document.querySelector('#homeB');
  var upButton = document.querySelector('#upButton');

  button.addEventListener('click', function() {
      upButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });


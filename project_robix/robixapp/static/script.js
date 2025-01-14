document.addEventListener('DOMContentLoaded', () => {
    const spanElement = document.querySelector('.underline-effect');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spanElement.classList.add('active');
            } else {
                spanElement.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    const targetSection = spanElement.closest('h1'); // Adjust this to the specific section if needed
    observer.observe(targetSection);
});

// sectiob1
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.hero-section .fade-in');
    fadeElements.forEach(element => {
        element.classList.add('show');
    });
});


// section2
function animateCountUp(element, endValue, duration = 2000) {
    let startValue = 0;
    const increment = endValue / (duration / 16); // 16ms for each frame (~60fps)
    const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            element.textContent = `${Math.floor(endValue)}+`; // Display final value with '+' symbol
            clearInterval(counter);
        } else {
            element.textContent = `${Math.floor(startValue)}+`;
        }
    }, 16); // ~60fps
}

window.addEventListener('load', () => {
    const experienceElement = document.querySelector('.info-box:nth-child(1) h3');
    const awardElement = document.querySelector('.info-box:nth-child(3) h3');

    animateCountUp(experienceElement, 10);  // Counting to 10+
    animateCountUp(awardElement, 134);      // Counting to 134+
});


// count


  document.addEventListener("DOMContentLoaded", function () {
    const countElement = document.getElementById("clientCount");
    let startCount = 0;
    const endCount = 5000; // Target count, representing "5K+"
    const duration = 2000; // Animation duration in milliseconds
    const increment = endCount / (duration / 60); // Frame rate assumption: 60fps

    function animateCount() {
      startCount += increment;
      if (startCount >= endCount) {
        countElement.textContent = "5K+";
      } else {
        countElement.textContent = Math.floor(startCount);
        requestAnimationFrame(animateCount);
      }
    }

    animateCount();
  });



//   questions
document.querySelectorAll('.accordh a').forEach((header) => {
    header.addEventListener('click', function () {
      const parent = header.closest('.accord');
      const target = parent.querySelector('.collapse');
  
      // Remove 'active' class from all accordions
      document.querySelectorAll('.accord').forEach((item) => {
        item.classList.remove('active');
      });
  
      // Add 'active' class to the current accordion if expanded
      if (!target.classList.contains('show')) {
        parent.classList.add('active');
      }
    });
  });
  
  
  
  
  




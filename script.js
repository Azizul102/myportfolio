// Infinite smooth slider for reviews
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.reviews-track');
    const items = document.querySelectorAll('.review-item');
    
    // Clone items for infinite loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
    
    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
    
    // Adjust animation duration based on screen size
    function adjustAnimation() {
        if (window.innerWidth >= 992) {
            track.style.animationDuration = '40s';
        } else {
            track.style.animationDuration = '30s';
        }
    }
    
    window.addEventListener('resize', adjustAnimation);
    adjustAnimation();
});
// Specialization Text Rotator - Enhanced
const specItems = document.querySelectorAll('.specialization-items span');
let currentItem = 0;

function rotateSpecItems() {
    // Hide all items first
    specItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
    });
    
    // Show current item
    specItems[currentItem].style.opacity = '1';
    specItems[currentItem].style.transform = 'translateY(0)';
    
    // Move to next item
    currentItem = (currentItem + 1) % specItems.length;
}

// Initialize first item
specItems[0].style.opacity = '1';
specItems[0].style.transform = 'translateY(0)';

// Start rotation every 3 seconds
setInterval(rotateSpecItems, 3000);

// Pause on hover
const specCard = document.querySelector('.specialization-card');
let rotationInterval = setInterval(rotateSpecItems, 3000);

specCard.addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
});

specCard.addEventListener('mouseleave', () => {
    rotationInterval = setInterval(rotateSpecItems, 3000);
});
  // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('#mainNav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Skills tabs functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding content
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Portfolio filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Filter items
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        document.addEventListener("DOMContentLoaded", function () {
          const form = document.getElementById("contactForm");
          const thankYou = document.getElementById("thankYou");
        
          if (form) {
            form.addEventListener("submit", function (event) {
              event.preventDefault();
        
              const formData = new FormData(form);
        
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
              })
                .then(() => {
                  form.style.display = "none";
                  thankYou.style.display = "block";
                })
                .catch((error) => {
                  alert("There was a problem submitting the form. Please try again.");
                  console.error(error);
                });
            });
          }
        });

        // Download CV button
        document.getElementById('downloadCvBtn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('CV download would start here in a live implementation.');
            // In a real implementation, this would link to your actual CV file
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

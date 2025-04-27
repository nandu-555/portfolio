const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");
const muteIcon = document.getElementById("mute-icon");

muteBtn.addEventListener("click", () => {
    if (music.muted) {
        music.muted = false;
        muteIcon.classList.remove("fa-volume-mute");
        muteIcon.classList.add("fa-volume-up");
    } else {
        music.muted = true;
        muteIcon.classList.remove("fa-volume-up");
        muteIcon.classList.add("fa-volume-mute");
    }
});

// function openModal() {
//   document.getElementById('resumeModal').style.display = 'block';
// }

// function closeModal() {
//   document.getElementById('resumeModal').style.display = 'none';
// }


// document.addEventListener("DOMContentLoaded", function () {
//     const text = "B.Tech Graduate | Tech Enthusiast ";
//     const typewriter = document.getElementById('typewriter');
//     let index = 0;

//     function type() {
//         if (index < text.length) {
//             typewriter.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, 100); // speed (in milliseconds)
//         }
//     }

//     type();
// });


document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["B.Tech Graduate", "Tech Enthusiast", "Web Developer"];
    let index = 0;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    const typewriter = document.getElementById('typewriter');

    function type() {
        const currentWord = textArray[index];
        
        if (isDeleting) {
            // Deleting the text
            currentText = currentWord.substring(0, charIndex);
            charIndex--;
        } else {
            // Typing the text
            currentText = currentWord.substring(0, charIndex);
            charIndex++;
        }

        typewriter.textContent = currentText;

        // If the word is typed completely, start deleting after a small delay
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000); // Wait before starting to erase
        } 

        // If the word is erased completely, move to the next one
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length; // Loop through the array
        }

        // Set the speed of typing and erasing
        const typingSpeed = isDeleting ? 50 : 150;
        setTimeout(type, typingSpeed);
    }

    type(); // Start typing effect
});

  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillPercentages = document.querySelectorAll('.skill-percentage');

  let skillsAnimated = false;

  function animateSkills() {
    if (!skillsAnimated && skillsSection.getBoundingClientRect().top < window.innerHeight) {
      
      skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');

        // Set delay for each skill
        setTimeout(() => {
          bar.style.transition = 'width 2s ease-in-out';
          bar.style.width = width;
        }, index * 500); // 500ms delay between each skill bar
      });

      skillPercentages.forEach((counter, index) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 20; // Speed of counting

        setTimeout(() => {
          const updateCount = () => {
            if (count < target) {
              count++;
              counter.innerText = `${count}%`;
              setTimeout(updateCount, speed);
            } else {
              counter.innerText = `${target}%`;
            }
          };
          updateCount();
        }, index * 500); // 500ms delay between each counter
      });

      skillsAnimated = true;
    }
  }

  window.addEventListener('scroll', animateSkills);




// tsParticles Configuration
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });



document.querySelector("#contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("service_6rgs1xa", "template_q4400cq", {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
  }, "q6nslusI4jIcWcFVp")
  .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
  })
  .catch((error) => {
      console.error("Failed to send email:", error);
  });
});


// document.querySelector("#contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const chatID = "8162239869:AAHbP5UIKiILydKwAjcBHB4poyY3zPuYABc"; // Replace with your chat ID
//   const botToken = "966551400"; // Replace with your bot token
//   const message = `
//       Name: ${document.querySelector("#name").value}
//       Email: ${document.querySelector("#email").value}
//       Message: ${document.querySelector("#message").value}
//   `;

//   fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ chat_id: chatID, text: message }),
//   })
//   .then((response) => response.json())
//   .then((data) => {
//       console.log("Message sent to Telegram:", data);
//   })
//   .catch((error) => {
//       console.error("Failed to send message to Telegram:", error);
//   });
// });



// async function trackVisitor() {
//   // Fetch visitor IP details
//   const response = await fetch("https://ipinfo.io?token=YOUR_IPINFO_TOKEN"); // Replace with your IPInfo token
//   const data = await response.json();

//   // Collect visitor details
//   const visitorDetails = {
//       ip: data.ip,
//       city: data.city,
//       region: data.region,
//       country: data.country,
//       location: data.loc,
//       org: data.org,
//       browser: navigator.userAgent,
//       time: new Date().toLocaleString(),
//   };

//   // Send details to Telegram
//   sendToTelegram(visitorDetails);
// }

// // Send details to Telegram
// async function sendToTelegram(details) {
//   const telegramToken = "8162239869:AAHbP5UIKiILydKwAjcBHB4poyY3zPuYABc"; // Replace with your bot token
//   const chatID = "966551400"; // Replace with your chat ID

//   const message = `
//   📍 *New Visitor Detected*:
//   - IP: ${details.ip}
//   - Location: ${details.city}, ${details.region}, ${details.country}
//   - Organization: ${details.org}
//   - Coordinates: ${details.location}
//   - Browser: ${details.browser}
//   - Time: ${details.time}
//   `;

//   await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//           chat_id: chatID,
//           text: message,
//           parse_mode: "Markdown",
//       }),
//   });
// }

// // Call the tracking function when the page loads
// window.onload = trackVisitor;




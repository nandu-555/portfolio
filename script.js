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


  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm("service_6rgs1xa", "template_q4400cq", e.target)
    .then(() => {
        alert("Message sent successfully!");
    }, (error) => {
        alert("Failed to send message, please try again.");
        console.error(error);
    });
});

const telegramToken = "8162239869:AAHbP5UIKiILydKwAjcBHB4poyY3zPuYABc";
const chatID = "966551400"; // Replace with your Telegram chat ID

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = `
        Name: ${formData.get("name")}
        Email: ${formData.get("email")}
        Message: ${formData.get("message")}
    `;

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatID,
            text: message,
        }),
    });
});

async function trackVisitor() {
  // Fetch visitor IP details
  const response = await fetch("https://ipinfo.io?token=YOUR_IPINFO_TOKEN"); // Replace with your IPInfo token
  const data = await response.json();

  // Collect visitor details
  const visitorDetails = {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      location: data.loc,
      org: data.org,
      browser: navigator.userAgent,
      time: new Date().toLocaleString(),
  };

  // Send details to Telegram
  sendToTelegram(visitorDetails);
}

// Send details to Telegram
async function sendToTelegram(details) {
  const telegramToken = "8162239869:AAHbP5UIKiILydKwAjcBHB4poyY3zPuYABc"; // Replace with your bot token
  const chatID = "966551400"; // Replace with your chat ID

  const message = `
  📍 *New Visitor Detected*:
  - IP: ${details.ip}
  - Location: ${details.city}, ${details.region}, ${details.country}
  - Organization: ${details.org}
  - Coordinates: ${details.location}
  - Browser: ${details.browser}
  - Time: ${details.time}
  `;

  await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatID,
          text: message,
          parse_mode: "Markdown",
      }),
  });
}

// Call the tracking function when the page loads
window.onload = trackVisitor;




// script.js

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Particle class
class Particle {
  constructor(x, y, size, color, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x > canvas.width || this.x < 0) this.velocityX *= -1;
    if (this.y > canvas.height || this.y < 0) this.velocityY *= -1;
  }
}

// Initialize particles
function init() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    let size = Math.random() * 5 + 3;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let velocityX = Math.random() * 2 - 1;
    let velocityY = Math.random() * 2 - 1;
    let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;

    particles.push(new Particle(x, y, size, color, velocityX, velocityY));
  }
}

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

// Interactivity
canvas.addEventListener("mousemove", (e) => {
  particles.push(
    new Particle(
      e.x,
      e.y,
      Math.random() * 5 + 3,
      "rgba(255, 255, 255, 0.8)",
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    )
  );
});

// Start
init();
animate();

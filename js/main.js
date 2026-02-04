// Header scroll effect
window.addEventListener("scroll", ()=>{
  const header = document.getElementById("header");
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Hero sliders
document.querySelectorAll(".hero-slider").forEach(slider => {

  const track = slider.querySelector(".slides-track");
  const slides = slider.querySelectorAll(".slide");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");

  let index = 0;

  function updateSlide(){
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", ()=>{
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener("click", ()=>{
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Auto slide
  setInterval(()=>{
    index = (index + 1) % slides.length;
    updateSlide();
  }, 5000);

});

// Hero tab switch
document.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".hero-slider").forEach(s=>s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Product image enlarge
document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    const overlay = document.createElement('div');
    overlay.classList.add('img-overlay');
    overlay.innerHTML = `<img src="${img.src}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});

// Back to top button
const backBtn = document.createElement("button");
backBtn.id = "backToTop";
backBtn.textContent = "↑";
document.body.appendChild(backBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function changeVideo(src) {
  const video = document.getElementById("mainImage");
  video.src = src;
  video.load();
}

function siteSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  for (let name in pagesList) {
    if (name.toLowerCase().includes(input)) {
      window.location.href = pagesList[name];
      return;
    }
  }

  alert("Aucun résultat trouvé 😅");
}

const pagesList = {
  "Accueil": "index.html",
  "À propos": "about.html",
  "Services": "services.html",
  "Produits": "products.html",
  "Store Bannes": "store-bannes.html",
  "Store Zebra": "store-zebra.html",
  "Auvents": "auvents.html",
  "Bâche": "bache.html",
  "Volet Roulant": "volet-roulant.html",
  "Rideaux Occultant": "rideaux-occultant.html",
  "Moustiquaire": "moustiquaire.html",
  "Contact": "contact.html",
  "Vidéos": "videos.html"
};

function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("suggestionsBox");
  box.innerHTML = "";

  if (input.length === 0) {
    box.style.display = "none";
    return;
  }

  let found = false;

  for (let name in pagesList) {
    if (name.toLowerCase().includes(input)) {
      found = true;
      const div = document.createElement("div");
      div.textContent = name;
      div.onclick = function() {
        window.location.href = pagesList[name];
      };
      box.appendChild(div);
    }
  }

  box.style.display = found ? "block" : "none";
}

// ABOUT IMAGE SLIDER
const aboutSlides = document.querySelectorAll('.about-slide');
let aboutIndex = 0;

if (aboutSlides.length > 0) {
  setInterval(() => {
    aboutSlides[aboutIndex].classList.remove('active');
    aboutIndex = (aboutIndex + 1) % aboutSlides.length;
    aboutSlides[aboutIndex].classList.add('active');
  }, 4000);
}
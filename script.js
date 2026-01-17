membersData.forEach(m => {
  // render member
});

galleryData.forEach(g => {
  // render galeri
});

newsData.forEach(n => {
  // render news
});
  
  // ========== MEMBERS ==========
  const memberGrid = document.getElementById("memberGrid");
  const structureGrid = document.getElementById("structureGrid");
  
  if (memberGrid) {
    membersData.forEach(m => {
      const card = createCard(m);
      memberGrid.appendChild(card);
  
      if (m.role !== "Anggota") {
        const s = createCard(m);
        structureGrid.appendChild(s);
      }
    });
  }
  
// ========== GALLERY ==========
const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
  galleryData.forEach(g => {
    const img = document.createElement("img");
    img.src = img.src = `assets/galeri/${g.image}`;
    img.title = g.title;
    img.style.cursor = "pointer";

    img.onclick = () => openGallery(g);
    galleryGrid.appendChild(img);
  });
}

// ========== GALLERY MODAL ==========
function openGallery(g) {
  document.getElementById("galleryTitle").textContent = g.title;
  document.getElementById("galleryImage").src = `assets/galeri/${g.image}`;
  document.getElementById("galleryModal").classList.add("active");
}

function closeGallery() {
  document.getElementById("galleryModal").classList.remove("active");
}
  
// ========== NEWS ==========
const newsGrid = document.getElementById("newsGrid");

if (newsGrid) {
  newsData.forEach(n => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${n.title}</strong>
      <p class="muted">${n.preview}</p>
    `;
    card.onclick = () => openNews(n);
    newsGrid.appendChild(card);
  });
}

// ========== NEWS MODAL ==========
function openNews(n) {
  document.getElementById("newsTitle").textContent = n.title;
  document.getElementById("newsDate").textContent = n.date;
  document.getElementById("newsContent").textContent = n.content;

  const img = document.getElementById("newsImage");
  if (n.image) {
    img.src = `assets/news/${n.image}`;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }  

  document.getElementById("newsModal").classList.add("active");
}

function closeNews() {
  document.getElementById("newsModal").classList.remove("active");
}

  
  // ========== MODAL ==========
  function createCard(m) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="assets/profile/${m.photo}">
      <strong>${m.name}</strong>
      <div class="muted">${m.role}</div>
    `;
    card.onclick = () => openModal(m);
    return card;
  }
  
  function openModal(m) {
    document.getElementById("modalPhoto").src = `assets/profile/${m.photo}`;
    document.getElementById("modalName").textContent = m.name;
    document.getElementById("modalRole").textContent = m.role;
  
    const tagBox = document.getElementById("modalTags");
    tagBox.innerHTML = "";
    m.tags.forEach(t => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      tagBox.appendChild(span);
    });
  
    document.getElementById("modalDesc").textContent = m.desc;
  
    const ig = document.getElementById("modalInstagram");
    if (m.instagram) {
      ig.href = `https://instagram.com/${m.instagram}`;
      ig.textContent = `@${m.instagram}`;
      ig.style.display = "inline-block";
    } else {
      ig.style.display = "none";
    }
  
    document.getElementById("profileModal").classList.add("active");
  }
  
  
  function closeModal() {
    document.getElementById("profileModal").classList.remove("active");
  }
  
// ========== ACTIVE NAV (BULLETPROOF) ==========
const path = window.location.pathname;

let current = "home"; // default

if (path.includes("members")) current = "members";
else if (path.includes("gallery")) current = "gallery";
else if (path.includes("news")) current = "news";

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.dataset.page === current) {
    link.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".nav-links a");
    const current = location.pathname.split("/").pop() || "index.html";
  
    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  
  });
  
  function goToLink(url) {
    window.open(url, "_blank");
  }

  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }
  
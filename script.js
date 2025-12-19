const members = [
    {
      name: "Thomi Muhadzib (Thomi)",
      role: "Ketua Kelas",
      photo: "https://picsum.photos/800/600?random=21",
      tags: ["Leader", "Asik"],
      desc: "Pemimpin kelas, kadang datang telat."
    },
    {
      name: "Muhammad Alfahrizi (Ezi)",
      role: "Wakil Ketua",
      photo: "https://picsum.photos/800/600?random=22",
      tags: ["Aktif", "Suka Musik"],
      desc: "Musikis Andalan Kelas."
    },
    {
      name: "Muhammad Ridho (Ridho)",
      role: "Sekretaris",
      photo: "https://picsum.photos/800/600?random=23",
      tags: ["Paling Wangi", "Administrasi"],
      desc: "Catatan lengkap dan rapi, Parfumnya Kecium Satu Kelas."
    },
    {
      name: "Syamil Asqalani Halim (Syamil)",
      role: "Bendahara",
      photo: "https://picsum.photos/800/600?random=24",
      tags: ["Keuangan", "Matematikawan"],
      desc: "Penjaga kas kelas, Paling jago matematika."
    },
    {
      name: "Muhammad Aqil Alrizal (Aqil)",
      role: "Anggota",
      photo: "https://picsum.photos/800/600?random=25",
      tags: ["Heptagon Studio", "Tech", "Sejarah"],
      desc: "Pencetus Heptagon Studio, Suka teknologi dan sejarah."
    },
    {
      name: "Hanif Tamam (Tamam)",
      role: "Anggota",
      photo: "https://picsum.photos/800/600?random=26",
      tags: ["Heptagon Studio", "Sepak Bola", "Sejarah"],
      desc: "Anggota Heptagon Studio, Suka sepak bola dan sejarah."
    },
    {
      name: "Fais Madani (Fais)",
      role: "Anggota",
      photo: "https://picsum.photos/800/600?random=27",
      tags: ["Heptagon Studio", "Sepak Bola", "Paling Berprestasi"],
      desc: "Anggota Heptagon Studio, Merupakan murid paling berprestasi di kelas."
    }
  ];
  
  // ========== MEMBERS ==========
  const memberGrid = document.getElementById("memberGrid");
  const structureGrid = document.getElementById("structureGrid");
  
  if (memberGrid) {
    members.forEach(m => {
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

const galleryData = [
  {
    title: "Study Tour Industri",
    image: "https://picsum.photos/800/600?random=21"
  },
  {
    title: "Foto Kelas Resmi",
    image: "https://picsum.photos/800/600?random=22"
  },
  {
    title: "Momen Rapat Kelas",
    image: "https://picsum.photos/800/600?random=23"
  },
  {
    title: "Hari Terakhir Semester",
    image: "https://picsum.photos/800/600?random=24"
  }
];

if (galleryGrid) {
  galleryData.forEach(g => {
    const img = document.createElement("img");
    img.src = g.image;
    img.title = g.title;
    img.style.cursor = "pointer";

    img.onclick = () => openGallery(g);
    galleryGrid.appendChild(img);
  });
}

// ========== GALLERY MODAL ==========
function openGallery(g) {
  document.getElementById("galleryTitle").textContent = g.title;
  document.getElementById("galleryImage").src = g.image;
  document.getElementById("galleryModal").classList.add("active");
}

function closeGallery() {
  document.getElementById("galleryModal").classList.remove("active");
}

  
// ========== NEWS ==========
const newsGrid = document.getElementById("newsGrid");

const newsData = [
  {
    title: "Study Tour Berjalan Lancar",
    date: "12 Agustus 2025",
    image: "https://picsum.photos/600/400?random=10",
    preview: "Kegiatan study tour kelas berjalan dengan penuh tawa dan cerita.",
    content: `
      Study tour kelas tahun ini berjalan dengan sangat lancar.
      Kami mengunjungi beberapa tempat edukatif dan industri,
      meskipun beberapa siswa lebih fokus cari WiFi daripada belajar.

      Perjalanan ini mempererat solidaritas kelas
      dan menghasilkan banyak foto tidak jelas yang entah kenapa tetap disimpan.
    `
  },
  {
    title: "Rapat Kelas Bulanan",
    date: "5 Agustus 2025",
    image: "",
    preview: "Rapat evaluasi kelas dengan diskusi yang cukup panas.",
    content: `
      Rapat kelas membahas keuangan, kedisiplinan,
      dan masalah klasik: siapa yang belum bayar kas.

      Meskipun sempat debat,
      rapat ditutup dengan kesepakatan bersama
      dan janji-janji yang mudah-mudahan ditepati.
    `
  }
];

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
    img.src = n.image;
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
      <img src="${m.photo}">
      <strong>${m.name}</strong>
      <div class="muted">${m.role}</div>
    `;
    card.onclick = () => openModal(m);
    return card;
  }
  
  function openModal(m) {
    document.getElementById("modalPhoto").src = m.photo;
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

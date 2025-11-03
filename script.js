// ===== portfolio slider auto-rotate =====
document.querySelectorAll(".project-slider").forEach((slider) => {
  const imgs = slider.querySelectorAll("img");
  let idx = 0;
  // ensure first visible
  imgs.forEach((im, i) => im.classList.toggle("active", i === 0));
  setInterval(() => {
    imgs[idx].classList.remove("active");
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add("active");
  }, 3000);
});

// ===== project details (modal) =====
const projectData = [
  {
    title: "E-Commerce Growth",
    desc: "Comprehensive paid search + CRO program that increased transactions by 68% in 90 days. Approach: search optimization, landing experiment, and bid scaling.",
    images: [
      "https://images.unsplash.com/photo-1523229612094-5b6d0a6a3a9f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e52a3f6a6b2c8c8d3a1e6f5a2b4c6d7",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c5c8d6f7a6b2c3d4e5f1a2b3c4d5e6f",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=c7a9a3b2c4d5e6f708192a3b4c5d6e7f",
    ],
    links: [
      { text: "Live Demo", url: "#" },
      { text: "GitHub", url: "#" },
    ],
  },
  {
    title: "Brand Awareness Campaign",
    desc: "Cross-platform social campaign that doubled brand reach and increased top-of-funnel conversions through targeted creatives and influencer partnerships.",
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d",
      "https://images.unsplash.com/photo-1508385082359-f68711a29b2a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c3bd3b9b9e2d2e8a3b2f2e9f3c1d6a8",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
    ],
    links: [
      { text: "Live Demo", url: "#" },
      { text: "GitHub", url: "#" },
    ],
  },
  {
    title: "Lead Gen for B2B",
    desc: "LinkedIn & content funnel focused on MQLs and booked meetings; implemented lead scoring and qualification workflows to improve sales handoff.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2",
    ],
    links: [
      { text: "Live Demo", url: "#" },
      { text: "GitHub", url: "#" },
    ],
  },
];

// open modal with project details
document
  .querySelectorAll(".project-actions .small-btn[data-open]")
  .forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-open"), 10);
      const data = projectData[idx];
      const modalEl = document.getElementById("projectModal");
      document.getElementById("projectModalTitle").textContent = data.title;
      const imagesContainer = document.getElementById("projectModalImages");
      imagesContainer.innerHTML = data.images
        .map(
          (src) =>
            `<img src="${src}" style="width:100%;height:160px;object-fit:cover;border-radius:8px">`
        )
        .join("");
      document.getElementById("projectModalDesc").textContent = data.desc;
      const linksEl = document.getElementById("projectModalLinks");
      linksEl.innerHTML = data.links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" class="small-btn primary">${l.text}</a>`
        )
        .join("");
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    });
  });

// Contact form handler (demo)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Thanks! Your request has been received. We will contact you within one business day."
  );
  this.reset();
});

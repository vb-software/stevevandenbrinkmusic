(function () {
  const SITE = window.SITE || { videos: [], gigs: [] };
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- nav ---------- */
  const toggle = $(".nav-toggle"), links = $(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  /* ---------- youtube links ---------- */
  ["#youtube-link", "#footer-youtube"].forEach((sel) => {
    const a = $(sel);
    if (SITE.youtubeChannel && !SITE.youtubeChannel.includes("YOUR_CHANNEL")) a.href = SITE.youtubeChannel;
    else a.closest("p").style.display = "none";
  });

  /* ---------- videos (click-to-load: fast page, no YouTube tracking until play) ---------- */
  function ytId(v) {
    const m = String(v).match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : String(v).trim();
  }
  const grid = $("#video-grid");
  const vids = (SITE.videos || []).filter((v) => v.id && !v.id.startsWith("PASTE"));
  if (!vids.length) {
    grid.innerHTML = '<p class="empty">Videos coming soon.</p>';
  } else {
    grid.innerHTML = vids.map((v) => {
      const id = esc(ytId(v.id));
      return `<article class="video">
        <div class="video-frame" data-id="${id}" role="button" tabindex="0" aria-label="Play ${esc(v.title)}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="play">▶</span>
        </div>
        <div class="video-meta"><h3>${esc(v.title)}</h3>${v.note ? `<p>${esc(v.note)}</p>` : ""}</div>
      </article>`;
    }).join("");
    grid.addEventListener("click", play);
    grid.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(e); } });
  }
  function play(e) {
    const f = e.target.closest(".video-frame");
    if (!f || f.querySelector("iframe")) return;
    f.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${f.dataset.id}?autoplay=1&rel=0"
      title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  }

  /* ---------- gigs ---------- */
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const parse = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const gigs = (SITE.gigs || []).map((g) => ({ ...g, _d: parse(g.date) }));
  const upcoming = gigs.filter((g) => g._d >= today).sort((a, b) => a._d - b._d);
  const past = gigs.filter((g) => g._d < today).sort((a, b) => b._d - a._d);

  function gigItem(g) {
    const m = g._d.toLocaleString("en-US", { month: "short" });
    const where = g.private ? "Private event" : [g.venue, g.city].filter(Boolean).map(esc).join(" · ");
    const time = g.time && !g.private ? ` · ${esc(g.time)}` : "";
    const link = g.link && !g.private ? `<br><a href="${esc(g.link)}" target="_blank" rel="noopener">Details →</a>` : "";
    return `<li class="gig">
      <div class="gig-date"><span class="m">${m}</span> <span class="d">${g._d.getDate()}</span> <span class="y">${g._d.getFullYear()}</span></div>
      <div class="gig-info"><strong>${esc(g.title)}</strong><span>${where}${time}</span>${link}</div>
    </li>`;
  }
  $("#gigs-upcoming").innerHTML = upcoming.length
    ? upcoming.map(gigItem).join("")
    : '<li class="empty">Nothing on the calendar right now — <a href="#book">book a date</a>.</li>';
  $("#gigs-past").innerHTML = past.length
    ? past.slice(0, 12).map(gigItem).join("")
    : '<li class="empty">—</li>';

  /* ---------- inquiry form (Formspree, submitted via fetch so visitors stay on the page) ---------- */
  const form = $("#inquiry"), status = $("#form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.action.includes("YOUR_FORM_ID")) {
      status.className = "form-status err";
      status.textContent = "Form isn't connected yet — add your Formspree ID in index.html.";
      return;
    }
    const btn = form.querySelector("button");
    btn.disabled = true; status.className = "form-status"; status.textContent = "Sending…";
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      status.className = "form-status ok";
      status.textContent = "Thanks! Your inquiry is on its way — I'll be in touch soon.";
    } catch {
      status.className = "form-status err";
      status.textContent = "Something went wrong. Please try again in a moment.";
    } finally { btn.disabled = false; }
  });

  $("#year").textContent = new Date().getFullYear();
})();

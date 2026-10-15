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
    grid.classList.toggle("single", vids.length === 1);
    grid.innerHTML = vids.map((v) => {
      const id = esc(ytId(v.id));
      return `<article class="video">
        <div class="video-frame" data-id="${id}" role="button" tabindex="0" aria-label="Play ${esc(v.title || "video")}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="play">▶</span>
        </div>
        ${v.title || v.note ? `<div class="video-meta">${v.title ? `<h3>${esc(v.title)}</h3>` : ""}${v.note ? `<p>${esc(v.note)}</p>` : ""}</div>` : ""}
      </article>`;
    }).join("");
    grid.addEventListener("click", play);
    grid.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(e); } });
  }
  function play(e) {
    const f = e.target.closest(".video-frame");
    if (!f || f.querySelector("iframe")) return;
    f.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${f.dataset.id}?autoplay=1&rel=0&cc_load_policy=0"
      title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  }

  /* ---------- gigs ---------- */
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const parse = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const gigs = (SITE.gigs || []).map((g) => ({ ...g, _d: parse(g.date) }));
  const upcoming = gigs.filter((g) => g._d >= today).sort((a, b) => a._d - b._d);
  const past = gigs.filter((g) => g._d < today).sort((a, b) => b._d - a._d);

  const mon = (d) => d.toLocaleString("en-US", { month: "short" });
  const dow = (d) => d.toLocaleString("en-US", { weekday: "short" });
  const tag = (g) => (g.note ? `<em class="gig-tag">${esc(g.note)}</em>` : "");
  const withAct = (g) => (g.act ? `with <b>${esc(g.act)}</b>` : "Solo");

  function upcomingItem(g) {
    const date = `<div class="gig-date"><span class="m">${mon(g._d)}</span><span class="d">${g._d.getDate()}</span><span class="y">${dow(g._d)}</span></div>`;
    if (g.private) return `<li class="gig">${date}<div class="gig-info"><strong>Private event</strong></div></li>`;
    const meta = [g.city && esc(g.city), g.time && `<span class="nowrap">${esc(g.time)}</span>`].filter(Boolean).join(" · ");
    const links = [];
    if (g.address) {
      const q = encodeURIComponent(`${g.venue}, ${g.address}, ${g.city || ""}`);
      links.push(`<a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Directions</a>`);
    }
    if (g.link) links.push(`<a href="${esc(g.link)}" target="_blank" rel="noopener">Details</a>`);
    return `<li class="gig">${date}
      <div class="gig-info"><strong>${esc(g.venue)}</strong>${tag(g)}
        <span class="gig-act">${withAct(g)}</span>
        <span>${meta}</span>${links.length ? `<p class="gig-links">${links.join(" · ")}</p>` : ""}</div>
    </li>`;
  }

  function pastItem(g) {
    const name = g.private ? "Private event" : esc(g.venue);
    const meta = g.private ? "" : esc(g.city || "");
    return `<li class="gig"><span class="pd">${mon(g._d)} ${g._d.getDate()}</span>
      <span class="pv"><strong>${name}</strong>${tag(g)}</span>
      <span class="pa">${withAct(g)}</span><span class="pc">${meta}</span></li>`;
  }

  $("#gigs-upcoming").innerHTML = upcoming.length
    ? upcoming.map(upcomingItem).join("")
    : '<li class="empty">Nothing on the calendar right now — <a href="#book">book a date</a>.</li>';

  // past: grouped by year, first PAST_LIMIT shown, rest behind a toggle
  const PAST_LIMIT = 8;
  const pastEl = $("#gigs-past");
  let year = null;
  pastEl.innerHTML = past.length
    ? past.map((g, i) => {
        const y = g._d.getFullYear();
        const hidden = i >= PAST_LIMIT ? " is-hidden" : "";
        const head = y !== year ? `<li class="gig-year${hidden}">${(year = y)}</li>` : "";
        return head + pastItem(g).replace('class="gig"', `class="gig${hidden}"`);
      }).join("")
    : '<li class="empty">—</li>';
  if (past.length > PAST_LIMIT) {
    const btn = document.createElement("button");
    btn.className = "btn btn-ghost show-more";
    btn.textContent = `Show all ${past.length} past shows`;
    btn.onclick = () => { pastEl.querySelectorAll(".is-hidden").forEach((el) => el.classList.remove("is-hidden")); btn.remove(); };
    pastEl.after(btn);
  }

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

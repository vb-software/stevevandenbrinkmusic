/*
  ============================================================
  SITE CONTENT — this is the only file you need to edit
  to add videos and gigs. No build step; just save & push.
  ============================================================
*/

window.SITE = {
  // Your YouTube channel URL (used for "More on YouTube" + footer)
  youtubeChannel: "https://www.youtube.com/@YOUR_CHANNEL",

  /*
    VIDEOS
    id = the part after "watch?v=" in a YouTube URL
         e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
         (youtu.be/XXXX and /shorts/XXXX links work too — paste the whole URL if easier)
  */
  videos: [
    // { id: "PASTE_ID_OR_URL", title: "Clair de Lune", note: "Solo piano · home studio" },
    // { id: "PASTE_ID_OR_URL", title: "Live at Rosa Parks Circle", note: "With The Band Name · 2026" },
  ],

  /*
    GIGS
    date: "YYYY-MM-DD"  — upcoming vs. past is sorted automatically by today's date
    time, link, and private are optional.
    private: true  -> shows as "Private event" without venue details (good for weddings/funerals)
  */
  gigs: [
    // --- SAMPLE ENTRIES: replace with real ones ---
    { date: "2026-11-07", time: "7:00 PM", title: "Solo piano evening", venue: "Example Coffee House", city: "Grand Rapids, MI", link: "" },
    { date: "2026-12-12", time: "6:30 PM", title: "Holiday set with Example Band", venue: "Example Brewing Co.", city: "Holland, MI" },
    { date: "2026-11-21", title: "Wedding ceremony", private: true },
    { date: "2026-09-20", title: "Summer concert series", venue: "Example Park Pavilion", city: "Wyoming, MI" },
    { date: "2026-08-02", title: "Keys with Example Band", venue: "Example Bar & Grill", city: "Grandville, MI" },
  ],
};

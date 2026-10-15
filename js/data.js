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
    GIGS — order doesn't matter; upcoming vs. past sorts itself by today's date.
    date:    "YYYY-MM-DD"            (required)
    venue:   "Billy's Lounge"        (required unless private)
    city:    "Grand Rapids, MI"
    address: street address — upcoming gigs get a "Directions" link from it
    time:    "9 PM – 1 AM"
    note:    short tag, e.g. "Rolling Stones Tribute"
    link:    event page URL (optional)
    private: true  -> shows as "Private event", hides everything else
  */
  gigs: [
    // ---- 2026 ----
    { date: "2026-11-13", time: "9 PM – 1 AM",     venue: "Billy's Lounge",          address: "1437 Wealthy St. SE",   city: "Grand Rapids, MI", note: "Rolling Stones Tribute" },
    { date: "2026-09-26", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI",     note: "Rolling Stones Tribute" },
    { date: "2026-08-06", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2026-07-25", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI" },
    { date: "2026-06-19", time: "7 – 9:30 PM",     venue: "Short's Brewing Co.",     address: "121 North Bridge St.",  city: "Bellaire, MI" },
    { date: "2026-06-12", time: "7:30 – 9 PM",     venue: "Hastings Live!",                                            city: "Hastings, MI" },
    { date: "2026-03-06", time: "8 – 11 PM",       venue: "Tip Top Deluxe",          address: "760 Butterworth St. SW", city: "Grand Rapids, MI", note: "Talking Heads Tribute" },

    // ---- 2025 ----
    { date: "2025-09-18", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2025-09-13", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI",     note: "Talking Heads Tribute" },
    { date: "2025-08-08", time: "7 – 9:30 PM",     venue: "Short's Brewing Co.",     address: "121 North Bridge St.",  city: "Bellaire, MI" },
    { date: "2025-08-02", time: "9 PM – 1 AM",     venue: "Billy's Lounge",          address: "1437 Wealthy St. SE",   city: "Grand Rapids, MI", note: "Talking Heads Tribute" },
    { date: "2025-07-29", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2025-07-12", time: "6:30 – 9 PM",     venue: "Vander Mill",             address: "505 Ball Ave NE",       city: "Grand Rapids, MI" },
    { date: "2025-07-07", time: "6 – 9 PM",        venue: "The Deck",                address: "1601 Beach St.",        city: "Muskegon, MI" },
    { date: "2025-06-27", time: "6:30 – 8:30 PM",  venue: "Holland Summer Concert Series", address: "Kollen Park Band Shell", city: "Holland, MI" },
    { date: "2025-06-22", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2025-04-19", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI" },

    // ---- 2024 ----
    { date: "2024-11-09", time: "9 PM – 1 AM",     venue: "Billy's Lounge",          address: "1437 Wealthy St. SE",   city: "Grand Rapids, MI", note: "Pink Floyd Tribute" },
    { date: "2024-10-05", time: "7 – 11 PM",       venue: "Cedar Springs Brewing Co.", address: "95 N. Main St. NE",   city: "Cedar Springs, MI", note: "Red Flannel Days" },
    { date: "2024-09-03", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2024-08-28", time: "8 – 10 PM",       venue: "SpeakEZ Lounge",          address: "600 Monroe Ave NW",     city: "Grand Rapids, MI", note: "Pink Floyd Tribute" },
    { date: "2024-08-15", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2024-07-27", private: true },
    { date: "2024-07-25", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2024-07-06", time: "7 – 9 PM",        venue: "Vander Mill",             address: "505 Ball Ave NE",       city: "Grand Rapids, MI" },
    { date: "2024-06-20", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2024-06-15", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI",     note: "Pink Floyd Tribute" },
    { date: "2024-06-14", time: "7 – 10:30 PM",    venue: "Garage Bar & Grill",      address: "819 Ottawa Ave NW",     city: "Grand Rapids, MI", note: "Bike Night" },
  ],
};

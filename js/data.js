/*
  ============================================================
  SITE CONTENT — this is the only file you need to edit
  to add videos and gigs. No build step; just save & push.
  ============================================================
*/

// Tags a group of gigs with the act you played with: ...act("Band Name", [ {...}, {...} ])
const act = (name, list) => list.map((g) => ({ act: name, ...g }));

window.SITE = {
  // Your YouTube channel URL (used for "More on YouTube" + footer)
  youtubeChannel: "https://www.youtube.com/@SteveVandenBrinkMusic",

  /*
    VIDEOS
    id = the part after "watch?v=" in a YouTube URL
         e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
         (youtu.be/XXXX and /shorts/XXXX links work too — paste the whole URL if easier)
  */
  videos: [
    { id: "_DI37Zagxas", title: "City Built Gig", note: "Monday Night Live · with Nathan Walton" },
    { id: "S0-T1tjBRRA", title: "Erin Monroe @ The Stray" },
    { id: "x9PqJPz2T_M", title: "Stop Making Sense", note: "Hazy Past · Talking Heads Tribute · Video by Brian Haik" },
    // { id: "PASTE_ID_OR_URL", title: "Clair de Lune", note: "Solo piano · home studio" },
    // { id: "PASTE_ID_OR_URL", title: "Live at Rosa Parks Circle", note: "With The Band Name · 2026" },
  ],

  /*
    AUDIO — files live in /audio. title shown; "by" = original artist (credited as a cover).
    secs = length, shown before the file loads.
  */
  audioAlbum: "Live at City Built Brewing",
  audioNote: "Monday Night Live · with Nathan Walton · March 16, 2026",
  tracks: [
    { file: "audio/01-while-my-guitar-gently-weeps.mp3", title: "While My Guitar Gently Weeps", by: "The Beatles", secs: 217 },
    { file: "audio/02-blackbird.mp3", title: "Blackbird", by: "The Beatles", secs: 164 },
    { file: "audio/03-god-only-knows.mp3", title: "God Only Knows", by: "The Beach Boys", secs: 198 },
    { file: "audio/04-fix-you.mp3", title: "Fix You", by: "Coldplay", secs: 350 },
    { file: "audio/05-iris.mp3", title: "Iris", by: "Goo Goo Dolls", secs: 205 },
    { file: "audio/06-dont-stop-me-now.mp3", title: "Don't Stop Me Now", by: "Queen", secs: 271 },
    { file: "audio/07-virtual-insanity.mp3", title: "Virtual Insanity", by: "Jamiroquai", secs: 163 },
    { file: "audio/08-human-nature.mp3", title: "Human Nature", by: "Michael Jackson", secs: 186 },
    { file: "audio/09-goodbye-yellow-brick-road.mp3", title: "Goodbye Yellow Brick Road", by: "Elton John", secs: 202 },
    { file: "audio/10-paranoid-android.mp3", title: "Paranoid Android", by: "Radiohead", secs: 346 },
    { file: "audio/11-running-up-that-hill.mp3", title: "Running Up That Hill", by: "Kate Bush", secs: 326 },
    { file: "audio/12-im-still-standing.mp3", title: "I'm Still Standing", by: "Elton John", secs: 169 },
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
    Wrap each artist's shows in act("Name", [ ... ]) — shows "with Name" on the site.
    Gigs outside any act() block show as solo.
  */
  gigs: [
   ...act("Hazy Past", [
    // ---- 2026 ----
    { date: "2026-11-13", time: "8 PM – 12 AM",    venue: "Billy's Lounge",          address: "1437 Wealthy St. SE",   city: "Grand Rapids, MI", note: "Rolling Stones Tribute" },
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

    // ---- 2023 ----
    { date: "2023-12-02", time: "8 – 9 PM",        venue: "Billy's Lounge",          address: "1437 Wealthy St. SE",   city: "Grand Rapids, MI", note: "Opening for The Insane Theatre" },
    { date: "2023-10-28", time: "8 – 11 PM",       venue: "Founders Brewing Co.",    address: "235 Cesar E. Chavez Ave SW", city: "Grand Rapids, MI", note: "Halloween Show" },
    { date: "2023-10-14", private: true },
    { date: "2023-10-07", time: "8 – 11 PM",       venue: "Rockford Brewing Co.",    address: "12 E. Bridge St.",      city: "Rockford, MI",     note: "Hazy IPA Release" },
    { date: "2023-09-29", time: "6 – 11 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2023-08-26", time: "5 – 9 PM",        venue: "Bikes on the Blue Bridge",                                   city: "Grand Rapids, MI" },
    { date: "2023-08-22", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2023-07-29", private: true },
    { date: "2023-07-27", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2023-06-30", time: "7:30 – 8:45 PM",  venue: "Hastings Live!",          address: "Thornapple Plaza",      city: "Hastings, MI" },
    { date: "2023-06-29", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2023-06-23", time: "7 – 9 PM",        venue: "Third Nature Brewing Co.", address: "7733 Childsdale Ave NE", city: "Rockford, MI" },
    { date: "2023-05-30", time: "6 – 10 PM",       venue: "The Score",               address: "5301 Northland Dr.",    city: "Grand Rapids, MI" },
    { date: "2023-03-11", time: "6 – 9 PM",        venue: "Garage Bar & Grill",      address: "819 Ottawa Ave NW",     city: "Grand Rapids, MI" },
    { date: "2023-02-08", time: "8 – 10:30 PM",    venue: "SpeakEZ Lounge",          address: "600 Monroe Ave NW",     city: "Grand Rapids, MI", note: "David Bowie Tribute" },
   ]),

   ...act("Erin Monroe", [
    { date: "2026-09-11", time: "12 – 3 PM",       venue: "The Lucky Wolf",          address: "404 E. Michigan Ave.",  city: "Paw Paw, MI" },
    { date: "2026-03-21", time: "8 PM",            venue: "Tip Top Deluxe",          address: "760 Butterworth St. SW", city: "Grand Rapids, MI", note: "Linda Ronstadt Tribute" },
   ]),

   // ---- Solo ----
   { date: "2026-10-17", time: "10 AM – 12 PM",    venue: "Lou Lou's Coffee Bar", address: "1259 Post Dr NE, Ste A", city: "Belmont, MI", note: "Open Mic" },
   { date: "2026-08-15", time: "5 – 7 PM",         venue: "St. Julian Winery",                                          city: "Rockford, MI",     note: "Music on the Patio" },
   { date: "2026-07-11", time: "5 – 7 PM",         venue: "St. Julian Winery",                                          city: "Rockford, MI",     note: "Music on the Patio" },
   { date: "2026-06-06", time: "5 – 7 PM",         venue: "St. Julian Winery",                                          city: "Rockford, MI",     note: "Music on the Patio" },

   ...act("Nathan Walton", [
    { date: "2026-03-16", time: "5 – 7 PM",        venue: "City Built Brewing Co.",                                     city: "Grand Rapids, MI", note: "Monday Night Live" },
   ]),

   // ...act("Other Artist", [
   //   { date: "2025-05-01", time: "7 – 10 PM", venue: "Venue", address: "123 Main St.", city: "Grand Rapids, MI" },
   // ]),
  ],
};

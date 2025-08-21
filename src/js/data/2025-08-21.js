dataSet["2025-08-21"] = {
  options: [
    {
      name: "Filter by Group",
      key: "group",
      tooltip: "Select a group or show all.",
      checked: true,
      sub: [
        { name: "All",             key: "all",             checked: true },
        { name: "Manga de Weones", key: "manga",           checked: true },
        { name: "Brujitas",        key: "brujitas",        checked: true },
        { name: "Roomies",         key: "roomies",         checked: true },
        { name: "Other",           key: "other",           checked: true }
      ]
    }
  ],

  characterData: [
    // Manga de Weones
    { name: "Adrien", img: "Adrien.webp", opts: { group: ["manga", "all"] } },
    { name: "Aeru",   img: "Aeru.webp",   opts: { group: ["manga", "all"] } },
    { name: "April",  img: "April.webp",  opts: { group: ["manga", "all"] } },
    { name: "Alex",   img: "Alex.webp",   opts: { group: ["manga", "all"] } },
    { name: "Eve",    img: "Eve.webp",    opts: { group: ["manga", "all"] } },
    { name: "Helen",  img: "Helen.webp",  opts: { group: ["manga", "all"] } },
    { name: "Hye-mi", img: "Hye.webp",    opts: { group: ["manga", "all"] } },
    { name: "Jess",   img: "Jess.webp",   opts: { group: ["manga", "all"] } },
    { name: "Nacho",  img: "Nacho.webp",  opts: { group: ["manga", "all"] } },
    { name: "Nico",   img: "Nico.webp",   opts: { group: ["manga", "all"] } },
    { name: "Oliver", img: "Oliver.webp", opts: { group: ["manga", "all"] } },
    { name: "Sean",   img: "Sean.webp",   opts: { group: ["manga", "all"] } },

   // Brujitas
    { name: "Ronan",  img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },
    { name: "Kyro",   img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },
    { name: "Haze",   img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },
    { name: "Willow", img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },
    { name: "Lily",   img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },
    { name: "Theo",   img: "noimage.jpg", opts: { group: ["brujitas", "all"] } },

    // Roomies
    { name: "Max",   img: "noimage.jpg", opts: { group: ["roomies", "all"] } },
    { name: "Ellis", img: "noimage.jpg", opts: { group: ["roomies", "all"] } },
    { name: "Alice", img: "noimage.jpg", opts: { group: ["roomies", "all"] } },

    // Other
    { name: "Vinny", img: "noimage.jpg", opts: { group: ["other", "all"] } },
    { name: "Mia",   img: "noimage.jpg", opts: { group: ["other", "all"] } }
  ]
};

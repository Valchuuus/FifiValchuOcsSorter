dataSet["2025-08-15"] = {
  options: [
    {
      name: "Filter by Tipo",
      key: "tipo",
      tooltip: "Select Tipas, Tipos, or All.",
      checked: true,
      sub: [
        { name: "All",   key: "all",   checked: true },
        { name: "Tipas", key: "tipas", checked: true },
        { name: "Tipos", key: "tipos", checked: true }
      ]
    }
  ],

  characterData: [
    { name: "Adrien", img: "Adrien.webp", opts: { tipo: ["tipos", "all"] } },
    { name: "Aeru",   img: "Aeru.webp",   opts: { tipo: ["tipas", "all"] } },
    { name: "Alex",   img: "Alex.webp",   opts: { tipo: ["tipos", "all"] } },
    { name: "April",  img: "April.webp",  opts: { tipo: ["tipas", "all"] } },
    { name: "Eve",    img: "Eve.webp",    opts: { tipo: ["tipas", "all"] } },
    { name: "Helen",  img: "Helen.webp",  opts: { tipo: ["tipas", "all"] } },
    { name: "Hye-mi", img: "Hye.webp",    opts: { tipo: ["tipas", "all"] } },
    { name: "Jess",   img: "Jess.webp",   opts: { tipo: ["tipas", "all"] } },
    { name: "Nacho",  img: "Nacho.webp",  opts: { tipo: ["tipos", "all"] } },
    { name: "Nico",   img: "Nico.webp",   opts: { tipo: ["tipos", "all"] } },
    { name: "Oliver", img: "Oliver.webp", opts: { tipo: ["tipos", "all"] } },
    { name: "Sean",   img: "Sean.webp",   opts: { tipo: ["tipos", "all"] } }
  ]
};

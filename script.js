// ───── Pixel bats (drawn from character maps, two frames = flapping) ─────
// # = body, h = highlight, e = eyes
const BAT_UP = [
    ".........#.#.........",
    "##.......###.......##",
    "####....#e#e#....####",
    "######..#####..######",
    "#######h#####h#######",
    ".###################.",
    "..#####.#####.#####..",
    "...##....###....##...",
    ".........#.#.........",
    ".....................",
];
const BAT_DOWN = [
    ".........#.#.........",
    ".........###.........",
    "........#e#e#........",
    "......#########......",
    "...###h#######h###...",
    ".#######.###.#######.",
    "#####....###....#####",
    "###......###......###",
    "##.......#.#.......##",
    "#...................#",
];
const COLORS = { "#": "#8b6fe0", h: "#a991f0", e: "#281a5a" };
const NS = "http://www.w3.org/2000/svg";

function drawFrame(grid, className) {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", className);
    grid.forEach((row, y) => {
        [...row].forEach((ch, x) => {
            if (!COLORS[ch]) return;
            const r = document.createElementNS(NS, "rect");
            r.setAttribute("x", x);
            r.setAttribute("y", y);
            r.setAttribute("width", 1.02);
            r.setAttribute("height", 1.02);
            r.setAttribute("fill", COLORS[ch]);
            g.appendChild(r);
        });
    });
    return g;
}

document.querySelectorAll(".bat").forEach(svg => {
    svg.appendChild(drawFrame(BAT_UP, "frame frame--up"));
    svg.appendChild(drawFrame(BAT_DOWN, "frame frame--down"));
});

// ───── Nav: scrolled state, mobile toggle, active link ─────
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const links = [...document.querySelectorAll(".nav__links a")];

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});
links.forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
}));

// only in-page links (#about etc.) map to sections, not external ones like GitHub
const sections = links
    .filter(a => a.getAttribute("href").startsWith("#"))
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// ───── Reveal on scroll ─────
document.documentElement.classList.add("js");
const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            reveal.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

// ───── Footer year ─────
document.getElementById("year").textContent = new Date().getFullYear();

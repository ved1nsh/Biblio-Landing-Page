// Every word and image on the /zamp page lives in this file.
// To change what the page says, edit the text here. The layout is in page.tsx.
// Images live in /public/images.

export type Shot = {
    src: string;
    alt: string;
    caption?: string;
};

// Tile colours and sizes for the "What it can do" grid (see tileTheme / tileLayout in page.tsx).
export type TileTheme = "light" | "dark" | "peach" | "lavender";
export type TileLayout = "wide" | "narrow" | "half" | "hero";

export type TileImage = Shot & {
    // Optional Tailwind classes for the box around one image (width, nudge down so the phone runs off the tile edge).
    boxClass?: string;
};

export type TourStop = {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
    link?: { href: string; label: string };
    theme: TileTheme;
    layout: TileLayout;
    gradientTitle?: boolean;
    images: TileImage[];
};

export type AppRow = {
    name: string;
    downloads: string;
    goodAt: string;
    missing: string;
};

export type Idea = {
    title: string;
    body: string;
};

// The original homepage intro.
export const hero = {
    title: "Introducing, Biblio.",
    tagline: "Your one stop application for all your digital reading needs",
    image: { src: "/images/main.png", alt: "Biblio on a phone" },
};

// The black band right after the intro (from the original homepage).
export const welcome = "Welcome to Biblio — a smarter way to read, understand, and stay consistent with your books.";

// The heading above the contents list.
export const contentsIntro = {
    title: "The whole story, in five stops.",
    subtitle: "Why Biblio exists, what it can do, and where it goes next. Jump to any part, or just keep scrolling.",
};

// The contents list. Each id matches a section id further down.
export const contents = [
    { id: "why", label: "Why I built it" },
    { id: "tour", label: "What it can do" },
    { id: "market", label: "What the market got wrong" },
    { id: "today", label: "Where it stands today" },
    { id: "next", label: "What I'd build next" },
];

export const why = {
    title: "Why I built it",
    paragraphs: [
        "A friend recommended a book, so I grabbed the PDF and got ready to read. Then I hit a wall. I had nowhere to keep it, and nowhere to read it comfortably. The popular reading apps were cluttered, laggy, and looked years out of date.",
        "When I looked into it, the bigger problem wasn't any one app. To read a single book properly, people use four: one to read it, one to track their progress, a dictionary for the words they don't know, and a notes app for the lines they want to keep. Every switch pulls you out of the book.",
        "So I built one app that does all four jobs.",
    ],
    link: { href: "/research", label: "Read the full research" },
};

// The grid goes in this order. On big screens: row 1 = wide + narrow,
// row 2 = the full-width AI tile, rows 3 and 4 = two halves each.
// Reading gets the big first tile: the reader is the heart of Biblio.
export const tour = {
    title: "What it can do.",
    subtitle: "The short tour. Every tile links to its full page.",
    stops: [
        {
            id: "reading",
            eyebrow: "Reading",
            title: "Read it your way.",
            body: "When you upload a book on Biblio, you get all the control you need to make reading feel comfortable. Font size, type, themes, alignment, spacing, everything you want.",
            link: { href: "/features/reading", label: "See the reader" },
            theme: "dark",
            layout: "wide",
            images: [{ src: "/images/page2/page2one.png", alt: "A book open in the Biblio reader" }],
        },
        {
            id: "library",
            eyebrow: "Library",
            title: "Every book you own, in one place.",
            body: "It can keep track of all your books, ones you own, ones you are reading, ones you wanna read, everything. One library for all your books, sorted into shelves you make yourself.",
            link: { href: "/library", label: "See the library" },
            theme: "light",
            layout: "narrow",
            images: [{ src: "/images/library/ll2.png", alt: "Library with custom shelves" }],
        },
        {
            id: "ai",
            eyebrow: "Biblio AI",
            title: "An AI that knows the book.",
            body: "It explains words and phrases in the context of the book, so you really get the meaning behind the text. With circle to search, you can circle anything on the page, even a diagram, and ask about it.",
            link: { href: "/features/ai", label: "See the AI" },
            theme: "light",
            layout: "hero",
            gradientTitle: true,
            images: [
                { src: "/images/ai/a1.png", alt: "Biblio AI explaining a phrase in context", boxClass: "w-[46%] max-w-[340px] [mask-image:linear-gradient(to_bottom,transparent,black_16%)]" },
                { src: "/images/ai/a2.png", alt: "Circle to search explaining a diagram", boxClass: "w-[46%] max-w-[340px] [mask-image:linear-gradient(to_bottom,transparent,black_16%)]" },
            ],
        },
        {
            id: "quotes",
            eyebrow: "Quote cards",
            title: "Share the lines you love.",
            body: "The feature I am most proud of. You can select any text from the book and turn it into a shareable quote, with lots of ways to customise it and plenty of themes.",
            link: { href: "/features/quotes", label: "See quote cards" },
            theme: "peach",
            layout: "half",
            images: [{ src: "/images/quotes/q1.png", alt: "Making a quote card from a passage" }],
        },
        {
            id: "journal",
            eyebrow: "Book Journal",
            title: "Everything you noticed, in one timeline.",
            body: "Everything you highlight and every note you write goes into your Book Journal on its own. It's laid out like a timeline, so you can scroll back through what you were thinking while reading a book, or search it later.",
            link: { href: "/features/journal", label: "See the journal" },
            theme: "light",
            layout: "half",
            images: [{ src: "/images/journal/j1.png", alt: "Book Journal timeline" }],
        },
        {
            id: "streaks",
            eyebrow: "Streaks",
            title: "Come back every day.",
            body: "The hard part of reading isn't starting a book, it's coming back to it every day. You set a daily goal (even 5 minutes is fine), and hitting it earns you XP and keeps your streak alive. Miss a day? Your first Streak Saver is free, after that it costs 100 XP, and it only works if you come back within 3 days.",
            link: { href: "/streaks", label: "See streaks" },
            theme: "lavender",
            layout: "half",
            images: [{ src: "/images/page2/page2three.png", alt: "Streaks and stats screen" }],
        },
        {
            id: "physical",
            eyebrow: "Physical books",
            title: "Paper books count too.",
            body: "Start a reading session with a timer and turn on Focus Mode. The screen goes dark while Biblio counts the minutes, so paper reading counts towards your streak. Scan a line to save it as a quote, point your camera at something you don't get and ask the AI, or leave yourself a voice note.",
            link: { href: "/physicalbook", label: "See physical books" },
            theme: "dark",
            layout: "half",
            images: [{ src: "/images/pybook.png", alt: "A physical book reading session" }],
        },
    ] as TourStop[],
    closingLine:
        "And all of it syncs to your account, so a new phone doesn't mean losing your library, your streak or your notes.",
};

export const market = {
    title: "What I think the market got wrong",
    lead: "Readers aren't short of apps.",
    rows: [
        { name: "ReadEra", downloads: "40M+", goodAt: "Light, offline reader", missing: "Streaks, stats, saving quotes, help with hard words" },
        { name: "Moon+ Reader", downloads: "10M+", goodAt: "Endless settings", missing: "Cluttered; no habits, quotes or help in context" },
        { name: "Librera", downloads: "10M+", goodAt: "Opens almost any file", missing: "No habits, notes or help" },
        { name: "Bookly", downloads: "1M+", goodAt: "Reading habits and stats", missing: "Can't open a book; you log pages by hand" },
        { name: "StoryGraph", downloads: "1M+", goodAt: "Tracking and recommendations", missing: "No reader, no quotes" },
    ] satisfies AppRow[],
    note: "Download figures from the Play Store.",
    paragraphs: [
        "People clearly want to read on their phones. What's missing is one place that holds the reading and the habit around it. Reader apps care about the book. Habit apps care about the behaviour. Nobody has joined the two.",
        "That's also why Biblio is hard to copy. Bookly would have to build a reading engine from scratch. ReadEra would have to become a habit product, which is a different company. And because the reading happens inside Biblio, the tracking takes care of itself.",
    ],
    whyNow:
        "A couple of years ago, calling a language model every time someone long-pressed a word would have been too slow and too expensive for a free reading app. Now it's fast and cheap enough to do on every tap.",
    comparison: [
        { src: "/images/comparison/homepage1.png", alt: "Moon+ Reader home screen", caption: "Moon+ Reader, 10M+ downloads" },
        { src: "/images/comparison/main1.png", alt: "Biblio home screen", caption: "Biblio" },
    ] satisfies Shot[],
    links: [
        { href: "/research", label: "Full market research" },
        { href: "/research/detailed-comparison", label: "Side by side with Moon+ Reader and ReadEra" },
    ],
};

export const today = {
    title: "Where it stands today",
    paragraphs: [
        "I started building Biblio last year, with the tools I had back then. It works end to end, and the Android build is up on this site.",
        "Looking at it now, with the AI tools I use today, I can see how much better it could be. A lot of the UI and UX was shaped by what I could build at the time, and there's a lot of room to make it smoother, simpler and nicer to spend time in.",
        "That's where I'd start: the same idea, rebuilt with better tools and a sharper eye for the details.",
    ],
};

// The features I've parked for the next version.
export const next = {
    title: "What I'd build next",
    subtitle: "The features I've parked for the next version of Biblio.",
    ideas: [
        {
            title: "A social feed",
            body: "See what your friends are reading, the lines they're saving and how their streaks are going. Quote cards already make reading shareable; a feed gives them a home inside the app.",
        },
        {
            title: "Book clubs",
            body: "Read the same book with a group, at the same pace, and talk about it chapter by chapter without anyone spoiling what's next.",
        },
        {
            title: "A book store",
            body: "Find and buy your next book without leaving the app, so your library, your reading and whatever you read next all live in one place.",
        },
        {
            title: "Streak widgets",
            body: "A home-screen widget with your streak and today's goal. The easiest reminder to read is the one you see every time you unlock your phone.",
        },
        {
            title: "Reading Wrapped",
            body: "A yearly recap of your reading: books finished, hours read, your longest streak and your most-quoted lines. Made to be shared, the way Spotify Wrapped is.",
        },
        {
            title: "Ask your library",
            body: "Ask the AI about everything you've read and saved, not just the page you're on. \"What did I highlight about habits?\", answered across every book in your journal.",
        },
    ] satisfies Idea[],
};

// The page's ending, shown in the footer.
export const closing = {
    title: "Thanks for reading.",
    body: "The best way to judge Biblio is to use it.",
};

// Every word and number on the /research page lives here. The layout is in page.tsx.
// Numbers come from Google Play listings, which show lower bounds ("10M+"), and they count
// downloads, not active users. Keep any new number tied to a source you can point to.

// The dark header (the original research page's design and wording).
export const header = {
    title: "Market Research",
    paragraphs: [
        "A structured analysis to understand user behavior, market opportunities, and product positioning for Biblio — a reading-focused application designed to improve consistency, engagement, and comprehension.",
        "This research analyzes market trends, user behavior, demand patterns, and the competitive landscape to identify key opportunities and validate whether a unified reading experience can create meaningful value for users.",
    ],
    meta: "Sources: Google Play listings, product observation, user discussions · About a 6-minute read",
};

// The sidebar ("On this page"). Each id matches a section id below.
export const toc = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem & objective" },
    { id: "market", label: "Market overview" },
    { id: "gap", label: "The strategic gap" },
    { id: "competitors", label: "Biblio vs others" },
    { id: "pain-points", label: "User pain points" },
    { id: "insights", label: "Key insights" },
];

export const overview = [
    "This research explores the opportunity to improve digital reading through Biblio, a mobile app that offers a clean, fast and user-friendly way to read EPUB and PDF files.",
    "Many reading apps already exist, but many of them suffer from cluttered interfaces, performance issues and limited usability. Readers often rely on basic tools that put functionality ahead of design and smooth interaction.",
    "Biblio aims to close that gap with a modern, intuitive reading interface, plus features such as streak tracking and AI-assisted understanding.",
    "The goal is to test whether a better core reading experience, combined with engagement and learning features, can make a more compelling and differentiated product. The analysis covers user behaviour, existing solutions, market demand and competitive gaps, drawing on product observation, secondary research and user discussions.",
];

export const problem = {
    statement: {
        title: "The problem",
        points: [
            "EPUB and PDF readers often deliver a poor experience: cluttered interfaces, inconsistent performance and limited customisation.",
            "Many put functionality ahead of usability, which leads to laggy interactions and unintuitive design.",
            "The ecosystem is fragmented. Readers use separate apps to read, track progress, keep book lists and log physical reading.",
            "Most tools are passive, with little support for engagement, comprehension or habits.",
        ],
    },
    matters: {
        title: "Why it matters",
        points: [
            "A poor, fragmented experience adds friction to what should be a simple activity.",
            "Switching between apps for reading-related tasks raises cognitive load and lowers engagement.",
            "Digital reading keeps growing, especially among students and self-improvement readers.",
            "One platform that pairs great reading with the tools around it can lift convenience, engagement and long-term retention.",
        ],
    },
};

export const market = {
    paragraphs: [
        "The digital reading ecosystem spans EPUB readers, PDF viewers, note-taking apps and habit trackers, serving millions of people across study, work, self-improvement and leisure.",
        "Most of these products are built for one function rather than a complete workflow, so readers stitch several apps together to read, track and manage what they read.",
    ],
    // The two headline numbers (sums of the Google Play lower bounds below).
    stats: [
        { value: "60M+", label: "downloads across the three biggest EPUB & PDF readers", detail: "ReadEra, Moon+ Reader, Librera" },
        { value: "2M+", label: "downloads across the two most popular reading trackers", detail: "Bookly, StoryGraph" },
    ],
    takeaway:
        "Reading apps have roughly thirty times the reach of the tools that help people keep reading. The audience is there; the habit layer barely exists.",
    // The bar chart. million = the Google Play lower bound, in millions.
    chart: {
        title: "Google Play downloads, lower bounds",
        groups: [
            {
                name: "Reading apps",
                apps: [
                    { name: "ReadEra", million: 40, label: "40M+" },
                    { name: "Moon+ Reader", million: 10, label: "10M+" },
                    { name: "Librera", million: 10, label: "10M+" },
                ],
            },
            {
                name: "Habit & tracking apps",
                apps: [
                    { name: "Bookly", million: 1, label: "1M+" },
                    { name: "StoryGraph", million: 1, label: "1M+" },
                ],
            },
        ],
        max: 40,
        ticks: [0, 10, 20, 30, 40],
        note: "Google Play shows download ranges, so these are minimums. Downloads are not the same as active users.",
    },
};

export const gap = {
    insight:
        "The market isn't short of users or demand. It's short of the right structure: reading apps focus on consuming content, habit tools focus on behaviour, and there is little overlap between the two.",
    diagram: [
        { title: "Reading apps", body: "Open the file, set the font, turn the page.", tone: "light" },
        { title: "Biblio", body: "The book and the habit around it, in one place.", tone: "dark" },
        { title: "Habit apps", body: "Timers, logs and streaks, with the book somewhere else.", tone: "light" },
    ],
    paragraphs: [
        "That split forces readers to connect reading, tracking, motivation and comprehension by hand, which adds friction to a simple activity.",
        "The opportunity isn't another standalone tool. It's a simpler workflow: read, track and engage with a book without switching apps. Biblio pairs a high-performance reader with built-in engagement and learning features to fill that gap.",
    ],
};

// Comparison table. yes = offers it, no = this research found it missing, na = not covered by this research.
// Every "no" comes from the app notes below.
export type Mark = "yes" | "no" | "na";

export const competitors = {
    columns: ["Biblio", "ReadEra", "Moon+ Reader", "Librera", "Bookly", "StoryGraph"],
    downloads: ["New", "40M+", "10M+", "10M+", "1M+", "1M+"],
    rows: [
        { capability: "Read EPUB & PDF in the app", marks: ["yes", "yes", "yes", "yes", "no", "no"] as Mark[] },
        { capability: "Reading habits & streaks", marks: ["yes", "no", "no", "no", "yes", "na"] as Mark[] },
        { capability: "Reading stats & insights", marks: ["yes", "no", "na", "no", "yes", "yes"] as Mark[] },
        { capability: "Quote journaling", marks: ["yes", "no", "no", "no", "no", "no"] as Mark[] },
        { capability: "Help understanding the text", marks: ["yes", "no", "no", "no", "no", "no"] as Mark[] },
    ],
    notes: [
        {
            name: "ReadEra",
            downloads: "40M+ downloads on Google Play",
            paragraphs: [
                "A lightweight ebook reader that supports multiple formats and works fully offline, which makes it popular for simple document reading.",
                "The interface is clean, but it's built as a document reader rather than a reading companion. It lacks reading streaks, deep reading analytics, quote journaling and tools that help readers understand complex passages.",
            ],
        },
        {
            name: "Moon+ Reader",
            downloads: "10M+ downloads on Google Play",
            paragraphs: [
                "One of the most widely used ebook readers on Android, with extensive customisation for fonts, layouts and themes.",
                "The experience can feel cluttered and feature-heavy for new users. It focuses on reading files and doesn't offer structured reading habits, quote management or contextual help with the text.",
            ],
        },
        {
            name: "Librera",
            downloads: "10M+ downloads on Google Play",
            paragraphs: [
                "A flexible ebook reader for EPUB, PDF and MOBI, popular with readers who manage large personal libraries. It offers strong customisation, but the interface can feel complex.",
                "It focuses on reading files and lacks tools for habit building, quote journaling, reading insights or contextual help while reading.",
            ],
        },
        {
            name: "Bookly",
            downloads: "1M+ downloads on Google Play",
            paragraphs: [
                "A reading-habit tracker with timers, statistics and motivational tracking that encourage consistent reading.",
                "It can't open ebooks, so readers log sessions by hand. It also lacks tools for understanding text, saving quotes or bringing the reading itself into the app.",
            ],
        },
        {
            name: "StoryGraph",
            downloads: "1M+ downloads on Google Play",
            paragraphs: [
                "A book-tracking platform that helps readers organise their libraries and discover new books, with detailed statistics and personalised recommendations.",
                "It focuses on tracking books rather than the reading itself: there's no ebook reader, no quote journaling and no contextual help with difficult passages.",
            ],
        },
    ],
    furtherReading: { href: "/research/detailed-comparison", label: "Side-by-side screens: Biblio vs Moon+ Reader and ReadEra" },
};

export const painPoints = [
    {
        title: "Fragmented reading tools",
        lead: "Readers rely on several apps to manage their reading:",
        list: ["One app to read ebooks", "Another to track books", "A separate dictionary for word meanings", "A notes app for saving quotes"],
        tail: "Switching between tools interrupts focus and breaks the flow of reading.",
    },
    {
        title: "No motivation to read consistently",
        lead: "Many readers start a book with enthusiasm and then struggle to keep a regular habit. Without progress tracking, reminders or habit-building tools, routines fade quickly.",
        list: [] as string[],
        tail: "",
    },
    {
        title: "No reading analytics",
        lead: "Most tools give little visibility into reading habits. Readers can't easily see:",
        list: ["How long they read", "How often they read", "Their progress over time"],
        tail: "Without insight, it's hard to stay motivated.",
    },
    {
        title: "Physical and digital reading don't connect",
        lead: "Many people switch between paper books and digital files, but most apps support only one, so progress across formats is hard to track.",
        list: [] as string[],
        tail: "",
    },
];

export const insights = {
    paragraphs: [
        "Today's reading landscape is a set of single-purpose tools. Readers juggle several apps, and the friction breaks the flow of insight. Beyond missing features, many of these apps are slow, dated and hard to navigate.",
        "That points to a chance to rethink reading: a modern platform should help people read, stay consistent, understand difficult text and reflect on what they've read.",
        "Instead of splitting reading, tracking and understanding across different tools, these can live in one focused app.",
    ],
    closing: "This idea became the foundation for Biblio.",
};

"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

// The "On this page" sidebar, like Apple's documentation: it sticks while you scroll
// and highlights the section you are reading.
export default function ResearchToc({ items }: { items: TocItem[] }) {
    const [active, setActive] = useState(items[0]?.id);

    useEffect(() => {
        // A section counts as "being read" when it crosses a band near the top of the screen.
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-15% 0px -70% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav aria-label="On this page" className="sticky top-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-500">On this page</p>
            <ol className="mt-4 border-l border-zinc-200">
                {items.map((item) => {
                    const isActive = item.id === active;
                    return (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                aria-current={isActive ? "true" : undefined}
                                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition-colors ${
                                    isActive ? "border-zinc-900 font-medium text-zinc-900" : "border-transparent text-zinc-500 hover:text-zinc-800"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

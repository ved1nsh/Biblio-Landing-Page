import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import ResearchToc from "./ResearchToc";
import { competitors, gap, header, insights, market, overview, painPoints, problem, toc, type Mark } from "./content";

export const metadata: Metadata = {
    title: "Market Research — Biblio",
    description: header.paragraphs[0],
};

// Laid out like Apple's developer documentation: a sticky "On this page" sidebar,
// one readable column, hairline-separated sections, callouts for the key points,
// and a spec-sheet comparison table. All words and numbers live in content.ts.

const headingFont = { fontFamily: "var(--font-stack-sans)" };
const h2 = "text-[30px] font-normal leading-[1.08] tracking-tight text-zinc-900 md:text-[40px]";
const h3 = "text-[20px] font-normal leading-[1.2] tracking-tight text-zinc-900 md:text-[22px]";
const bodyText = "text-[16px] leading-[1.75] text-zinc-600 md:text-[17px]";
const eyebrow = "text-[12px] font-medium uppercase tracking-[0.16em] text-zinc-500";
const sectionClass = "scroll-mt-10 border-t border-zinc-200 pt-12 md:pt-16";
const textLink =
    "inline-flex items-center gap-1 text-[15px] font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-opacity hover:opacity-70";

// How each mark in the comparison table is drawn. The label is read out by screen readers.
const markView: Record<Mark, { symbol: string; className: string; label: string }> = {
    yes: { symbol: "✓", className: "text-zinc-900", label: "Offers it" },
    no: { symbol: "✕", className: "text-zinc-300", label: "Missing" },
    na: { symbol: "–", className: "text-zinc-300", label: "Not covered by this research" },
};

// A grey box for the one sentence that matters most in a section (like Apple's "Important" asides).
function Callout({ label, children }: { label: string; children: ReactNode }) {
    return (
        <aside className="rounded-r-2xl border-l-[3px] border-zinc-900 bg-[#F5F5F7] px-5 py-4 md:px-7 md:py-6">
            <p className={eyebrow}>{label}</p>
            <p className="mt-2 text-[16px] leading-[1.6] text-zinc-800 md:text-[18px]">{children}</p>
        </aside>
    );
}

export default function MarketResearchPage() {
    const { chart } = market;

    return (
        <main className="w-full bg-white text-zinc-900" style={{ fontFamily: "var(--font-neue-montreal)" }}>
            {/* ---------- Header: the original research page's dark gradient design ---------- */}
            <header className="relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_#081225_0%,_#080E1F_34%,_#05070F_68%,_#010101_100%)]" />

                <div className="relative w-full px-6 py-14 md:px-10 md:py-24">
                    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
                        <Link href="/" className="mb-10 inline-flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                            ← Back to Home
                        </Link>

                        <h1 className="mb-6 text-[36px] font-normal leading-[1.15] text-white md:mb-8 md:text-[66px] md:leading-[1.1]" style={headingFont}>
                            {header.title}
                        </h1>

                        <div className="max-w-[900px] space-y-5 text-[16px] leading-[1.5] text-zinc-200 md:text-[20px]">
                            {header.paragraphs.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <p className="mt-8 text-[13px] text-zinc-500">{header.meta}</p>
                    </div>
                </div>
            </header>

            {/* ---------- Sidebar + article ---------- */}
            <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
                {/* The sidebar only shows on big screens; phones just scroll */}
                <aside className="hidden lg:block">
                    <ResearchToc items={toc} />
                </aside>

                <article className="min-w-0 max-w-[780px] space-y-16 md:space-y-20">
                    {/* Overview */}
                    <section id="overview" className="scroll-mt-10">
                        <h2 className={h2} style={headingFont}>
                            Overview
                        </h2>
                        <div className="mt-6 space-y-5">
                            {overview.map((paragraph, i) => (
                                <p key={i} className={bodyText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Problem & objective: two side-by-side boxes */}
                    <section id="problem" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            Problem &amp; objective
                        </h2>
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {[problem.statement, problem.matters].map((block) => (
                                <div key={block.title} className="rounded-3xl bg-[#F5F5F7] p-6 md:p-8">
                                    <h3 className={h3} style={headingFont}>
                                        {block.title}
                                    </h3>
                                    <ul className="mt-4 space-y-3">
                                        {block.points.map((point) => (
                                            <li key={point} className="flex gap-3 text-[15px] leading-[1.6] text-zinc-700">
                                                <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Market overview: two headline numbers, then the chart */}
                    <section id="market" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            Market overview
                        </h2>
                        <div className="mt-6 space-y-5">
                            {market.paragraphs.map((paragraph, i) => (
                                <p key={i} className={bodyText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {market.stats.map((stat) => (
                                <div key={stat.value} className="rounded-3xl border border-zinc-200 p-6 md:p-8">
                                    <p className="text-[48px] font-normal leading-none tracking-tight text-zinc-900 md:text-[64px]" style={headingFont}>
                                        {stat.value}
                                    </p>
                                    <p className="mt-4 text-[15px] leading-[1.5] text-zinc-700">{stat.label}</p>
                                    <p className="mt-1 text-[13px] text-zinc-500">{stat.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Horizontal bar chart. Bars grow from one baseline on a true scale (0 to 40M),
                            so the small bars really are that small. Hover a row for its value. */}
                        <figure className="mt-4 rounded-3xl border border-zinc-200 p-6 md:p-8">
                            <figcaption className="text-[15px] font-medium text-zinc-900">{chart.title}</figcaption>

                            <div className="mt-6 space-y-6">
                                {chart.groups.map((group) => (
                                    <div key={group.name}>
                                        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-500">{group.name}</p>
                                        <ul className="mt-3 space-y-2">
                                            {group.apps.map((app) => (
                                                <li
                                                    key={app.name}
                                                    title={`${app.name}: ${app.label} downloads`}
                                                    className="grid grid-cols-[96px_minmax(0,1fr)_44px] items-center gap-3 md:grid-cols-[120px_minmax(0,1fr)_52px]"
                                                >
                                                    <span className="truncate text-[14px] text-zinc-700">{app.name}</span>
                                                    <span className="relative block h-6">
                                                        {/* faint gridlines at each tick */}
                                                        {chart.ticks.slice(1).map((tick) => (
                                                            <span
                                                                key={tick}
                                                                aria-hidden="true"
                                                                className="absolute inset-y-0 w-px bg-zinc-100"
                                                                style={{ left: `${(tick / chart.max) * 100}%` }}
                                                            />
                                                        ))}
                                                        <span
                                                            className="absolute left-0 top-1/2 z-10 h-3.5 -translate-y-1/2 rounded-r-[4px] bg-zinc-800"
                                                            style={{ width: `${(app.million / chart.max) * 100}%`, minWidth: "3px" }}
                                                        />
                                                    </span>
                                                    <span className="text-right text-[13px] tabular-nums text-zinc-600">{app.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {/* Axis labels, lined up under the bar track */}
                                <div className="grid grid-cols-[96px_minmax(0,1fr)_44px] gap-3 md:grid-cols-[120px_minmax(0,1fr)_52px]">
                                    <span />
                                    <span className="relative block h-4 border-t border-zinc-200">
                                        {chart.ticks.map((tick) => (
                                            <span
                                                key={tick}
                                                className="absolute top-1 -translate-x-1/2 text-[11px] tabular-nums text-zinc-400"
                                                style={{ left: `${(tick / chart.max) * 100}%` }}
                                            >
                                                {tick === 0 ? "0" : `${tick}M`}
                                            </span>
                                        ))}
                                    </span>
                                    <span />
                                </div>
                            </div>

                            <p className="mt-6 text-[13px] leading-[1.5] text-zinc-500">{chart.note}</p>
                        </figure>

                        <div className="mt-8">
                            <Callout label="Key insight">{market.takeaway}</Callout>
                        </div>
                    </section>

                    {/* The strategic gap: the insight, then a three-part picture of it */}
                    <section id="gap" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            The strategic gap
                        </h2>
                        <div className="mt-8">
                            <Callout label="Key insight">{gap.insight}</Callout>
                        </div>

                        <div className="mt-8 grid gap-3 md:grid-cols-3">
                            {gap.diagram.map((cell) => (
                                <div
                                    key={cell.title}
                                    className={`rounded-3xl p-6 md:p-7 ${cell.tone === "dark" ? "bg-zinc-900 text-white" : "bg-[#F5F5F7] text-zinc-900"}`}
                                >
                                    <p className="text-[20px] font-normal tracking-tight md:text-[22px]" style={headingFont}>
                                        {cell.title}
                                    </p>
                                    <p className={`mt-2 text-[15px] leading-[1.55] ${cell.tone === "dark" ? "text-zinc-300" : "text-zinc-600"}`}>
                                        {cell.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 space-y-5">
                            {gap.paragraphs.map((paragraph, i) => (
                                <p key={i} className={bodyText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Biblio vs others: spec-sheet table, then the notes behind every mark */}
                    <section id="competitors" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            Biblio vs others
                        </h2>
                        <p className={`mt-6 ${bodyText}`}>
                            Five popular apps, compared on the jobs a reader actually has. Each mark comes from the notes underneath.
                        </p>

                        {/* Scrolls sideways on phones instead of squashing */}
                        <div className="mt-8 overflow-x-auto rounded-3xl border border-zinc-200">
                            <table className="w-full min-w-[640px] border-collapse text-left">
                                <thead>
                                    <tr className="border-b border-zinc-200 bg-[#F5F5F7]">
                                        <th scope="col" className="px-5 py-4 text-[13px] font-medium text-zinc-500">
                                            Capability
                                        </th>
                                        {competitors.columns.map((column, i) => (
                                            <th
                                                key={column}
                                                scope="col"
                                                className={`px-3 py-4 text-center text-[13px] font-medium ${i === 0 ? "text-zinc-900" : "text-zinc-600"}`}
                                            >
                                                {column}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-100">
                                    <tr>
                                        <th scope="row" className="px-5 py-3.5 text-[14px] font-normal text-zinc-700">
                                            Google Play downloads
                                        </th>
                                        {competitors.downloads.map((value, i) => (
                                            <td
                                                key={competitors.columns[i]}
                                                className={`px-3 py-3.5 text-center text-[13px] tabular-nums text-zinc-600 ${i === 0 ? "bg-zinc-50" : ""}`}
                                            >
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                    {competitors.rows.map((row) => (
                                        <tr key={row.capability}>
                                            <th scope="row" className="px-5 py-3.5 text-[14px] font-normal text-zinc-700">
                                                {row.capability}
                                            </th>
                                            {row.marks.map((mark, i) => (
                                                <td
                                                    key={competitors.columns[i]}
                                                    className={`px-3 py-3.5 text-center text-[16px] ${markView[mark].className} ${i === 0 ? "bg-zinc-50" : ""}`}
                                                >
                                                    <span aria-hidden="true">{markView[mark].symbol}</span>
                                                    <span className="sr-only">{markView[mark].label}</span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-[13px] text-zinc-500">✓ offers it · ✕ missing, per the notes below · – not covered by this research</p>

                        {/* The notes behind the marks, tucked into expandable rows */}
                        <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
                            {competitors.notes.map((note) => (
                                <details key={note.name} className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                                        <span className="text-[17px] font-medium text-zinc-900">
                                            {note.name}
                                            <span className="ml-3 text-[13px] font-normal text-zinc-500">{note.downloads}</span>
                                        </span>
                                        <span aria-hidden="true" className="text-[22px] leading-none text-zinc-400 transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        {note.paragraphs.map((paragraph, i) => (
                                            <p key={i} className={bodyText}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>

                        <Link href={competitors.furtherReading.href} className={`mt-8 ${textLink}`}>
                            {competitors.furtherReading.label} →
                        </Link>
                    </section>

                    {/* Pain points: four cards */}
                    <section id="pain-points" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            User pain points
                        </h2>
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {painPoints.map((point, i) => (
                                <div key={point.title} className="rounded-3xl bg-[#F5F5F7] p-6 md:p-8">
                                    <p className="text-[13px] tabular-nums text-zinc-400">0{i + 1}</p>
                                    <h3 className={`mt-2 ${h3}`} style={headingFont}>
                                        {point.title}
                                    </h3>
                                    <p className="mt-3 text-[15px] leading-[1.6] text-zinc-700">{point.lead}</p>
                                    {point.list.length ? (
                                        <ul className="mt-3 space-y-1.5">
                                            {point.list.map((item) => (
                                                <li key={item} className="flex gap-3 text-[15px] leading-[1.55] text-zinc-700">
                                                    <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    {point.tail ? <p className="mt-3 text-[15px] leading-[1.6] text-zinc-700">{point.tail}</p> : null}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key insights, ending on the line that ties it to Biblio */}
                    <section id="insights" className={sectionClass}>
                        <h2 className={h2} style={headingFont}>
                            Key insights &amp; opportunity
                        </h2>
                        <div className="mt-6 space-y-5">
                            {insights.paragraphs.map((paragraph, i) => (
                                <p key={i} className={bodyText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <p
                            className="mt-10 border-t border-zinc-200 pt-8 text-[26px] font-normal leading-[1.2] tracking-tight text-zinc-900 md:text-[34px]"
                            style={headingFont}
                        >
                            {insights.closing}
                        </p>
                        <Link href="/" className={`mt-6 ${textLink}`}>
                            See what it became →
                        </Link>
                    </section>
                </article>
            </div>

            <div className="border-t border-zinc-200" />
            <Footer />
        </main>
    );
}

import Footer from "../components/Footer";

export default function TermsAndConditionsPage() {
    return (
        <>
            <section
                className="w-full bg-[#EDEAE4] px-6 py-16 text-zinc-900 md:px-10 md:py-20"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto w-full max-w-4xl">
                    <h1
                        className="text-center text-[36px] font-normal leading-tight tracking-tight md:text-[52px]"
                         style={{ fontFamily: "var(--font-stack-sans)" }}>
                    
                        Terms & Conditions — Biblio
                    </h1>

                    <div className="mt-10 space-y-8 text-base leading-7 text-zinc-700 md:text-lg md:leading-8">
                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">1. Introduction</h2>
                            <p className="mt-3">
                                Welcome to Biblio. By accessing or using this website and application, you agree to be bound by
                                these Terms and Conditions.
                            </p>
                            <p className="mt-3">
                                If you do not agree with any part of these terms, you should not use the platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">2. Use of the Platform</h2>
                            <p className="mt-3">
                                Biblio is a reading and productivity tool designed to help users read, track, and manage books
                                across different formats.
                            </p>
                            <p className="mt-3">
                                Users are responsible for how they use the platform and for any content they upload or access
                                through it.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">3. User Content & Responsibility</h2>
                            <p className="mt-3">Biblio allows users to upload and read files such as PDFs and EPUBs.</p>
                            <p className="mt-3">
                                Users are solely responsible for ensuring that any content they upload, access, or use complies with
                                applicable laws and does not infringe on intellectual property rights.
                            </p>
                            <p className="mt-3">Biblio does not host, provide, or distribute copyrighted content.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">4. Intellectual Property & Copyright</h2>
                            <p className="mt-3">
                                Biblio respects intellectual property rights and does not support or promote piracy.
                            </p>
                            <p className="mt-3">
                                The platform is intended solely as a reading tool. Users are expected to use legally obtained
                                content, including content from public domain or authorized sources.
                            </p>
                            <p className="mt-3">
                                Any misuse of the platform for unlawful purposes is the responsibility of the user.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">5. Third-Party References</h2>
                            <p className="mt-3">
                                This website may reference third-party applications, platforms, or services for the purpose of
                                research, comparison, or analysis.
                            </p>
                            <p className="mt-3">
                                All trademarks, logos, and brand names are the property of their respective owners.
                            </p>
                            <p className="mt-3">
                                Biblio is not affiliated with, endorsed by, or sponsored by any of the mentioned platforms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">6. No Warranties</h2>
                            <p className="mt-3">The platform is provided "as is" without warranties of any kind.</p>
                            <p className="mt-3">
                                While efforts are made to ensure accuracy and reliability, Biblio does not guarantee uninterrupted or
                                error-free operation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">7. Limitation of Liability</h2>
                            <p className="mt-3">
                                Biblio shall not be held responsible for any damages arising from the use or inability to use the
                                platform.
                            </p>
                            <p className="mt-3">
                                This includes, but is not limited to, data loss, misuse of content, or unauthorized use.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">8. Changes to Terms</h2>
                            <p className="mt-3">These Terms and Conditions may be updated from time to time.</p>
                            <p className="mt-3">
                                Continued use of the platform after changes are made constitutes acceptance of the updated terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">9. Contact</h2>
                            <p className="mt-3">
                                For any questions regarding these terms, you can reach out via the contact information provided on
                                the website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

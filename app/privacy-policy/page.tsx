import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <>
            <section
                className="w-full bg-[#EDEAE4] px-6 py-16 text-zinc-900 md:px-10 md:py-20"
                style={{ fontFamily: "var(--font-neue-montreal)" }}
            >
                <div className="mx-auto w-full max-w-4xl">
                    <h1
                        className="text-center text-[36px] font-normal leading-tight tracking-tight md:text-[52px]"
                        style={{ fontFamily: "var(--font-stack-sans)" }}
                    >
                        Privacy Policy - Biblio
                    </h1>

                    <div className="mt-10 space-y-8 text-base leading-7 text-zinc-700 md:text-lg md:leading-8">
                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">1. Introduction</h2>
                            <p className="mt-3">
                                Biblio respects your privacy and is committed to protecting your personal data.
                            </p>
                            <p className="mt-3">
                                This Privacy Policy explains what information is collected, how it is used, and how it is
                                protected when you use the Biblio website or application.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">2. Information We Collect</h2>
                            <p className="mt-3">Biblio may collect the following types of information:</p>

                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 md:text-xl">Personal Information</h3>
                            <p className="mt-2">
                                Information you provide directly, such as your name or email address (if applicable).
                            </p>

                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 md:text-xl">Usage Data</h3>
                            <p className="mt-2">
                                Information related to how you use the app, including reading activity, progress, streaks, and
                                preferences.
                            </p>

                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 md:text-xl">Uploaded Content</h3>
                            <p className="mt-2">
                                Files such as PDFs or EPUBs that you choose to upload for reading within the app.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">3. How Your Information Is Used</h2>
                            <p className="mt-3">The collected information is used to:</p>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>Provide and improve the reading experience</li>
                                <li>Track your reading progress and habits</li>
                                <li>Personalize features within the app</li>
                                <li>Maintain and improve app performance</li>
                            </ul>
                            <p className="mt-3">Biblio does not use your data for unrelated purposes.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">4. Uploaded Files and Content</h2>
                            <p className="mt-3">
                                Files uploaded by users (such as PDFs or EPUBs) are used only to enable reading within the app.
                            </p>
                            <p className="mt-3">Biblio does not claim ownership of user-uploaded content.</p>
                            <p className="mt-3">
                                Users are responsible for ensuring that any content they upload complies with applicable copyright
                                laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">5. Data Sharing</h2>
                            <p className="mt-3">Biblio does not sell, trade, or rent your personal data to third parties.</p>
                            <p className="mt-3">Your information is only shared when necessary to:</p>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>Operate the app (e.g., hosting or backend services)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">6. Data Security</h2>
                            <p className="mt-3">
                                Biblio takes reasonable measures to protect user data from unauthorized access, loss, or misuse.
                            </p>
                            <p className="mt-3">
                                However, no system can be completely secure, and absolute security cannot be guaranteed.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">7. Data Retention</h2>
                            <p className="mt-3">User data is retained only for as long as necessary to provide the service.</p>
                            <p className="mt-3">You may request deletion of your data at any time.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">8. Your Rights</h2>
                            <p className="mt-3">You have the right to:</p>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>Access your data</li>
                                <li>Request correction of your data</li>
                                <li>Request deletion of your data</li>
                            </ul>
                            <p className="mt-3">
                                Requests can be made through the contact information provided on the website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">9. Third-Party Services</h2>
                            <p className="mt-3">
                                Biblio may use third-party tools or services (such as analytics or hosting providers) to operate
                                the platform.
                            </p>
                            <p className="mt-3">
                                These services may collect limited data as required for functionality.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">10. Changes to This Policy</h2>
                            <p className="mt-3">This Privacy Policy may be updated from time to time.</p>
                            <p className="mt-3">
                                Continued use of Biblio after changes are made constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 md:text-2xl">11. Contact</h2>
                            <p className="mt-3">
                                If you have any questions about this Privacy Policy, you can reach out via the contact information
                                provided on the website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

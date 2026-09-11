export default function BootcampPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        From EMT to Engineer: App Academy
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-tokyonight-storm-comment">
                        Aug – Nov 2021
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base leading-7">
                    <p>
                        After 2.5 years working through COVID as an EMT and firefighter,
                        I started App Academy&apos;s full-stack immersive with no
                        engineering background. The pace was immediate: daily pairing, a
                        cohort of about 30, and 2 exams where scoring below 80% meant
                        expulsion. My path went from toy Ruby programs into Rails —
                        learning the MVC pattern connected to a PostgreSQL database — and
                        from there into JavaScript, which is where I found my footing.
                        3 months later I&apos;d shipped 3 full-stack apps, each
                        pushing into different territory.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-xl font-semibold">Destiny Plus</h2>
                        <p className="text-base leading-7">
                            A Disney Plus clone: account creation via email, browsing a
                            curated video catalog. Built with React, Redux, Ruby on
                            Rails, PostgreSQL, and AWS S3 for media storage. The
                            breakthrough moment was uploading videos I&apos;d cut and
                            edited myself to S3 and wiring them into the UI — first time
                            the app felt real. Setting up infrastructure to seed the
                            database for tests is what first sparked my interest in
                            automation and infrastructure.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Koko</h2>
                        <p className="text-base leading-7">
                            A mental health companion app, built on the MERN stack
                            (MongoDB, Express, React, Node) with a team of 4. I served
                            as Frontend Lead, running team meetings on the app&apos;s
                            overall design and theme — my first taste of technical
                            leadership.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Boba Bae</h2>
                        <p className="text-base leading-7">
                            A 2D platformer built with 0 external game engines:
                            vanilla JavaScript, HTML5, CSS3, and the Canvas API, inspired
                            by the Subtle Asian Traits community. It pulled in far more
                            math and physics than I expected — polygon collision,
                            simulating gravity, hand-drawing sprite art — with no
                            framework to lean on.
                        </p>
                        <a
                            href="https://victorhedev.github.io/BobaBae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 rounded-md border border-current px-4 py-2 text-sm font-medium hover:opacity-70"
                        >
                            Play the game
                        </a>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            What carried over from EMT/firefighter work
                        </h2>
                        <p className="text-base leading-7">
                            Vocalize concerns early. Step into a leadership position when
                            others seem unsure, but know when to back off and let someone
                            else lead. When things get hard, fall back on the systems you
                            built for yourself ahead of time, not improvisation.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Giving back</h2>
                        <p className="text-base leading-7">
                            2 months before I started at Bloomberg, App Academy
                            offered me a 1.5-month teaching assistant role. I helped with
                            lesson planning and unstuck students who were exactly where
                            I&apos;d been a few months earlier — a way to give back to a
                            program that gave me a new career.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

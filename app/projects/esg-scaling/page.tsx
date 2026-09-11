export default function EsgScalingPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Scaling ESG Scoring at Bloomberg
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-tokyonight-storm-comment">
                        May 2022 – June 2025
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base leading-7">
                    <p>
                        ESG — Environmental, Social, & Governance — scores are how
                        investors evaluate companies (and countries) beyond pure
                        financials. Bloomberg&apos;s ESG scoring started as ad hoc Python
                        scripts, manually run once a month against ~3,000 companies.
                        Over 3 years across 2 ESG teams, I helped turn that into
                        an automated pipeline running nightly at 5x the coverage, then
                        rebuilt the downstream system that consumed it for 151
                        countries&apos; worth of climate risk data.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-xl font-semibold">Scaling company scoring</h2>
                        <p className="text-base leading-7">
                            Replaced the ad hoc scripts with 6 microservices, moving from
                            monthly manual processing of 3,000 companies to automated
                            nightly scoring of 15,000 — an 80x throughput increase, from
                            16 hours down to under 1 hour. The hard part wasn&apos;t the
                            code, it was decoupling the quants&apos; scoring models into
                            real pipelines that could be split into microservices and
                            divided across teams. Alongside this, I built a snapshot
                            service versioning 1M+ nightly data points. Jupyter notebooks
                            I built to visualize the data showed hundreds of thousands of
                            points weren&apos;t changing day to day — inserting them all
                            as new rows made no sense — so the service only persists the
                            ~5% that actually changed, while still letting anyone
                            reconstruct exactly what the model saw on any past day.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Rebuilding Government Climate Risk
                        </h2>
                        <p className="text-base leading-7">
                            Rebuilt the Climate Risk scoring pipeline for 151 countries,
                            replacing 24+ runbook-driven Python scripts with a single
                            Argo-orchestrated service — cutting score computation from 2
                            weeks of engineer effort to 15 minutes. Reproducing years of
                            legacy results meant understanding, debugging, and rewriting
                            a large number of pandas/numpy transformations — vectorizing
                            them for both correctness and speed — while building a
                            regression-tested migration path back to 2015 and adding
                            Pandera-based validation to catch bad model inputs before
                            production.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Shipping a tool people actually used
                        </h2>
                        <p className="text-base leading-7">
                            Independently built and shipped a file diff tool now used by
                            around 100 quants, analysts, and engineers. The need was
                            accountability: when a score changed, there was no fast way
                            to tell who uploaded a dataset, when, or how it shifted the
                            output — this tool made that traceable.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Leading a cross-datacenter migration
                        </h2>
                        <p className="text-base leading-7">
                            Architected and led an 8-month migration to achieve
                            disaster-recovery compliance (DR-1), aligning 6 separate ESG
                            teams onto one plan. The technical approach — dual writes
                            with an eventual cutover instead of a one-time switch — was
                            the easy part; the real work was organizational, getting 6
                            teams to commit to one shared strategy instead of 6
                            independent migrations.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Other notable work</h2>
                        <p className="text-base leading-7">
                            Built the MVP for an ESG mobile application that was later
                            productionized into the Bloomberg mobile app. Also served as
                            a core maintainer of an internal alternative to Apache
                            Iceberg.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function FleetAutomationPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Fleet Automation at Bloomberg
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-tokyonight-storm-comment">
                        June 2025 – Present
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base leading-7">
                    <p>
                        After 3 years of building ESG data pipelines at Bloomberg, I
                        transferred internally to the Fleet Automation Services team:
                        infrastructure where the problem isn&apos;t only making a system
                        work, but making it safe to roll out. I help build a Go-based
                        orchestration platform spanning 7 services and more than 100,000
                        machines, turning operational work into campaigns that are
                        observable, predictable, and safe to run at scale.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Replacing manual router upgrades
                        </h2>
                        <p className="text-base leading-7">
                            I led an expansion of the fleet automation platform to 6,000
                            Juniper routers. Previously, quarterly upgrades required
                            engineers to connect over SSH, sequence changes by hand, and
                            remain available to diagnose problems — work that could add up
                            to 3,000 engineer-days in a single cycle. With the networking
                            teams, we translated that operational reality into scheduling
                            rules that account for regional maintenance windows,
                            dependencies, concurrency limits, and staged rollouts. The
                            result is a process designed to reduce manual coordination
                            and operator fatigue while keeping safety controls in the
                            rollout itself.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Keeping fleet state current
                        </h2>
                        <p className="text-base leading-7">
                            Fleet automation is a distributed-systems problem: eligibility,
                            scheduling, ticketing, and reconciliation all need an accurate
                            view of where a machine is in its lifecycle. I co-designed the
                            Go platform&apos;s evolution from batch status recomputation
                            toward Kafka-driven events, reducing stale state and the race
                            conditions that follow from it. Not every workflow needs to be
                            real-time, so the design keeps scheduled processing where it
                            fits while using events where prompt feedback matters to the
                            people responsible for the machines.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Rolling out security safely
                        </h2>
                        <p className="text-base leading-7">
                            I designed and implemented a security campaign driven by the{" "}
                            <a
                                href="https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 hover:opacity-70"
                            >
                                Digital Operational Resilience Act (DORA)
                            </a>{" "}
                            spanning 60,000 machines and 6 infrastructure teams. The work
                            extended fleet orchestration with multi-stage rollouts,
                            telemetry-based prechecks, and campaign-specific scheduling
                            constraints. Rather than treating a rollout as one large
                            switch, the campaign advances through deliberate gates so
                            teams can verify that a machine is ready before it moves
                            forward.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Owning the campaign lifecycle
                        </h2>
                        <p className="text-base leading-7">
                            I&apos;ve led 2 fleet automation campaigns from infrastructure
                            requirements through technical proposals, architecture,
                            implementation, and production support. That scope makes the
                            work as much about communication and operational clarity as
                            code: clear metrics and logging make production behavior
                            understandable, while close partnership with the teams running
                            the infrastructure makes the automation useful in practice.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

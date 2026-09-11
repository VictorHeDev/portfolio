import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
                <div className="flex flex-col gap-4">
                    <Link
                        href="/projects/esg-scaling"
                        className="rounded-md border border-current p-4 hover:opacity-70"
                    >
                        <h2 className="text-lg font-medium">
                            Scaling ESG Scoring at Bloomberg
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-tokyonight-storm-comment">
                            Three years turning a monthly, script-driven process into an
                            automated pipeline scoring 15,000+ companies nightly — and
                            rebuilding the country-level risk system on top of it.
                        </p>
                    </Link>
                    <Link
                        href="/projects/bootcamp"
                        className="rounded-md border border-current p-4 hover:opacity-70"
                    >
                        <h2 className="text-lg font-medium">
                            App Academy — Learning to Ship
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-tokyonight-storm-comment">
                            Three months, zero engineering background, three shipped
                            full-stack apps. Where it started.
                        </p>
                    </Link>
                </div>
            </main>
        </div>
    );
}

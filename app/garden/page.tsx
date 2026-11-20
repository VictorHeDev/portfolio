import Link from "next/link";

export default function GardenPage() {
    return (
        <div className="flex flex-1 flex-col items-center font-sans">
            <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-24 sm:px-16">
                <header className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold tracking-tight">Garden</h1>
                    <p className="max-w-xl leading-7">
                        A collection of notes on things I&apos;m building, learning,
                        and living with. Some are finished thoughts; others will
                        change as I do.
                    </p>
                </header>

                <section aria-labelledby="home-heading">
                    <h2 id="home-heading" className="text-xl font-semibold">Home</h2>
                    <div className="mt-4">
                        <Link
                            href="/garden/apartment/items-in-my-home"
                            className="block rounded-md border border-current p-4 hover:opacity-70"
                        >
                            <h3 className="text-lg font-medium">Items in my home</h3>
                            <p className="mt-2 text-sm">
                                Notes on the furniture, decor, and choices that
                                make my apartment feel like home.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

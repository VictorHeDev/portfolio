import Link from "next/link";

export default function ItemsInMyHomePage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <Link
                    href="/garden"
                    className="text-sm underline underline-offset-4 hover:opacity-70"
                >
                    Back to garden
                </Link>
                <header>
                    <p className="text-sm font-medium text-zinc-500 dark:text-tokyonight-storm-comment">
                        Apartment
                    </p>
                    <h1 className="mt-1 text-3xl font-semibold tracking-tight">
                        Items in my home
                    </h1>
                </header>
                <article className="flex flex-col gap-8 text-base leading-7">
                    <section>
                        <h2 className="text-xl font-semibold">About this space</h2>
                        {/* What makes this apartment feel like home, and what are you optimizing for? */}
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Living room</h2>
                        {/* Furniture, arrangement, comfort, and how you use this room. */}
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Desk setup</h2>
                        {/* Your workspace, what supports your daily work, and any tradeoffs. */}
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Lighting</h2>
                        {/* Lamps, natural light, and how lighting changes the space. */}
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Small details</h2>
                        {/* Decor, objects, art, or other details that make the space yours. */}
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Still evolving</h2>
                        {/* Things you want to add, replace, or rethink over time. */}
                    </section>
                </article>
            </main>
        </div>
    );
}

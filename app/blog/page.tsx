
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
                <Link
                    href="/blog/apartment/items-in-my-home"
                    className="rounded-md border border-current p-4 hover:opacity-70"
                >
                    <article>
                        <p className="text-sm font-medium text-zinc-500 dark:text-tokyonight-storm-comment">
                            Apartment
                        </p>
                        <h2 className="mt-1 text-lg font-medium">Items in my home</h2>
                        <p className="mt-2 text-sm text-zinc-500 dark:text-tokyonight-storm-comment">
                            Notes on the furniture, decor, and layout choices that make my
                            apartment feel like home.
                        </p>
                    </article>
                </Link>
            </main>
        </div>
    );
}

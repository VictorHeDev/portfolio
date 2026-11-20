import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex items-center justify-end p-4 pr-6">
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/garden">Garden</Link>
            </div>
        </nav>
    )
}

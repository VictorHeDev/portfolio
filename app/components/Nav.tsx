import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-4">
            <span className="font-bold">Victor He</span>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </nav>
    )
}

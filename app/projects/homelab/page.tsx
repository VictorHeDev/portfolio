export default function HomelabPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Homelab
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-tokyonight-storm-comment">
                        June 2025 – Present
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base leading-7">
                    <p>
                        I built this homelab as a hands-on space where curiosity becomes
                        a real, occasionally stubborn system. Running an Ubuntu server at
                        home lets me experiment with Docker, Linux, networking, local LLMs,
                        and self-hosted services, all within my private network, while
                        building things that make everyday life a little more convenient.
                    </p>
                    <p>
                        It doubles as my personal NAS and a loosely controlled engineering
                        laboratory. It is a system I can improve, occasionally break,
                        troubleshoot, and hopefully make a little less breakable each time.
                    </p>
                </div>
            </main>
        </div>
    );
}

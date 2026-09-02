export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-32 px-16">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">Victor He</h1>
                    <p className="text-lg text-zinc-500 dark:text-tokyonight-storm-comment">
                        Software Engineer
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base leading-7">
                    <p>
                        After graduating from the University at Buffalo (SUNY) in 2019 with a degree
                        in Biomedical Sciences, I worked for several years in the healthcare industry
                        as an EMT and medical assistant, and volunteered my time as a firefighter.
                        I&apos;m passionate about helping others and giving back to my community.
                    </p>
                    <p>
                        My experience as a healthcare worker during the height of COVID, combined
                        with my interest in EPIC&apos;s inter-facility healthcare software and my
                        desire to impact the lives of more people, drove me to change careers.
                    </p>
                    <p>
                        From a young age, I&apos;ve enjoyed learning about and using technology. I
                        like keeping up with the latest innovations, discussing them with others, and
                        tinkering with devices. I&apos;m a problem solver who loves flexing my
                        creative muscles. Feel free to reach out if you&apos;d like to talk or work on
                        a project together.
                    </p>
                </div>
            </main>
        </div>
    );
}

import { FacebookIcon, InstagramIcon, LinkedinIcon, MailCheck, TwitterIcon, YoutubeIcon } from "lucide-react";
const Footer = () => {
    return (
        <div className="pt-24 pb-4 bg-black flex flex-col items-center gap-24">
            <div className="flex flex-col md:flex-row justify-center items-start gap-24 w-full max-w-[1280px] px-4">
                <div className="flex flex-col items-start gap-5">
                    <div className="w-20 flex flex-col items-start overflow-hidden invert">
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <div className="text-white text-sm font-['Sansation']">It’s time to shine again!</div>
                    <div className="flex gap-2">
                        <div className="w-52 pl-3 pr-4 py-2.5 outline-1 outline-zinc-400 flex items-center gap-3">
                            <MailCheck color="white" size={14} />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="bg-transparent text-zinc-400 text-xs font-['Abhaya_Libre_Medium'] outline-none w-full"
                            />
                        </div>
                        <div className="p-2.5  outline-1 outline-zinc-400 flex items-center cursor-pointer">
                            <div className="text-white text-xs font-['Abhaya_Libre_Medium']">SUBSCRIBE</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: <FacebookIcon color="white" />, url: "https://facebook.com" },
                            { icon: <InstagramIcon color="white" />, url: "https://instagram.com" },
                            { icon: <TwitterIcon color="white" />, url: "https://twitter.com" },
                            { icon: <LinkedinIcon color="white" />, url: "https://linkedin.com" },
                            { icon: <YoutubeIcon color="white" />, url: "https://youtube.com" },
                        ].map(({ icon, url }) => (
                            <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-12">
                    <div className="flex flex-col gap-2 w-36">
                        {['SKIN', 'HAIR', 'MAKE-UP', 'PERFUMES', 'COSMETICS'].map((item) => (
                            <div key={item} className="text-white text-sm font-['Sansation']">{item}</div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 w-36">
                        {['ABOUT US', 'TERMS OF SERVICE', 'ADVERTISE'].map((item) => (
                            <div key={item} className="text-zinc-400 text-sm font-['Sansation'] cursor-pointer">{item}</div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 w-36">
                        {['PRIVACY POLICY', 'EDITORIAL POLICY', 'CONTACT'].map((item) => (
                            <div key={item} className="text-zinc-400 text-sm font-['Sansation'] cursor-pointer">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1280px] px-4 flex flex-col items-center gap-8">
                <div className="w-full h-px bg-white" />
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                    <div className="text-white text-sm font-['Roboto']">© 2023 Relume. All rights reserved.</div>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
                            <div key={item} className="text-white text-sm font-['Roboto'] underline">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;

import { Link } from "react-router-dom";
import FramrDiv from "./framr/FramrDiv";

export const Footer = () => {
    const navigationItems = [
        {
            title: "Playground",
            href: "/",
            description: "",
            items: [
                {
                    title: "Resume Builder",
                    href: "/explore/resume-builder",
                },
                {
                    title: "AI Mock Interview",
                    href: "/explore/ai-mock-interview",
                },
                {
                    title: "Components Library",
                    href: "/explore/react-template-generator",
                },
                {
                    title: "Free Templates",
                    href: "/explore/recordings",
                },
            ],
        },
        {
            title: "Pro Templates",
            description: "Managing a small business today is already tough.",
            items: [
                {
                    title: "Dashboards",
                    href: "/templates/dashboards",
                },
                {
                    title: "Landing Pages",
                    href: "/templates/landing-pages",
                },
                {
                    title: "3D Web Pages",
                    href: "/templates/3d-landing-pages",
                },
                {
                    title: "Power BI",
                    href: "/templates/power-bi",
                },
            ],
        },
        {
            title: "Company",
            description: "Managing a small business today is already tough.",
            items: [
                {
                    title: "About us",
                    href: "/about",
                },
                {
                    title: "Fundraising",
                    href: "/fundraising",
                },
                {
                    title: "Careers",
                    href: "/careers",
                },
                {
                    title: "Roadmap",
                    href: "/company/road-map",
                },
            ],
        },
    ];

    return (
        <div className="w-full py-20 lg:py-20 bg-background text-foreground border-0 border-gray-50 dark:border-0 rounded-b-3xl mt-0 bg-trasnparent">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                AI Resume Builder
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                Proudly made in Australia.
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                <p>5 Lawley St</p>
                                <p>Chermside</p>
                                <p>QLD 4032</p>
                            </div>
                            <FramrDiv className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                <Link to="/" className="hover:underline">Privacy Policy</Link>
                                <Link to="/" className="hover:underline">Terms of service</Link>
                                <Link to="/" className="hover:underline">Contact Us</Link>
                            </FramrDiv>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-xl">{item.title}</span>
                                        </Link>
                                    ) : (
                                        <p className="text-xl">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                to={subItem.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-foreground/75">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
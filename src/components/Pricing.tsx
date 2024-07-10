import { Check, Cross, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cross2Icon } from "@radix-ui/react-icons";

const pricingCardOptions = [
    {
        cardTitle: "Student",
        cardDescription: "Good for students or professionals seeking a quick Job Change.",
        priceAmount: 40,
        periodLabel: "month",
        isFree: true,
        keyPoints: [
            {
                title: "AI Models",
                subTitle: "Gemini AI",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Template Access",
                subTitle: "Only free templates",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Resume Limit",
                subTitle: "Can only export 1 Resume per day",
                icon: <Cross2Icon className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Watermark",
                subTitle: "Watermark included on exported files",
                icon: <Cross2Icon className="w-4 h-4 mt-2 text-primary" />
            },
        ],
        button: { label: "Start Building", action: "/auth/sign-up" }
    },
    {
        cardTitle: "Professional",
        cardDescription: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        priceAmount: 15,
        isFree: false,
        periodLabel: "month",
        keyPoints: [
            {
                title: "AI Models",
                subTitle: "Gemini AI, ChatGPT-3.5, ChatGPT-4o",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Template Access",
                subTitle: "All free and premium templates",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Resume Limit",
                subTitle: "Can export 100 Resumes",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "No Watermark",
                subTitle: " Watermark is not Included",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
        ],
        button: { label: "Get Plan", action: "/auth/sign-up?plan=enterprise" }
    },
    {
        cardTitle: "Enterprise",
        spanMultiple: true,
        cardDescription: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        priceAmount: 25,
        isFree: false,
        periodLabel: "month",
        keyPoints: [
            {
                title: "AI Models",
                subTitle: "All available AI models",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Template Access",
                subTitle: "All free and premium templates",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Resume Limit",
                subTitle: "Can export unlimited Resumes",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Premium Customer Support",
                subTitle: "Troubleshooting Support is provided",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
        ],
        button: { label: "Get Plan", action: "/auth/sign-up?plan=enterprise" }
    },
]


export const Pricing = () => (
    <div className="w-full py-10 lg:py-10">
        <div className="container mx-auto">
            <div className="flex text-center justify-center items-center gap-4 flex-col">
                <Badge className="px-6 py-0 text-md font-medium rounded-sm">Pricing</Badge>
                <div className="flex gap-10 my-5 flex-col border-0">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                        Pricing that goes easy on your wallet!
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                        Choose your plan
                    </p>
                </div>
                <div className={`grid p-0 text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 `}>
                    {pricingCardOptions.map((opt, i) =>
                        <Link to={opt.button.action} className={`max-h-lg ${opt.spanMultiple ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                            <Card className={`w-full rounded-3xl hover:cursor-pointer hover:shadow-2xl border light:border-gray-50 min-h-full`} key={i}>
                                <CardHeader>
                                    <CardTitle>
                                        <span className="flex flex-row gap-4 items-center font-bold text-lg">
                                            {opt.cardTitle}
                                        </span>
                                    </CardTitle>
                                    <CardDescription>
                                        {opt.cardDescription}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col gap-8 justify-start">
                                        <p className="flex flex-row  items-center gap-2 text-xl">
                                            {opt.isFree ? <span className="text-2xl lg:text-4xl">
                                                Free Forever
                                            </span> :
                                                <>
                                                    <span className="text-2xl lg:text-4xl">
                                                        ${opt.priceAmount}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {" "}
                                                        / {opt.periodLabel}
                                                    </span>
                                                </>
                                            }
                                        </p>
                                        <div className="flex flex-col gap-4 justify-start">
                                            {opt.keyPoints.map((kp, i) =>
                                                <div className="flex flex-row gap-4">
                                                    {kp.icon}
                                                    <div className="flex flex-col">
                                                        <p>{kp.title}</p>
                                                        <p className="text-muted-foreground text-sm">
                                                            {kp.subTitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <Link to={opt.button.action}>
                                            <Button variant="outline" className="gap-4 w-full" size={"lg"}>
                                                {opt.button.label} <MoveRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    </div >
);
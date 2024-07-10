import { Check, MoveRight } from "lucide-react";
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

const pricingCardOptions = [
    {
        cardTitle: "Personal",
        cardDescription: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        priceAmount: 40,
        periodLabel: "month",
        isFree: true,
        keyPoints: [
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
        ],
        button: { label: "Sign up Today", action: "/auth/sign-up" }
    },
    {
        cardTitle: "Commercial",
        cardDescription: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
        priceAmount: 40,
        isFree: false,
        periodLabel: "month",
        keyPoints: [
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
            {
                title: "Fast and reliable",
                subTitle: "We've made it fast and reliable.",
                icon: <Check className="w-4 h-4 mt-2 text-primary" />
            },
        ],
        button: { label: "Sign up Today", action: "/auth/sign-up" }
    },
]


export const Pricing = () => (
    <div className="w-full py-10 lg:py-10">
        <div className="container mx-auto">
            <div className="flex text-center justify-center items-center gap-4 flex-col">
                <Badge className="px-10 py-1 text-md font-medium">Pricing</Badge>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                        Prices that go easy on your wallet!
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                        Choose your plan
                    </p>
                </div>
                <div className={`grid pt-20 text-left grid-cols-1 lg:grid-cols-${pricingCardOptions.length > 3 ? 3 : pricingCardOptions.length} w-full gap-8`}>
                    {pricingCardOptions.map((opt, i) =>
                        <Link to={opt.button.action}>
                            <Card className="w-full rounded-3xl hover:cursor-pointer hover:shadow-2xl border light:border-gray-50" key={i}>
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
                                            {opt.isFree ? "Free forever" :
                                                <>
                                                    <span className="text-4xl">${opt.priceAmount}</span>
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
    </div>
);
import { MoveRight, WorkflowIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import HeroIllustration from "../assets/resume-scan-il.svg";
import FramrDiv from "./framr/FramrDiv";
import { useEffect, useRef, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";


gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, ExpoScaleEase, SlowMo);

export const Hero = () => {
    const elRef = useRef()

    useGSAP(() => {
        gsap.fromTo(
            '#fullpara',
            {
                ease: 'power1.inOut',
                opacity: 0,
                y: 200,
                delay: 0.4
            }, {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
            delay: 0.4
        })
    })
    gsap.fromTo(
        '#spline-bo',
        {
            ease: 'power1.inOut',
            opacity: 0,
            // y: -200,
            // z: -10,
            scale: 0.4,
            delay: 1
        }, {
        ease: 'power1.inOut',
        opacity: 1,
        y: 0,
        delay: 0.4
    })
    const [screenW, setScreenW] = useState(0)
    useEffect(() => {
        setScreenW(window.innerHeight)
    })
    return (
        <div className="rounded-3xl border-0 grid grid-cols-1 md:grid-cols-2 sm:max-w-[90%] mx-auto p-0 sm:p-7">
            <FramrDiv className="">
                <motion.img
                    src={HeroIllustration}
                    className={`h-full w-full scale-150 z-50 overflow-visible`}
                    alt=""
                    animate={{ scale: [0.5, 1.2, 1.2], x: [-screenW / 3, 0] }}
                    transition={{ duration: 1.2, delay: .4 }}
                />
            </FramrDiv>
            <FramrDiv
                className="
                    flex gap-12 flex-col rounded-3xl  
                    sm:p-12 md:p-10 px-4 py-10 
                    mx-1 my-1
                    sm:mx-auto 
                    dark:md:bg-gray-900 dark:bg-opacity-[80%]
                    bg-transparent
                    overflow-hidden
                    "
            >
                {/* <div>
                    <Badge variant="outline">We&apos;re live!</Badge>
                </div> */}
                <div className="flex gap-4 flex-col border-0">
                    <h1 className={`text-5xl md:text-5xl max-w-lg tracking-tighter text-left font-regular font-["Zen Maru Gothic"]zzz font-medium`}>
                        Build a <span className="text-primary">Professional Resume</span> using AI!
                    </h1>
                    <p className="text-xl leading-relaxed tracking-tight text-muted-foreground text-justify">
                        Utilize the in-house AI Resume Builder leveraging ChatGPT models and Gemini AI to develop a Professional Resume exportable with over a hundred free templates.
                    </p>
                </div>
                <div className="flex flex-col md:flexrow gap-2 md:gap-4">
                    <Link to={"/how-it-works"}>
                        <Button size="lg" className="gap-2 w-full" variant="outline">
                            How it works <WorkflowIcon className="w-4 h-4" />
                        </Button>
                    </Link>
                    <SignedOut>
                        <Link to={"/auth/sign-in"}>
                            <Button size="lg" className="gap-2 w-full">
                                Login <MoveRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <Link to={"/ai-resume-builder"}>
                            <Button size="lg" className="gap-2 w-full">
                                Explore more <MoveRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </SignedIn>
                </div>
            </FramrDiv>
        </div>
    )
}
export default Hero
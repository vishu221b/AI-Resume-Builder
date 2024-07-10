import { MoveRight, WorkflowIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroIllustration from "../assets/resume-scan-il.svg";
import FramrDiv from "./framr/FramrDiv";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
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
import gsap from "gsap";


gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, ExpoScaleEase, SlowMo);

export const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(
            '#spline-box',
            {
                // ease: 'power2.inOut',
                opacity: 0.29,
                y: 100,
                scale: 0.01,
                delay: .5,
                duration: 5,
            },
            {
                duration: 2,
                // ease: 'back.inOut',
                opacity: 1,
                y: 0,
                delay: .8,
                scale: 0.91,
            })
    })

    const [screenW, setScreenW] = useState<number>(0)
    // const [screenH, setScreenH] = useState<number>(0)
    // const [maxBoxwidth, setMaxBoxwidth] = useState<number>(0)


    useEffect(() => {
        setScreenW(window.innerWidth)
        // setInterval(() => {
        //     setScreenH(window.innerHeight)
        // }, 0)
    }, [])

    // const getInterval = () => {
    //     if (screenW > 1000) {
    //         setMaxBoxwidth()
    //     }
    //     else if (screenW > 1000) { }
    //     return screenW
    // };

    return (
        <div className="rounded-3xl 
        border-0
        lg:border
        lg:px-10
        lg:py-4
        scale-105 
        md:scale-105 
        grid grid-cols-1 gap-6 items-center
        lg:grid-cols-2 
        w-[90%] 
        md:max-w-[90%] 
        xl:max-w-[1440px] 
        mx-auto p-0 sm:p-17 
        max-h-[calc(100vh-20vh)] 
        lg:max-h-[calc(100vh-30vh)]
        -translate-y-5
        lg:-translate-y-0
        ">
            <FramrDiv className="max-h-hull transition-transform delay-1000" id={"spline-box"}>
                <motion.img
                    src={HeroIllustration}
                    className={`h-full w-full -z-50 overflow-visible`}
                    alt=""
                    animate={{ scale: [1.2, 1.2, 1.2], x: [-screenW / -7.3, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.2, delay: .4 }}
                />
            </FramrDiv>
            <FramrDiv
                className="
                    flex gap-12 flex-col rounded-3xl  
                    sm:p-12 md:p-10 px-4 py-10 
                    mx-1 my-0
                    sm:mx-auto 
                    md:bg-white md:bg-opacity-[2%]
                    md:shadow-2xl
                    dark:md:bg-gray-900 dark:bg-opacity-[80%]
                    bg-transparent
                    overflow-hidden
                    translate-y-0
                    sm:-translate-y-10
                    md:-translate-y-8
                    lg:-translate-y-0
                    xl:-translate-y-0
                    -z-10
                    max-h-full
                    justify-center
                    "
            >
                <div className="flex gap-4 flex-col border-0">
                    <h1 className={`text-4xl md:text-5xl tracking-tighter text-left font-regular font-medium`}>
                        Build a <span className="text-primary">Professional Resume</span> using AI!
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-justify">
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
            </FramrDiv >
        </div >
    )
}
export default Hero
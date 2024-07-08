import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { motion, useAnimate } from "framer-motion"

import { Button } from "../ui/button"
import { CreditCardIcon, CrossIcon, FolderClosedIcon, Group, ListCollapseIcon, MenuIcon, PointerOffIcon, Settings2Icon, SettingsIcon, ShieldCloseIcon, SidebarCloseIcon, TicketIcon, User2Icon, UserCircle2Icon, UserIcon, UserPlus2Icon, UserSquareIcon } from "lucide-react"
import { ExoticComponent, ReactNode, useEffect, useState } from "react"
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Cross2Icon, IdCardIcon, LockClosedIcon, ResumeIcon } from "@radix-ui/react-icons"
import SidebarDropdown from "./SidebarDropdown"
import { Label } from "../ui/label"

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const variants = {
    open: {
        transition: { staggerChildren: 0.09, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

type AppSheetProps = {
    sheetKey?: string;
}

type SidebarButtonTemplate = { label: string; icon: ReactNode; }

const sideBarButtonIconDefaultClasses: string = "scale-75"

const SidebarButtonCollection: SidebarButtonTemplate[] = [
    { label: "", icon: <SidebarDropdown triggerButtonLabel={"Manage Profile"} triggerButtonClassName="border-0 m-0 p-0" /> },
    { label: "My Resumes", icon: <Group className={sideBarButtonIconDefaultClasses} /> },
    { label: "View Settings", icon: <SettingsIcon className={sideBarButtonIconDefaultClasses} /> },
    { label: "Manage Payments", icon: <CreditCardIcon className={sideBarButtonIconDefaultClasses} /> },
]

const SidebarButtonDefaultTwClass: string = "w-full rounded-xl border-0 text-md p-2 flex text-sm justify-center items-center shadow-md"

const AppSheet = ({ sheetKey }: AppSheetProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <Sheet key={sheetKey || "left"}>
            <SheetTrigger asChild>
                <motion.button className="p-2 rounded-xl border" onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon />
                </motion.button>
            </SheetTrigger>
            <SheetContent
                className="w-[80%] rounded-r-2xl flex flex-col justify-between"
                side={"left"}
            >
                <Card className="w-[100%] mx-auto mt-4">
                    <CardHeader className="text-center">
                        <CardTitle>ProMate Resume Builder</CardTitle>
                        <CardDescription>Choose from over 1000+ Templates</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 shadow-lg justify-around">
                        <Card className="w-[100%] mx-auto">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center gap-4">
                                    <p>
                                        Hola Amigos!
                                    </p>
                                    <UserButton />
                                </CardTitle>
                                <CardDescription>It is a very good day today!</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-[4.5px] justify-center">
                                {SidebarButtonCollection.map(sButton =>
                                    <motion.button
                                        className={SidebarButtonDefaultTwClass}
                                    >
                                        {sButton.label}
                                        {sButton.icon}
                                    </motion.button>
                                )}
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>

                <SheetFooter>
                    <SignedIn>
                        <SignOutButton>
                            <Button variant={"ghost"} className="shadow-md border rounded-xl border-gray-100">Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                </SheetFooter>

            </SheetContent>


        </Sheet >

    )
}

export default AppSheet
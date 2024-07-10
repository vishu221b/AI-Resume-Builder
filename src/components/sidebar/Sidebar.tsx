
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { motion } from "framer-motion"

import { Button } from "../ui/button"
import { CreditCardIcon, Group, MenuIcon, PlusSquareIcon, SettingsIcon } from "lucide-react"
import { ReactNode, useState } from "react"
import { SignOutButton, SignedIn } from "@clerk/clerk-react"
import SidebarDropdown from "./SidebarDropdown"
import { ThemeToggle } from "../theme/ThemeToggle"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "../ui/sheet"
import { Cross2Icon } from "@radix-ui/react-icons"
import FramrButton from "../framr/FramrButton"
import FramrDiv from "../framr/FramrDiv"

type SidebarProps = {
    sheetKey?: string;
    isSheetOpen?: boolean;
    children?: ReactNode;
}

type SidebarButtonTemplate = { label: string; icon: ReactNode; }

const sideBarButtonIconDefaultClasses: string = "scale-75"


const SidebarButtonDefaultTwClass: string = "w-[100%] px-3 flex flex-row text-sm justify-between xs:justify-center items-center h-9 border-b border-b-gray-100 bg-background text-foreground dark:shadow-card-foreground dark:border dark:shadow-none hover:bg-gray-50 active:opacity-70"

const Sidebar = ({ sheetKey, isSheetOpen = false }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(isSheetOpen)
    const SidebarButtonCollection: SidebarButtonTemplate[] = [
        { label: "Create New Resume", icon: <PlusSquareIcon className="scale-75" /> },
        { label: "", icon: <SidebarDropdown triggerButtonLabel={"Manage Profile"} triggerButtonClassName="border-0" /> },
        { label: "My Resumes", icon: <Group className={sideBarButtonIconDefaultClasses} /> },
        { label: "View Settings", icon: <SettingsIcon className={sideBarButtonIconDefaultClasses} /> },
        { label: "Manage Payments", icon: <CreditCardIcon className={sideBarButtonIconDefaultClasses} /> },
    ]
    return (
        <FramrDiv
            animate={{
                y: [0, -10, 0],
                rotate: [0, 0, 25, -25, 0],
            }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                times: [1],
                repeat: Infinity,
                repeatDelay: 1
            }}
            className="w-0 border-0 border-gray-400 rounded-xl shadow-none bg-background text-foreground dark:shadow-2xl dark:shadow-white dark:opacity-50 dark:hover:opacity-100"

        >
            <Sheet key={sheetKey || "left"} open={isOpen} onOpenChange={setIsOpen} modal={false}>
                <SheetTrigger asChild>
                    <motion.button
                        whileTap={{ scale: 0.93 }}
                        className="p-2 rounded-xl shadow-md bg-background text-foreground dark:shadow-card-foreground dark:border dark:shadow-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MenuIcon />
                    </motion.button>
                </SheetTrigger>
                <SheetContent
                    className="w-[80%] rounded-r-2xl flex flex-col justify-between"
                    side={"left"}
                >
                    <SheetClose className="absolute left-2 top-2 rounded-lg" >
                        <Button variant={"outline"} size="icon">
                            <Cross2Icon className="" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetClose>
                    <ThemeToggle />
                    <Card className="w-[100%] mx-auto p-1 h-full border overflow-scroll shadow-none">
                        <CardHeader>
                            <CardTitle>ProMate Resume Builder</CardTitle>
                            <CardDescription>Choose from over 1000+ Templates</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col text-center rounded-2xl justify-between h-[85%]">
                            <CardContent className="flex flex-wrap gap-6 border-0 p-0">
                                {SidebarButtonCollection.map((sButton, index) =>
                                    <FramrButton
                                        key={sButton.label}
                                        className={SidebarButtonDefaultTwClass}
                                        animate={{ x: [1000, index / 2 === 0 ? index * 30 : index * -30, 0] }}
                                        transition={{ ease: "circInOut", duration: 0.8, times: [1], repeatDelay: 1 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {sButton.label}
                                        {sButton.icon}
                                    </FramrButton>
                                )}
                            </CardContent>
                            <div className="flex flex-col w-full">
                                <SignedIn>
                                    <SignOutButton>
                                        <Button variant={"default"} className="shadow-xl border rounded-2xl w-full border-gray-0">Sign Out</Button>
                                    </SignOutButton>
                                </SignedIn>
                            </div>
                        </CardContent>
                    </Card>
                </SheetContent>
            </Sheet >
        </FramrDiv>

    )
}

export default Sidebar
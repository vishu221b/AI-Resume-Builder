import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

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

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "../ui/button"
import { CrossIcon, FolderClosedIcon, MenuIcon, Settings2Icon, SettingsIcon, ShieldCloseIcon, SidebarCloseIcon, TicketIcon, User2Icon, UserCircle2Icon, UserIcon, UserPlus2Icon, UserSquareIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Cross2Icon, IdCardIcon, LockClosedIcon } from "@radix-ui/react-icons"

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
const AppDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
    })
    return (
        <Drawer
            modal={true} direction="left" open={isOpen} onOpenChange={setIsOpen} fixed>

            <DrawerTrigger>
                <Button className="p-2 rounded-xl" onClick={() => setIsOpen(!isOpen)} variant={"ghost"}>
                    <MenuIcon size={"100%"} />
                </Button>
            </DrawerTrigger>

            <DrawerContent className="rounded-r-2xl h-[100vh] w-[72%] mb-[0vh]">
                <Card className="w-[85%] mx-auto mt-4">
                    <CardHeader className="text-center">
                        <CardTitle>ProMate Resume Builder</CardTitle>
                        <CardDescription>Choose from over 1000+ Templates</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 shadow-lg justify-around">
                        <DrawerClose className="absolute left-5 top-6">
                            <Button variant="outline" className="rounded-xl p-[9.5px]">
                                <Cross2Icon />
                            </Button>
                        </DrawerClose>
                        <DrawerHeader className="flex justify-between flex-col">
                            <CardTitle className="flex justify-between items-center gap-4">
                                <p>
                                    Hola Amigos!
                                </p>
                                <UserButton />
                            </CardTitle>
                            <CardDescription>It is a very good day today!</CardDescription>
                            {/* <DrawerTitle>ProMate Resume Builder</DrawerTitle>
                            <DrawerDescription>Choose from over 1000+ Templates</DrawerDescription> */}
                        </DrawerHeader>
                        <Card className="w-[90%] mx-auto">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center gap-4">
                                    <p>
                                        Hola Amigos!
                                    </p>
                                    <UserButton />
                                </CardTitle>
                                <CardDescription>It is a very good day today!</CardDescription>
                            </CardHeader>
                            <CardContent className="flex gap-2 justify-around">
                                <motion.button transition={{ type: "spring" }} variants={sidebar}>
                                    <DropdownMenu >
                                        <DropdownMenuTrigger>
                                            <Button className="rounded-xl w-full border text-sm text-nowrap items-center justify-center px-2 py-[2px]" variant={"outline"}>
                                                <UserSquareIcon className="scale-75" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="shadow-lg">
                                            <DropdownMenuLabel className="text-center">Manage Profile</DropdownMenuLabel>
                                            <div className="flex flex-col gap-0">
                                                <DropdownMenuSeparator className="border border-gray-100" />
                                                <DropdownMenuItem className="justify-center hover:cursor-pointer">
                                                    {/* <Button variant={"ghost"} className="border-0 shadow w-full h-8"> */}
                                                    View Profile
                                                    {/* </Button> */}
                                                </DropdownMenuItem>
                                                {/* <DropdownMenuSeparator /> */}
                                                <DropdownMenuItem className="justify-center hover:cursor-pointer">
                                                    {/* <Button variant={"ghost"} className="border w-full h-8"> */}
                                                    Manage My Team
                                                    {/* </Button> */}
                                                </DropdownMenuItem>
                                                {/* <DropdownMenuSeparator /> */}
                                                <DropdownMenuItem className="justify-center hover:cursor-pointer">
                                                    {/* <Button variant={"ghost"} className="border w-full h-8"> */}
                                                    Subscription
                                                    {/* </Button> */}
                                                </DropdownMenuItem>
                                                {/* <DropdownMenuSeparator /> */}
                                                <DropdownMenuItem className="justify-center hover:cursor-pointer">
                                                    {/* <Button variant={"ghost"} className="border w-full h-8"> */}
                                                    Manage Payment Methods
                                                    {/* </Button> */}
                                                </DropdownMenuItem>
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </motion.button>
                                {/* <CardFooter> */}
                                {/* <motion.div className="" ref={scope} > */}
                                <Button className="rounded-xl w-full border text-sm text-nowrap items-center justify-center px-2 py-[2px]" variant={"outline"}>
                                    <p>Settings</p>
                                    <SettingsIcon className="scale-75" />
                                </Button>
                                {/* </motion.div > */}
                                {/* </CardFooter> */}
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>

                <DrawerFooter>
                    <SignedIn>
                        <SignOutButton>
                            <Button variant={"ghost"} className="shadow-md border rounded-xl border-gray-100">Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                    <SignedOut>
                        <Button>
                            Login
                        </Button>
                    </SignedOut>
                </DrawerFooter>

            </DrawerContent>


        </Drawer >

    )
}

export default AppDrawer
import React from "react";
import {
    NavigationMenuLink,
} from "src/components/ui/navigation-menu";
import { cn } from "src/lib/utils";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import Sidebar from "../sidebar/Sidebar";
import NavbarMiddle from "./NavbarMiddle";
const Navbar = () => {
    return (
        <div
            className="
            border-[1px] 
            border-gray-100 
            dark:border-gray-900 
            rounded-2xl p-2 
            xshadow-lg 
            my-1 
            mb-10
            flex sm:flex-row gap-4 
            justify-between 
            md:justify-center 
            items-center 
            px-4 
            z-50
            min-h-20
            w-[94%]
            mx-auto
            md:max-w-[94%] 
        xl:max-w-[1320px] 
        
            "
        >
            {/* lg:max-w-[1400px] */}
            <div className="md:hiddens">
                <Sidebar />
            </div>
            <NavbarMiddle />
            <div className="border-0 overflow-hidden">
                <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            userButtonTrigger: "border p-1 hover:border-[.5px] mx-auto"
                        }
                    }} />
                </SignedIn>
            </div>
        </div>)
}

export const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar
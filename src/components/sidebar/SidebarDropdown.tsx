import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { UserSquareIcon } from "lucide-react";

/**
 * Optional props
 */
type SidebarDropdownProps = {
    triggerButtonLabel?: string;
    triggerButtonClassName?: string;
    dropdownMenuItems?: string[];
}

const defaultDropdownOpts: string[] = ["View Profile", "Manage My Team", "Subscription", "Manage Payment Methods"]

const SidebarDropdown = ({ triggerButtonLabel, triggerButtonClassName, dropdownMenuItems }: SidebarDropdownProps) => {
    const menuItems: string[] = defaultDropdownOpts || dropdownMenuItems
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <motion.button className={`rounded-2xl border text-sm p-2 flex justify-evenly items-center text-nowrap ${triggerButtonClassName}`}>
                        {triggerButtonLabel || "Profile"}
                        <UserSquareIcon className="scale-75" />
                    </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="shadow-lg">
                    <DropdownMenuLabel className="text-center">
                        Manage Profile
                    </DropdownMenuLabel>
                    <div className="flex flex-col gap-0">
                        <DropdownMenuSeparator className="border-0 border-gray-100 mx-0 shadow-lg" />
                        {menuItems.map(item =>
                            <DropdownMenuItem className="justify-center hover:cursor-pointer">
                                {item}
                            </DropdownMenuItem>
                        )}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default SidebarDropdown;

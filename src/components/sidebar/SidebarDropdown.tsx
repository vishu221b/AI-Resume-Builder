import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                <DropdownMenuTrigger className={`rounded-2xl border text-sm p-2a flex justify-evenly items-center text-nowrap ${triggerButtonClassName}`}>
                    {triggerButtonLabel || "Profile"}
                    <UserSquareIcon className="scale-75" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="shadow-lg">
                    <DropdownMenuLabel className="text-center">
                        Manage Profile
                    </DropdownMenuLabel>
                    <div className="flex flex-col gap-0">
                        <DropdownMenuSeparator className="border-0 border-gray-100 mx-0 shadow-lg" />
                        {menuItems.map(item =>
                            <DropdownMenuItem
                                key={item}
                                className="justify-center hover:cursor-pointer"
                            >
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

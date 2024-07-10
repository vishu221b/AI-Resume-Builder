"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

export const Quickstart = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  useGSAP(() => {
    gsap.fromTo("#try-it-now", {
      opacity: 0,
      reapeat: -1,
      yoyo: true,
      delay: .1,
    }, {
      opacity: 1,
      reapeat: -1,
      yoyo: true,
      delay: .4,
    })
    gsap.fromTo("#start-building-form", {
      opacity: 0,
      scrollTrigger: "#try-it-now",
      y: 100,
      delay: .2,
    }, {
      y: 0,
      opacity: 1,
      delay: .8,
    })
  })
  return (
    <div className=" py-12 md:py-24 xshadow-2xl dark:shadow-none xshadow-slate-100 drop-shadow-2xl rounded-3xl border-0 max-w-[89%] sm:max-w-[92%] xl:max-w-[1440px] mx-auto dark:border-0 px-4 xl:px-0 dark:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>AI Resume Builder</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Build Professional Resume in Minutes
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Build Professional Resume using ChatGPT or Gemini AI in
                  minutes.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Ease of use</p>
                <p className="text-muted-foreground text-sm">
                  Just sign in and start using.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  Styled using Tailwind and shadcn/ui.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Professional Templates Library</p>
                <p className="text-muted-foreground text-sm">
                  Choose from over 100+ Free Professional Resume Templates.
                </p>
              </div>

            </div>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
              Start your journey today towards a better Career.
            </p>
          </div>

          <div className="justify-center flex items-center" id="start-building-form">
            <div className="rounded-3xl text-center flex flex-col border border-slate-100 dark:border-gray-900 xl:shadow-lg min-w-full md:max-w-[50%] px-2 py-8 gap-5 justify-around min-h-full sm:min-h-auto">
              <div className="flex flex-col gap-4">
                <p className="text-auto mx-auto" id="try-it-now">Start Building Now</p>
                <DropdownMenuSeparator />
              </div>
              <div className="flex flex-col gap-6 min-h-full">
                <div className="grid w-full max-w-sm items-center gap-2 mx-auto">
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    type="text"
                    className="border border-gray-100 dark:border-gray-900 shadow-sm drop-shadow-xl"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2 mx-auto">
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    type="text"
                    className="border border-gray-100 dark:border-gray-900 shadow-sm drop-shadow-xl"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-2 mx-auto">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="border border-gray-100 dark:border-gray-900 shadow-sm drop-shadow-xl"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2 ">
                  <Label htmlFor="picture">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"ghost"}
                        className={cn(
                          "w-full max-w-sm justify-start text-left font-normal border border-gray-100 dark:border-gray-900 shadow-sm drop-shadow-xl p-2 rounded-3xl items-center text-sm",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <span className="border-0 mx-auto flex justify-between">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                          <span></span>
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2 border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        fromYear={2010}
                        toYear={2024}
                        captionLayout="dropdown-buttons"
                        fixedWeeks
                        className=""
                        classNames={{
                          dropdown_month: "px-0 w-full text-sm flex flex-col",
                          dropdown_year: "px-0 w-full text-sm flex flex-col",
                          dropdown: "border mx-2 px-2 rounded-3xl py-1 dark:bg-black",
                          caption_dropdowns:
                            "px-1 mx-9 flex gap-2 text-center border-0 rounded-xl",
                          caption_label: "hidden",
                          table: "mx-auto",
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div></div>
              {/* <div className="grid w-full max-w-sm items-center gap-2 mx-auto">
                                <Label htmlFor="picture">Upload resume</Label>
                                <Input id="picture" type="file" className="border border-gray-100 shadow-sm drop-shadow-xl" />
                            </div> */}

              <Button
                className="gap-2 w-full max-w-sm mx-auto mt-3 animate-bounce"
                size={"lg"}
              >
                Build My Resume <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

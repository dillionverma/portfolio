import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HomeIcon, NotebookIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex">
      <div
        className={
          "pointer-events-auto relative mx-auto flex h-full items-center rounded-lg p-0.5 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        }
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "px-2"
              )}
            >
              <HomeIcon className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "px-2"
              )}
            >
              <NotebookIcon className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Blog</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

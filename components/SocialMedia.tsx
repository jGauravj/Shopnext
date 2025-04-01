import { Github, Laptop, Linkedin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurav-jangir-4b2427221/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/jGauravj",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Portfolio",
    href: "https://gauravdev.vercel.app/",
    icon: <Laptop className="w-5 h-5" />,
  },
];

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: SocialProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("", tooltipClassName)}>{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

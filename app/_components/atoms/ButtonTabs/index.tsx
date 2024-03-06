"use client";

import { forwardRef } from "react";

// interface
import { ButtonTabsProps, buttonTabsVariants } from "@/app/_types/cva";
import { cn } from "@/app/_utils/cn";

const ButtonTabs = forwardRef<HTMLButtonElement, ButtonTabsProps>(
  ({ variant, isActive, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonTabsVariants({ variant, isActive, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonTabs.displayName = "ButtonTabs";

export { ButtonTabs };

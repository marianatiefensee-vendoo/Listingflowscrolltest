"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "./utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

// CleanElement strips Figma Make's internal props before rendering
const CleanElement = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { as?: keyof JSX.IntrinsicElements }
>(({ as: Component = "div", ...props }, ref) => {
  // Filter out Figma Make internal props
  const cleanProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith("_fg"))
  );
  return React.createElement(Component, { ref, ...cleanProps });
});
CleanElement.displayName = "CleanElement";

function TooltipTrigger({
  asChild,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  // Filter out Figma Make internal props (_fgT, _fgS, _fgB, etc.)
  const cleanProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith("_fg"))
  );
  
  // When asChild is used, wrap children to strip Figma props
  if (asChild && React.isValidElement(children)) {
    const cleanChildren = React.cloneElement(children, {
      ...Object.fromEntries(
        Object.entries(children.props || {}).filter(([key]) => !key.startsWith("_fg"))
      ),
    } as any);
    
    return (
      <TooltipPrimitive.Trigger
        data-slot="tooltip-trigger"
        asChild
        {...cleanProps}
      >
        {cleanChildren}
      </TooltipPrimitive.Trigger>
    );
  }
  
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      asChild={asChild}
      {...cleanProps}
    >
      {children}
    </TooltipPrimitive.Trigger>
  );
}

function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-[var(--tooltip)] text-[color:var(--tooltip-foreground)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-[var(--radius-md)] px-[8px] py-[6px] font-['Lexend',sans-serif] font-[var(--font-weight-light)] text-[length:var(--text-xs)] leading-[16px] tracking-[0.4px] text-balance",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-[var(--tooltip)]" width={10} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
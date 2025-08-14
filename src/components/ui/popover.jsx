import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

/**
 * A utility function to conditionally join class names.
 * The original code likely used a library like `clsx` and `tailwind-merge` for this.
 * This is a simplified version for demonstration.
 * @param {...(string|boolean|null|undefined)} inputs - The class names to combine.
 * @returns {string} The combined class names.
 */
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Popover root component from Radix UI.
 * @param {object} props - Props for the PopoverPrimitive.Root component.
 */
function Popover({ ...props }) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * Popover trigger component from Radix UI.
 * This is the element that will open the popover when clicked.
 * @param {object} props - Props for the PopoverPrimitive.Trigger component.
 */
function PopoverTrigger({ ...props }) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * Popover content component from Radix UI.
 * This is the content that will be displayed inside the popover.
 * @param {object} props - Props for the PopoverPrimitive.Content component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.align="center"] - The preferred alignment of the popover content.
 * @param {number} [props.sideOffset=4] - The space in pixels between the trigger and the content.
 */
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-[var(--radix-popover-content-transform-origin)] rounded-md border p-4 shadow-md outline-none",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * Popover anchor component from Radix UI.
 * An optional component to position the popover against.
 * @param {object} props - Props for the PopoverPrimitive.Anchor component.
 */
function PopoverAnchor({ ...props }) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

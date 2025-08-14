import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

/**
 * A toaster component that displays notifications and adapts to the current theme.
 * It uses the `sonner` library for the toast functionality and `next-themes` for theme detection.
 * @param {object} props - Props for the Sonner component.
 */
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      }}
      {...props}
    />
  );
};

export { Toaster };

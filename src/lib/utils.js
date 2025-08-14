import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join class names and resolve Tailwind CSS class conflicts.
 * It combines the functionality of `clsx` for conditional classes and `tailwind-merge`
 * to handle conflicting Tailwind utility classes intelligently.
 *
 * @param {...*} inputs - A list of class values to combine. These can be strings,
 * objects with boolean values, or arrays.
 * @returns {string} The final, merged class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
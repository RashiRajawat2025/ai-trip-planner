import * as React from "react";

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
 * A customizable input component.
 * It accepts all standard input element props.
 * @param {object} props - The props for the component.
 * @param {string} props.className - Additional class names to apply to the input.
 * @param {string} props.type - The type of the input element.
 */
function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

// You can then use the Input component in your application.
// For example, in another component:
//
// function App() {
//   return (
//     <div className="p-4">
//       <Input type="email" placeholder="Email" />
//     </div>
//   );
// }
//
// export default App;


export { Input };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cancel: {
          DEFAULT: "#ffffff",
          hover: "#F4F4F4",
        },
        primary: {
          DEFAULT: "var(--ion-color-primary)",
          hover: "rgba(var(--ion-color-primary-rgb), 0.85)",
          rgb: "var(--ion-color-primary-rgb)",
          item: "rgba(var(--ion-color-primary-rgb), 0.14)",
          shade: "var(--ion-color-primary-shade)",
          tint: "var(--ion-color-primary-tint)",
        },
        secondary: {
          DEFAULT: "var(--ion-color-secondary)",
          hover: "rgba(var(--ion-color-secondary-rgb), 0.85)",
          rgb: "rgba(39,24,126)",
          shade: "var(--ion-color-secondary-shade)",
          tint: "var(--ion-color-secondary-tint)",
          item: "rgba(39,24,126, 0.14)",
        },
        tertiary: {
          DEFAULT: "var(--ion-color-tertiary)",
          hover: "rgba(var(--ion-color-tertiary-rgb), 0.45)",
          rgb: "var(--ioin-color-tertiary-rgb)",
          shade: "var(--ion-color-tertiary-shade)",
          tint: "var(--ion-color-tertiary-tint)",
          item: "rgba(var(--ion-color-tertiary-rgb), 0.14)",
        },
        success: {
          DEFAULT: "var(--ion-color-success)",
          hover: "rgba(var(--ion-color-success-rgb), 0.85)",
          rgb: "var(--ion-color-success-rgb)",
          shade: "var(--ion-color-success-shade)",
          tint: "var(--ion-color-success-tint)",
          item: "rgba(var(--ion-color-success-rgb), 0.14)",
        },
        warning: {
          DEFAULT: "var(--ion-color-warning)",
          hover: "rgba(var(--ion-color-warning-rgb), 0.45)",
          rgb: "var(--ion-color-warning-rgb)",
          shade: "var(--ion-color-warning-shade)",
          tint: "var(--ion-color-warning-tint)",
          item: "rgba(var(--ion-color-warning-rgb), 0.14)",
        },
        danger: {
          DEFAULT: "var(--ion-color-danger)",
          hover: "rgba(var(--ion-color-danger-rgb), 0.85)",
          rgb: "var(--ion-color-danger-rgb)",
          shade: "var(--ion-color-danger-shade)",
          tint: "var(--ion-color-danger-tint)",
          item: "rgba(var(--ion-color-danger-rgb), 0.14)",
        },
        dark: {
          DEFAULT: "var(--ion-color-dark)",
          rgb: "var(--ion-color-dark-rgb)",
          shade: "var(--ion-color-dark-shade)",
          tint: "var(--ion-color-dark-tint)",
          item: "rgba(var(--ion-color-dark-rgb), 0.14)",
        },
        medium: {
          DEFAULT: "var(--ion-color-medium)",
          hover: "rgba(var(--ion-color-medium-rgb), 0.85)",
          dark: "var(--ion-color-medium-dark)",
          rgb: "var(--ion-color-medium-rgb)",
          shade: "var(--ion-color-medium-shade)",
          tint: "var(--ion-color-medium-tint)",
          item: "rgba(var(--ion-color-medium-rgb), 0.14)",
        },
        light: {
          DEFAULT: "var(--ion-color-light)",
          rgb: "var(--ion-color-light-rgb)",
          shade: "var(--ion-color-light-shade)",
          tint: "var(--ion-color-light-tint)",
        },
        input: {
          DEFAULT: "var(-gridia-input-background)",
          dark: "var(--gridia-input-background-dark)",
          tint: "var(--gridia-input-tint)",
        },
        gray: {
          DEFAULT: "var(--ion-color-medium)",
          light: "var(--ion-color-gray-light)",
        },
        card: {
          DEFAULT: "var(--ion-color-card)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};

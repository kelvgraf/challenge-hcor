import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-light-1": "var(--primary-light-1)",
        "primary-light-2": "var(--primary-light-2)",
        "primary-dark-1": "var(--primary-dark-1)",
        "primary-blue-1": "var(--primary-blue-1)",
      },
    },
  },
};

export default nextConfig;

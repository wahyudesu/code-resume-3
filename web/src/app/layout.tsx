import type { Metadata } from "next";
import "@/app/globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "code-resume",
  description: "code-resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <Providers>
          <div className="flex flex-col min-h-svh">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

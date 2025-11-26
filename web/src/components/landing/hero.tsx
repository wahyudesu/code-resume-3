"use client";

import { MoveRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card } from "../ui/card";
import dynamic from "next/dynamic";
import { useBackground } from "@/contexts/BackgroundContext";

const PixelBlast = dynamic(
  () =>
    import("@/components/pixel-blast").then((mod) => ({
      default: mod.PixelBlast,
    })),
  {
    ssr: false,
    loading: () => <div className="sr-only" />,
  }
);

const LetterGlitch = dynamic(
  () => import("@/components/LetterGlitch"),
  {
    ssr: false,
    loading: () => <div className="sr-only" />,
  }
);

export const Hero = () => {
  const { backgroundType } = useBackground();

  return (
  <div className="relative w-full py-12 sm:py-10 lg:py-20 bg-background overflow-hidden">
    {/* Dynamic Background */}
    {backgroundType === "pixel-blast" && (
      <PixelBlast
        color="var(--primary)"
        transparent={true}
      />
    )}
    {backgroundType === "letter-glitch" && (
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        smooth={true}
        outerVignette={true}
        centerVignette={false}
        className="absolute inset-0 z-0"
      />
    )}

    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <div className="grid grid-cols-1 gap-8 sm:gap-12 items-center lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex gap-8 flex-col">
          <div>
            <Badge variant="outline">
              ✨ Kami live!
            </Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-lg tracking-tighter text-left font-bold text-foreground leading-tight">
              Buat CV Profesional dalam Hitungan Menit
            </h1>
            <Card className="bg-blue-50 border-blue-200 flex flex-col items-left p-8">
              <span className="text-3xl font-bold">const skills = 1,234+</span>
              <span className="text-sm">// Total Resume telah dibuat</span>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base">
                Mulai Sekarang
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 sm:gap-4 w-full sm:w-auto text-sm sm:text-base" variant="outline">
                Pelajari Lebih <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image/Visual */}
        <div className="bg-muted rounded-lg aspect-square border border-border flex items-center justify-center order-first lg:order-last">
          <Upload className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-muted-foreground/40" />
        </div>
      </div>
    </div>
  </div>
  );
};

import { MoveRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full py-20 lg:py-40 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">
              ✨ Kami live!
            </Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold text-foreground">
              Buat CV Profesional dalam Hitungan Menit
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Upload CV lama atau buat dari awal. Aplikasi kami akan memformat,
              merapihkan, dan menghasilkan CV profesional dengan tampilan yang menakjubkan.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-4">
                Mulai Sekarang
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" className="gap-4" variant="outline">
                Pelajari Lebih <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image/Visual */}
        <div className="bg-muted rounded-lg aspect-square border border-border flex items-center justify-center">
          <Upload className="w-24 h-24 text-muted-foreground/40" />
        </div>
      </div>
    </div>
  </div>
);

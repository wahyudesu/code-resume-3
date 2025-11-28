import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star, Bookmark } from "lucide-react";

type ResumeTemplate = {
  image: string;
  name: string;
  job: string;
  languages: string[];
  stars?: number;
};

const templates: ResumeTemplate[] = [
  {
    image: "/classic.png",
    name: "wahyudesu",
    job: "Data Scientist",
    languages: ["Python"],
    stars: 42,
  },
  {
    image: "/traditional.png",
    name: "Aulia",
    job: "Frontend Engineer",
    languages: ["JavaScript"],
    stars: 14,
  },
  {
    image: "/professional.png",
    name: "Budi",
    job: "Backend Engineer",
    languages: ["Go"],
    stars: 27,
  },
  {
    image: "/classic.png",
    name: "Siti",
    job: "UI/UX Designer",
    languages: ["Figma"],
    stars: 8,
  },
];

function ResumeTemplateCard({ image, name, job, languages, stars = 0 }: ResumeTemplate) {
  const primaryLang = languages && languages.length ? languages[0] : "";
  const isPython = primaryLang.toLowerCase() === "python";
  const isJS = primaryLang.toLowerCase() === "javascript" || primaryLang.toLowerCase() === "js";
  const fileExt = isPython ? ".py" : isJS ? ".js" : "";
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const displayJob = fileExt ? `${slugify(job)}${fileExt}` : job;
  return (
    <Card className="flex flex-col items-start gap-4 p-6 min-h-[420px]">
      <div className="relative w-full aspect-4/5 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
        <Image src={image} alt={name} width={320} height={400} className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-start gap-1 w-full">
        <div className="flex items-center justify-between w-full gap-2">
          <div>
            <span className={`text-md text-foreground ${fileExt ? 'font-mono font-semibold' : 'font-semibold'}`}>{displayJob}</span>
            <div className="text-sm text-muted-foreground">@{name}</div>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Star template" title="Star" className="flex items-center gap-2 p-2 rounded bg-background/60 hover:bg-background/80 transition">
              <Star size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{stars}</span>
              <span className="sr-only">Star</span>
            </button>
            <button aria-label="Bookmark template" title="Bookmark" className="flex items-center gap-2 p-2 rounded bg-background/60 hover:bg-background/80 transition">
              <Bookmark size={16} className="text-muted-foreground" />
              <span className="sr-only">Bookmark</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function TemplatePage() {
  return (
    <div className="w-full flex justify-center bg-background">
      <section className="w-full max-w-6xl py-12 sm:py-16 lg:py-20 bg-background/80 border-t border-border flex flex-col items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
            Community Showcase
          </h1>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            Pilih dari berbagai template profesional yang dirancang untuk membuat CV Anda menonjol
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 sm:mb-12 lg:mb-12">
            {templates.map((tpl) => (
              <ResumeTemplateCard key={tpl.name} {...tpl} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-endek.jpeg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ORNAMENT */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-secondary/30 hidden md:block" />
      <div className="absolute bottom-16 right-10 w-48 h-48 rounded-full border border-secondary/20 hidden md:block" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-secondary animate-shimmer" />

      {/* CONTENT */}
      <div className="container relative z-10 py-20 md:py-28">

        <div className="max-w-4xl">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/40 text-secondary mb-6 backdrop-blur">

            <span className="h-2 w-2 rounded-full bg-secondary animate-shimmer" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Warisan Budaya Bali
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">

            Website Pengenalan Motif{" "}

            <span className="text-gradient-gold">
              Kain Endek Bali
            </span>

            {" "}Berbasis Generative AI 
          </h1>

          {/* DIVIDER */}
          <div className="ornament-divider h-2 w-40 mb-6" />

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">

            Menghubungkan Warisan Budaya Bali dengan Teknologi Generative AI
            mendokumentasikan, mengedukasi, dan melestarikan motif Kain Endek
            untuk generasi mendatang.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4">

            <Button
              variant="gold"
              size="lg"
              onClick={() =>
                document
                  .getElementById("kategori")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Jelajahi Motif Endek
            </Button>

            <Button
              variant="outlineGold"
              size="lg"
              onClick={() =>
                document
                  .getElementById("chatbot")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Coba Asisten AI
            </Button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">

            {[
              { n: "4", l: "Kategori Motif" },
              { n: "373", l: "Ragam Motif" },
              { n: "AI", l: "Generative" },
            ].map((s) => (
              <div
                key={s.l}
                className="border-l-2 border-secondary/60 pl-4"
              >
                <p className="text-3xl font-bold text-secondary">
                  {s.n}
                </p>

                <p className="text-xs text-white/70 uppercase tracking-wider">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};
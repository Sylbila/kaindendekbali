export const MotifCard = ({ motif, index }) => {
  console.log("MOTIF:", motif);
  console.log("IMAGE:", motif.patternImage);
  return (
    <article
      className="group rounded-xl overflow-hidden bg-card shadow-card-soft border border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className="relative h-40 overflow-hidden bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{
          backgroundImage: motif.patternImage
            ? `url(${motif.patternImage})`
            : "none",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-2 border border-secondary/30 rounded pointer-events-none" />
      </div>
      <div className="p-4 space-y-2.5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Ciri Visual</p>
          <p className="text-sm text-foreground/85">{motif.ciri}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Makna</p>
          <p className="text-sm text-foreground/85">{motif.makna}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Fungsi</p>
          <p className="text-sm text-foreground/85">{motif.fungsi}</p>
        </div>
      </div>
    </article>
  );
};
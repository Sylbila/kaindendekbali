import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* IMPORT DATA */
import { dekoratifMotifs } from "@/data/dekoratif";
import { floraMotifs } from "@/data/flora";
import { faunaMotifs } from "@/data/fauna";
import { geometrisMotifs } from "@/data/geometris";

/* =========================
   DATA KATEGORI
========================= */

const categories = [
  {
    key: "dekoratif",
    title: "Motif Dekoratif",
    short:
      "Ornamen hias yang terinspirasi dari ukiran dan seni tradisional Bali.",

    motifs: dekoratifMotifs,
  },

  {
    key: "flora",
    title: "Motif Flora",
    short:
      "Mengangkat keindahan tumbuhan, bunga, dan unsur alam khas Bali.",

    motifs: floraMotifs,
  },

  {
    key: "fauna",
    title: "Motif Fauna",
    short:
      "Menghadirkan bentuk hewan dan satwa yang memiliki makna simbolis.",

    motifs: faunaMotifs,
  },

  {
    key: "geometris",
    title: "Motif Geometris",
    short:
      "Pola simetris dan bentuk geometris yang mencerminkan keharmonisan.",

    motifs: geometrisMotifs,
  },
];

/* =========================
   CARD
========================= */

export const CategoryCard = ({ category, onSelect }) => {
  return (
    <article
      id={category.key}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={category.motifs?.[0]?.patternImage}
          alt={category.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* TITLE */}
        <div className="absolute bottom-4 left-4">

          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>

        </div>

        {/* TOTAL MOTIF */}
        <div className="absolute top-4 right-4 bg-[#D4A85A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">

          {category.key === "dekoratif"
            ? 110
            : category.key === "flora"
            ? 136
            : category.key === "fauna"
            ? 54
            : 58}

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {category.short}
        </p>

        <Button
          onClick={() => onSelect(category.key)}
          className="
            w-full
            bg-[#6B3E2E]
            hover:bg-[#5A3225]
            text-white
          "
        >
          Lihat Detail

          <ArrowRight className="ml-2 h-4 w-4" />

        </Button>

      </div>
    </article>
  );
};

/* =========================
   SECTION CATEGORY
========================= */

export const CategorySection = ({ onSelect }) => {
  return (
    <section className="py-20">
      <div className="container">

        {/* NAVBAR CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">

          <button
            onClick={() =>
              document.getElementById("dekoratif")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-5 py-2 rounded-full bg-[#6B3E2E] text-white hover:bg-[#5A3225] transition"
          >
            Dekoratif
          </button>

          <button
            onClick={() =>
              document.getElementById("flora")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-5 py-2 rounded-full bg-[#6B3E2E] text-white hover:bg-[#5A3225] transition"
          >
            Flora
          </button>

          <button
            onClick={() =>
              document.getElementById("fauna")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-5 py-2 rounded-full bg-[#6B3E2E] text-white hover:bg-[#5A3225] transition"
          >
            Fauna
          </button>

          <button
            onClick={() =>
              document.getElementById("geometris")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-5 py-2 rounded-full bg-[#6B3E2E] text-white hover:bg-[#5A3225] transition"
          >
            Geometris
          </button>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <CategoryCard
              key={category.key}
              category={category}
              onSelect={onSelect}
            />
          ))}

        </div>

      </div>
    </section>
  );
};
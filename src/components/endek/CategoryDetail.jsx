import { useEffect, useState } from "react";
import { MotifCard } from "./MotifCard.jsx";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/* IMPORT DATA */
import { dekoratifMotifs } from "@/data/dekoratif";
import { floraMotifs } from "@/data/flora";
import { faunaMotifs } from "@/data/fauna";
import { geometrisMotifs } from "@/data/geometris";

/* HERO IMAGE */
import dekoImg from "@/asset/dekoratif/1deko.jpg";
import floraImg from "@/asset/flora/1flora.jpg";
import faunaImg from "@/asset/fauna/1fauna.jpg";
import geoImg from "@/asset/geometris/1geometris.jpg";

export const CategoryDetail = ({ category, onBack }) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    document
      .getElementById("kategori-detail")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setCurrentPage(1);

  }, [category]);

  /* HERO IMAGE */

  const image =
    category?.key === "dekoratif"
      ? dekoImg
      : category?.key === "flora"
      ? floraImg
      : category?.key === "fauna"
      ? faunaImg
      : geoImg;

  /* MOTIFS */

  const motifs =
    category?.key === "dekoratif"
      ? dekoratifMotifs
      : category?.key === "flora"
      ? floraMotifs
      : category?.key === "fauna"
      ? faunaMotifs
      : geometrisMotifs;

  /* PAGINATION */

  const motifsPerPage = 12;

  const lastIndex = currentPage * motifsPerPage;

  const firstIndex = lastIndex - motifsPerPage;

  const currentMotifs = motifs.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(motifs.length / motifsPerPage);

  return (
    <section
      id="kategori-detail"
      className="py-16 md:py-24 bg-muted/40"
    >
      <div className="container">

        {/* BACK */}
        <Button
          variant="outlineGold"
          size="sm"
          onClick={onBack}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke kategori
        </Button>

        {/* HERO */}
        <div
          className="relative rounded-3xl overflow-hidden h-64 md:h-80 mb-10 shadow-elegant bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="container relative z-10">

              <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-3">
                Kategori Motif
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category?.title}
              </h2>

              <p className="text-white/90 max-w-2xl leading-relaxed">
                {category?.description}
              </p>

            </div>
          </div>

          {/* BORDER */}
          <div className="absolute inset-3 border-2 border-secondary/40 rounded-2xl pointer-events-none" />

        </div>

        {/* TITLE */}
        <div className="flex items-center gap-4 mb-8">

          <div className="h-px flex-1 ornament-divider" />

          <h3 className="text-2xl font-bold text-primary">
            Galeri Motif {category?.title}
          </h3>

          <div className="h-px flex-1 ornament-divider" />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {currentMotifs.map((m, i) => (
            <MotifCard
              key={i}
              motif={m}
              index={i}
            />
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

          {Array.from({ length: totalPages }).map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={
                currentPage === i + 1
                  ? "w-12 h-12 rounded-lg border font-semibold transition-all bg-pink-600 text-white border-pink-600"
                  : "w-12 h-12 rounded-lg border font-semibold transition-all bg-white text-pink-600 border-pink-300 hover:bg-pink-50"
              }
            >
              {i + 1}
            </button>

          ))}

          {/* NEXT */}
          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className="
              w-12
              h-12
              rounded-lg
              border
              bg-white
              text-pink-600
              border-pink-300
              hover:bg-pink-50
              font-bold
            "
          >
            »
          </button>

        </div>

      </div>
    </section>
  );
};
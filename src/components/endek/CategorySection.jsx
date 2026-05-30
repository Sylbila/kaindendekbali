import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* =========================
   DATA CATEGORY
========================= */

const categories = [
  {
    key: "dekoratif",
    title: "Motif Dekoratif",
    short:
      "Ornamen hias berakar dari ukiran tradisional Bali.",
    total: 99,
  },

  {
    key: "flora",
    title: "Motif Flora",
    short:
      "Mengangkat keindahan tumbuhan dan bunga khas Bali.",
    total: 68,
  },

  {
    key: "fauna",
    title: "Motif Fauna",
    short:
      "Menghadirkan satwa mitologis dan hewan khas Bali.",
    total: 46,
  },

  {
    key: "geometris",
    title: "Motif Geometris",
    short:
      "Pola simetris berbasis bentuk-bentuk dasar.",
    total: 57,
  },
];

/* =========================
   COMPONENT
========================= */

export default function CategorySection() {
  return (
    <section className="py-20 bg-[#f7f3ef]">

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Kategori Motif Endek Bali
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Empat kategori utama yang menaungi seluruh ragam motif Endek Bali.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <div
              key={category.key}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                overflow-hidden
              "
            >

              {/* HEADER CARD */}
              <div
                className="
                  bg-amber-700
                  py-10
                  px-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >

                <h2 className="text-white text-2xl font-bold">
                  {category.title}
                </h2>

                <div
                  className="
                    mt-4
                    bg-yellow-400
                    text-black
                    h-10
                    w-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {category.total}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {category.short}
                </p>

                <Button
                  className="
                    w-full
                    bg-amber-700
                    hover:bg-amber-800
                    text-white
                  "
                >
                  Lihat Detail

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
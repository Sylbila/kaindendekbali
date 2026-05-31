import { Sparkles, Hand, Users, Leaf, Landmark } from "lucide-react";

const items = [
  {
    icon: Hand,
    title: "Proses Pembuatan",
    text: "Kain Endek ditenun melalui teknik ikat pakan (weft ikat). Benang diikat dan dicelup berulang sebelum ditenun, menghasilkan motif yang khas dan tidak persis sama antar lembar.",
    image: "/proses.jpg",
  },
  {
    icon: Sparkles,
    title: "Makna Filosofis",
    text: "Setiap motif merepresentasikan nilai budaya, kepercayaan, dan harmoni Tri Hita Karana — hubungan manusia dengan Tuhan, sesama, dan alam.",
    image: "/makna.jpg",
  },
  {
    icon: Users,
    title: "Peran Perajin Lokal",
    text: "Perajin di Klungkung, Gianyar, Karangasem, dan Denpasar menjaga teknik tradisional ini secara turun-temurun, sekaligus berinovasi mengikuti zaman.",
    image: "/pembuatan.jpg",
  },
  {
    icon: Leaf,
    title: "Konservasi Digital",
    text: "Dokumentasi digital dan Generative AI membantu mendata motif, mengenali pola, serta memperkenalkan Endek ke generasi muda dan dunia internasional.",
    image: "/digital.png",
  },
];

const tools = [
  {
    name: "Alat Tenun ATBM",
    image: "/alattenun.jpg",
  },
  {
    name: "Sisir / Pisir",
    image: "/sisir.jpg",
  },
  {
    name: "Lot",
    image: "/lot1.jpg",
  },
  {
    name: "Palet",
    image: "/palet.jpg",
  },
  {
    name: "Penggulung Benang",
    image: "/penggulungbenang1.jpg",
  },
  {
    name: "Gunting",
    image: "/gunting.jpg",
  },
];

export const EducationSection = () => {
  return (
    <section id="edukasi" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-xs mb-3">
            Edukasi & Konservasi
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
            Mengenal Lebih Dalam Kain Endek Bali
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Endek bukan sekadar kain — ia adalah arsip hidup budaya Bali yang
            menyatukan keterampilan tangan, spiritualitas, dan kreativitas
            masyarakatnya.
          </p>
        </div>

        {/* CARD UTAMA */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {items.map(({ icon: Icon, title, text, image }) => (
            <article
              key={title}
              className="bg-white rounded-3xl p-8 border shadow-sm"
            >
              <div className="flex gap-5 flex-col md:flex-row">
                
                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#f8f4ee] p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-[#c79b5d]" />
                    </div>
        
                    <h3 className="text-3xl font-bold text-[#6a4325]">
                      {title}
                    </h3>
                  </div>
        
                  <p className="text-lg leading-relaxed text-gray-700">
                    {text}
                  </p>
                </div>
        
                {/* IMAGE */}
                <div className="flex-1">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full min-h-[230px] object-cover rounded-2xl"
                  />
                </div>
        
              </div>
            </article>
          ))}
        </div>

        {/* ALAT TENUN */}
        <div className="bg-white rounded-3xl p-8 border shadow-sm">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f8f4ee] p-3 rounded-xl">
                  <Landmark className="w-6 h-6 text-[#c79b5d]" />
                </div>

                <h3 className="text-3xl font-bold text-[#6a4325]">
                  Alat Tenun Endek
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                Proses menenun Endek menggunakan alat tenun tradisional bukan
                mesin (ATBM) dengan berbagai alat bantu seperti gedogan,
                sisir/pisir, lot, palet, penggulung benang, dan gunting.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-[#faf7f2] p-4 rounded-2xl text-center w-full max-w-[150px]"
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-20 h-20 object-contain mx-auto mb-3"
                  />

                  <p className="text-sm font-medium text-[#6a4325]">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

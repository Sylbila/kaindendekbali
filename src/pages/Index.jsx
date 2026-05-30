import { useState } from "react";
import { Hero } from "@/components/endek/Hero.jsx";
import { CategoryCard } from "@/components/endek/CategoryCard.jsx";
import { CategoryDetail } from "@/components/endek/CategoryDetail.jsx";
import { EducationSection } from "@/components/endek/EducationSection.jsx";
import { ChatbotSection } from "@/components/endek/ChatbotSection.jsx";
import { categoriesWithImages } from "@/data/endek.js";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const activeCategory = categoriesWithImages.find((c) => c.key === selected);

  return (
    <main className="min-h-screen">
      <Hero />

      <section id="kategori" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold uppercase tracking-[0.2em] text-xs mb-3">Empat Pilar Motif</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">
              Kategori Motif Kain Endek Bali
            </h2>
            <div className="ornament-divider h-2 w-40 mx-auto mb-5" />
            <p className="text-muted-foreground leading-relaxed">
              Empat kategori utama yang memayungi seluruh ragam motif Endek — masing-masing membawa makna,
              estetika, dan fungsi budayanya sendiri.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithImages.map((c) => (
              <CategoryCard key={c.key} category={c} onSelect={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {activeCategory && (
        <CategoryDetail category={activeCategory} onBack={() => setSelected(null)} />
      )}

      <EducationSection />
      <ChatbotSection />

      <footer className="bg-gradient-maroon py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-endek opacity-10" /> 
        <div className="container relative">
          <p className="text-secondary font-bold text-lg mb-2">Konservasi Kain Endek Bali</p>
          <p className="text-primary-foreground/70 text-sm">
            Melestarikan warisan budaya Bali melalui teknologi Generative AI.
          </p>
          <div className="ornament-divider h-2 w-32 mx-auto mt-4" />
        </div>
      </footer>
    </main>
  );
};

export default Index;

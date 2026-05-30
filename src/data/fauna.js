const imageModules = import.meta.glob(
    "../asset/fauna/*.jpg",
    {
      eager: true,
    }
  );
  
  const images = Object.entries(imageModules)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)/)?.[0] || 0);
      const numB = parseInt(b.match(/(\d+)/)?.[0] || 0);
  
      return numA - numB;
    })
    .map(([, module]) => module.default);
  
    export const faunaDescriptions = [
      {
        name: "Fauna - Burung Stilisasi",
        ciri:
          "Motif burung dengan bentuk stilisasi dekoratif yang tersusun simetris dalam bidang kain. Warna biru, pink, dan hijau menciptakan tampilan visual yang artistik dan harmonis.",
        makna:
          "Melambangkan kebebasan, keharmonisan, dan keseimbangan hidup masyarakat Bali dengan alam sekitarnya.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai ornamen fauna artistik.",
      },
    
      {
        name: "Fauna - Kupu-kupu Stilisasi",
        ciri:
          "Motif kupu-kupu dengan bentuk stilisasi dan pola ornamental yang tersusun berulang. Warna kuning, pink, dan hijau menciptakan tampilan visual yang cerah dan dekoratif.",
        makna:
          "Melambangkan keindahan, perubahan, dan kehidupan yang penuh warna.",
        fungsi:
          "Digunakan dalam kain rumah tangga dan tekstil adat Bali sebagai motif dekoratif floral-fauna.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk naturalistik dan detail sayap dekoratif. Warna biru dan hijau menciptakan tampilan visual yang elegan dan harmonis.",
        makna:
          "Melambangkan kedamaian, kebebasan, dan hubungan harmonis dengan alam.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
      },
    
      {
        name: "Fauna - Burung Dekoratif",
        ciri:
          "Motif burung dengan pola stilisasi sederhana dan susunan dekoratif berulang. Warna hijau, kuning, dan merah menciptakan tampilan visual yang artistik.",
        makna:
          "Melambangkan kehidupan yang dinamis dan hubungan manusia dengan alam.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
      },
    
      {
        name: "Fauna - Kupu-kupu Ornamental",
        ciri:
          "Motif kupu-kupu dengan pola ornamental simetris dan detail sayap dekoratif. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan elegan.",
        makna:
          "Melambangkan transformasi, keindahan, dan keharmonisan hidup.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
      },
    
      {
        name: "Fauna - Burung Hias",
        ciri:
          "Motif burung dengan bentuk stilisasi dan pola geometris dekoratif. Warna biru, hijau, dan putih menciptakan tampilan visual yang harmonis.",
        makna:
          "Melambangkan kebebasan, kedamaian, dan nilai estetika tradisional Bali.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan detail sayap dan ekor dekoratif yang tersusun ornamental. Warna pink, hijau, dan biru menciptakan tampilan visual yang artistik dan harmonis.",
        makna:
          "Melambangkan keindahan, keseimbangan, dan kebebasan dalam kehidupan.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
      },
    
      {
        name: "Fauna - Singa",
        ciri:
          "Motif singa dengan bentuk stilisasi dan detail surai dekoratif. Warna merah, kuning, dan hitam menciptakan tampilan visual yang kuat dan megah.",
        makna:
          "Melambangkan keberanian, kekuatan, dan kewibawaan.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil etnik Bali.",
      },
    
      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan detail sayap berwarna cerah dan susunan dekoratif. Warna kuning, pink, dan hijau menciptakan tampilan visual yang cerah dan elegan.",
        makna:
          "Melambangkan keindahan alam dan perubahan menuju kehidupan yang lebih baik.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
      },
    
      {
        name: "Fauna - Singa",
        ciri:
          "Motif singa dengan bentuk geometris dan detail ornamental pada bagian kepala. Warna merah, hitam, dan kuning menciptakan tampilan visual yang tegas dan artistik.",
        makna:
          "Melambangkan kekuatan, perlindungan, dan kewibawaan.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil tradisional Bali.",
      },
    
      {
        name: "Fauna - Udang",
        ciri:
          "Motif udang dengan bentuk lengkung dekoratif dan detail tubuh stilisasi. Warna merah dan putih menciptakan tampilan visual yang unik dan artistik.",
        makna:
          "Melambangkan kelimpahan hasil laut dan kesejahteraan masyarakat pesisir.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
      },
    
      {
        name: "Fauna - Lebah",
        ciri:
          "Motif lebah dengan detail sayap kecil dan pola tubuh garis dekoratif. Warna kuning dan hitam menciptakan tampilan visual yang kontras dan menarik.",
        makna:
          "Melambangkan kerja keras, disiplin, dan kehidupan sosial yang harmonis.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
      },
    
      {
        name: "Fauna - Kadal",
        ciri:
          "Motif kadal dengan bentuk stilisasi dan detail tubuh memanjang. Warna hijau dan coklat menciptakan tampilan visual yang alami dan dekoratif.",
        makna:
          "Melambangkan kemampuan beradaptasi dan keseimbangan dengan alam.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil etnik Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk naturalistik dan pola dekoratif simetris. Warna biru, putih, dan hijau menciptakan tampilan visual yang harmonis dan elegan.",
        makna:
          "Melambangkan kebebasan dan ketenangan hidup.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil adat Bali.",
      },
    
      {
        name: "Fauna - Udang",
        ciri:
          "Motif udang dengan bentuk stilisasi dan detail tubuh ornamental. Warna merah dan putih menciptakan tampilan visual yang artistik dan unik.",
        makna:
          "Melambangkan kemakmuran dan keberlimpahan hasil alam laut.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
      },
    
      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan sayap lebar dan detail dekoratif simetris. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan elegan.",
        makna:
          "Melambangkan keindahan dan perubahan hidup yang positif.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan detail ekor panjang dan bentuk stilisasi dekoratif. Warna hijau, merah, dan kuning menciptakan tampilan visual yang artistik dan harmonis.",
        makna:
          "Melambangkan kebebasan, semangat, dan hubungan harmonis dengan alam.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk simetris dan pola ornamental berulang. Warna biru, pink, dan putih menciptakan tampilan visual yang elegan dan dekoratif.",
        makna:
          "Melambangkan keseimbangan dan keharmonisan hidup.",
        fungsi:
          "Digunakan dalam tekstil tradisional dan kain dekoratif Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan detail sayap terbuka dan ekor dekoratif. Warna hijau, biru, dan kuning menciptakan tampilan visual yang harmonis dan artistik.",
        makna:
          "Melambangkan kebebasan dan semangat kehidupan.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil adat Bali.",
      },
    
      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk stilisasi dan pola dekoratif berulang. Warna merah, hijau, dan putih menciptakan tampilan visual yang artistik dan elegan.",
        makna:
          "Melambangkan keindahan dan keharmonisan dalam budaya Bali.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
      },
  
      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan detail sayap simetris dan pola ornamental berulang. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan dekoratif.",
        makna:
          "Melambangkan keindahan, perubahan hidup, dan keseimbangan alam.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk naturalistik dan detail ekor panjang dekoratif. Warna biru, hijau, dan kuning menciptakan tampilan visual yang harmonis dan elegan.",
        makna:
          "Melambangkan kebebasan, kedamaian, dan hubungan harmonis dengan alam.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan susunan simetris dan pola stilisasi ornamental. Warna merah, putih, dan hijau menciptakan tampilan visual yang artistik dan khas tradisional Bali.",
        makna:
          "Melambangkan keseimbangan hidup dan keindahan budaya tradisional Bali.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
      },

      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan detail sayap lebar dan bentuk stilisasi dekoratif. Warna kuning, pink, dan biru menciptakan tampilan visual yang cerah dan harmonis.",
        makna:
          "Melambangkan keceriaan, keindahan, dan kehidupan yang penuh warna.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk stilisasi dan pola dekoratif berulang. Warna hijau, merah, dan kuning menciptakan tampilan visual yang artistik dan elegan.",
        makna:
          "Melambangkan semangat hidup dan keharmonisan dengan lingkungan.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan detail sayap terbuka dan ekor ornamental. Warna biru, putih, dan hijau menciptakan tampilan visual yang harmonis dan dekoratif.",
        makna:
          "Melambangkan kebebasan dan ketenangan hidup.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan pola simetris dan bentuk naturalistik dekoratif. Warna pink, hijau, dan kuning menciptakan tampilan visual yang cerah dan artistik.",
        makna:
          "Melambangkan keseimbangan, kebahagiaan, dan kedamaian.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil adat Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk stilisasi dan susunan ornamental berulang. Warna merah, hijau, dan putih menciptakan tampilan visual yang harmonis dan elegan.",
        makna:
          "Melambangkan keindahan budaya dan keharmonisan hidup masyarakat Bali.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
      },

      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan detail sayap berlapis dan pola dekoratif simetris. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan artistik.",
        makna:
          "Melambangkan transformasi, keindahan, dan kelembutan.",
        fungsi:
          "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
      },

      {
        name: "Fauna - Singa",
        ciri:
          "Motif singa dengan bentuk stilisasi dan detail surai ornamental. Warna merah, hitam, dan kuning menciptakan tampilan visual yang kuat dan megah.",
        makna:
          "Melambangkan kekuatan, keberanian, dan kewibawaan.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil tradisional Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan detail sayap dan ekor panjang dekoratif. Warna hijau, biru, dan kuning menciptakan tampilan visual yang elegan dan harmonis.",
        makna:
          "Melambangkan kebebasan, keseimbangan, dan keindahan alam.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil adat Bali.",
      },

      {
        name: "Fauna - Singa",
        ciri:
          "Motif singa dengan pola geometris dan detail wajah stilisasi. Warna merah, kuning, dan hitam menciptakan tampilan visual yang artistik dan tegas.",
        makna:
          "Melambangkan perlindungan, keberanian, dan kekuatan.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil etnik Bali.",
      },

      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan bentuk naturalistik dan susunan dekoratif berulang. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan lembut.",
        makna:
          "Melambangkan keindahan, perubahan, dan kehidupan yang penuh warna.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan bentuk stilisasi dan pola ornamental simetris. Warna biru, putih, dan hijau menciptakan tampilan visual yang harmonis dan elegan.",
        makna:
          "Melambangkan kedamaian dan keharmonisan hidup.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },

      {
        name: "Fauna - Burung Hantu",
        ciri:
          "Motif burung hantu dengan detail mata besar dan bentuk dekoratif stilisasi. Warna coklat, kuning, dan hitam menciptakan tampilan visual yang unik dan artistik.",
        makna:
          "Melambangkan kebijaksanaan, kewaspadaan, dan perlindungan.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
      },

      {
        name: "Fauna - Singa",
        ciri:
          "Motif singa dengan bentuk ornamental dan detail surai dekoratif. Warna merah, hitam, dan kuning menciptakan tampilan visual yang megah dan kuat.",
        makna:
          "Melambangkan kekuasaan, keberanian, dan perlindungan.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil etnik Bali.",
      },

      {
        name: "Fauna - Burung",
        ciri:
          "Motif burung dengan susunan dekoratif dan pola simetris berulang. Warna hijau, merah, dan putih menciptakan tampilan visual yang artistik dan harmonis.",
        makna:
          "Melambangkan keseimbangan hidup dan keindahan budaya Bali.",
        fungsi:
          "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
      },

      {
        name: "Fauna - Kupu-kupu",
        ciri:
          "Motif kupu-kupu dengan detail sayap stilisasi dan pola ornamental. Warna kuning, pink, dan hijau menciptakan tampilan visual yang cerah dan dekoratif.",
        makna:
          "Melambangkan keindahan, keceriaan, dan transformasi kehidupan.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
      },

      {
        name: "Fauna - Burung Hantu",
        ciri:
          "Motif burung hantu dengan bentuk stilisasi dan detail mata besar dekoratif. Warna coklat, hitam, dan kuning menciptakan tampilan visual yang unik dan artistik.",
        makna:
          "Melambangkan kebijaksanaan dan kewaspadaan.",
        fungsi:
          "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
      },

      {
        name: "Fauna - Burung Hantu",
        ciri:
          "Motif burung dengan bentuk naturalistik dan detail ekor panjang ornamental. Warna biru, hijau, dan putih menciptakan tampilan visual yang elegan dan harmonis.",
        makna:
          "Melambangkan ketenangan, kebebasan, dan keharmonisan.",
        fungsi:
          "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
      },

        {
          name: "Fauna - Burung",
          ciri:
            "Motif burung dengan bentuk stilisasi dan pola dekoratif simetris. Warna merah, hijau, dan kuning menciptakan tampilan visual yang artistik dan harmonis.",
          makna:
            "Melambangkan semangat hidup, kebebasan, dan keharmonisan alam.",
          fungsi:
            "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
        },

        {
          name: "Fauna - Burung Hantu",
          ciri:
            "Motif burung hantu dengan detail mata besar dan bentuk ornamental stilisasi. Warna coklat, hitam, dan kuning menciptakan tampilan visual yang unik dan dekoratif.",
          makna:
            "Melambangkan kebijaksanaan, perlindungan, dan kewaspadaan.",
          fungsi:
            "Digunakan dalam kain adat dan tekstil tradisional Bali.",
        },

        {
          name: "Fauna - Kupu-kupu",
          ciri:
            "Motif kupu-kupu dengan detail sayap lebar dan susunan ornamental berulang. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan elegan.",
          makna:
            "Melambangkan keindahan, kelembutan, dan kehidupan yang penuh warna.",
          fungsi:
            "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
        },

        {
          name: "Fauna - Singa",
          ciri:
            "Motif singa dengan bentuk stilisasi dan detail surai geometris dekoratif. Warna merah, hitam, dan kuning menciptakan tampilan visual yang kuat dan artistik.",
          makna:
            "Melambangkan keberanian, kewibawaan, dan perlindungan.",
          fungsi:
            "Digunakan dalam kain tradisional dan tekstil etnik Bali.",
        },

        {
          name: "Fauna - Burung",
          ciri:
            "Motif burung dengan detail sayap dan ekor panjang dekoratif. Warna hijau, biru, dan putih menciptakan tampilan visual yang harmonis dan elegan.",
          makna:
            "Melambangkan kebebasan, kedamaian, dan keseimbangan hidup.",
          fungsi:
            "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
        },

        {
          name: "Fauna - Bebek",
          ciri:
            "Motif bebek dengan bentuk naturalistik dan susunan dekoratif sederhana. Warna putih, kuning, dan hijau menciptakan tampilan visual yang alami dan menarik.",
          makna:
            "Melambangkan kesederhanaan, kesejahteraan, dan kehidupan yang harmonis.",
          fungsi:
            "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
        },

        {
          name: "Fauna - Kupu-kupu",
          ciri:
            "Motif kupu-kupu dengan pola sayap simetris dan bentuk stilisasi dekoratif. Warna pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan artistik.",
          makna:
            "Melambangkan transformasi, kebahagiaan, dan keindahan alam.",
          fungsi:
            "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
        },

        {
          name: "Fauna - Kupu-kupu",
          ciri:
            "Motif kupu-kupu dengan detail sayap ornamental dan susunan pola berulang. Warna kuning, pink, dan biru menciptakan tampilan visual yang harmonis dan elegan.",
          makna:
            "Melambangkan keindahan, kelembutan, dan kehidupan yang dinamis.",
          fungsi:
            "Digunakan dalam kain rumah tangga dan tekstil dekoratif Bali.",
        },

        {
          name: "Fauna - Kupu-kupu",
          ciri:
            "Motif kupu-kupu dengan bentuk stilisasi dan detail dekoratif pada sayap. Warna pink, hijau, dan kuning menciptakan tampilan visual yang artistik dan cerah.",
          makna:
            "Melambangkan perubahan hidup, harapan, dan keindahan.",
          fungsi:
            "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
        },

        {
          name: "Fauna - Burung Merak",
          ciri:
            "Motif burung merak dengan detail ekor lebar dan ornamen dekoratif yang mencolok. Warna biru, hijau, dan kuning menciptakan tampilan visual yang mewah dan elegan.",
          makna:
            "Melambangkan keindahan, kemegahan, dan kemakmuran.",
          fungsi:
            "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
        },

        {
          name: "Fauna - Singa",
          ciri:
            "Motif singa dengan bentuk geometris dan detail wajah stilisasi dekoratif. Warna merah, hitam, dan kuning menciptakan tampilan visual yang megah dan tegas.",
          makna:
            "Melambangkan kekuatan, perlindungan, dan kewibawaan.",
          fungsi:
            "Digunakan dalam kain tradisional dan tekstil etnik Bali.",
        },
                  ]
   /* DATA OTOMATIS */
export const faunaMotifs = images.map((img, i) => ({
  name: faunaDescriptions[i]?.name || `Motif Fauna ${i + 1}`,

  ciri: faunaDescriptions[i]?.ciri || "",
  makna: faunaDescriptions[i]?.makna || "",
  fungsi:faunaDescriptions[i]?.fungsi || "",

  patternImage: img,
}));
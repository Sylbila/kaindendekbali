const imageModules = import.meta.glob(
  "../asset/flora/*.jpg",
  {
    eager: true,
  }
);

/* SORT FOTO */
const images = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)/)?.[0] || 0);
    const numB = parseInt(b.match(/(\d+)/)?.[0] || 0);

    return numA - numB;
  })
  .map(([, module]) => module.default);

/* DESKRIPSI */
export const floraDescriptions = [
  {
    name: "Flora - Kembang Sepatu",
    ciri:
      "Motif flora dengan bentuk bunga kembang sepatu yang memiliki kelopak besar dan putik menonjol. Warna merah dan hijau menciptakan tampilan visual yang cerah dan alami.",
    makna:
      "Melambangkan keindahan alam tropis Bali serta semangat kehidupan yang tumbuh subur dan harmonis.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai ornamen bernuansa floral alami.",
  },

  {
    name: "Flora - Bunga Stilisasi Geometris",
    ciri:
      "Motif bunga dengan bentuk stilisasi geometris yang tersusun simetris dalam bidang kain. Warna pink, kuning, dan hijau menciptakan tampilan visual yang harmonis dan dekoratif.",
    makna:
      "Melambangkan keseimbangan antara unsur alam dan struktur geometris dalam seni tekstil tradisional Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi rumah untuk memberikan kesan artistik dan elegan.",
  },

  {
    name: "Flora - Bunga Stilisasi Simetris",
    ciri:
      "Motif bunga stilisasi yang tersusun secara simetris dengan pola berulang. Warna biru, putih, dan kuning menciptakan kesan elegan dan harmonis.",
    makna:
      "Melambangkan keteraturan, keharmonisan, dan keindahan yang berulang dalam kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil adat Bali sebagai elemen visual yang formal dan estetis.",
  },

  {
    name: "Flora - Daun dan Bunga Stilisasi",
    ciri:
      "Motif terdiri dari kombinasi daun dan bunga stilisasi yang tersusun dalam pola ornamental. Warna hijau, merah, dan kuning menciptakan tampilan visual yang alami dan artistik.",
    makna:
      "Melambangkan hubungan harmonis antara tumbuhan, alam, dan kehidupan budaya Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan dekoratif Bali untuk memperkuat nuansa alami dan ornamental.",
  },

  {
    name: "Flora - Bunga Stilisasi Tenun",
    ciri:
      "Motif bunga stilisasi dengan tampilan menyerupai pola tenun tradisional Bali. Warna merah, hitam, dan putih menciptakan kontras visual yang khas dan elegan.",
    makna:
      "Melambangkan warisan budaya tekstil Bali yang kaya akan pola dekoratif tradisional.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil etnik Bali sebagai simbol identitas budaya lokal.",
  },

  {
    name: "Flora - Bunga Krisan Naturalistik",
    ciri:
      "Motif bunga krisan dengan bentuk naturalistik dan detail kelopak yang jelas. Warna kuning dan hijau menciptakan tampilan visual yang segar dan alami.",
    makna:
      "Melambangkan kesegaran, kebahagiaan, dan kehidupan yang penuh energi positif.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali untuk memperindah tampilan kain.",
  },

  {
    name: "Flora - Bunga Anggrek dan Sulur",
    ciri:
      "Motif bunga anggrek dipadukan dengan sulur merambat yang tersusun dekoratif. Warna ungu, hijau, dan pink menciptakan tampilan visual yang elegan dan artistik.",
    makna:
      "Melambangkan keanggunan, kelembutan, dan pertumbuhan yang berkesinambungan.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai motif floral elegan.",
  },

  {
    name: "Flora - Bunga Kenikir",
    ciri:
      "Motif bunga kenikir dengan kelopak kecil dan daun ramping yang tersusun alami. Warna kuning dan hijau menciptakan tampilan visual yang cerah dan segar.",
    makna:
      "Melambangkan kesederhanaan, kesegaran alam, dan kehidupan yang damai.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai ornamen floral alami.",
  },

  {
    name: "Flora - Bunga Krisan dan Mawar",
    ciri:
      "Motif terdiri dari bunga krisan dan mawar yang tersusun dalam pola floral dekoratif. Warna merah, pink, kuning, dan hijau menciptakan tampilan visual yang harmonis dan elegan.",
    makna:
      "Melambangkan cinta, keindahan, dan keharmonisan dalam kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan busana adat Bali untuk mempercantik tampilan tekstil.",
  },

  {
    name: "Flora - Bunga Stilisasi Tenun",
    ciri:
      "Motif bunga stilisasi dengan pola menyerupai tenun tradisional Bali. Warna hitam, merah, dan putih menciptakan tampilan visual yang klasik dan artistik.",
    makna:
      "Melambangkan nilai budaya tradisional Bali yang diwariskan melalui seni tekstil.",
    fungsi:
      "Digunakan dalam tekstil etnik dan kain adat Bali sebagai motif dekoratif tradisional.",
  },

  {
    name: "Flora - Bunga Tapak Dara",
    ciri:
      "Motif bunga tapak dara dengan kelopak kecil yang tersusun simetris. Warna pink dan hijau menciptakan tampilan visual yang lembut dan alami.",
    makna:
      "Melambangkan kelembutan, kesederhanaan, dan ketenangan dalam kehidupan.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali untuk menciptakan kesan manis dan elegan.",
  },

  {
    name: "Flora - Bunga Kembang Sepatu",
    ciri:
      "Motif bunga kembang sepatu dengan detail putik dan kelopak besar yang menonjol. Warna merah dan hijau menciptakan tampilan visual yang cerah dan dekoratif.",
    makna:
      "Melambangkan semangat hidup, keberanian, dan keindahan alam tropis Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan tekstil interior Bali sebagai ornamen floral utama.",
  },

  {
    name: "Flora - Bunga Tulip dan Teratai",
    ciri:
      "Motif bunga tulip dan teratai yang dipadukan dalam pola floral dekoratif. Warna pink, biru, dan hijau menciptakan tampilan visual yang elegan dan harmonis.",
    makna:
      "Melambangkan kesucian, keindahan, dan keseimbangan hidup.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali untuk menciptakan nuansa lembut dan artistik.",
  },

  {
    name: "Flora - Bunga Krisan",
    ciri:
      "Motif bunga krisan dengan detail kelopak bertumpuk dan bentuk naturalistik. Warna kuning dan hijau menciptakan tampilan visual yang segar dan alami.",
    makna:
      "Melambangkan kebahagiaan, optimisme, dan energi kehidupan.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai elemen floral alami.",
  },

  {
    name: "Flora - Bunga Bordir Warna-warni Stilisasi",
    ciri:
      "Motif bunga stilisasi dengan tampilan menyerupai bordir warna-warni. Warna merah, pink, kuning, dan hijau menciptakan tampilan visual yang cerah dan artistik.",
    makna:
      "Melambangkan kreativitas, kemeriahan, dan kekayaan seni tekstil Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan busana adat Bali untuk memperkuat nilai estetika kain.",
  },

  {
    name: "Flora - Bunga Stilasi",
    ciri:
      "Motif bunga dengan bentuk stilasi sederhana dan pola simetris. Warna biru, putih, dan pink menciptakan tampilan visual yang elegan dan harmonis.",
    makna:
      "Melambangkan kesederhanaan yang tetap indah dan bernilai artistik.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil etnik Bali sebagai ornamen visual yang lembut.",
  },

  {
    name: "Flora - Bunga Merayap",
    ciri:
      "Motif bunga dengan sulur dan batang merambat yang tersusun dekoratif. Warna hijau, merah, dan kuning menciptakan tampilan visual yang alami dan artistik.",
    makna:
      "Melambangkan pertumbuhan, kesinambungan, dan hubungan erat dengan alam.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali untuk memperkuat nuansa alami.",
  },

  {
    name: "Flora - Bunga Teratai Mekar",
    ciri:
      "Motif bunga teratai mekar dengan detail kelopak terbuka yang simetris. Warna pink dan hijau menciptakan tampilan visual yang lembut dan elegan.",
    makna:
      "Melambangkan kesucian, kedamaian, dan kebijaksanaan dalam budaya Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali sebagai motif floral bernilai simbolis.",
  },

  {
    name: "Flora - Bunga Morning Glory",
    ciri:
      "Motif bunga morning glory dengan bentuk terompet dan sulur merambat. Warna ungu, biru, dan hijau menciptakan tampilan visual yang segar dan artistik.",
    makna:
      "Melambangkan harapan, pertumbuhan, dan keindahan yang terus berkembang.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai ornamen floral modern.",
  },

  {
    name: "Flora - Bunga Kamboja",
    ciri:
      "Motif bunga kamboja dengan kelopak lebar dan bentuk naturalistik. Warna putih, kuning, dan hijau menciptakan tampilan visual yang elegan dan khas Bali.",
    makna:
      "Melambangkan kesucian, ketenangan, dan identitas budaya Bali.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai simbol floral tradisional.",
  },
  
 {
    name: "Flora - Bunga Stilisasi dan Sulur Geometris",
    ciri:
      "Motif bunga stilisasi dipadukan dengan sulur geometris yang tersusun simetris. Warna pink, hijau, dan kuning menciptakan tampilan visual yang dekoratif dan harmonis.",
    makna:
      "Melambangkan keseimbangan antara unsur alam dan pola geometris dalam seni tekstil Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai ornamen artistik.",
  },
  
 {
    name: "Flora - Bunga Kenikir Stilisasi",
    ciri:
      "Motif bunga kenikir dengan bentuk stilisasi dan susunan simetris. Warna kuning dan hijau menciptakan tampilan visual yang cerah dan alami.",
    makna:
      "Melambangkan kesederhanaan, kesegaran, dan keharmonisan dengan alam.",
    fungsi:
      "Digunakan dalam tekstil rumah tangga dan kain dekoratif Bali.",
  },
  
 {
    name: "Flora - Daun Menyirip",
    ciri:
      "Motif daun menyirip dengan detail tulang daun yang jelas dan bentuk dekoratif. Warna hijau menciptakan tampilan visual yang alami dan segar.",
    makna:
      "Melambangkan pertumbuhan, kehidupan, dan kesuburan alam tropis Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
  },
  
 {
    name: "Flora - Bunga Teratai",
    ciri:
      "Motif bunga teratai dengan kelopak simetris dan bentuk naturalistik. Warna pink, putih, dan hijau menciptakan tampilan visual yang lembut dan elegan.",
    makna:
      "Melambangkan kesucian, ketenangan, dan kebijaksanaan spiritual.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
  },
  
   {
    name: "Flora - Bunga Mawar Naturalistik",
    ciri:
      "Motif bunga mawar dengan bentuk naturalistik dan detail kelopak bertumpuk. Warna merah dan hijau menciptakan tampilan visual yang romantis dan artistik.",
    makna:
      "Melambangkan cinta, keindahan, dan kelembutan perasaan.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
  },
  
 {
    name: "Flora - Bunga Mawar Kuncup",
    ciri:
      "Motif bunga mawar kuncup dengan bentuk kecil dan detail daun dekoratif. Warna pink dan hijau menciptakan tampilan visual yang lembut dan elegan.",
    makna:
      "Melambangkan harapan baru, kelembutan, dan keindahan yang sedang tumbuh.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
  },
  
 {
    name: "Flora - Bunga Melati dan Patra Merambat",
    ciri:
      "Motif bunga melati dipadukan dengan patra merambat yang tersusun dekoratif. Warna putih dan hijau menciptakan tampilan visual yang alami dan elegan.",
    makna:
      "Melambangkan kesucian, ketulusan, dan keharmonisan hidup.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
  },
  
  {
    name: "Flora - Bunga Mawar",
    ciri:
      "Motif bunga mawar dengan detail kelopak besar dan daun dekoratif. Warna merah dan hijau menciptakan tampilan visual yang artistik dan elegan.",
    makna:
      "Melambangkan cinta, keberanian, dan keindahan alam.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
  },
  
  {
    name: "Flora - Bunga Kenanga",
    ciri:
      "Motif bunga kenanga dengan bentuk kelopak memanjang dan detail naturalistik. Warna kuning dan hijau menciptakan tampilan visual yang segar dan khas tropis.",
    makna:
      "Melambangkan kesucian, kesejukan, dan keharuman budaya Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil adat Bali.",
  },
  
   {
    name: "Flora - Bunga Cempaka",
    ciri:
      "Motif bunga cempaka dengan kelopak memanjang dan susunan dekoratif. Warna kuning dan hijau menciptakan tampilan visual yang elegan dan alami.",
    makna:
      "Melambangkan kesakralan, kedamaian, dan keindahan tradisional Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
  },
  
  {
    name: "Flora - Bunga Tulip dan Kenikir Stilisasi",
    ciri:
      "Motif bunga tulip dan kenikir dengan bentuk stilisasi yang tersusun dekoratif dalam bidang kain. Warna pink, kuning, hijau, dan biru menciptakan tampilan visual yang harmonis dan artistik.",
    makna:
      "Melambangkan keberagaman keindahan alam yang berpadu harmonis.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
  },
  
  {
    name: "Flora - Bunga Anggrek",
    ciri:
      "Motif bunga anggrek dengan detail kelopak lebar dan bentuk naturalistik. Warna ungu, pink, dan hijau menciptakan tampilan visual yang elegan dan eksotis.",
    makna:
      "Melambangkan keanggunan, kemewahan, dan kelembutan.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
  },
  
  {
    name: "Flora - Bunga Kamboja dan Daun Stilisasi",
    ciri:
      "Motif bunga kamboja dipadukan dengan daun stilisasi dalam susunan ornamental. Warna putih, kuning, dan hijau menciptakan tampilan visual yang khas dan harmonis.",
    makna:
      "Melambangkan ketenangan, kesucian, dan identitas budaya Bali.",
    fungsi:
      "Digunakan dalam kain adat dan dekoratif Bali.",
  },
  
 {
    name: "Flora - Bunga Kenikir Daun Pakis",
    ciri:
      "Motif bunga kenikir dipadukan dengan daun pakis yang tersusun dekoratif dan simetris. Warna kuning dan hijau menciptakan tampilan visual yang alami dan segar.",
    makna:
      "Melambangkan keseimbangan alam dan pertumbuhan kehidupan.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi rumah Bali.",
  },
  
  {
    name: "Flora - Bunga Teratai Kuncup",
    ciri:
      "Motif bunga teratai kuncup dengan bentuk kelopak tertutup dan daun dekoratif. Warna pink, putih, dan hijau menciptakan tampilan visual yang lembut dan elegan.",
    makna:
      "Melambangkan harapan, kesucian, dan potensi kehidupan yang berkembang.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
  },
  
  {
    name: "Flora - Bunga Jepun",
    ciri:
      "Motif bunga jepun Bali dengan kelopak lebar dan bentuk naturalistik. Warna putih, kuning, dan hijau menciptakan tampilan visual yang khas dan elegan.",
    makna:
      "Melambangkan kesucian dan identitas budaya Bali.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
  },
  
 {
    name: "Flora - Bunga Matahari",
    ciri:
      "Motif bunga matahari dengan kelopak besar dan pusat bunga bulat yang jelas. Warna kuning dan hijau menciptakan tampilan visual yang cerah dan segar.",
    makna:
      "Melambangkan semangat, energi positif, dan kehidupan yang cerah.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
  },
  
{
    name: "Flora - Bunga Seruni Mekar dengan Patra Merambat",
    ciri:
      "Motif bunga seruni mekar dipadukan dengan patra merambat yang tersusun dekoratif. Warna pink, kuning, dan hijau menciptakan tampilan visual yang artistik dan harmonis.",
    makna:
      "Melambangkan keindahan, pertumbuhan, dan keharmonisan hidup.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
  },
  
  {
    name: "Flora - Bunga Kamboja dengan Daun Bergerigi",
    ciri:
      "Motif bunga kamboja dipadukan dengan daun bergerigi dalam susunan ornamental. Warna putih, kuning, dan hijau menciptakan tampilan visual yang alami dan elegan.",
    makna:
      "Melambangkan kesejukan, kesucian, dan keindahan alam Bali.",
    fungsi:
      "Digunakan dalam kain adat dan dekoratif Bali.",
  },
  
  {
    name: "Flora - Bunga Puspa Sari dengan Patra Cina",
    ciri:
      "Motif bunga puspa sari dipadukan dengan ornamen patra cina yang tersusun dekoratif. Warna merah, kuning, dan hijau menciptakan tampilan visual yang artistik dan khas tradisional.",
    makna:
      "Melambangkan perpaduan budaya dan kekayaan seni ornamental Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
  },

 {
  name: "Flora - Daun dengan Bunga Seruni",
  ciri:
    "Motif daun dipadukan dengan bunga seruni yang tersusun dekoratif dalam bidang kain. Warna hijau, kuning, dan pink menciptakan tampilan visual yang segar dan harmonis.",
  makna:
    "Melambangkan keseimbangan alam, keindahan, dan kehidupan yang harmonis.",
  fungsi:
    "Digunakan dalam tekstil rumah tangga dan kain dekoratif Bali.",
},

{
  name: "Flora - Daun Bergerigi",
  ciri:
    "Motif daun bergerigi dengan detail tulang daun yang jelas dan bentuk stilisasi dekoratif. Warna hijau menciptakan tampilan visual yang alami dan segar.",
  makna:
    "Melambangkan kesuburan, pertumbuhan, dan hubungan manusia dengan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

{
  name: "Flora - Bun-bunan dan Patra Klasik",
  ciri:
    "Motif bun-bunan dipadukan dengan patra klasik Bali dalam susunan ornamental. Warna merah, hijau, dan kuning menciptakan tampilan visual yang khas dan artistik.",
  makna:
    "Melambangkan kekayaan budaya dan estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

{
  name: "Flora - Daun Pakis dan Bunga Jepun Bali",
  ciri:
    "Motif daun pakis dipadukan dengan bunga jepun Bali yang tersusun dekoratif. Warna hijau, putih, dan kuning menciptakan tampilan visual yang alami dan elegan.",
  makna:
    "Melambangkan kesegaran alam dan identitas budaya Bali.",
  fungsi:
    "Digunakan dalam kain tradisional dan dekoratif Bali.",
},

{
  name: "Flora - Bunga Cempaka Bali dengan Daun Hijau",
  ciri:
    "Motif bunga cempaka Bali dipadukan dengan daun hijau dalam susunan naturalistik. Warna kuning dan hijau menciptakan tampilan visual yang segar dan khas Bali.",
  makna:
    "Melambangkan kesucian, kesejukan, dan keharmonisan alam.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

{
  name: "Flora - Bunga Padi Kecil",
  ciri:
    "Motif bunga padi kecil dengan bentuk sederhana dan susunan dekoratif. Warna kuning dan hijau menciptakan tampilan visual yang alami dan harmonis.",
  makna:
    "Melambangkan kemakmuran, hasil panen, dan kesejahteraan hidup.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
},

 {
  name: "Flora - Bunga dan Sulur Stilisasi",
  ciri:
    "Motif bunga dipadukan dengan sulur stilisasi yang tersusun dekoratif dan simetris. Warna pink, hijau, dan kuning menciptakan tampilan visual yang artistik dan harmonis.",
  makna:
    "Melambangkan pertumbuhan, keindahan, dan kesinambungan kehidupan.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

{
  name: "Flora - Bunga Teratai dan Patra Merambat",
  ciri:
    "Motif bunga teratai dipadukan dengan patra merambat dalam susunan ornamental. Warna pink, hijau, dan putih menciptakan tampilan visual yang lembut dan elegan.",
  makna:
    "Melambangkan kesucian, ketenangan, dan keseimbangan spiritual.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

{
  name: "Flora - Kelopak Bunga Jepun Bali Merambat",
  ciri:
    "Motif kelopak bunga jepun Bali dengan sulur merambat yang tersusun dekoratif. Warna putih, kuning, dan hijau menciptakan tampilan visual yang khas dan harmonis.",
  makna:
    "Melambangkan kelembutan, keindahan, dan budaya Bali yang kuat.",
  fungsi:
    "Digunakan dalam kain tradisional dan dekoratif Bali.",
},

{
  name: "Flora - Daun Semanggi",
  ciri:
    "Motif daun semanggi dengan bentuk khas empat helai yang tersusun dekoratif. Warna hijau menciptakan tampilan visual yang alami dan segar.",
  makna:
    "Melambangkan keberuntungan, harapan, dan keharmonisan hidup.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
},

{
  name: "Flora - Bunga Terompet",
  ciri:
    "Motif bunga terompet dengan bentuk memanjang dan sulur dekoratif. Warna ungu, pink, dan hijau menciptakan tampilan visual yang artistik dan elegan.",
  makna:
    "Melambangkan keindahan, kelembutan, dan kreativitas.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

{
  name: "Flora - Bunga Anggrek Stilisasi",
  ciri:
    "Motif bunga anggrek dengan bentuk stilisasi dan pola dekoratif simetris. Warna ungu, pink, dan hijau menciptakan tampilan visual yang elegan dan artistik.",
  makna:
    "Melambangkan kemewahan, keanggunan, dan kehalusan seni.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

{
  name: "Flora - Bunga Stilisasi dengan Patra Rambat",
  ciri:
    "Motif bunga stilisasi dipadukan dengan patra rambat yang tersusun ornamental. Warna merah, hijau, dan kuning menciptakan tampilan visual yang harmonis dan dekoratif.",
  makna:
    "Melambangkan kesinambungan hidup dan keharmonisan alam.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

{
  name: "Flora - Daun Pakis Stilisasi",
  ciri:
    "Motif daun pakis dengan bentuk stilisasi dan detail lengkung dekoratif. Warna hijau menciptakan tampilan visual yang alami dan elegan.",
  makna:
    "Melambangkan pertumbuhan, keteduhan, dan kesegaran alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
},

 {
  name: "Flora - Bunga Tapak Dara Stilisasi Daun Sulur",
  ciri:
    "Motif bunga tapak dara dipadukan dengan daun sulur stilisasi dalam susunan dekoratif. Warna pink, hijau, dan putih menciptakan tampilan visual yang lembut dan harmonis.",
  makna:
    "Melambangkan ketenangan, kelembutan, dan keindahan alami.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

 {
  name: "Flora - Ceplok Bunga dengan Daun Pakis",
  ciri:
    "Motif ceplok bunga dipadukan dengan daun pakis yang tersusun simetris dalam bidang kain. Warna hijau, kuning, dan pink menciptakan tampilan visual yang alami dan harmonis.",
  makna:
    "Melambangkan kesuburan, kehidupan, dan keseimbangan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

 {
  name: "Flora - Daun Stilisasi",
  ciri:
    "Motif daun dengan bentuk stilisasi dekoratif dan pola simetris berulang. Warna hijau menciptakan tampilan visual yang sederhana namun elegan.",
  makna:
    "Melambangkan kesederhanaan, kesejukan, dan keindahan alam.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
},

{
  name: "Flora - Daun Sulur Stilisasi",
  ciri:
    "Motif daun sulur dengan bentuk stilisasi dan lengkung ornamental yang tersusun dekoratif. Warna hijau dan kuning menciptakan tampilan visual yang alami dan artistik.",
  makna:
    "Melambangkan pertumbuhan dan kesinambungan kehidupan.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

 {
  name: "Flora - Bunga Teratai Stilisasi dan Daun Sulur",
  ciri:
    "Motif bunga teratai stilisasi dipadukan dengan daun sulur yang tersusun dekoratif. Warna pink, hijau, dan putih menciptakan tampilan visual yang lembut dan harmonis.",
  makna:
    "Melambangkan kesucian, ketenangan, dan keseimbangan hidup.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

 {
  name: "Flora - Bunga Kamboja Mekar",
  ciri:
    "Motif bunga kamboja mekar dengan detail kelopak terbuka dan bentuk naturalistik. Warna putih, kuning, dan hijau menciptakan tampilan visual yang khas dan elegan.",
  makna:
    "Melambangkan kesucian, kedamaian, dan identitas budaya Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

 {
  name: "Flora - Ceplok Bunga dengan Daun Merambat",
  ciri:
    "Motif ceplok bunga dipadukan dengan daun merambat yang tersusun ornamental dalam bidang kain. Warna hijau, pink, dan kuning menciptakan tampilan visual yang artistik dan harmonis.",
  makna:
    "Melambangkan pertumbuhan, keharmonisan, dan hubungan erat dengan alam.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
},

 {
  name: "Flora - Ceplok Bunga dengan Daun dan Batang Sulur",
  ciri:
    "Motif ceplok bunga dipadukan dengan daun dan batang sulur yang tersusun dekoratif. Warna hijau, merah, dan kuning menciptakan tampilan visual yang alami dan elegan.",
  makna:
    "Melambangkan kesinambungan kehidupan dan keseimbangan alam.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

{
  name: "Flora - Bunga Spider Lily",
  ciri:
    "Motif bunga spider lily dengan kelopak panjang melengkung dan bentuk dekoratif. Warna putih dan hijau menciptakan tampilan visual yang elegan dan unik.",
  makna:
    "Melambangkan keanggunan, kemurnian, dan keindahan yang eksotis.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
},

 {
  name: "Flora - Bunga Stilisasi dengan Isen-Isen Patra",
  ciri:
    "Motif bunga stilisasi dipadukan dengan isen-isen patra dekoratif dalam susunan ornamental. Warna merah, kuning, dan hijau menciptakan tampilan visual yang artistik dan khas Bali.",
  makna:
    "Melambangkan kekayaan seni ornamen dan budaya tradisional Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

{
  name: "Flora - Daun Kluwih Stilisasi",
  ciri:
    "Motif daun kluwih dengan bentuk stilisasi dan detail tulang daun dekoratif. Warna hijau menciptakan tampilan visual yang alami dan harmonis.",
  makna:
    "Melambangkan kesuburan, kehidupan, dan hubungan manusia dengan alam.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

 {
  name: "Flora - Ceplok Bunga",
  ciri:
    "Motif ceplok bunga dengan bentuk simetris dan susunan berulang dalam bidang kain. Warna pink, kuning, hijau, dan biru menciptakan tampilan visual yang cerah dan dekoratif.",
  makna:
    "Melambangkan keharmonisan, keindahan, dan kreativitas seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain rumah tangga dan tekstil tradisional Bali.",
},

{
  name: "Flora - Bunga Cocor Bebek",
  ciri:
    "Motif bunga cocor bebek dengan bentuk kecil dan daun tebal dekoratif. Warna hijau dan pink menciptakan tampilan visual yang segar dan alami.",
  makna:
    "Melambangkan ketahanan hidup, kesegaran, dan pertumbuhan alami.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
},

 {
  name: "Flora - Kelopak Bunga Jepun Bali",
  ciri:
    "Motif kelopak bunga jepun Bali dengan bentuk lebar dan susunan dekoratif. Warna putih, kuning, dan hijau menciptakan tampilan visual yang khas dan elegan.",
  makna:
    "Melambangkan kesucian, kedamaian, dan identitas budaya Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

 {
  name: "Geometris - Ikat Stilisasi",
  ciri:
    "Motif simetris bergaya ikat dengan bentuk berlian dan nyala api bertekstur sapuan kuas pada latar hijau tua.",
  makna:
    "Melambangkan semangat, dinamika, dan warisan seni tekstil tradisional.",
  fungsi:
    "Digunakan dalam busana dan dekorasi, terinspirasi dari teknik tenun ikat Asia Tenggara.",
},

 {
  name: "Flora - Bunga Tulip dan Teratai",
  ciri:
    "Motif bunga kuning dan biru dengan batang dan daun putih dalam pola grid simetris.",
  makna:
    "Melambangkan harapan, transisi, dan keindahan sederhana.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional bernuansa floral elegan.",
},

 {
  name: "Flora - Bunga Kembang Sepatu",
  ciri:
    "Motif bunga kuning dan ungu dengan daun biru dalam pola horizontal dan border hias.",
  makna:
    "Melambangkan semangat, kehangatan, dan kemakmuran.",
  fungsi:
    "Digunakan dalam kain tradisional untuk acara adat dan dekoratif.",
},

 {
  name: "Flora - Bunga Kamboja",
  ciri:
    "Motif bunga kamboja berwarna ungu dan biru dengan kelopak simetris serta sulur hijau-oranye melingkar pada latar pink.",
  makna:
    "Melambangkan keteraturan, keindahan visual, dan semangat feminim.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},

 {
  name: "Flora - Bunga Tulip dan Teratai",
  ciri:
    "Motif bunga oranye dan kuning dengan daun hijau dalam pola simetris pada latar coklat.",
  makna:
    "Melambangkan semangat, kesegaran, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam kain tenun tradisional Asia Tenggara untuk busana dan dekorasi.",
},

 {
  name: "Flora - Bunga Kamboja",
  ciri:
    "Motif bunga oranye dan kuning dengan daun hijau dan sulur biru dalam pola padat.",
  makna:
    "Melambangkan semangat hidup, keindahan pagi, dan kesuburan tropis.",
  fungsi:
    "Digunakan dalam tekstil border dan cetak tradisional.",
},

 {
  name: "Flora - Bunga Kembang Sepatu",
  ciri:
    "Motif bunga merah, ungu, dan hijau dengan daun hijau dan ungu dalam pola berulang pada latar jingga.",
  makna:
    "Melambangkan keharuman, semangat, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

{
  name: "Flora - Bunga Stilisasi dan Sulur Geometris",
  ciri:
    "Motif bunga kuning dan oranye dengan daun dan sulur hijau dalam pola simetris pada latar hijau zaitun.",
  makna:
    "Melambangkan semangat, kesegaran, dan keharmonisan visual.",
  fungsi:
    "Digunakan dalam kain tenun atau cetak tradisional untuk dekorasi dan busana.",
},

 {
  name: "Flora - Bunga Tulip dan Teratai",
  ciri:
    "Motif bunga ungu dengan kelopak menyatu dan daun kecil berwarna krem dalam pola berulang.",
  makna:
    "Melambangkan ketahanan, kesederhanaan, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana bernuansa feminim tropis.",
},

 {
  name: "Flora - Bunga Stilisasi dan Sulur Geometris",
  ciri:
    "Motif bunga warna-warni bergaya stilisasi dalam susunan vertikal pada latar ungu.",
  makna:
    "Melambangkan semangat, keindahan tropis, dan keteraturan visual.",
  fungsi:
    "Digunakan dalam kain tenun tradisional Asia Tenggara untuk busana dan dekorasi.",
},

 {
  name: "Flora - Bunga Stilisasi",
  ciri:
    "Motif bunga border bergaya stilisasi dengan kelopak berwarna cerah dan pusat kontras.",
  makna:
    "Melambangkan semangat, keceriaan, dan keberagaman budaya tekstil.",
  fungsi:
    "Digunakan dalam busana tradisional dan dekorasi dengan seni border warna-warni.",
},

 {
  name: "Flora - Bunga Melati dan Patra Merambat",
  ciri:
    "Motif bunga pink dan biru dengan daun hijau dan sulur kuning dalam pola simetris.",
  makna:
    "Melambangkan keindahan pagi, kesegaran, dan semangat tropis.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

{
  name: "Flora - Bunga Tulip dan Kenikir Stilisasi",
  ciri:
    "Motif bunga merah dan ungu dengan daun hijau dan sulur dalam pola simetris pada latar pink.",
  makna:
    "Melambangkan keindahan tropis, semangat hidup, dan keseimbangan visual.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan dekorasi bernuansa etnik.",
},

{
  name: "Flora - Bunga Matahari",
  ciri:
    "Motif bunga bergaya stilisasi dalam bentuk berlian dengan kelopak simetris dan border hijau.",
  makna:
    "Melambangkan keteraturan, keindahan visual, dan semangat feminin.",
  fungsi:
    "Digunakan dalam kain tenun atau cetak tradisional untuk busana dan dekorasi.",
},

{
  name: "Flora - Bunga Teratai",
  ciri:
    "Motif bunga kuning, pink, oranye, dan merah dengan daun hijau dan putik panjang dalam pola simetris vertikal.",
  makna:
    "Melambangkan keindahan tropis, semangat hidup, dan daya tarik visual.",
  fungsi:
    "Digunakan dalam tekstil bordir dan dekoratif bergaya klasik.",
},

 {
  name: "Flora - Bunga Teratai",
  ciri:
    "Motif bunga berwarna cerah bergaya stilisasi dalam pola berlian pada latar hijau teal.",
  makna:
    "Melambangkan keberagaman, semangat hidup, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil border dan dekoratif bergaya klasik.",
},

 {
  name: "Flora - Bunga Kembang Sepatu",
  ciri:
    "Motif bunga kembang sepatu berwarna merah, hijau, dan kuning dalam pola horizontal dengan border berlian.",
  makna:
    "Melambangkan semangat, keindahan tropis, dan keseimbangan visual.",
  fungsi:
    "Digunakan dalam kain fashion dan tekstil dekoratif.",
},

{
  name: "Flora - Bunga Teratai",
  ciri:
    "Motif bunga teratai berwarna pink dengan kelopak sederhana dalam pola simetris pada latar hijau.",
  makna:
    "Melambangkan semangat hidup, kesederhanaan, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

 {
  name: "Flora - Bunga Kembang Sepatu",
  ciri:
    "Motif bunga kembang sepatu magenta dengan daun hijau dan tangkai coklat dalam pola vertikal berulang pada latar pink.",
  makna:
    "Melambangkan cinta, semangat, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam kain dekoratif dan busana tradisional.",
},

 {
  name: "Flora - Bunga Kamboja",
  ciri:
    "Motif bunga kuning-oranye dalam pola simetris bergaya batik pada latar dengan pola daun biru-hijau.",
  makna:
    "Melambangkan ketenangan, spiritualitas, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil fashion dan dekoratif.",
},

 {
  name: "Flora - Bunga Anggrek Stilisasi",
  ciri:
    "Motif bunga bergaya anggrek dengan kelopak putih dan biru dalam pola grid simetris pada latar biru tua.",
  makna:
    "Melambangkan kecantikan, keanggunan, dan spiritualitas.",
  fungsi:
    "Digunakan dalam tekstil border dan dekoratif bergaya klasik.",
},

 {
  name: "Flora - Bunga Kamboja",
  ciri:
    "Motif bunga bergaya kamboja dengan kelopak putih dan ungu serta garis pinggir hijau dalam pola grid simetris pada latar pink.",
  makna:
    "Melambangkan spiritualitas, ketenangan, keindahan alam, dan cinta.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

 {
  name: "Flora - Ceplok Bunga dengan Daun Merambat",
  ciri:
    "Motif ceplok bunga stilisasi dengan sulur dan daun berwarna ungu, biru, dan kuning dalam pola horizontal pada latar hitam.",
  makna:
    "Melambangkan semangat hidup, kesederhanaan, dan keharmonisan.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

 {
  name: "Flora - Bunga dan Daun Stilisasi",
  ciri:
    "Motif bunga dengan kelopak putih stilisasi berpadu dengan daun dan sulur dalam pola berulang pada latar abu-abu.",
  makna:
    "Melambangkan kesucian, keseimbangan, dan keindahan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
},

 {
  name: "Flora - Bunga Spider Lily",
  ciri:
    "Motif bunga bergaya spider lily dengan kelopak panjang dan ramping berwarna merah, benang sari ungu, dan putik kuning dalam pola horizontal pada latar teal.",
  makna:
    "Melambangkan keanggunan eksotis, ketahanan, dan keindahan tropis.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

 {
  name: "Flora - Bunga dan Daun Stilisasi",
  ciri:
    "Motif bunga dan daun bergaya stilisasi dalam pola berlian pada latar hijau kebiruan.",
  makna:
    "Melambangkan ketenangan, kebahagiaan, dan keindahan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
},
]

/* DATA OTOMATIS */
export const floraMotifs = images.map((img, i) => ({
  name: floraDescriptions[i]?.name || `Motif Flora ${i + 1}`,

  ciri: floraDescriptions[i]?.ciri || "",
  makna: floraDescriptions[i]?.makna || "",
  fungsi: floraDescriptions[i]?.fungsi || "",

  patternImage: img,
}));
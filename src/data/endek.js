import { loadPatternImages } from "../components/endek/loadPatterns";
const patternImages = loadPatternImages();


export const categories = [
  {
    key: "dekoratif",
    title: "Motif Dekoratif",
    short: "Ornamen hias berakar dari ukiran tradisional Bali.",
    description:
      "Motif dekoratif merupakan motif yang tersusun dari pengembangan bentuk-bentuk hias yang telah distilisasi dan dipadukan secara ornamental sehingga menghasilkan pola yang indah dan simetris. Motif dekoratif pada kain tradisional Bali  umumnya menggabungkan unsur geometris, floral, garis, berlian, zigzag, dan bentuk ornamental lainnya yang disusun berulang sebagai elemen penghias kain. Motif ini banyak digunakan dalam kain adat, tekstil dekoratif, dan berbagai produk kerajinan Bali.",
    motifs: [
      { name: "Patra Punggel", ciri: "Sulur lengkung dengan ujung melingkar", makna: "Simbol keseimbangan dan keindahan alam", fungsi: "Kain upacara keagamaan" },
      { name: "Patra Sari", ciri: "Hiasan bunga bersusun rapi", makna: "Lambang kemakmuran dan kesuburan", fungsi: "Pakaian adat perempuan" },
      { name: "Patra Cina", ciri: "Pengaruh ornamen Tionghoa berbentuk awan", makna: "Akulturasi budaya Bali–Tionghoa", fungsi: "Selendang upacara" },
      { name: "Patra Wangga", ciri: "Pola bunga melingkar simetris", makna: "Keagungan dan kemuliaan", fungsi: "Kain pendeta" },
      { name: "Patra Ulanda", ciri: "Pengaruh dekoratif Eropa abad ke-19", makna: "Perpaduan budaya kolonial dan lokal", fungsi: "Kain kebesaran" },
      { name: "Patra Bun-bunan", ciri: "Sulur tanaman menjalar", makna: "Pertumbuhan dan kehidupan", fungsi: "Kain sehari-hari resmi" },
      { name: "Patra Mas-masan", ciri: "Ornamen menyerupai emas berkilau", makna: "Kemewahan dan keberuntungan", fungsi: "Busana pengantin" },
      { name: "Patra Samblung", ciri: "Daun samblung menjalar simetris", makna: "Keterhubungan dan harmoni", fungsi: "Kain upacara odalan" },
      { name: "Patra Banci", ciri: "Kombinasi flora-geometris", makna: "Keseimbangan dua unsur", fungsi: "Kain hadiah/penghormatan" },
      { name: "Patra Kuta Mesir", ciri: "Pengaruh ornamen Timur Tengah", makna: "Jejak perdagangan kuno Bali", fungsi: "Kain selendang" },
      { name: "Patra Lego", ciri: "Pola berulang melengkung lebar", makna: "Keluwesan dan ketenangan", fungsi: "Kain pelengkap busana" },
      { name: "Patra Gegirinsingan", ciri: "Ornamen berlapis halus", makna: "Perlindungan spiritual", fungsi: "Kain ritual penyucian" },
    ],
  },
  {
    key: "flora",
    title: "Motif Flora",
    short: "Mengangkat keindahan tumbuhan dan bunga khas Bali.",
    description:
      "Motif flora merupakan motif yang terinspirasi dari bentuk tumbuhan seperti bunga, daun, sulur, batang, dan bagian tumbuhan lainnya yang disusun secara naturalistik maupun stilisasi. Motif flora pada kain tradisional Bali melambangkan keindahan alam, kesuburan, keharmonisan, dan kehidupan. Motif ini banyak digunakan dalam kain adat, tekstil dekoratif, dan busana tradisional Bali.",
    motifs: [
      { name: "Bunga Jepun", ciri: "Lima kelopak putih simetris", makna: "Kesucian dan persembahan", fungsi: "Kain persembahyangan" },
      { name: "Teratai (Padma)", ciri: "Bunga mengembang berlapis", makna: "Kesucian jiwa dan singgasana dewa", fungsi: "Kain upacara besar" },
      { name: "Bunga Cempaka", ciri: "Kelopak panjang harum", makna: "Keanggunan dan kemurnian", fungsi: "Busana adat perempuan" },
      { name: "Daun Beringin", ciri: "Daun lonjong berkelompok", makna: "Perlindungan dan keteduhan", fungsi: "Kain tetua adat" },
      { name: "Bunga Kamboja Merah", ciri: "Bunga merah lima helai", makna: "Cinta dan penghormatan leluhur", fungsi: "Kain ritual ngaben" },
      { name: "Sulur Pakis", ciri: "Lengkungan spiral halus", makna: "Pertumbuhan tiada henti", fungsi: "Kain harian formal" },
      { name: "Bunga Sandat", ciri: "Bunga kuning kecil bertangkai", makna: "Kelembutan dan keramahan", fungsi: "Kain selendang" },
      { name: "Daun Pisang", ciri: "Lembaran daun memanjang", makna: "Kesederhanaan dan kebermanfaatan", fungsi: "Kain sehari-hari" },
      { name: "Bunga Tunjung", ciri: "Bunga air berkelopak penuh", makna: "Kebijaksanaan dan ketenangan", fungsi: "Kain meditasi/yoga" },
      { name: "Pohon Hayat", ciri: "Pohon stilasi simetris", makna: "Kehidupan dan keseimbangan kosmis", fungsi: "Kain pusaka" },
      { name: "Bunga Ratna", ciri: "Bunga bulat berwarna cerah", makna: "Kebahagiaan dan keberkahan", fungsi: "Kain pesta adat" },
      { name: "Daun Andong", ciri: "Daun panjang merah-hijau", makna: "Penolak bala", fungsi: "Kain upacara penyucian" },
    ],
  },
  {
    key: "fauna",
    title: "Motif Fauna",
    short: "Menghadirkan satwa mitologis dan hewan khas Bali.",
    description:
      "Motif fauna merupakan motif yang terinspirasi dari bentuk hewan dan satwa yang disusun secara naturalistik maupun stilisasi. Motif fauna dalam kain tradisional Bali melambangkan kehidupan, kebebasan, kekuatan, dan keharmonisan dengan alam. Hewan yang digunakan sebagai inspirasi motif antara lain burung, kupu-kupu, singa, udang, lebah,  kadal, bebek, dan burung merak. Motif fauna banyak digunakan dalam tekstil dekoratif, kain adat, dan busana tradisional Bali.",
    motifs: [
      { name: "Garuda", ciri: "Sayap megah terbentang", makna: "Kekuatan dan pembebasan", fungsi: "Kain raja/bangsawan" },
      { name: "Naga", ciri: "Tubuh memanjang berliuk", makna: "Penguasa air dan kesuburan", fungsi: "Kain upacara melasti" },
      { name: "Burung Merak", ciri: "Ekor berhias mata-mata", makna: "Keindahan dan keagungan", fungsi: "Busana penari" },
      { name: "Ikan", ciri: "Pola sisik berulang", makna: "Rezeki dan kelimpahan", fungsi: "Kain nelayan/pesisir" },
      { name: "Kupu-kupu", ciri: "Sepasang sayap berpola", makna: "Transformasi dan jiwa", fungsi: "Kain anak-anak" },
      { name: "Singa Barong", ciri: "Wajah singa mitologis", makna: "Penjaga dari roh jahat", fungsi: "Kain pelindung rumah" },
      { name: "Lembu Nandini", ciri: "Lembu suci stilasi", makna: "Kendaraan Dewa Siwa", fungsi: "Kain pendeta Siwa" },
      { name: "Burung Manyar", ciri: "Burung kecil berkelompok", makna: "Kebersamaan dan kerja sama", fungsi: "Kain komunitas banjar" },
      { name: "Kuda", ciri: "Stilasi kuda berlari", makna: "Kekuatan dan kecepatan", fungsi: "Kain prajurit" },
      { name: "Penyu", ciri: "Tempurung berpola heksagon", makna: "Umur panjang dan kebijaksanaan", fungsi: "Kain tetua" },
      { name: "Bedawang Nala", ciri: "Kura-kura kosmis", makna: "Penopang dunia", fungsi: "Kain upacara besar" },
      { name: "Burung Cendrawasih", ciri: "Bulu panjang mengalir", makna: "Keindahan surgawi", fungsi: "Kain pengantin" },
    ],
  },
  {
    key: "geometris",
    title: "Motif Geometris",
    short: "Pola simetris berbasis bentuk-bentuk dasar.",
    description:
      "Motif geometris merupakan motif yang tersusun dari bentuk-bentuk dasar seperti garis, zigzag, berlian, oval, lingkaran, segitiga, dan kotak yang disusun secara berulang dan simetris. Motif geometris dalam kain tradisional Bali memiliki kesan teratur, harmonis, dan dekoratif. Motif ini banyak digunakan dalam tekstil adat, kain dekoratif, dan usana tradisional Bali.",
    motifs: [
      { name: "Poleng", ciri: "Kotak hitam-putih bergantian", makna: "Dualisme rwa bhineda", fungsi: "Kain pelinggih/pelindung" },
      { name: "Tumpal", ciri: "Segitiga berderet", makna: "Gunung suci dan kesuburan", fungsi: "Kain ujung sarung" },
      { name: "Swastika", ciri: "Simbol berlengan empat", makna: "Keberuntungan dan kosmos", fungsi: "Kain ritual sakral" },
      { name: "Wajik", ciri: "Belah ketupat bersusun", makna: "Keseimbangan empat penjuru", fungsi: "Kain upacara padi" },
      { name: "Kawung", ciri: "Lingkaran empat berkelompok", makna: "Kesempurnaan hidup", fungsi: "Kain bangsawan" },
      { name: "Rang-rang", ciri: "Pola jaring transparan", makna: "Keterbukaan dan kesederhanaan", fungsi: "Kain sehari-hari" },
      { name: "Cepuk", ciri: "Garis vertikal merah-hitam", makna: "Penolak bala", fungsi: "Kain ritual Nusa Penida" },
      { name: "Gringsing", ciri: "Pola ikat ganda halus", makna: "Penyembuh penyakit", fungsi: "Kain pusaka Tenganan" },
      { name: "Banji", ciri: "Pola pilin geometris", makna: "Kelanggengan", fungsi: "Kain pernikahan" },
      { name: "Lereng", ciri: "Garis miring sejajar", makna: "Perjalanan hidup", fungsi: "Kain bangsawan/pejabat" },
      { name: "Belah Ketupat", ciri: "Bidang diagonal berpola", makna: "Keseimbangan", fungsi: "Kain hari raya" },
      { name: "Kotak Catur", ciri: "Petak persegi seragam", makna: "Keteraturan kosmis", fungsi: "Kain upacara desa adat" },
    ],
  },
];

export const categoriesWithImages = categories.map((category) => {
  const images = patternImages[category.key] || [];

  return {
    ...category,
    motifs: category.motifs.map((motif, index) => ({
      ...motif,
      patternImage:
        images.length > 0
          ? images[index % images.length]
          : null,
    })),
  };
});
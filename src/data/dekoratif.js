const imageModules = import.meta.glob(
  "../asset/dekoratif/*.jpg",
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
const dekoratifDescriptions = [
  {
    ciri:
      "Motif tenun dengan pola simetris yang terdiri dari bentuk bunga dan elemen geometris dalam warna ungu, pink, kuning, dan hitam. Tersusun dalam barisan horizontal dengan perpaduan bentuk organik dan geometris.",
    makna:
      "Melambangkan keseimbangan antara unsur alam dan keteraturan dalam kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan sebagai kain adat dan elemen dekoratif pada tekstil tradisional Bali.",
  },

  {
    ciri:
      "Motif tekstil berlatar maroon dengan pola berlian berulang berwarna putih, kuning, dan pink yang tersusun simetris dalam barisan horizontal.",
    makna:
      "Melambangkan keharmonisan, ritme kehidupan, dan nilai estetika tradisional Bali.",
    fungsi:
      "Digunakan pada busana adat dan tekstil rumah tangga tradisional.",
  },

  {
    ciri:
      "Motif ikat tradisional dengan dua zona visual, yaitu kolom berlian vertikal di sisi kiri dan pola floral diagonal di sisi kanan dengan latar gelap.",
    makna:
      "Melambangkan perpaduan antara struktur dan kebebasan ekspresi dalam seni tenun Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan dekorasi interior bernuansa etnik.",
  },

  {
    ciri:
      "Motif tekstil dengan pola berlian berulang berwarna kuning dan ungu di atas latar biru tua dengan detail garis vertikal hitam.",
    makna:
      "Melambangkan stabilitas, keteraturan, dan kekuatan visual dalam motif geometris Bali.",
    fungsi:
      "Digunakan sebagai kain adat dan pelengkap dekorasi tekstil modern.",
  },

  {
    ciri:
      "Motif tekstil dengan kolom berlian vertikal berwarna ungu dan kuning di atas latar gradasi biru yang simetris.",
    makna:
      "Melambangkan dinamika, kesinambungan, dan keseimbangan visual dalam budaya Bali.",
    fungsi:
      "Digunakan dalam tekstil modern, dekorasi rumah, dan busana tradisional.",
  },

  {
    ciri:
      "Pola terdiri dari barisan horizontal motif geometris menyerupai bunga stilisasi dan bentuk abstrak dengan warna yang beragam.",
    makna:
      "Melambangkan ritme kehidupan dan kreativitas masyarakat Bali dalam seni tekstil.",
    fungsi:
      "Digunakan dalam kain adat dan dekorasi rumah tradisional.",
  },

  {
    ciri:
      "Motif berlian berulang dan garis zigzag simetris dengan dominasi warna merah, oranye, dan hitam.",
    makna:
      "Melambangkan energi, semangat, dan dinamika kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam tekstil tenun dan busana tradisional Bali.",
  },

  {
    ciri:
      "Pola horizontal dengan kombinasi berlian dan elemen floral stilisasi berwarna biru dan putih dalam pita geometris.",
    makna:
      "Melambangkan ketenangan, keharmonisan, dan keseimbangan visual.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif tradisional.",
  },

  {
    ciri:
      "Pola berlian berulang dengan elemen silang dan bentuk geometris kecil dalam warna biru, turquoise, dan ungu.",
    makna:
      "Melambangkan keseimbangan dan kompleksitas dalam struktur kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
  },

  {
    ciri:
      "Pola vertikal dengan elemen geometris seperti segitiga, belah ketupat, dan garis zigzag dalam warna hijau, ungu, dan kuning.",
    makna:
      "Melambangkan kesinambungan dan dinamika dalam motif tekstil tradisional.",
    fungsi:
      "Digunakan dalam kain adat dan dekorasi tekstil etnik.",
  },

  {
    ciri:
      "Pola horizontal terdiri dari motif floral stilisasi berwarna biru dan pink dengan aksen berlian kuning kecil.",
    makna:
      "Melambangkan keharmonisan dan keindahan estetika tradisional Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi rumah.",
  },

  {
    ciri:
      "Pola terdiri dari panel vertikal berlian berulang dan bidang diagonal dengan garis putih serta motif floral kecil.",
    makna:
      "Melambangkan keseimbangan antara struktur dan gerak dalam seni tekstil Bali.",
    fungsi:
      "Digunakan dalam tekstil etnik dan dekorasi rumah tradisional.",
  },

  {
    ciri:
      "Pola horizontal terdiri dari berlian berulang dengan elemen floral dan figuratif menyerupai burung stilisasi.",
    makna:
      "Melambangkan kehidupan, keharmonisan, dan hubungan manusia dengan alam.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan kain dekoratif Bali.",
  },

  {
    ciri:
      "Pola vertikal dengan berlian berlapis berwarna oranye terang dan detail motif kecil simetris pada setiap lapisannya.",
    makna:
      "Melambangkan fokus, keteraturan, dan struktur bertingkat dalam budaya Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil etnik Bali.",
  },

  {
    ciri:
      "Pola horizontal dengan berlian berulang yang diisi elemen abstrak dan garis lengkung dalam warna hangat.",
    makna:
      "Melambangkan kreativitas dan dinamika dalam seni motif tradisional Bali.",
    fungsi:
      "Digunakan dalam tekstil etnik dan dekorasi tradisional.",
  },

  {
    ciri:
      "Motif tekstil menyerupai papan catur yang dipadukan dengan elemen floral stilisasi berwarna hitam, putih, kuning, dan merah.",
    makna:
      "Melambangkan keseimbangan antara keteraturan dan keindahan artistik.",
    fungsi:
      "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
  },

  {
    ciri:
      "Pola grid geometris dengan elemen floral kecil dan lattice berbentuk berlian yang tersusun simetris.",
    makna:
      "Melambangkan keharmonisan, keteraturan, dan keanggunan visual.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil modern Bali.",
  },

  {
    ciri:
      "Pola horizontal dengan bentuk berlian berulang yang dipadukan dengan garis bergelombang dekoratif.",
    makna:
      "Melambangkan dinamika dan kesinambungan dalam kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam tekstil tenun dan busana tradisional Bali.",
  },

  {
    ciri:
      "Pola vertikal dengan ornamen floral stilisasi yang tersusun simetris membentuk kolom berulang.",
    makna:
      "Melambangkan keharmonisan dan keindahan alam dalam budaya Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan dekorasi tekstil Bali.",
  },

  {
    ciri:
      "Pola horizontal dengan bentuk berlian berulang dan siluet abstrak dekoratif dalam warna biru tua, pink, hijau, dan putih.",
    makna:
      "Melambangkan kreativitas dan keseimbangan visual dalam seni tekstil Bali.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif modern.",
  },

  {
    ciri:
      "Pola terdiri dari susunan grid berlian berulang yang dipadukan dengan elemen floral kecil dalam komposisi simetris.",
    makna:
      "Melambangkan keteraturan, keharmonisan, dan keindahan estetika dalam budaya Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan tekstil interior karena memiliki pola geometris yang elegan.",
  },
  
  {
    ciri:
      "Pola terdiri dari panel vertikal dengan berlian berulang dan bidang diagonal berisi garis putih serta motif floral kecil.",
    makna:
      "Melambangkan keseimbangan antara struktur geometris dan gerak visual artistik.",
    fungsi:
      "Digunakan dalam tekstil etnik dan dekorasi rumah tradisional Bali.",
  },
  
  {
    ciri:
      "Pola tekstil terdiri dari susunan grid berlian yang dipadukan dengan garis zigzag horizontal berulang.",
    makna:
      "Melambangkan energi, ritme kehidupan, dan dinamika budaya Bali.",
    fungsi:
      "Digunakan dalam kain tradisional dan tekstil dekoratif dengan nuansa geometris kuat.",
  },
  
  {
    ciri:
      "Pola berlian berlapis dengan detail floral stilisasi pada bagian tengahnya dalam warna ungu, pink, kuning, dan putih.",
    makna:
      "Melambangkan keindahan, kemewahan, dan keseimbangan visual dalam seni tekstil Bali.",
    fungsi:
      "Digunakan dalam tekstil dekoratif dan busana adat Bali.",
  },
  
  {
    ciri:
      "Pola terdiri dari kisi berbentuk hexagonal yang dipadukan dengan elemen floral kecil secara simetris.",
    makna:
      "Melambangkan keteraturan, keharmonisan, dan modernitas dalam desain tekstil Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan desain interior tekstil.",
  },
  
  {
    ciri:
      "Pola horizontal terdiri dari bentuk berlian kecil dan garis zigzag yang tersusun simetris secara berulang.",
    makna:
      "Melambangkan semangat, dinamika, dan kesinambungan budaya tradisional Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan busana etnik Bali.",
  },
  
  {
    ciri:
      "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk berlian yang tersusun dalam pita geometris.",
    makna:
      "Melambangkan keharmonisan dan keseimbangan dalam estetika tekstil Bali.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil dekoratif tradisional.",
  },
  
  {
    ciri:
      "Pola berlian berulang dengan elemen floral di bagian tengah yang dibingkai garis geometris.",
    makna:
      "Melambangkan perlindungan, keseimbangan, dan keindahan artistik.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi rumah Bali.",
  },
  
  {
    ciri:
      "Pola terdiri dari kisi berlian yang dipadukan dengan motif floral radial pada bagian tengahnya.",
    makna:
      "Melambangkan pusat kehidupan dan harmoni dalam budaya Bali.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil etnik Bali.",
  },
  
  {
    ciri:
      "Pola vertikal terdiri dari bentuk berlian dan oval dekoratif yang tersusun simetris secara berulang.",
    makna:
      "Melambangkan keteraturan dan keseimbangan visual dalam seni tekstil tradisional.",
    fungsi:
      "Digunakan dalam kain tradisional dan dekorasi interior tekstil.",
  },
  
  {
    ciri:
      "Pola diagonal terdiri dari bentuk berlian dan garis zigzag yang dipadukan dengan elemen floral stilisasi.",
    makna:
      "Melambangkan dinamika kehidupan dan kreativitas masyarakat Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan busana adat Bali.",
  },
  
  {
    ciri:
      "Pola vertikal terdiri dari susunan berlian dan lingkaran kecil yang tersusun simetris dalam kolom berulang.",
    makna:
      "Melambangkan kesinambungan, keseimbangan, dan keharmonisan visual.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
  },
  
  {
    ciri:
      "Pola diagonal terdiri dari garis zigzag dan elemen floral kecil menyerupai motif ikat tradisional.",
    makna:
      "Melambangkan energi dan identitas budaya tekstil Bali.",
    fungsi:
      "Digunakan dalam kain tenun dan tekstil etnik Bali.",
  },
  
  {
    ciri:
      "Pola horizontal terdiri dari bentuk berlian berulang dengan elemen oval menyerupai mata di bagian tengahnya.",
    makna:
      "Melambangkan kewaspadaan, perlindungan, dan keseimbangan hidup.",
    fungsi:
      "Digunakan dalam kain adat dan tekstil modern Bali.",
  },
  
  {
    ciri:
      "Pola terdiri dari bentuk berlian dengan elemen figuratif stilisasi yang tersusun simetris.",
    makna:
      "Melambangkan hubungan manusia dengan alam dan nilai artistik budaya Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi rumah.",
  },
  
  {
    ciri:
      "Pola horizontal terdiri dari bentuk berlian berulang dengan elemen burung stilisasi di bagian tengah.",
    makna:
      "Melambangkan kebebasan, kehidupan, dan keharmonisan dengan alam.",
    fungsi:
      "Digunakan dalam kain dekoratif dan busana adat Bali.",
  },
  
  {
    ciri:
      "Pola vertikal terdiri dari bentuk berlian dan garis zigzag yang tersusun simetris dalam kolom berulang.",
    makna:
      "Melambangkan kekuatan, ritme, dan kesinambungan tradisi Bali.",
    fungsi:
      "Digunakan dalam tekstil tradisional dan dekorasi interior.",
  },
  
  {
    ciri:
      "Pola grid floral terdiri dari elemen bunga stilisasi dan garis linear yang tersusun secara simetris.",
    makna:
      "Melambangkan keharmonisan dan keseimbangan antara alam dan manusia.",
    fungsi:
      "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
  },
  
  {
    ciri:
      "Pola terdiri dari bentuk berlian dan garis zigzag berulang dengan kombinasi warna multicolor.",
    makna:
      "Melambangkan keragaman budaya dan dinamika kehidupan masyarakat Bali.",
    fungsi:
      "Digunakan dalam tekstil etnik dan busana tradisional Bali.",
  },
  
  {
    ciri:
      "Pola terdiri dari susunan grid floral dengan elemen berlian berbingkai yang tersusun simetris.",
    makna:
      "Melambangkan keharmonisan dan keteraturan dalam desain tekstil tradisional.",
    fungsi:
      "Digunakan dalam kain dekoratif dan tekstil tradisional Bali.",
  },

  // 41
{
  ciri:
    "Pola berlian berulang dipadukan dengan ornamen floral stilisasi pada bagian tengahnya.",
  makna:
    "Melambangkan keindahan, keseimbangan, dan keharmonisan budaya Bali.",
  fungsi:
    "Digunakan dalam busana adat dan tekstil rumah tangga Bali.",
},

// 42
{
  ciri:
    "Motif terdiri dari elemen geometris kecil yang tersebar merata di seluruh bidang kain.",
  makna:
    "Melambangkan kebebasan ekspresi dan dinamika kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain etnik Bali.",
},

// 43
{
  ciri:
    "Pola terdiri dari bentuk berlian geometris yang tersusun secara simetris dan berulang.",
  makna:
    "Melambangkan keteraturan dan keseimbangan dalam struktur kehidupan.",
  fungsi:
    "Digunakan dalam kain adat dan dekorasi tekstil modern.",
},

// 44
{
  ciri:
    "Pola zigzag dipadukan dengan bentuk berlian kecil yang tersusun horizontal.",
  makna:
    "Melambangkan energi, kekuatan, dan gerak dinamis budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana etnik Bali.",
},

// 45
{
  ciri:
    "Pola berlian berulang dengan tampilan menyerupai motif ikat tradisional Bali.",
  makna:
    "Melambangkan identitas budaya dan warisan tradisional Bali.",
  fungsi:
    "Digunakan dalam kain adat dan dekorasi rumah tradisional.",
},

// 46
{
  ciri:
    "Pola grid terdiri dari susunan geometris simetris yang membentuk kisi-kisi berulang.",
  makna:
    "Melambangkan keteraturan, kestabilan, dan keharmonisan visual.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior.",
},

// 47
{
  ciri:
    "Pola terdiri dari bentuk berlian dan garis silang yang tersusun secara simetris.",
  makna:
    "Melambangkan keseimbangan dan hubungan antar unsur kehidupan.",
  fungsi:
    "Digunakan dalam tekstil tradisional Bali dan busana adat.",
},

// 48
{
  ciri:
    "Pola berlian berulang dihiasi detail ornamental dan floral kecil di bagian tengahnya.",
  makna:
    "Melambangkan kemewahan dan nilai artistik budaya Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil etnik Bali.",
},

// 49
{
  ciri:
    "Pola terdiri dari bentuk silang geometris yang dipadukan dengan elemen floral stilisasi.",
  makna:
    "Melambangkan keseimbangan antara alam dan keteraturan hidup.",
  fungsi:
    "Digunakan dalam tekstil rumah tangga dan kain tradisional Bali.",
},

// 50
{
  ciri:
    "Pola berlian dengan garis silang di bagian tengah tersusun berulang secara horizontal.",
  makna:
    "Melambangkan kesinambungan dan ritme kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan dekorasi interior.",
},

// 51
{
  ciri:
    "Pola terdiri dari susunan bentuk geometris kecil dalam barisan horizontal berulang.",
  makna:
    "Melambangkan keteraturan dan keharmonisan visual dalam seni tekstil.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil dekoratif Bali.",
},

// 52
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian yang tersusun dalam kolom simetris berulang.",
  makna:
    "Melambangkan kekuatan, stabilitas, dan kesinambungan budaya.",
  fungsi:
    "Digunakan dalam tekstil etnik dan busana adat Bali.",
},

// 53
{
  ciri:
    "Pola grid geometris dipadukan dengan detail ornamental kecil pada setiap perpotongan garis.",
  makna:
    "Melambangkan keteraturan dan kreativitas dalam seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior modern.",
},

// 54
{
  ciri:
    "Pola grid terdiri dari elemen geometris tribal yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan identitas budaya dan kekuatan visual tradisional Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan busana tradisional Bali.",
},

// 55
{
  ciri:
    "Pola silang dan berlian tersusun berulang membentuk ritme visual geometris.",
  makna:
    "Melambangkan keharmonisan dan keteraturan dalam kehidupan.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali.",
},

// 56
{
  ciri:
    "Pola grid terdiri dari elemen bunga berbentuk bintang yang tersusun simetris.",
  makna:
    "Melambangkan keindahan, harapan, dan keharmonisan hidup.",
  fungsi:
    "Digunakan dalam kain tradisional dan dekorasi interior tekstil.",
},

// 57
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian floral yang dipadukan dengan panel geometris simetris.",
  makna:
    "Melambangkan keseimbangan antara unsur alam dan struktur budaya.",
  fungsi:
    "Digunakan dalam tekstil tradisional Bali dan busana adat.",
},

// 58
{
  ciri:
    "Pola berlian berulang dipadukan dengan siluet floral kecil dalam susunan simetris.",
  makna:
    "Melambangkan keharmonisan dan kelembutan estetika Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil etnik.",
},

// 59
{
  ciri:
    "Pola terdiri dari bentuk berlian dan susunan kotak menyerupai papan catur dengan nuansa motif ikat.",
  makna:
    "Melambangkan dualitas dan keseimbangan dalam budaya Bali.",
  fungsi:
    "Digunakan dalam kain adat Bali dan dekorasi rumah.",
},

// 60
{
  ciri:
    "Pola berlian dipadukan dengan elemen floral dan paisley yang tersusun simetris.",
  makna:
    "Melambangkan kemewahan, keharmonisan, dan keindahan artistik.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana etnik Bali.",
},

// 61
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan oval dekoratif berbingkai yang tersusun simetris.",
  makna:
    "Melambangkan keteraturan dan keseimbangan visual dalam budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil interior dan kain dekoratif.",
},

// 62
{
  ciri:
    "Pola terdiri dari panel berlian berulang dengan detail siluet ornamental kecil di bagian tengah.",
  makna:
    "Melambangkan kreativitas dan nilai estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam kain adat dan dekorasi tekstil Bali.",
},

// 63
{
  ciri:
    "Pola vertikal terdiri dari elemen paisley dan bentuk berlian berlapis yang tersusun simetris.",
  makna:
    "Melambangkan kemewahan dan keberagaman estetika budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana adat Bali.",
},

// 64
{
  ciri:
    "Pola grid terdiri dari bentuk berlian kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keteraturan dan kesederhanaan yang harmonis.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain interior.",
},

// 65
{
  ciri:
    "Pola grid floral berbentuk bunga bintang tersusun simetris dalam bidang kain.",
  makna:
    "Melambangkan harapan dan keharmonisan hidup masyarakat Bali.",
  fungsi:
    "Digunakan dalam tekstil rumah tangga dan kain tradisional Bali.",
},
// 66
{
  ciri:
    "Pola terdiri dari susunan bunga stilisasi dalam grid geometris yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan, keindahan, dan keseimbangan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil etnik Bali.",
},

// 67
{
  ciri:
    "Pola horizontal terdiri dari bentuk berlian dan elemen floral kecil yang tersusun berulang dalam pita geometris.",
  makna:
    "Melambangkan kesinambungan budaya dan harmoni visual.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil tradisional Bali.",
},

// 68
{
  ciri:
    "Pola horizontal terdiri dari elemen ornamental kecil yang tersusun berulang dalam pita geometris simetris.",
  makna:
    "Melambangkan keteraturan dan nilai estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
},

// 69
{
  ciri:
    "Pola grid terdiri dari bentuk berlian yang dipadukan dengan elemen floral stilisasi dalam susunan simetris.",
  makna:
    "Melambangkan keharmonisan antara alam dan budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

// 70
{
  ciri:
    "Pola terdiri dari susunan blok geometris dan kolom simetris yang tersusun vertikal berulang.",
  makna:
    "Melambangkan stabilitas dan keteraturan dalam kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior.",
},

// 71
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan dan kreativitas dalam seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain tradisional dan dekorasi rumah.",
},

// 72
{
  ciri:
    "Pola horizontal terdiri dari bentuk berlian dan elemen floral kecil yang tersusun dalam pita geometris.",
  makna:
    "Melambangkan keseimbangan dan keindahan artistik budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan busana adat Bali.",
},

// 73
{
  ciri:
    "Pola grid terdiri dari bunga geometris kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan kesuburan dan keharmonisan kehidupan.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga.",
},

// 74
{
  ciri:
    "Motif terdiri dari elemen simbolik geometris kecil yang tersebar merata di seluruh bidang kain.",
  makna:
    "Melambangkan kebebasan ekspresi dan dinamika budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan kain dekoratif Bali.",
},

// 75
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan oval dekoratif berbingkai yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan dan keteraturan visual.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior modern.",
},

// 76
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil dalam susunan berulang.",
  makna:
    "Melambangkan kreativitas dan keseimbangan budaya Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil rumah tangga Bali.",
},

// 77
{
  ciri:
    "Pola vertikal terdiri dari bentuk geometris dan floral stilisasi yang tersusun dalam kolom simetris.",
  makna:
    "Melambangkan keharmonisan antara alam dan struktur kehidupan.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan dekorasi rumah.",
},

// 78
{
  ciri:
    "Pola grid terdiri dari bentuk berlian dengan elemen tribal kecil yang tersusun simetris.",
  makna:
    "Melambangkan identitas budaya dan kekuatan tradisi Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan busana tradisional Bali.",
},

// 79
{
  ciri:
    "Pola vertikal terdiri dari simbol geometris kecil yang tersusun dalam kolom simetris berulang.",
  makna:
    "Melambangkan keteraturan dan kesinambungan dalam budaya Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior.",
},

// 80
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan elemen menyerupai tetesan yang tersusun simetris.",
  makna:
    "Melambangkan kehidupan, kesuburan, dan aliran energi positif.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

// 81
{
  ciri:
    "Pola grid terdiri dari bentuk berlian floral kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keindahan dan keharmonisan visual budaya Bali.",
  fungsi:
    "Digunakan dalam kain rumah tangga dan tekstil etnik Bali.",
},

// 82
{
  ciri:
    "Pola vertikal terdiri dari simbol geometris kecil yang tersusun dalam kolom berulang secara simetris.",
  makna:
    "Melambangkan stabilitas dan ritme kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam kain adat dan dekorasi tekstil.",
},

// 83
{
  ciri:
    "Pola kolom terdiri dari elemen floral dan geometris kecil yang tersusun vertikal secara simetris.",
  makna:
    "Melambangkan keharmonisan dan keindahan artistik budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

// 84
{
  ciri:
    "Pola grid terdiri dari bentuk berlian kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keteraturan dan kesederhanaan estetika Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior modern.",
},

// 85
{
  ciri:
    "Pola grid terdiri dari bentuk berlian dan garis geometris yang tersusun berulang secara simetris.",
  makna:
    "Melambangkan dinamika dan kekuatan visual budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana etnik Bali.",
},

// 86
{
  ciri:
    "Pola terdiri dari susunan blok geometris dan grid silang kecil yang tersusun simetris.",
  makna:
    "Melambangkan keteraturan dan keseimbangan dalam kehidupan.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan interior rumah.",
},

// 87
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil dalam pita berulang.",
  makna:
    "Melambangkan keharmonisan dan kreativitas seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain tradisional Bali dan tekstil rumah tangga.",
},

// 88
{
  ciri:
    "Pola horizontal terdiri dari elemen ornamental kecil yang tersusun simetris dalam barisan geometris.",
  makna:
    "Melambangkan keindahan dan keseimbangan budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

// 89
{
  ciri:
    "Pola grid terdiri dari bentuk berlian floral kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keharmonisan dan nilai estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
},

// 90
{
  ciri:
    "Pola grid terdiri dari bentuk berlian kecil dengan nuansa motif ikat tradisional Bali.",
  makna:
    "Melambangkan identitas budaya dan warisan leluhur Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil etnik Bali.",
},// 66
{
  ciri:
    "Pola terdiri dari susunan bunga stilisasi dalam grid geometris yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan, keindahan, dan keseimbangan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil etnik Bali.",
},

// 67
{
  ciri:
    "Pola horizontal terdiri dari bentuk berlian dan elemen floral kecil yang tersusun berulang dalam pita geometris.",
  makna:
    "Melambangkan kesinambungan budaya dan harmoni visual.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil tradisional Bali.",
},

// 68
{
  ciri:
    "Pola horizontal terdiri dari elemen ornamental kecil yang tersusun berulang dalam pita geometris simetris.",
  makna:
    "Melambangkan keteraturan dan nilai estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali.",
},

// 69
{
  ciri:
    "Pola grid terdiri dari bentuk berlian yang dipadukan dengan elemen floral stilisasi dalam susunan simetris.",
  makna:
    "Melambangkan keharmonisan antara alam dan budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

// 70
{
  ciri:
    "Pola terdiri dari susunan blok geometris dan kolom simetris yang tersusun vertikal berulang.",
  makna:
    "Melambangkan stabilitas dan keteraturan dalam kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior.",
},

// 71
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan dan kreativitas dalam seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain tradisional dan dekorasi rumah.",
},

// 72
{
  ciri:
    "Pola horizontal terdiri dari bentuk berlian dan elemen floral kecil yang tersusun dalam pita geometris.",
  makna:
    "Melambangkan keseimbangan dan keindahan artistik budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan busana adat Bali.",
},

// 73
{
  ciri:
    "Pola grid terdiri dari bunga geometris kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan kesuburan dan keharmonisan kehidupan.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil rumah tangga.",
},

// 74
{
  ciri:
    "Motif terdiri dari elemen simbolik geometris kecil yang tersebar merata di seluruh bidang kain.",
  makna:
    "Melambangkan kebebasan ekspresi dan dinamika budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan kain dekoratif Bali.",
},

// 75
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan oval dekoratif berbingkai yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan dan keteraturan visual.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior modern.",
},

// 76
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil dalam susunan berulang.",
  makna:
    "Melambangkan kreativitas dan keseimbangan budaya Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil rumah tangga Bali.",
},

// 77
{
  ciri:
    "Pola vertikal terdiri dari bentuk geometris dan floral stilisasi yang tersusun dalam kolom simetris.",
  makna:
    "Melambangkan keharmonisan antara alam dan struktur kehidupan.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan dekorasi rumah.",
},

// 78
{
  ciri:
    "Pola grid terdiri dari bentuk berlian dengan elemen tribal kecil yang tersusun simetris.",
  makna:
    "Melambangkan identitas budaya dan kekuatan tradisi Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan busana tradisional Bali.",
},

// 79
{
  ciri:
    "Pola vertikal terdiri dari simbol geometris kecil yang tersusun dalam kolom simetris berulang.",
  makna:
    "Melambangkan keteraturan dan kesinambungan dalam budaya Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior.",
},

// 80
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan elemen menyerupai tetesan yang tersusun simetris.",
  makna:
    "Melambangkan kehidupan, kesuburan, dan aliran energi positif.",
  fungsi:
    "Digunakan dalam kain tradisional dan tekstil dekoratif Bali.",
},

// 81
{
  ciri:
    "Pola grid terdiri dari bentuk berlian floral kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keindahan dan keharmonisan visual budaya Bali.",
  fungsi:
    "Digunakan dalam kain rumah tangga dan tekstil etnik Bali.",
},

// 82
{
  ciri:
    "Pola vertikal terdiri dari simbol geometris kecil yang tersusun dalam kolom berulang secara simetris.",
  makna:
    "Melambangkan stabilitas dan ritme kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam kain adat dan dekorasi tekstil.",
},

// 83
{
  ciri:
    "Pola kolom terdiri dari elemen floral dan geometris kecil yang tersusun vertikal secara simetris.",
  makna:
    "Melambangkan keharmonisan dan keindahan artistik budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

// 84
{
  ciri:
    "Pola grid terdiri dari bentuk berlian kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keteraturan dan kesederhanaan estetika Bali.",
  fungsi:
    "Digunakan dalam kain dekoratif dan tekstil interior modern.",
},

// 85
{
  ciri:
    "Pola grid terdiri dari bentuk berlian dan garis geometris yang tersusun berulang secara simetris.",
  makna:
    "Melambangkan dinamika dan kekuatan visual budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil tradisional dan busana etnik Bali.",
},

// 86
{
  ciri:
    "Pola terdiri dari susunan blok geometris dan grid silang kecil yang tersusun simetris.",
  makna:
    "Melambangkan keteraturan dan keseimbangan dalam kehidupan.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan interior rumah.",
},

// 87
{
  ciri:
    "Pola horizontal terdiri dari elemen floral stilisasi dan bentuk geometris kecil dalam pita berulang.",
  makna:
    "Melambangkan keharmonisan dan kreativitas seni tekstil Bali.",
  fungsi:
    "Digunakan dalam kain tradisional Bali dan tekstil rumah tangga.",
},

// 88
{
  ciri:
    "Pola horizontal terdiri dari elemen ornamental kecil yang tersusun simetris dalam barisan geometris.",
  makna:
    "Melambangkan keindahan dan keseimbangan budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

// 89
{
  ciri:
    "Pola grid terdiri dari bentuk berlian floral kecil yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan keharmonisan dan nilai estetika tradisional Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali.",
},

// 90
{
  ciri:
    "Pola grid terdiri dari bentuk berlian kecil dengan nuansa motif ikat tradisional Bali.",
  makna:
    "Melambangkan identitas budaya dan warisan leluhur Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil etnik Bali.",
},
// 91
{
  ciri:
    "Pola grid terdiri dari elemen floral dan geometris kecil yang tersusun simetris dalam bidang kain.",
  makna:
    "Melambangkan keharmonisan antara unsur alam dan struktur kehidupan masyarakat Bali.",
  fungsi:
    "Digunakan dalam tekstil rumah tangga dan kain dekoratif Bali.",
},

// 92
{
  ciri:
    "Pola horizontal terdiri dari bentuk geometris dan elemen floral kecil yang tersusun berulang dalam pita dekoratif.",
  makna:
    "Melambangkan kreativitas dan dinamika budaya tekstil Bali.",
  fungsi:
    "Digunakan dalam kain adat Bali dan tekstil dekoratif.",
},

// 93
{
  ciri:
    "Pola grid terdiri dari elemen bunga berbentuk bintang yang tersusun simetris dan berulang.",
  makna:
    "Melambangkan harapan, keindahan, dan keharmonisan hidup.",
  fungsi:
    "Digunakan dalam kain rumah tangga dan tekstil tradisional Bali.",
},

// 94
{
  ciri:
    "Pola horizontal terdiri dari bentuk geometris kecil dengan nuansa motif ikat tradisional Bali.",
  makna:
    "Melambangkan identitas budaya dan kesinambungan tradisi leluhur Bali.",
  fungsi:
    "Digunakan dalam kain adat dan tekstil etnik Bali.",
},

// 95
{
  ciri:
    "Pola terdiri dari susunan blok dan kolom geometris yang tersusun vertikal secara simetris.",
  makna:
    "Melambangkan stabilitas, keteraturan, dan keseimbangan visual.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan interior rumah.",
},

// 96
{
  ciri:
    "Pola berlian berulang dipadukan dengan elemen silang dan floral kecil yang tersusun simetris.",
  makna:
    "Melambangkan keharmonisan dan hubungan antara manusia dengan alam.",
  fungsi:
    "Digunakan dalam kain dekoratif dan busana adat Bali.",
},

// 97
{
  ciri:
    "Pola geometris tribal tersusun secara cermin dan simetris dalam bidang kain.",
  makna:
    "Melambangkan kekuatan, perlindungan, dan identitas budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil etnik dan kain tradisional Bali.",
},

// 98
{
  ciri:
    "Pola vertikal terdiri dari bentuk berlian dan susunan kotak menyerupai papan catur dalam panel geometris.",
  makna:
    "Melambangkan dualitas, keseimbangan, dan keteraturan hidup.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain adat Bali.",
},

// 99
{
  ciri:
    "Pola grid terdiri dari bentuk berlian floral kecil yang tersusun simetris dan berulang dalam bidang kain.",
  makna:
    "Melambangkan keharmonisan, keindahan, dan nilai artistik budaya Bali.",
  fungsi:
    "Digunakan dalam tekstil dekoratif dan kain tradisional Bali.",
},

// 100
{
  ciri:
    "Pola dekoratif geometris dengan susunan berlian, garis ornamental, dan elemen floral kecil yang tersusun harmonis.",
  makna:
    "Melambangkan keseimbangan, kreativitas, dan kekayaan budaya tekstil Bali.",
  fungsi:
    "Digunakan dalam kain adat, tekstil dekoratif, dan pelestarian budaya Bali.",
},
];

/* DATA OTOMATIS */
export const dekoratifMotifs = images.map((img, i) => ({
  name: `Motif Dekoratif ${i + 1}`,

  ciri:
    dekoratifDescriptions[i]?.ciri ||
    `Motif dekoratif Bali dengan pola geometris tradisional yang artistik.`,

  makna:
    dekoratifDescriptions[i]?.makna ||
    `Melambangkan nilai budaya dan keharmonisan masyarakat Bali.`,

  fungsi:
    dekoratifDescriptions[i]?.fungsi ||
    `Digunakan dalam kain adat dan dekorasi tekstil tradisional Bali.`,

  patternImage: img,
}));
const imageModules = import.meta.glob(
    "../asset/geometris/*.{jpg,jpeg,png,JPG,PNG,JPEG}",
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
  
    export const geometrisDescriptions = [
      // 4.1
    {
      name: "Geometris Berlian Berjalin",
      ciri:
        "Motif geometris berbentuk berlian yang saling berjalin dan tersusun simetris dalam bidang kain. Warna merah, hitam, dan putih menciptakan tampilan visual yang tegas dan harmonis.",
      makna:
        "Melambangkan keterikatan, keseimbangan, dan keharmonisan dalam kehidupan masyarakat Bali melalui pola geometris yang saling terhubung.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai ornamen geometris bernilai estetis.",
    },

    // 4.2
    {
      name: "Geometris Oval dan Berlian",
      ciri:
        "Motif geometris berbentuk oval dan berlian yang tersusun berulang secara dekoratif. Warna biru, putih, dan hitam menciptakan tampilan visual yang elegan dan modern.",
      makna:
        "Melambangkan keseimbangan bentuk dan keteraturan pola dalam seni tekstil Bali.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain adat Bali untuk memperkuat kesan artistik dan modern.",
    },

    // 4.3
    {
      name: "Geometris Oval dan Berlian",
      ciri:
        "Motif oval dan berlian dengan pola simetris berulang dalam bidang kain. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan harmonis.",
      makna:
        "Melambangkan keteraturan, kesatuan, dan keseimbangan visual dalam budaya tekstil Bali.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali sebagai motif dekoratif geometris.",
    },

    // 4.4
    {
      name: "Geometris Berlian Api",
      ciri:
        "Motif berlian dengan bentuk menyerupai nyala api dan pola ornamental berulang. Warna merah, kuning, dan hitam menciptakan tampilan visual yang kuat dan dinamis.",
      makna:
        "Melambangkan semangat, energi, dan kekuatan yang terus menyala dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai ornamen geometris yang mencolok.",
    },

    // 4.5
    {
      name: "Geometris Berlian Ikat",
      ciri:
        "Motif geometris berbentuk berlian dengan susunan menyerupai pola ikat tradisional. Warna merah, putih, dan hitam menciptakan tampilan visual yang khas dan elegan.",
      makna:
        "Melambangkan warisan budaya tenun dan identitas tradisional Bali.",
      fungsi:
        "Digunakan dalam kain tenun dan tekstil tradisional Bali sebagai simbol budaya lokal.",
    },

    // 4.6
    {
      name: "Geometris Oval",
      ciri:
        "Motif geometris berbentuk oval yang tersusun simetris dan dekoratif. Warna biru dan putih menciptakan tampilan visual yang sederhana namun elegan.",
      makna:
        "Melambangkan kesederhanaan, keseimbangan, dan keharmonisan visual.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali untuk memberikan kesan lembut dan modern.",
    },

    // 4.7
    {
      name: "Geometris Berlian & Lingkaran",
      ciri:
        "Motif geometris berbentuk berlian dan lingkaran yang dipadukan dalam pola ornamental. Warna merah, putih, dan hitam menciptakan tampilan visual yang harmonis dan artistik.",
      makna:
        "Melambangkan hubungan antara keseimbangan dan kesinambungan kehidupan.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai elemen visual geometris.",
    },

    // 4.8
    {
      name: "Geometris Berlian Berlapis",
      ciri:
        "Motif geometris berbentuk berlian berlapis dengan susunan simetris berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang tegas dan elegan.",
      makna:
        "Melambangkan perlindungan, kekuatan, dan keteraturan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai pola geometris klasik.",
    },

    // 4.9
    {
      name: "Geometris Berlian Pusat Kontras",
      ciri:
        "Motif berlian dengan bagian tengah berwarna kontras dan pola dekoratif simetris. Warna merah, kuning, dan hitam menciptakan tampilan visual yang mencolok dan artistik.",
      makna:
        "Melambangkan fokus, pusat perhatian, dan keseimbangan energi.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil adat Bali untuk mempertegas tampilan visual kain.",
    },

    // 4.10
    {
      name: "Geometris Berlian Ikat Berwarna",
      ciri:
        "Motif berlian dengan pola ikat berwarna yang tersusun ornamental dalam bidang kain. Warna merah, hijau, kuning, dan hitam menciptakan tampilan visual yang cerah dan harmonis.",
      makna:
        "Melambangkan keberagaman budaya dan keharmonisan warna dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam tekstil tradisional dan kain dekoratif Bali sebagai motif geometris etnik.",
    },

    // 4.11
    {
      name: "Geometris Berlian Bergerigi",
      ciri:
        "Motif berlian dengan sisi bergerigi dan pola simetris berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan tegas.",
      makna:
        "Melambangkan kekuatan, ketegasan, dan dinamika kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai ornamen geometris khas.",
    },

    // 4.12
    {
      name: "Geometris Berlian dan Bunga Abstrak",
      ciri:
        "Motif geometris berbentuk berlian dipadukan dengan bunga abstrak dekoratif. Warna merah, kuning, dan hijau menciptakan tampilan visual yang harmonis dan artistik.",
      makna:
        "Melambangkan perpaduan unsur alam dan bentuk geometris dalam seni dekoratif Bali.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil adat Bali untuk memperkaya nilai estetika.",
    },

    // 4.13
    {
      name: "Geometris Berlian Titik Tengah",
      ciri:
        "Motif berlian dengan titik tengah sebagai fokus utama pola geometris. Warna merah, putih, dan hitam menciptakan tampilan visual yang simetris dan elegan.",
      makna:
        "Melambangkan pusat keseimbangan dan kesatuan dalam kehidupan.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai elemen geometris utama.",
    },

    // 4.14
    {
      name: "Geometris Lingkaran Radial",
      ciri:
        "Motif geometris berbentuk lingkaran radial dengan susunan simetris berulang. Warna biru, putih, dan hitam menciptakan tampilan visual yang artistik dan harmonis.",
      makna:
        "Melambangkan kesinambungan, pergerakan, dan keharmonisan alam semesta.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil rumah tangga Bali sebagai pola geometris modern.",
    },

    // 4.15
    {
      name: "Geometris Berlian Berlapis Simetris",
      ciri:
        "Motif berlian berlapis yang tersusun simetris dan dekoratif dalam bidang kain. Warna merah, hitam, dan putih menciptakan tampilan visual yang elegan dan tegas.",
      makna:
        "Melambangkan perlindungan dan keteraturan yang berlapis dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil tradisional Bali sebagai motif geometris klasik.",
    },
    // 4.16
    {
      name: "Geometris Berlian dan Oval",
      ciri:
        "Motif geometris berbentuk berlian dan oval dengan pola berulang simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang harmonis dan dekoratif.",
      makna:
        "Melambangkan keseimbangan dan keteraturan pola dalam seni tekstil tradisional Bali.",
      fungsi:
        "Digunakan dalam kain rumah tangga dan tekstil adat Bali sebagai ornamen geometris dekoratif.",
    },

    // 4.17
    {
      name: "Geometris Berlian dan Bintang",
      ciri:
        "Motif geometris berbentuk berlian dipadukan dengan bentuk bintang dekoratif. Warna merah, kuning, dan hitam menciptakan tampilan visual yang artistik dan dinamis.",
      makna:
        "Melambangkan harapan, cahaya, dan semangat dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai elemen visual yang mencolok.",
    },

    // 4.18
    {
      name: "Geometris Berlian Kompleks",
      ciri:
        "Motif berlian dengan susunan pola kompleks dan detail ornamental simetris. Warna hitam, merah, dan putih menciptakan tampilan visual yang mewah dan artistik.",
      makna:
        "Melambangkan kerumitan, keindahan, dan keteraturan dalam budaya seni Bali.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai motif geometris bernilai estetika tinggi.",
    },

    // 4.19
    {
      name: "Geometris Berlian dan Garis Pinggir",
      ciri:
        "Motif berlian dipadukan dengan garis pinggir dekoratif yang tersusun simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang harmonis dan elegan.",
      makna:
        "Melambangkan perlindungan, batas keseimbangan, dan keteraturan hidup.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali sebagai pola dekoratif geometris.",
    },

    // 4.20
    {
      name: "Geometris Berlian Berlapis Simetris",
      ciri:
        "Motif berlian berlapis dengan pola simetris berulang dalam bidang kain. Warna hitam, merah, dan putih menciptakan tampilan visual yang artistik dan tegas.",
      makna:
        "Melambangkan kekuatan, perlindungan, dan keharmonisan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain adat Bali sebagai motif geometris klasik.",
    },

    // 4.21
    {
      name: "Geometris Bintang",
      ciri:
        "Motif geometris berbentuk bintang dengan pola simetris berulang dalam bidang kain. Warna merah, kuning, dan hitam menciptakan tampilan visual yang artistik dan harmonis.",
      makna:
        "Melambangkan harapan, cahaya kehidupan, dan semangat yang terus berkembang.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai ornamen geometris artistik.",
    },

    // 4.22
    {
      name: "Geometris Kotak Grid",
      ciri:
        "Motif geometris berbentuk kotak grid dengan susunan garis simetris dan berulang. Warna hitam, putih, dan merah menciptakan tampilan visual yang tegas dan modern.",
      makna:
        "Melambangkan keteraturan, stabilitas, dan keseimbangan hidup.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali untuk menciptakan kesan modern dan rapi.",
    },

    // 4.23
    {
      name: "Geometris Berlian Bergerigi",
      ciri:
        "Motif berlian dengan sisi bergerigi dan pola dekoratif berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan kuat.",
      makna:
        "Melambangkan ketegasan, kekuatan, dan perlindungan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil tradisional Bali sebagai pola geometris khas.",
    },

    // 4.24
    {
      name: "Geometris Berlian Berulang",
      ciri:
        "Motif berlian dengan susunan berulang secara simetris dalam bidang kain. Warna hitam, merah, dan putih menciptakan tampilan visual yang harmonis dan elegan.",
      makna:
        "Melambangkan kesinambungan dan keteraturan hidup masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai ornamen geometris klasik.",
    },

    // 4.25
    {
      name: "Geometris Berlian Memanjang",
      ciri:
        "Motif geometris berbentuk berlian memanjang dengan pola ornamental simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan dekoratif.",
      makna:
        "Melambangkan perjalanan hidup dan keseimbangan yang terus berlanjut.",
      fungsi:
        "Digunakan dalam tekstil adat dan kain tradisional Bali sebagai motif geometris elegan.",
    },

    // 4.27
    {
      name: "Geometris Berlian dan Border Vertikal",
      ciri:
        "Motif berlian dipadukan dengan border vertikal dekoratif yang tersusun simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan tegas.",
      makna:
        "Melambangkan perlindungan, ketegasan, dan keteraturan pola kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil adat Bali sebagai ornamen geometris dekoratif.",
    },

    // 4.28
    {
      name: "Geometris Berlian Bergerigi",
      ciri:
        "Motif berlian bergerigi dengan detail garis simetris dan pola berulang. Warna merah, hitam, dan putih menciptakan tampilan visual yang dekoratif dan harmonis.",
      makna:
        "Melambangkan kekuatan, ketelitian, dan keseimbangan dalam kehidupan.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai pola geometris artistik.",
    },

    // 4.29
    {
      name: "Geometris Berlian Alternatif Vertikal",
      ciri:
        "Motif berlian dengan susunan alternatif vertikal dan pola simetris berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang elegan dan artistik.",
      makna:
        "Melambangkan kesinambungan dan keteraturan pola hidup masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai ornamen geometris modern.",
    },

    // 4.30
    {
      name: "Geometris Berlian",
      ciri:
        "Motif geometris berbentuk berlian dengan pola sederhana dan susunan simetris. Warna hitam, merah, dan putih menciptakan tampilan visual yang klasik dan harmonis.",
      makna:
        "Melambangkan keseimbangan, kestabilan, dan keharmonisan hidup.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali sebagai motif geometris klasik.",
    },
    // 4.31
    {
      name: "Geometris Berlian Dengan Garis Vertikal",
      ciri:
        "Motif berlian dipadukan dengan garis vertikal dekoratif yang tersusun berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan modern.",
      makna:
        "Melambangkan keteraturan, ketegasan, dan keseimbangan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil adat Bali sebagai motif geometris modern.",
    },

    // 4.32
    {
      name: "Geometris Berlian Konsentris",
      ciri:
        "Motif berlian konsentris dengan susunan lapisan geometris berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang elegan dan tegas.",
      makna:
        "Melambangkan perlindungan, pusat keseimbangan, dan kesinambungan hidup.",
      fungsi:
        "Digunakan dalam tekstil tradisional dan kain dekoratif Bali sebagai ornamen geometris artistik.",
    },

    // 4.33
    {
      name: "Geometris Berlian dan Zigzag Horizontal",
      ciri:
        "Motif berlian dipadukan dengan pola zigzag horizontal yang tersusun simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang dinamis dan artistik.",
      makna:
        "Melambangkan gerak kehidupan yang terus berjalan dengan seimbang dan harmonis.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai pola geometris dinamis.",
    },

    // 4.34
    {
      name: "Geometris Berlian Diagonal dan Zigzag",
      ciri:
        "Motif berlian diagonal dipadukan dengan pola zigzag dekoratif berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang harmonis dan modern.",
      makna:
        "Melambangkan dinamika, perubahan, dan keseimbangan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali sebagai motif geometris modern.",
    },

    // 4.35
    {
      name: "Geometris Berlian",
      ciri:
        "Motif geometris berbentuk berlian dengan pola dekoratif sederhana dan simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan elegan.",
      makna:
        "Melambangkan kestabilan, keteraturan, dan keharmonisan dalam budaya Bali.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai ornamen geometris klasik.",
    },

    // 4.36
    {
      name: "Geometris Zigzag Bergerigi",
      ciri:
        "Motif geometris berbentuk zigzag bergerigi dengan pola berulang dalam bidang kain. Warna hitam, merah, dan putih menciptakan tampilan visual yang dinamis dan tegas.",
      makna:
        "Melambangkan kekuatan, semangat, dan gerak kehidupan yang terus berkembang.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain adat Bali sebagai motif geometris artistik.",
    },

    // 4.37
    {
      name: "Geometris Berlian Oval",
      ciri:
        "Motif geometris berbentuk perpaduan berlian dan oval yang tersusun simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang harmonis dan dekoratif.",
      makna:
        "Melambangkan keseimbangan antara bentuk tegas dan bentuk lembut dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain rumah tangga dan tekstil tradisional Bali sebagai ornamen geometris elegan.",
    },

    // 4.38
    {
      name: "Geometris Berlian Konsentris",
      ciri:
        "Motif berlian konsentris dengan susunan geometris berlapis dan pola ornamental. Warna hitam, merah, dan putih menciptakan tampilan visual yang elegan dan artistik.",
      makna:
        "Melambangkan pusat kekuatan, perlindungan, dan keseimbangan hidup.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai motif geometris klasik.",
    },

    // 4.39
    {
      name: "Geometris Berlian",
      ciri:
        "Motif berlian dengan pola sederhana dan susunan dekoratif simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang klasik dan harmonis.",
      makna:
        "Melambangkan keteraturan dan kestabilan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai pola geometris sederhana.",
    },

    // 4.40
    {
      name: "Geometris Berlian Bergerigi Grid",
      ciri:
        "Motif berlian bergerigi dengan pola grid simetris berulang dalam bidang kain. Warna hitam, merah, dan putih menciptakan tampilan visual yang artistik dan modern.",
      makna:
        "Melambangkan keteraturan, perlindungan, dan keharmonisan pola kehidupan.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain adat Bali sebagai ornamen geometris modern.",
    },

    // 4.41
    {
      name: "Geometris Berlian Konsentris Bergerigi",
      ciri:
        "Motif berlian konsentris dengan sisi bergerigi dan pola simetris berulang. Warna merah, hitam, dan putih menciptakan tampilan visual yang tegas dan artistik.",
      makna:
        "Melambangkan kekuatan, perlindungan, dan keseimbangan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai pola geometris khas.",
    },

    // 4.42
    {
      name: "Geometris Berlian Berlapis Monokrom",
      ciri:
        "Motif berlian berlapis dengan warna monokrom dan susunan geometris simetris. Warna hitam dan putih menciptakan tampilan visual yang sederhana namun elegan.",
      makna:
        "Melambangkan keseimbangan, kesederhanaan, dan ketegasan visual.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain rumah tangga Bali sebagai motif geometris modern.",
    },

    // 4.43
    {
      name: "Geometris Zigzag Horizontal",
      ciri:
        "Motif zigzag horizontal dengan pola berulang dan susunan dekoratif simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang dinamis dan harmonis.",
      makna:
        "Melambangkan gerak, semangat, dan perubahan yang terus berlangsung.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil tradisional Bali sebagai ornamen geometris dekoratif.",
    },

    // 4.44
    {
      name: "Geometris Berlian Berlapis",
      ciri:
        "Motif geometris berbentuk berlian berlapis dengan pola ornamental berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang elegan dan artistik.",
      makna:
        "Melambangkan perlindungan, keteraturan, dan keseimbangan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai motif geometris klasik.",
    },

    // 4.45
    {
      name: "Geometris Berlian Berlapis Garis Radial",
      ciri:
        "Motif berlian berlapis dipadukan dengan garis radial dekoratif yang tersusun simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang artistik dan dinamis.",
      makna:
        "Melambangkan energi, keseimbangan, dan arah kehidupan yang terus berkembang.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain adat Bali sebagai ornamen geometris modern.",
    },
    // 4.46
    {
      name: "Geometris Berlian Bergerigi Simetris",
      ciri:
        "Motif berlian bergerigi dengan susunan simetris dan pola dekoratif berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang tegas dan harmonis.",
      makna:
        "Melambangkan kekuatan, keseimbangan, dan keteraturan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai ornamen geometris artistik.",
    },

    // 4.47
    {
      name: "Geometris Berlian dan Zigzag Horizontal",
      ciri:
        "Motif berlian dipadukan dengan zigzag horizontal yang tersusun ornamental. Warna merah, putih, dan hitam menciptakan tampilan visual yang dinamis dan artistik.",
      makna:
        "Melambangkan gerak kehidupan yang terus berkembang dan tetap harmonis.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai motif geometris modern.",
    },

    // 4.48
    {
      name: "Geometris Berlian Bergerigi Vertikal",
      ciri:
        "Motif berlian bergerigi dengan susunan vertikal dan pola simetris berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang elegan dan dekoratif.",
      makna:
        "Melambangkan ketegasan, stabilitas, dan keteraturan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil rumah tangga Bali sebagai ornamen geometris klasik.",
    },

    // 4.49
    {
      name: "Geometris Zigzag dan Segitiga Horizontal",
      ciri:
        "Motif zigzag dipadukan dengan bentuk segitiga horizontal yang tersusun berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang modern dan harmonis.",
      makna:
        "Melambangkan dinamika, keberanian, dan keseimbangan dalam pola kehidupan.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil adat Bali sebagai motif geometris kontemporer.",
    },

    // 4.50
    {
      name: "Geometris Berlian Berlapis Oval",
      ciri:
        "Motif berlian berlapis dipadukan dengan bentuk oval dekoratif dalam susunan simetris. Warna hitam, merah, dan putih menciptakan tampilan visual yang artistik dan elegan.",
      makna:
        "Melambangkan perpaduan kekuatan dan kelembutan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai ornamen geometris elegan.",
    },

    // 4.51
    {
      name: "Geometris Berlian",
      ciri:
        "Motif geometris berbentuk berlian dengan pola sederhana dan susunan berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang klasik dan harmonis.",
      makna:
        "Melambangkan keteraturan, keseimbangan, dan kestabilan dalam kehidupan.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil dekoratif Bali sebagai motif geometris tradisional.",
    },

    // 4.52
    {
      name: "Geometris Berlian Bergerigi Horizontal",
      ciri:
        "Motif berlian bergerigi dengan susunan horizontal dan pola ornamental simetris. Warna hitam, merah, dan putih menciptakan tampilan visual yang dinamis dan artistik.",
      makna:
        "Melambangkan semangat, gerak, dan kekuatan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam kain tradisional dan tekstil dekoratif Bali sebagai pola geometris khas.",
    },

    // 4.53
    {
      name: "Geometris Berlian Berlapis Vertikal",
      ciri:
        "Motif berlian berlapis dengan susunan vertikal dan pola geometris berulang. Warna merah, putih, dan hitam menciptakan tampilan visual yang elegan dan harmonis.",
      makna:
        "Melambangkan kesinambungan, kestabilan, dan keteraturan hidup.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil adat Bali sebagai ornamen geometris artistik.",
    },

    // 4.54
    {
      name: "Geometris Berlian Berlapis Simetris",
      ciri:
        "Motif berlian berlapis dengan susunan simetris dan pola dekoratif berulang. Warna hitam, merah, dan putih menciptakan tampilan visual yang artistik dan tegas.",
      makna:
        "Melambangkan perlindungan, keseimbangan, dan kekuatan dalam budaya Bali.",
      fungsi:
        "Digunakan dalam tekstil tradisional dan kain dekoratif Bali sebagai motif geometris klasik.",
    },

    // 4.55
    {
      name: "Geometris Zigzag",
      ciri:
        "Motif zigzag dengan garis berulang dan pola simetris dekoratif. Warna merah, putih, dan hitam menciptakan tampilan visual yang dinamis dan modern.",
      makna:
        "Melambangkan gerak, energi, dan perubahan yang terus berlangsung.",
      fungsi:
        "Digunakan dalam kain rumah tangga dan tekstil adat Bali sebagai ornamen geometris modern.",
    },

    // 4.56
    {
      name: "Geometris Berlian dan Zigzag Berbingkai",
      ciri:
        "Motif berlian dipadukan dengan pola zigzag berbingkai dekoratif. Warna hitam, merah, dan putih menciptakan tampilan visual yang harmonis dan artistik.",
      makna:
        "Melambangkan keseimbangan antara keteraturan dan dinamika kehidupan.",
      fungsi:
        "Digunakan dalam kain dekoratif dan tekstil tradisional Bali sebagai motif geometris dekoratif.",
    },

    // 4.57
    {
      name: "Geometris Berlian Bergerigi",
      ciri:
        "Motif berlian bergerigi dengan pola berulang dan susunan simetris. Warna merah, putih, dan hitam menciptakan tampilan visual yang tegas dan dekoratif.",
      makna:
        "Melambangkan kekuatan, perlindungan, dan kestabilan hidup.",
      fungsi:
        "Digunakan dalam kain adat dan tekstil tradisional Bali sebagai ornamen geometris khas.",
    },

    // 4.58
    {
      name: "Geometris Berlian Berlapis",
      ciri:
        "Motif geometris berbentuk berlian berlapis dengan pola ornamental simetris. Warna hitam, merah, dan putih menciptakan tampilan visual yang elegan dan artistik.",
      makna:
        "Melambangkan keteraturan, perlindungan, dan keharmonisan dalam kehidupan masyarakat Bali.",
      fungsi:
        "Digunakan dalam tekstil dekoratif dan kain tradisional Bali sebagai motif geometris klasik.",
    },
  ]
  /* DATA OTOMATIS */
export const geometrisMotifs = images.map((img, i) => ({
 name: geometrisDescriptions[i]?.name || `Motif Geometris ${i + 1}`,

 ciri: geometrisDescriptions[i]?.ciri || "",
 makna: geometrisDescriptions[i]?.makna || "",
 fungsi:geometrisDescriptions[i]?.fungsi || "",

 patternImage: img,
}));
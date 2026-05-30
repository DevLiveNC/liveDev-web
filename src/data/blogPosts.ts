export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  coverImage: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'script-dunyasindan-webe',
    title: "Script Dünyasından Web'e: 8 Yıllık Yolculuğum",
    excerpt:
      "Live Kırmızıyüz olarak oyun scriptlerinden freelance web geliştirmeye uzanan yolculuğum — üretici olma isteği, azim ve bugün sizlere sunduğum hizmetler.",
    date: '12 Mayıs 2026',
    readTime: '7 dk',
    category: 'Deneyim',
    gradient: 'from-sky-500 to-blue-600',
    coverImage: '/blog/script-cover.jpg',
    content: [
      {
        paragraphs: [
          'Oynadığım oyunların camiasına girişimin ardından meraklanarak tüketici değil de üretici olma isteğimin yolunda sürdürdüğüm çalışma ve azim beni bu noktaya kadar getirdi. Günümüzde gelişecek, büyüyecek, ilerleyecek uzun yolların başında burada sizlere web tasarım alanında istediğiniz siteleri sunmaktayım.',
          'Ben Yaşar — oyuncular arasında Live Kırmızıyüz. Kod yazmaya başladığım günlerde elimde bir editör ve bitmek bilmeyen bir merak vardı. Oyun scriptleri, küçük projeler, sürekli deneme-yanılma… Sekiz yıl sonra baktığımda aynı merak hâlâ duruyor; sadece hedefler ve araçlar değişti.',
          'Script dünyasında öğrendiğim en büyük ders şuydu: her satır kod bir amaca hizmet etmeli. Bu bakış açısı, web geliştirmeye geçtiğimde işimi kökten değiştirdi.',
        ],
      },
      {
        heading: 'Üretici olmak ne demek?',
        paragraphs: [
          'Camia içinde izleyici kalmak kolaydı. Ama bir noktada "Ben de yapabilirim" dedim. İlk scriptlerim mükemmel değildi; hata yapıyor, düzeltiyor, tekrar deniyordum. Asıl kazanç kodun kendisi değil, pes etmemeyi öğrenmekti.',
          'FiveM gibi niş alanlarda detaylı kod yazmak; karmaşık sistemleri parçalara ayırmayı, dokümantasyon okumayı ve sabırlı debug yapmayı öğretti. Bu disiplin bugün React ve TypeScript projelerimde de aynen geçerli.',
        ],
      },
      {
        heading: "Scriptten web'e geçiş",
        paragraphs: [
          'Web tarafına geçiş bir gecede olmadı. Önce küçük landing page\'ler, ardından kişisel siteler, sonra freelance projeler geldi. Üç yıldır profesyonel olarak web geliştirme yapıyorum.',
          'Şirket sitesinden mağazaya, kurs platformundan kişisel bloga kadar farklı ihtiyaçlara çözüm üretiyorum. Her projede aynı soruyu soruyorum: "Bu site sahibine gerçekten ne kazandıracak?" Teknik güzel olabilir ama amaç yoksa anlam da yok.',
        ],
      },
      {
        heading: 'Freelance olarak LiveDev',
        paragraphs: [
          'Tek başıma çalışıyorum — bu LiveDev\'in özü. Projeniz arada kaybolmaz; doğrudan benimle iletişim kurarsınız. Hızlı teslim, özenli ilgi ve sürekli geri bildirim benim için standart.',
          'KKTC\'den tüm dünyaya hizmet veriyorum. İster FiveM script desteği, ister kurumsal web sitesi olsun; vizyonum, hevesim ve dürüstlüğümle her işe aynı ciddiyetle yaklaşıyorum.',
        ],
      },
      {
        heading: 'Son söz',
        paragraphs: [
          'Sekiz yıl önce başladığım yolculuk hâlâ devam ediyor. Script dünyasından web\'e geçiş bir kopuş değil, birikimin yeni alana taşınmasıydı. Siz de üretici tarafta yer almak istiyorsanız — ister kod, ister kendi siteniz olsun — ilk adımı atmaktan çekinmeyin.',
          'Satırlarınız bol olsun.',
        ],
      },
    ],
  },
  {
    slug: 'ekrenfit-spor-kocu-sitesi',
    title: 'EkrenFit: Ali Ekren İçin Tasarladığım Spor Koçu Sitesi',
    excerpt:
      'fitekren.org projesinde paketler, dönüşüm hikayeleri ve iletişim formunu nasıl kurguladım? Gerçek bir müşteri projesi üzerinden anlatıyorum.',
    date: '28 Nisan 2026',
    readTime: '6 dk',
    category: 'Proje',
    gradient: 'from-indigo-500 to-sky-500',
    coverImage: '/blog/ekrenfit-cover.jpg',
    content: [
      {
        paragraphs: [
          'EkrenFit (fitekren.org), profesyonel fitness koçu Ali Ekren için hazırladığım kişisel marka sitesi. Ali ile çalışırken hedef netti: sadece güzel bir site değil, ziyaretçiyi danışan adayına dönüştüren bir dijital vitrin.',
          'Spor koçu sitelerinde üç şey kritik — güven, dönüşüm kanıtı ve kolay iletişim. Tasarımı bu üç eksen etrafında kurguladım. React ve TypeScript ile geliştirdiğim site; hızlı, mobil uyumlu ve SEO dostu.',
        ],
      },
      {
        heading: 'Müşteri ihtiyacını anlamak',
        paragraphs: [
          'Projeye başlamadan önce Ali\'nin hedef kitlesini, paket yapısını ve danışanlarının en çok neye baktığını konuştuk. Koç sitelerinde ziyaretçi genelde "Bu kişi bana güven veriyor mu?" ve "Ben de bu sonuçları alabilir miyim?" sorularına cevap arıyor.',
          'Bu yüzden hero bölümünde deneyim yılı, başarı oranı ve mutlu danışan sayısını hemen görünür kıldım. İlk 3 saniyede ikna, geri kalan her şey detay.',
        ],
      },
      {
        heading: 'Hikâye, paketler ve sosyal kanıt',
        paragraphs: [
          'Ali\'nin 2018\'den beri süren dönüşüm hikâyesi ayrı bir bölümde anlatılıyor. Gerçek deneyim, abartılı vaatlerden daha güçlü bir satış aracıdır.',
          'Starter, Pro ve Elite paketleri net fiyatlandırma ve karşılaştırmayla sunuldu. "En popüler" etiketi karar vermeyi kolaylaştırıyor. Dönüşüm hikayeleri bölümünde ise gerçek metrikler, yorumlar ve isimler sosyal kanıt sağlıyor.',
        ],
      },
      {
        heading: 'Teknik tercihlerim',
        paragraphs: [
          'Site React ve TypeScript ile geliştirildi. Tailwind CSS ile tutarlı bir tasarım dili oluşturdum. Form alanları sade tutuldu: ad, telefon, hedef, paket tercihi — gereksiz alan doldurmak ziyaretçiyi kaçırır.',
          'Görseller optimize edildi, sayfa hızlı yükleniyor. Portfolyomda bu projenin canlı ön izlemesini görebilirsiniz; tıklayınca fitekren.org açılıyor.',
        ],
      },
      {
        heading: 'Projeden çıkardığım ders',
        paragraphs: [
          'Her sektörün dili farklı. Fitness dünyasında enerji, güven ve dönüşüm konuşulur; teknik detay arka planda kalır. İyi bir web geliştirici sadece kod yazmaz — müşterinin işini anlar.',
          'Siz de koç, eğitmen, danışman veya kişisel markanızı büyütmek istiyorsanız benzer bir yapı sizin için de tasarlayabilirim. İletişime geçmeniz yeterli.',
        ],
      },
    ],
  },
  {
    slug: 'freelance-iletisim',
    title: 'Neden Sürekli İletişim Kuruyorum? Freelance\'ta Farkım Bu',
    excerpt:
      'LiveDev olarak tek başıma çalışırken hızlı teslim ve özenli ilginin sırrı: dürüst, sürekli ve doğrudan iletişim. Müşterilerimden öğrendiklerim.',
    date: '15 Nisan 2026',
    readTime: '5 dk',
    category: 'Freelance',
    gradient: 'from-blue-500 to-indigo-600',
    coverImage: '/blog/freelance-cover.jpg',
    content: [
      {
        paragraphs: [
          'Freelance dünyasında herkes "hızlı teslim" der. Ben bunu söylemekle yetinmiyorum; sürecin her aşamasında müşterimle iletişimde kalarak kanıtlıyorum. LiveDev\'de tek başıma çalıştığım için projeniz bana emanet — arada ajans, proje yöneticisi veya bilgi kaybı yok.',
          'Müşterilerim kodun ne kadar temiz olduğunu göremeyebilir ama bana ulaşabildiğinde ne kadar hızlı cevap aldığını her an hisseder. Benim için iletişim lüks değil, standart.',
        ],
      },
      {
        heading: 'Doğrudan iletişimin gücü',
        paragraphs: [
          'WhatsApp\'tan (+90 533 842 63 83) veya e-postadan bana doğrudan yazıyorsunuz. Sorunuz varsa bekletmiyorum; mümkün olduğunca aynı gün dönüş yapıyorum. Bu, ajans modelinde nadiren mümkün olan bir hız.',
          'Proje başladığında ne zaman teslim edeceğimi net söylüyorum. Ara aşamalarda ekran görüntüsü, kısa güncelleme ve onay noktaları paylaşıyorum. Böylece "tam istediğim gibi olmadı" sürprizleri en başta engelleniyor.',
        ],
      },
      {
        heading: 'Dürüstlük uzun vadeli kazandırır',
        paragraphs: [
          'Bir şey yapılamayacaksa baştan söylüyorum. Teslim tarihi uzayacaksa haber veriyorum. Sorun çıktığında saklamıyorum; çözüm önerisiyle birlikte paylaşıyorum. Kısa vadede zor görünse de uzun vadede en güçlü referansım bu.',
          'Vizyonum ve hevesimle büyüyen bilgim, dürüstlüğümle birleşince işler farklılaşıyor. Müşterilerim bunu hissediyor — tekrar çalışmak isteyen, tavsiye eden insanlar bu yüzden geri geliyor.',
        ],
      },
      {
        heading: 'Pratik ipuçlarım',
        paragraphs: [
          'Proje başında beklentileri yazılı netleştirin: kaç sayfa, hangi özellikler, teslim tarihi. Gerçekçi olun; erken bitirmek sürpriz olur, geç kalmak güven kaybettirir.',
          'Küçük geri bildirimler büyük revizyonlardan ucuzdur. "Şurayı beğenmedim" demek yerine erken aşamada yön vermek hem size hem geliştiriciye zaman kazandırır.',
        ],
      },
      {
        heading: 'Benimle çalışmak',
        paragraphs: [
          'Şirket sitesi, mağaza, kurs platformu, kişisel blog veya FiveM gibi niş projeler — hepsinde aynı iletişim disiplinini uyguluyorum. Instagram\'dan (@yasar_kirmiziyuz) takip edebilir, iletişim formundan veya WhatsApp\'tan ulaşabilirsiniz.',
          'Projeniz hakkında konuşmak için beklemeyin. Satırlarınız bol olsun.',
        ],
      },
    ],
  },
  {
    slug: 'web-sitesi-performans-ipuclari',
    title: 'Müşteri Projelerimde Performans İçin Uyguladığım 5 Kural',
    excerpt:
      'LiveDev projelerinde hızlı yüklenen siteler için React, TypeScript ve modern araçlarla uyguladığım performans kuralları — EkrenFit örneğiyle.',
    date: '3 Nisan 2026',
    readTime: '6 dk',
    category: 'Teknik',
    gradient: 'from-cyan-500 to-blue-600',
    coverImage: '/blog/performans-cover.jpg',
    content: [
      {
        paragraphs: [
          'Güzel tasarım tek başına yetmez. Site 3 saniyeden uzun sürede açılıyorsa ziyaretçinin büyük kısmı sayfayı kapatır — bu hem SEO\'yu hem dönüşümü düşürür. LiveDev olarak teslim ettiğim her projede performansı öncelik listesinin üstünde tutuyorum.',
          'EkrenFit (fitekren.org) dahil tüm projelerimde aşağıdaki 5 kuralı uyguluyorum. Bunlar teorik değil; gerçek müşteri işlerinden çıkan pratikler.',
        ],
      },
      {
        heading: '1. Görselleri ciddiye alın',
        paragraphs: [
          'Ham fotoğrafları doğrudan siteye koymak en büyük hatalardan biri. WebP formatı, uygun boyutlandırma ve lazy loading ile sayfa ağırlığını ciddi oranda düşürüyorum.',
          'Portfolyo ön izlemelerinde ve blog kapak görsellerinde de aynı disiplin geçerli. fitekren.org için aldığım ekran görüntüsü bile optimize edilmiş boyutta sunuluyor.',
        ],
      },
      {
        heading: '2. Gereksiz kod yükünden kaçının',
        paragraphs: [
          'React projelerimde yalnızca ihtiyaç duyulan paketleri kullanıyorum. Her kütüphane build boyutunu büyütür. TypeScript ile tip güvenliği sağlarken tree-shaking ile gereksiz kodu build\'den çıkarıyorum.',
          'FiveM scriptlerinde de aynı mantık geçerli: çalışan kod yeterli, süs değil.',
        ],
      },
      {
        heading: '3. Mobil öncelikli düşünün',
        paragraphs: [
          'Trafiğin büyük kısmı mobilden geliyor. Performans testlerini yalnızca masaüstünde değil, gerçek mobil cihaz ve yavaş bağlantı simülasyonuyla yapıyorum.',
          'Responsive tasarım sadece küçültülmüş masaüstü değil; dokunmatik kullanım, okunabilir font boyutu ve hızlı etkileşim demek.',
        ],
      },
      {
        heading: '4. CDN ve önbellek kullanın',
        paragraphs: [
          'Statik dosyalar için CDN, tarayıcı önbelleği ve uygun cache header\'ları tekrar ziyaretlerde siteyi anında açılır hale getirir. Vercel gibi platformlar bu konuda büyük kolaylık sağlıyor.',
        ],
      },
      {
        heading: '5. Düzenli ölçüm yapın',
        paragraphs: [
          'Lighthouse ve PageSpeed Insights ile periyodik kontrol yapıyorum. Performans bir kez yapılıp unutulan iş değil; içerik eklendikçe tekrar gözden geçirilmesi gereken sürekli bir süreç.',
          'Hızlı site = daha iyi SEO + daha yüksek dönüşüm. Müşterilerime teslim ettiğim sitelerde bu ikisini de hedefliyorum. Sizin projeniz için de aynı özeni göstermeye hazırım.',
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

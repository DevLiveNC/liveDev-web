export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'script-dunyasindan-webe',
    title: "Script Dünyasından Web'e: 8 Yıllık Yolculuğum",
    excerpt:
      "Oyun scriptlerinde başlayan kodlama serüvenim nasıl profesyonel web geliştirmeye dönüştü? Sekiz yıllık deneyimden öğrendiklerim ve freelance'a geçiş hikayem.",
    date: '12 Mayıs 2026',
    readTime: '6 dk',
    category: 'Deneyim',
    gradient: 'from-sky-500 to-blue-600',
    content: [
      {
        paragraphs: [
          'Kod yazmaya başladığım günlerde elimde bir IDE ve bitmek bilmeyen bir merak vardı. Oyun scriptleri, küçük projeler ve sürekli deneme-yanılma… Sekiz yıl sonra baktığımda aynı merak hâlâ duruyor; sadece hedefler ve araçlar değişti.',
          'Script dünyasında öğrendiğim en büyük ders şuydu: her satır kod bir amaca hizmet etmeli. Bu bakış açısı, web geliştirmeye geçtiğimde işimi kökten değiştirdi.',
        ],
      },
      {
        heading: 'Scriptten web\'e geçiş',
        paragraphs: [
          'Web tarafına geçiş spontane olmadı. Önce küçük landing page\'ler, ardından kişisel siteler, sonra freelance projeler geldi. Üç yıldır profesyonel olarak web geliştirme yapıyorum ve her proje bana script dünyasından getirdiğim disiplini hatırlatıyor.',
          'FiveM gibi niş alanlarda detaylı kod yazmak, karmaşık yapıları parçalara ayırmayı öğretti. Web\'de de aynı mantık geçerli: bileşenler, modüller, okunabilir dosya yapısı.',
        ],
      },
      {
        heading: 'Freelance\'a adım atmak',
        paragraphs: [
          'Tek başına çalışmak, projenin başından sonuna senin sorumluluğunda olması demek. Bu korkutucu olabilir ama aynı zamanda özgürleştirici. Müşteriyle doğrudan iletişim kurmak, hızlı geri bildirim almak ve çözümü anında uygulamak freelance\'ın en büyük avantajı.',
          'Bugün şirket sitesinden e-ticarete, kişisel blogdan kurs platformuna kadar geniş bir yelpazede çalışıyorum. Ortak nokta hepsinde aynı: temiz kod, hızlı teslim ve dürüst iletişim.',
        ],
      },
      {
        heading: 'Son söz',
        paragraphs: [
          'Sekiz yıl önce başladığım yolculuk hâlâ devam ediyor. Script dünyasından web\'e geçiş bir kopuş değil, birikimin yeni alana taşınmasıydı. Eğer siz de benzer bir yoldaysanız: merakınızı kaybetmeyin, öğrenmeye devam edin. Satırlarınız bol olsun.',
        ],
      },
    ],
  },
  {
    slug: 'ekrenfit-spor-kocu-sitesi',
    title: 'Spor Koçu Sitesi Nasıl Tasarlanır? EkrenFit Projesi',
    excerpt:
      'Profesyonel fitness koçu Ali Ekren için hazırladığım EkrenFit sitesinde paketler, dönüşüm hikayeleri ve iletişim formunu nasıl kurguladım? Gerçek bir proje üzerinden anlatım.',
    date: '28 Nisan 2026',
    readTime: '5 dk',
    category: 'Proje',
    gradient: 'from-indigo-500 to-sky-500',
    content: [
      {
        paragraphs: [
          'EkrenFit (fitekren.org), profesyonel fitness koçu Ali Ekren\'in kişisel marka sitesi. Projenin amacı yalnızca güzel görünmek değil; ziyaretçiyi danışan adayına dönüştürmekti.',
          'Spor koçu sitelerinde en kritik üç unsur: güven, dönüşüm kanıtı ve net bir iletişim yolu. Tasarımı bu üç eksen etrafında kurguladım.',
        ],
      },
      {
        heading: 'Ana sayfa ve güven unsuru',
        paragraphs: [
          'Hero bölümünde koçun deneyimi, başarı oranı ve mutlu danışan sayısı hemen görünür olmalı. Ziyaretçi 3 saniye içinde "Bu kişi bana uygun mu?" sorusuna cevap arıyor.',
          'Ali Ekren\'in hikâyesi, sertifikaları ve yarışma geçmişi ayrı bir bölümde detaylandırıldı. Güven, abartılı vaatlerle değil; gerçek deneyimle inşa edilir.',
        ],
      },
      {
        heading: 'Paketler ve dönüşüm hikayeleri',
        paragraphs: [
          'Starter, Pro ve Elite paketleri net fiyatlandırma ve özellik karşılaştırmasıyla sunuldu. "En popüler" etiketi karar vermeyi kolaylaştırıyor.',
          'Dönüşüm hikayeleri bölümü sitenin en güçlü satış argümanı. Önce-sonra metrikleri, gerçek yorumlar ve isimler sosyal kanıt sağlıyor. Potansiyel danışan kendini bu hikâyelerde görebilmeli.',
        ],
      },
      {
        heading: 'İletişim formu',
        paragraphs: [
          'Form alanları minimumda tutuldu: ad, telefon, hedef, paket tercihi. Her alan bir adım daha yaklaştırıyor; gereksiz alan doldurmak ziyaretçiyi kaçırır.',
          'WhatsApp ve Instagram entegrasyonu alternatif iletişim kanalları olarak eklendi. Sonuç: ziyaretçi istediği yoldan koça ulaşabiliyor.',
        ],
      },
    ],
  },
  {
    slug: 'freelance-iletisim',
    title: 'Freelance Web Geliştirmede İletişim Neden Her Şeydir?',
    excerpt:
      'Tek başına çalışan bir geliştirici olarak hızlı teslim ve özenli ilginin sırrı: sürekli iletişim. Müşteri memnuniyetini artıran pratik ipuçları.',
    date: '15 Nisan 2026',
    readTime: '4 dk',
    category: 'Freelance',
    gradient: 'from-blue-500 to-indigo-600',
    content: [
      {
        paragraphs: [
          'Freelance dünyasında teknik yetenek taban kriter; farkı ise iletişim yaratıyor. Müşteri kodunuzun ne kadar temiz olduğunu göremeyebilir ama sizin ne kadar ulaşılabilir olduğunuzu her an hisseder.',
          'Benim için iletişim lüks değil, standart. Proje başladığı andan teslimata kadar düzenli güncelleme paylaşıyorum.',
        ],
      },
      {
        heading: 'Sürekli iletişimin faydaları',
        paragraphs: [
          'Kısa mesajlar, ekran görüntüleri ve ara onaylar büyük sürprizleri önler. Müşteri "tam istediğim gibi olmadı" demeden önce yönü birlikte düzeltme şansımız olur.',
          'Tek başına çalıştığım için müşterim doğrudan benimle konuşuyor — arada ajans, proje yöneticisi veya bilgi kaybı yok. Bu hız ve netlik müşteri memnuniyetini doğrudan artırıyor.',
        ],
      },
      {
        heading: 'Pratik ipuçları',
        paragraphs: [
          'Proje başında beklentileri yazılı netleştirin. Teslim tarihlerini gerçekçi verin, erken bitirirseniz sürpriz olur — geç kalırsanız güven kaybedersiniz.',
          'Sorun çıktığında saklamayın; çözüm önerisiyle birlikte paylaşın. Dürüstlük kısa vadede zor, uzun vadede en güçlü referansınız olur.',
        ],
      },
    ],
  },
  {
    slug: 'web-sitesi-performans-ipuclari',
    title: 'Web Sitesi Performansı: Hızlı Yüklenmenin 5 Altın Kuralı',
    excerpt:
      'Ziyaretçiler yavaş siteleri terk eder. React ve modern araçlarla performans optimizasyonu için uyguladığım 5 pratik kural.',
    date: '3 Nisan 2026',
    readTime: '5 dk',
    category: 'Teknik',
    gradient: 'from-cyan-500 to-blue-600',
    content: [
      {
        paragraphs: [
          'Güzel tasarım tek başına yetmez. Site 3 saniyeden uzun sürede açılıyorsa ziyaretçinin büyük kısmı sayfayı kapatır. Performans, kullanıcı deneyiminin görünmeyen ama en kritik parçasıdır.',
        ],
      },
      {
        heading: '1. Görselleri optimize edin',
        paragraphs: [
          'Ham fotoğrafları doğrudan yüklemeyin. WebP formatı, uygun boyutlandırma ve lazy loading ile sayfa ağırlığını ciddi oranda düşürebilirsiniz.',
          'Portfolyo ve proje ön izlemelerinde bu fark özellikle belirgin. EkrenFit projesinde de tüm görseller optimize edilmiş boyutlarda sunuluyor.',
        ],
      },
      {
        heading: '2. Gereksiz kod yükünden kaçının',
        paragraphs: [
          'Kullanmadığınız kütüphaneleri projeye dahil etmeyin. Her paket build boyutunu büyütür. Tree-shaking ve code splitting ile yalnızca gerekli kodu yükleyin.',
        ],
      },
      {
        heading: '3. CDN ve önbellek kullanın',
        paragraphs: [
          'Statik dosyalar için CDN, tarayıcı önbelleği ve uygun cache header\'ları tekrar ziyaretlerde siteyi anında açılır hale getirir.',
        ],
      },
      {
        heading: '4. Mobil öncelikli test',
        paragraphs: [
          'Trafiğin büyük kısmı mobilden geliyor. Performans testlerini masaüstünde değil, gerçek mobil cihaz ve yavaş bağlantı simülasyonuyla yapın.',
        ],
      },
      {
        heading: '5. Düzenli ölçüm',
        paragraphs: [
          'Lighthouse, PageSpeed Insights veya benzeri araçlarla periyodik kontrol yapın. Performans bir kez yapılıp unutulan iş değil; içerik eklendikçe tekrar gözden geçirilmesi gereken sürekli bir süreç.',
          'Hızlı site = daha iyi SEO + daha yüksek dönüşüm. Bu iki sonuç, performansa yatırım yapmak için yeterli sebep.',
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

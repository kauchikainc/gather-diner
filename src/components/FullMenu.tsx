import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

// ホットドッグメニュー（画像あり）
const hotDogs = [
  {
    id: 1,
    name: "レギュラードッグ",
    description: "シンプルなホットドッグ。ケチャップ＆マスタード",
    setPrice: "¥500",
    singlePrice: "¥300",
    image: "/images/regular_dog.jpg",
    tag: "定番"
  },
  {
    id: 2,
    name: "サルサチーズドッグ",
    description: "スパイシーなサルサソースととろけるチーズ",
    setPrice: "¥950",
    singlePrice: "¥750",
    image: "/images/salsa_cheese_dog.jpg",
    tag: "人気"
  },
  {
    id: 3,
    name: "テリヤキドッグ",
    description: "甘辛テリヤキソースと特製マヨネーズ",
    setPrice: "¥790",
    singlePrice: "¥590",
    image: "/images/teriyaki_dog.jpg"
  },
  {
    id: 4,
    name: "チリミートドッグ",
    description: "スパイシーなチリミートをたっぷりトッピング",
    setPrice: "¥950",
    singlePrice: "¥750",
    image: "/images/chili_meat_dog.jpg",
    tag: "ボリューム"
  },
  {
    id: 5,
    name: "コールスロードッグ",
    description: "さっぱりコールスローでヘルシーに",
    setPrice: "¥790",
    singlePrice: "¥590",
    image: "/images/coleslaw_dog.jpg"
  },
  {
    id: 6,
    name: "HLTドッグ",
    description: "ハム・レタス・トマトの王道トリオ",
    setPrice: "¥850",
    singlePrice: "¥650",
    image: "/images/hlt_dog.jpg"
  },
  {
    id: 7,
    name: "アボカドドッグ",
    description: "クリーミーなアボカドとフレッシュ野菜",
    setPrice: "¥990",
    singlePrice: "¥790",
    image: "/images/avocado_dog.jpg",
    tag: "ヘルシー"
  },
  {
    id: 8,
    name: "ナツミドッグ",
    description: "店長おすすめの特製ドッグ",
    setPrice: "¥990",
    singlePrice: "¥790",
    image: "/images/natsumi_dog.jpg",
    tag: "おすすめ"
  }
];

// ドリンクメニュー（画像なし）
const drinks = [
  { id: 101, name: "コーラ", price: "¥200" },
  { id: 102, name: "ジンジャーエール", price: "¥200" },
  { id: 103, name: "烏龍茶", price: "¥200" },
  { id: 104, name: "アップル", price: "¥200" },
  { id: 105, name: "オレンジ", price: "¥200" },
  { id: 106, name: "緑茶", price: "¥200" }
];

// サイドメニュー（画像なし）
const sides = [
  { id: 201, name: "ポテト", price: "¥300", note: "+50円でシャカシャカ変更" },
  { id: 202, name: "ナゲット", price: "¥300" },
  { id: 203, name: "コールスロー", price: "¥300" }
];

// トッピング（画像なし）
const toppings = [
  { id: 301, name: "オニオン", price: "¥50" },
  { id: 302, name: "ピクルス", price: "¥50" },
  { id: 303, name: "スライスチーズ", price: "¥50" },
  { id: 304, name: "オリーブ", price: "¥50" }
];

// ホットドッグアイテムコンポーネント（画像付き）
interface HotDogItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    setPrice: string;
    singlePrice: string;
    image: string;
    tag?: string;
  };
}

function HotDogItem({ item }: HotDogItemProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border-4 border-black hover:border-[#ff0000] transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Badge */}
        {item.tag && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#ff0000] text-white border-2 border-white shadow-lg" style={{ fontWeight: 900 }}>
              {item.tag}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-white">
        <h3 className="text-black mb-2" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
          {item.name}
        </h3>
        <p className="text-black/70 text-sm mb-4" style={{ fontWeight: 500 }}>
          {item.description}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
              セット {item.setPrice}
            </span>
            <span className="text-black/60 text-sm" style={{ fontWeight: 700 }}>
              単品 {item.singlePrice}
            </span>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-4 h-2 w-full bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      </div>
    </div>
  );
}

// シンプルなメニューアイテム（画像なし）
interface SimpleItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    note?: string;
  };
}

function SimpleItem({ item }: SimpleItemProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b-2 border-black/10 last:border-b-0">
      <div>
        <span className="text-black" style={{ fontWeight: 700, fontSize: '1rem' }}>
          {item.name}
        </span>
        {item.note && (
          <span className="text-[#58c6ca] text-sm ml-2" style={{ fontWeight: 500 }}>
            ({item.note})
          </span>
        )}
      </div>
      <span className="text-[#ff0000]" style={{ fontWeight: 900, fontSize: '1rem' }}>
        {item.price}
      </span>
    </div>
  );
}

export function FullMenu() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 10px, transparent 10px, transparent 20px)',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4 bg-[#f5b91f] text-white px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span style={{ fontWeight: 900 }}>★ FULL MENU ★</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '4px 4px 0px #000' }}>
              メニュー
            </span>
          </h1>
          <p className="text-black text-lg max-w-2xl mx-auto mb-6" style={{ fontWeight: 500 }}>
            こだわりのホットドッグをお楽しみください
          </p>
          <div className="bg-white border-4 border-[#ff0000] rounded-lg py-4 px-6 inline-block shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <p className="text-[#ff0000]" style={{ fontWeight: 900 }}>
              営業時間 11:00 ~ 19:00 (L.O 18:30) | セット: ポテト/ドリンク付き
            </p>
          </div>
        </div>
      </section>

      {/* Hot Dogs Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-black mb-2" style={{ fontWeight: 900 }}>
            ホットドッグ
          </h2>
          <p className="text-black/60" style={{ fontWeight: 500 }}>
            セット: ポテト/ドリンク付き
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotDogs.map((item) => <HotDogItem key={item.id} item={item} />)}
        </div>
      </section>

      {/* Drinks & Sides Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drinks */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl text-black mb-4 text-center border-b-4 border-[#58c6ca] pb-3" style={{ fontWeight: 900 }}>
                ドリンク
              </h3>
              <p className="text-center text-[#58c6ca] mb-4" style={{ fontWeight: 700 }}>
                各 ¥200
              </p>
              <div>
                {drinks.map((item) => (
                  <div key={item.id} className="py-2 text-center">
                    <span className="text-black" style={{ fontWeight: 600 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sides */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl text-black mb-4 text-center border-b-4 border-[#f5b91f] pb-3" style={{ fontWeight: 900 }}>
                サイド
              </h3>
              <p className="text-center text-[#f5b91f] mb-4" style={{ fontWeight: 700 }}>
                各 ¥300
              </p>
              <div>
                {sides.map((item) => (
                  <SimpleItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Toppings */}
            <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl text-black mb-4 text-center border-b-4 border-[#ff0000] pb-3" style={{ fontWeight: 900 }}>
                トッピング
              </h3>
              <p className="text-center text-[#ff0000] mb-4" style={{ fontWeight: 700 }}>
                各 ¥50
              </p>
              <div>
                {toppings.map((item) => (
                  <div key={item.id} className="py-2 text-center">
                    <span className="text-black" style={{ fontWeight: 600 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#ff0000] to-[#f5b91f] rounded-lg p-8 border-8 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 900 }}>
            お腹が空きましたか？
          </h3>
          <p className="text-white/90 mb-6" style={{ fontWeight: 700 }}>
            こだわりのホットドッグをお楽しみください！<br />
            お気軽にお越しください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/gather_1206/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ fontWeight: 900 }}
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@gather_kushiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ fontWeight: 900 }}
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

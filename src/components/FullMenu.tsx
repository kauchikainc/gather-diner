import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const burgers = [
  {
    id: 1,
    name: "クラシックバーガー",
    description: "100%ビーフパティ、レタス、トマト、オニオン、ピクルス、特製ソース",
    price: "¥980",
    image: "https://images.unsplash.com/photo-1627781962452-6b468257844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMGx1bmNofGVufDF8fHx8MTc2MjIyMjAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "人気No.1"
  },
  {
    id: 2,
    name: "ダブルチーズバーガー",
    description: "ダブルビーフパティ、チェダーチーズ2枚、特製ソース",
    price: "¥1,280",
    image: "https://images.unsplash.com/photo-1591336277932-f0579b75992b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwaGFtYnVyZ2VyJTIwZnJpZXN8ZW58MXx8fHwxNzYyMjIxNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "シェフのおすすめ"
  },
  {
    id: 3,
    name: "ベーコンチーズバーガー",
    description: "カリカリ���ーコン、チェダーチーズ、BBQソース",
    price: "¥1,180",
    image: "https://images.unsplash.com/photo-1627781962452-6b468257844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMGx1bmNofGVufDF8fHx8MTc2MjIyMjAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "ベジタリアンバーガー",
    description: "野菜パティ、アボカド、トマト、レタス、ハニーマスタード",
    price: "¥880",
    image: "https://images.unsplash.com/photo-1591336277932-f0579b75992b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwaGFtYnVyZ2VyJTIwZnJpZXN8ZW58MXx8fHwxNzYyMjIxNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ヘルシー"
  }
];

const sandwiches = [
  {
    id: 5,
    name: "クラブサンドイッチ",
    description: "ターキー、ベーコン、レタス、トマト、マヨネーズ（3層仕立て）",
    price: "¥880",
    image: "https://images.unsplash.com/photo-1586657380587-03c180421819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGx1bmNoJTIwcGxhdGV8ZW58MXx8fHwxNzYyMjIyMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ヘルシー"
  },
  {
    id: 6,
    name: "BLTサンドイッチ",
    description: "ベーコン、レタス、トマト、マヨネーズ",
    price: "¥780",
    image: "https://images.unsplash.com/photo-1586657380587-03c180421819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGx1bmNoJTIwcGxhdGV8ZW58MXx8fHwxNzYyMjIyMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const mains = [
  {
    id: 7,
    name: "フライドチキンプレート",
    description: "サクサクフライドチキン、フライドポテト、コールスロー",
    price: "¥1,080",
    image: "https://images.unsplash.com/photo-1761245193924-53a5a4bed9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGRpbmVyJTIwZm9vZHxlbnwxfHx8fDE3NjIyMjE3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ボリューム満点"
  },
  {
    id: 8,
    name: "ホットドッグ",
    description: "ジューシーソーセージ、ケチャップ、マスタード、ザワークラウト",
    price: "¥680",
    image: "https://images.unsplash.com/photo-1596622453830-e8708f40b0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBkb2clMjBhbWVyaWNhbnxlbnwxfHx8fDE3NjIxNjM0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 9,
    name: "パンケーキセット",
    description: "フワフワパンケーキ3枚、メープルシロップ、バター",
    price: "¥780",
    image: "https://images.unsplash.com/photo-1636743713732-125909a35dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3NjIyMTUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const sides = [
  {
    id: 10,
    name: "フライドポテト",
    description: "カリカリゴールデンポテト",
    price: "¥380",
    image: "https://images.unsplash.com/photo-1654921802159-9f1d368ed556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllcyUyMHNpZGUlMjBkaXNofGVufDF8fHx8MTc2MjE1NDUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 11,
    name: "オニオンリング",
    description: "サクサクオニオンリング",
    price: "¥420",
    image: "https://images.unsplash.com/photo-1625937759420-26d7e003e04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbiUyMHJpbmdzJTIwZnJpZWR8ZW58MXx8fHwxNzYyMjIyNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 12,
    name: "ガーデンサラダ",
    description: "新鮮野菜とドレッシング",
    price: "¥480",
    image: "https://images.unsplash.com/photo-1677653805080-59c57727c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGZyZXNoJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjIxNjQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ヘルシー"
  }
];

const drinks = [
  {
    id: 13,
    name: "ストロベリーシェイク",
    description: "濃厚クリーミーシェイク",
    price: "¥480",
    image: ""
  },
  {
    id: 14,
    name: "バニラシェイク",
    description: "クラシックバニラ",
    price: "¥480",
    image: ""
  },
  {
    id: 15,
    name: "コーラ",
    description: "氷たっぷり",
    price: "¥280",
    image: "https://images.unsplash.com/photo-1698811430329-8804750d8b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmtzJTIwcmV0cm98ZW58MXx8fHwxNzYyMjIyNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 16,
    name: "レモネード",
    description: "自家製フレッシュレモネード",
    price: "¥380",
    image: "https://images.unsplash.com/photo-1698811430329-8804750d8b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmtzJTIwcmV0cm98ZW58MXx8fHwxNzYyMjIyNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    tag?: string;
  };
}

function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="group relative bg-[#fef6e4] rounded-lg overflow-hidden border-4 border-[#58c6ca] hover:border-[#ff0000] transition-all duration-300 hover:shadow-2xl hover:scale-105 break-inside-avoid mb-8">
      {/* Image or Placeholder */}
      {item.image && item.image.trim() !== '' ? (
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fef6e4] to-transparent"></div>

          {/* Badge */}
          {item.tag && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#ff0000] text-white border-2 border-white shadow-lg" style={{ fontWeight: 900 }}>
                {item.tag}
              </Badge>
            </div>
          )}
        </div>
      ) : null}

      {/* Content */}
      <div className="p-6 bg-white">
        {/* 画像なしの場合はバッジをここに表示 */}
        {!item.image && item.tag && (
          <div className="mb-3">
            <Badge className="bg-[#ff0000] text-white border-2 border-white shadow-lg" style={{ fontWeight: 900 }}>
              {item.tag}
            </Badge>
          </div>
        )}

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[#1d3557]" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
            {item.name}
          </h3>
          <span className="text-[#ff0000] whitespace-nowrap ml-4" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
            {item.price}
          </span>
        </div>
        <p className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 500 }}>
          {item.description}
        </p>

        {/* Decorative Line */}
        <div className="mt-4 h-2 w-full bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      </div>
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
              フルメニュー
            </span>
          </h1>
          <p className="text-black text-lg max-w-2xl mx-auto mb-6" style={{ fontWeight: 500 }}>
            新鮮な食材と伝統的なレシピで作る、本物のアメリカンフード
          </p>
          <div className="bg-white border-4 border-[#ff0000] rounded-lg py-4 px-6 inline-block shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <p className="text-[#ff0000]" style={{ fontWeight: 900 }}>
              🕐 ランチタイム 11:00-15:00 | ランチセット（ドリンク＋サイド）+¥200
            </p>
          </div>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <Tabs defaultValue="burgers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-12 bg-transparent h-auto p-0">
            <TabsTrigger
              value="burgers"
              className="data-[state=active]:bg-[#ff0000] data-[state=active]:text-white bg-white text-black border-3 border-black py-3 rounded-lg data-[state=active]:border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 900 }}
            >
              🍔 バーガー
            </TabsTrigger>
            <TabsTrigger
              value="sandwiches"
              className="data-[state=active]:bg-[#ff0000] data-[state=active]:text-white bg-white text-black border-3 border-black py-3 rounded-lg data-[state=active]:border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 900 }}
            >
              🥪 サンドイッチ
            </TabsTrigger>
            <TabsTrigger
              value="mains"
              className="data-[state=active]:bg-[#ff0000] data-[state=active]:text-white bg-white text-black border-3 border-black py-3 rounded-lg data-[state=active]:border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 900 }}
            >
              🍗 メイン
            </TabsTrigger>
            <TabsTrigger
              value="sides"
              className="data-[state=active]:bg-[#ff0000] data-[state=active]:text-white bg-white text-black border-3 border-black py-3 rounded-lg data-[state=active]:border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 900 }}
            >
              🍟 サイド
            </TabsTrigger>
            <TabsTrigger
              value="drinks"
              className="data-[state=active]:bg-[#ff0000] data-[state=active]:text-white bg-white text-black border-3 border-black py-3 rounded-lg data-[state=active]:border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 900 }}
            >
              🥤 ドリンク
            </TabsTrigger>
          </TabsList>

          <TabsContent value="burgers">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {burgers.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
          </TabsContent>

          <TabsContent value="sandwiches">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {sandwiches.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
          </TabsContent>

          <TabsContent value="mains">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {mains.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
          </TabsContent>

          <TabsContent value="sides">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {sides.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
          </TabsContent>

          <TabsContent value="drinks">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {drinks.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#ff0000] to-[#f5b91f] rounded-lg p-8 border-8 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 900 }}>
            お腹が空きましたか？
          </h3>
          <p className="text-white/90 mb-6" style={{ fontWeight: 700 }}>
            美味しいアメリカンランチをお楽しみください！<br />
            お気軽にお越しください。
          </p>
          <a
            href="tel:03-1234-5678"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ fontWeight: 900 }}
          >
            📞 03-1234-5678
          </a>
        </div>
      </section>
    </div>
  );
}

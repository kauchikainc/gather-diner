import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface MenuProps {
  onNavigate?: (page: string) => void;
}

const menuItems = [
  {
    id: 1,
    name: "クラシックバーガー",
    description: "100%ビーフパティ、レタス、トマト、特製ソース",
    price: "¥980",
    image: "https://images.unsplash.com/photo-1627781962452-6b468257844b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMGx1bmNofGVufDF8fHx8MTc2MjIyMjAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ランチ人気No.1"
  },
  {
    id: 2,
    name: "クラブサンドイッチ",
    description: "ターキー、ベーコン、レタス、トマト、3層仕立て",
    price: "¥880",
    image: "https://images.unsplash.com/photo-1586657380587-03c180421819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGx1bmNoJTIwcGxhdGV8ZW58MXx8fHwxNzYyMjIyMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ヘルシー"
  },
  {
    id: 3,
    name: "ダブルチーズバーガー",
    description: "ダブルパティ、チェダーチーズ2枚、特製ソース",
    price: "¥1,280",
    image: "https://images.unsplash.com/photo-1591336277932-f0579b75992b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwaGFtYnVyZ2VyJTIwZnJpZXN8ZW58MXx8fHwxNzYyMjIxNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "シェフのおすすめ"
  },
  {
    id: 4,
    name: "フライドチキンプレート",
    description: "サクサクフライドチキン、フライドポテト、コールスロー",
    price: "¥1,080",
    image: "https://images.unsplash.com/photo-1761245193924-53a5a4bed9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGRpbmVyJTIwZm9vZHxlbnwxfHx8fDE3NjIyMjE3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ボリューム満点"
  },
  {
    id: 5,
    name: "ベジタリアンバーガー",
    description: "野菜パティ、アボカド、トマト、レタス",
    price: "¥880",
    image: "",
    tag: "NEW"
  },
  {
    id: 6,
    name: "ストロベリーシェイク",
    description: "濃厚クリーミーな自家製ミルクシェイク",
    price: "¥480",
    image: "",
    tag: "デザート"
  }
];

export function Menu({ onNavigate }: MenuProps = {}) {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 10px, transparent 10px, transparent 20px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#f5b91f] text-white px-6 py-2 rounded-full border-4 border-white shadow-lg transform -rotate-2">
            <span style={{ fontWeight: 900 }}>★ LUNCH MENU ★</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '4px 4px 0px #58c6ca' }}>
              ランチメニュー
            </span>
          </h2>
          <p className="text-[#1d3557] text-lg max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
            新鮮な食材と伝統的なレシピで作る、本物のアメリカンランチ
          </p>
        </div>

        {/* Lunch Time Highlight */}
        <div className="mb-12 text-center bg-gradient-to-r from-[#fef6e4] via-[#f5b91f]/20 to-[#fef6e4] border-4 border-[#ff0000] rounded-lg py-6 shadow-xl">
          <p className="text-2xl text-[#1d3557] mb-2" style={{ fontWeight: 900 }}>
            🕐 ランチタイム: 11:00 - 15:00
          </p>
          <p className="text-[#ff0000]" style={{ fontWeight: 700 }}>
            ランチセット: ドリンク＋サイド付き +¥200
          </p>
        </div>

        {/* Menu Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#fef6e4] rounded-lg overflow-hidden border-4 border-[#58c6ca] hover:border-[#ff0000] transition-all duration-300 hover:shadow-2xl hover:scale-105 break-inside-avoid mb-8"
            >
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
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate?.('menu')}
            className="px-8 py-4 bg-[#58c6ca] hover:bg-[#21867a] text-white border-4 border-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            style={{ fontWeight: 900 }}
          >
            フルメニューを見る
          </button>
        </div>
      </div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#58c6ca] via-[#f5b91f] to-[#ff0000]"></div>
    </section>
  );
}

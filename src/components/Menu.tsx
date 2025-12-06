interface MenuProps {
  onNavigate?: (page: string) => void;
}

// トップページのメニューセクション
// メニュー詳細はFullMenuページで表示
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
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-[#f5b91f] text-white px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span style={{ fontWeight: 900 }}>★ MENU ★</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '4px 4px 0px #58c6ca' }}>
              メニュー
            </span>
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
            こだわりのホットドッグとサイドメニューをご用意しています
          </p>
        </div>

        {/* View Menu Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate?.('menu')}
            className="px-12 py-6 bg-[#ff0000] hover:bg-[#cc0000] text-white border-4 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ fontWeight: 900, fontSize: '1.5rem' }}
          >
            メニューを見る
          </button>
        </div>
      </div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#58c6ca] via-[#f5b91f] to-[#ff0000]"></div>
    </section>
  );
}

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#fef6e4] to-white relative overflow-hidden">
      {/* Retro Dots Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ff0000 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border-8 border-white shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758558304634-c3f55ba89137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYW1lcmljYW4lMjBkaW5lcnxlbnwxfHx8fDE3NjIyMjIwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Retro Burger Bar"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#ff0000] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center border-8 border-white shadow-2xl transform rotate-12">
              <span className="text-3xl" style={{ fontWeight: 900 }}>40</span>
              <span className="text-sm" style={{ fontWeight: 700 }}>YEARS</span>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#f5b91f] rounded-full border-4 border-white"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#58c6ca] rounded-full border-4 border-white"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <span className="text-[#58c6ca] tracking-widest mb-4 inline-block bg-white px-4 py-2 rounded-full border-3 border-[#58c6ca] shadow-lg" style={{ fontWeight: 900 }}>
                ★ ABOUT US ★
              </span>
              <h2 className="text-4xl md:text-5xl mb-6">
                <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #58c6ca' }}>
                  私たちの
                </span>
                <br />
                <span className="text-[#f5b91f]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #ff0000' }}>
                  ストーリー
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#1d3557]">
              <p className="text-lg" style={{ fontWeight: 500 }}>
                1985年、ロサンゼルスのサンセット・ブールバードに小さなダイナーとして誕生したレトロバーガーバー。創業者のジョンとメアリーは、本物のアメリカンドリームと伝統的な味を提供することを夢見ていました。
              </p>
              <p className="text-lg" style={{ fontWeight: 500 }}>
                40年以上経った今でも、私たちは同じレシピ、同じ情熱、そして80年代の素晴らしい雰囲気を大切にしています。毎朝新鮮な食材を仕入れ、すべてのバーガーは愛情を込めて作られています。
              </p>
              <p className="text-lg bg-[#f5b91f]/10 p-4 rounded-lg border-l-4 border-[#f5b91f]" style={{ fontWeight: 600 }}>
                特にランチタイムは、地元の方々や観光客で賑わい、アットホームな雰囲気の中で美味しいランチをお楽しみいただけます。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center bg-white p-4 rounded-lg border-4 border-[#ff0000] shadow-lg">
                <div className="text-3xl text-[#ff0000] mb-2" style={{ fontWeight: 900 }}>
                  10万+
                </div>
                <div className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 700 }}>
                  満足したお客様
                </div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg border-4 border-[#f5b91f] shadow-lg">
                <div className="text-3xl text-[#f5b91f] mb-2" style={{ fontWeight: 900 }}>
                  50+
                </div>
                <div className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 700 }}>
                  メニュー
                </div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg border-4 border-[#58c6ca] shadow-lg">
                <div className="text-3xl text-[#58c6ca] mb-2" style={{ fontWeight: 900 }}>
                  100%
                </div>
                <div className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 700 }}>
                  品質保証
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

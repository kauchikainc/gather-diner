import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background - Black Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 20px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white bg-[#58c6ca] tracking-widest mb-4 inline-block px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-2" style={{ fontWeight: 900 }}>
            ★ LOCATION ★
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #000' }}>
              ご来店を
            </span>
            <br />
            <span className="text-black" style={{ fontWeight: 900, textShadow: '3px 3px 0px #58c6ca' }}>
              お待ちしています
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white border-4 border-[#ff0000] rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <div className="bg-[#ff0000] p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-black mb-2" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                    住所
                  </h3>
                  <p className="text-black/70" style={{ fontWeight: 500 }}>
                    〒150-0001<br />
                    東京都渋谷区神宮前1-2-3<br />
                    サンセットビル1F
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white border-4 border-[#f5b91f] rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <div className="bg-[#f5b91f] p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-black mb-2" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                    電話番号
                  </h3>
                  <p className="text-black text-xl" style={{ fontWeight: 900 }}>
                    03-1234-5678
                  </p>
                  <p className="text-black/60 text-sm mt-1" style={{ fontWeight: 500 }}>
                    予約・お問い合わせ受付中
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-4 border-[#58c6ca] rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <div className="bg-[#58c6ca] p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black mb-3" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                    営業時間
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-[#ff0000] text-white px-3 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                      <div className="flex justify-between items-center">
                        <span style={{ fontWeight: 700 }}>ランチタイム</span>
                        <span style={{ fontWeight: 900 }}>11:00 - 15:00</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-black/70" style={{ fontWeight: 500 }}>
                      <span>ディナータイム</span>
                      <span className="text-black" style={{ fontWeight: 700 }}>17:00 - 22:00</span>
                    </div>
                    <div className="text-sm text-[#ff0000] mt-3 bg-[#ff0000]/10 p-2 rounded border-2 border-[#ff0000]" style={{ fontWeight: 700 }}>
                      ※ 定休日: 火曜日
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-white border-8 border-black rounded-lg overflow-hidden h-full min-h-[400px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-[#ff0000] mx-auto" />
                  <p className="text-black" style={{ fontWeight: 900, fontSize: '1.25rem' }}>
                    Google Maps
                  </p>
                  <div className="bg-white px-6 py-4 rounded-lg border-4 border-[#58c6ca] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <p className="text-black mb-2" style={{ fontWeight: 700 }}>
                      🚶 アクセス
                    </p>
                    <p className="text-black/70 text-sm" style={{ fontWeight: 500 }}>
                      渋谷駅から徒歩5分<br />
                      表参道駅から徒歩8分
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Dots - Black */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Decorative Corner Badges */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff0000] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#f5b91f] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#58c6ca] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#ff0000] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#ff0000] to-[#f5b91f] rounded-lg p-8 border-8 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 900 }}>
            🍔 ランチタイムは特にお得！ 🍔
          </h3>
          <p className="text-white/90 mb-6" style={{ fontWeight: 700 }}>
            ランチセット（ドリンク＋サイド付き）がお得な価格で楽しめます。<br />
            お気軽にお越しください！
          </p>
          <a
            href="tel:03-1234-5678"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ fontWeight: 900 }}
          >
            📞 03-1234-5678
          </a>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Instagram, Phone } from "lucide-react";

// TikTokアイコンコンポーネント
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

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
                    〒085-0058<br />
                    北海道釧路市愛国東3丁目1-16
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-4 border-[#f5b91f] rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <div className="bg-[#f5b91f] p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black mb-3" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                    営業時間
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-[#ff0000] text-white px-3 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                      <div className="flex justify-between items-center">
                        <span style={{ fontWeight: 700 }}>営業時間</span>
                        <span style={{ fontWeight: 900 }}>11:00 ~ 19:00</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-black/70" style={{ fontWeight: 500 }}>
                      <span>ラストオーダー</span>
                      <span className="text-black" style={{ fontWeight: 700 }}>18:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SNS Card */}
            <div className="bg-white border-4 border-[#58c6ca] rounded-lg p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <h3 className="text-black mb-4" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                SNS
              </h3>
              <div className="flex flex-col gap-3">
                  <div>
                <a
                  href="https://www.instagram.com/gather_1206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#ff0000] hover:text-[#cc0000] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <div className="bg-[#ff0000] p-2 rounded-lg border-2 border-black">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  @gather_1206
                </a>
                  </div>
                  <div>
                <a
                  href="https://www.tiktok.com/@gather_kushiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#ff0000] hover:text-[#cc0000] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <div className="bg-[#f5b91f] p-2 rounded-lg border-2 border-black">
                    <TikTokIcon className="w-4 h-4 text-white" />
                  </div>
                  @gather_kushiro
                </a>
                  </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="relative">
            <div className="bg-white border-8 border-black rounded-lg overflow-hidden h-full min-h-[400px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <iframe
                src="https://maps.google.com/maps?q=北海道釧路市愛国東3丁目1-16&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gather 店舗所在地"
              ></iframe>
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
            こだわりのホットドッグをどうぞ！
          </h3>
          <p className="text-white/90 mb-6" style={{ fontWeight: 700 }}>
            11:00 ~ 19:00 (L.O 18:30) 営業中<br />
            お気軽にお越しください！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:070-3223-3485"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ fontWeight: 900 }}
            >
              <Phone className="w-5 h-5" />
              070-3223-3485
            </a>
            <a
              href="https://www.instagram.com/gather_1206/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ fontWeight: 900 }}
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@gather_kushiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#ff0000] rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{ fontWeight: 900 }}
            >
              <TikTokIcon className="w-5 h-5" />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

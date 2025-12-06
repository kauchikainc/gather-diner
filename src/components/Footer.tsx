import { Instagram } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black relative overflow-hidden">
      {/* Decorative Top Stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>

      {/* Background Pattern - Black Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl mb-4">
              <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #f5b91f' }}>
                Gather
              </span>
            </h3>
            <p className="text-black/70 mb-4 max-w-md" style={{ fontWeight: 500 }}>
              1985年から続く、本物のアメリカンドリームの味。クラシックな雰囲気と伝統的なレシピで、特別な体験をお届けします。
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gather_1206/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#ff0000] border-4 border-black flex items-center justify-center hover:bg-[#cc0000] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@gather_kushiro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#f5b91f] border-4 border-black flex items-center justify-center hover:bg-[#e89548] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <TikTokIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black mb-4 border-b-2 border-[#ff0000] pb-2" style={{ fontWeight: 900 }}>
              クイックリンク
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/70 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
                  メニュー
                </a>
              </li>
              <li>
                <a href="#" className="text-black/70 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
                  私たちについて
                </a>
              </li>
              <li>
                <a href="#" className="text-black/70 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
                  店舗情報
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black mb-4 border-b-2 border-[#58c6ca] pb-2" style={{ fontWeight: 900 }}>
              店舗情報
            </h4>
            <ul className="space-y-2 text-black/70" style={{ fontWeight: 500 }}>
              <li>北海道釧路市愛国東3丁目1-16</li>
              <li className="text-[#ff0000]" style={{ fontWeight: 700 }}>
                営業: 11:00 ~ 19:00 (L.O 18:30)
              </li>
              <li className="mt-4 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/gather_1206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff0000] hover:text-[#cc0000] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <Instagram className="w-5 h-5" />
                  @gather_1206
                </a>
                <a
                  href="https://www.tiktok.com/@gather_kushiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff0000] hover:text-[#cc0000] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <TikTokIcon className="w-5 h-5" />
                  @gather_kushiro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black/20 text-center">
          <p className="text-black/60 text-sm" style={{ fontWeight: 500 }}>
            © 2025 Gather. All rights reserved. Since 1985.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Stripe */}
      <div className="h-2 bg-gradient-to-r from-[#58c6ca] via-[#f5b91f] to-[#ff0000]"></div>
    </footer>
  );
}

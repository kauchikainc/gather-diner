import { Instagram, Facebook, Twitter } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl mb-4">
              <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #f5b91f' }}>
                Gather
              </span>
              <span className="text-[#f5b91f]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #58c6ca' }}>
                {' '}DINER
              </span>
            </h3>
            <p className="text-black/70 mb-4 max-w-md" style={{ fontWeight: 500 }}>
              1985年から続く、本物のアメリカンドリームの味。クラシックな雰囲気と伝統的なレシピで、特別な体験をお届けします。
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#ff0000] border-4 border-black flex items-center justify-center hover:bg-[#cc0000] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#f5b91f] border-4 border-black flex items-center justify-center hover:bg-[#e89548] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#58c6ca] border-4 border-black flex items-center justify-center hover:bg-[#21867a] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Twitter className="w-6 h-6 text-white" />
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
                  ランチメニュー
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
              <li>
                <a href="tel:03-1234-5678" className="text-black/70 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black mb-4 border-b-2 border-[#58c6ca] pb-2" style={{ fontWeight: 900 }}>
              お問い合わせ
            </h4>
            <ul className="space-y-2 text-black/70" style={{ fontWeight: 500 }}>
              <li>📞 03-1234-5678</li>
              <li>✉️ info@gatherdiner.jp</li>
              <li>📍 北海道釧路市愛国東</li>
              <li className="mt-4 text-[#ff0000]" style={{ fontWeight: 700 }}>
                🕐 ランチ: 11:00-15:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black/60 text-sm" style={{ fontWeight: 500 }}>
            © 2025 Gather DINER. All rights reserved. Since 1985.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-black/60 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
              プライバシーポリシー
            </a>
            <a href="#" className="text-black/60 hover:text-[#ff0000] transition-colors" style={{ fontWeight: 500 }}>
              利用規約
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Stripe */}
      <div className="h-2 bg-gradient-to-r from-[#58c6ca] via-[#f5b91f] to-[#ff0000]"></div>
    </footer>
  );
}

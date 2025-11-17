import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps = {}) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    // 3秒後にスクロールインジケーターを非表示にする
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern - Black Grid */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758558304634-c3f55ba89137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYW1lcmljYW4lMjBkaW5lcnxlbnwxfHx8fDE3NjIyMjIwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="American Diner"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Decorative Stripes - Colorful */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#58c6ca] via-[#f5b91f] to-[#ff0000]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Retro Badge */}
        <div className="mb-8 inline-block">
          <div className="relative bg-[#ff0000] text-white px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-3">
            <span style={{ fontWeight: 900 }}>Since 1985</span>
          </div>
        </div>

        {/* Logo and Main Title */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Gather Logo"
            className="h-32 md:h-40 w-auto mb-6"
          />
          <h1 className="text-6xl md:text-8xl mb-4 tracking-wider">
            <span className="inline-block text-[#ff0000] transform -rotate-2 drop-shadow-[6px_6px_0px_rgba(245,185,31,1)]" style={{ fontWeight: 900, textShadow: '6px 6px 0px #f5b91f' }}>
              Gather
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto" style={{ fontWeight: 600 }}>
          本物のアメリカンドリームの味を体験しよう
          <br />
          クラシックな味と80年代の雰囲気
        </p>

        {/* Lunch Special Badge */}
        <div className="mb-10 inline-block bg-[#f5b91f] text-white px-8 py-3 rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <p className="text-sm" style={{ fontWeight: 700 }}>🍔 ランチタイム特別営業中！</p>
          <p className="text-2xl" style={{ fontWeight: 900 }}>11:00 - 15:00</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate?.('menu')}
            className="px-8 py-6 bg-[#ff0000] hover:bg-[#cc0000] text-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ fontWeight: 900 }}
          >
            ランチメニューを見る
          </Button>
          <a
            href="tel:03-1234-5678"
            className="px-8 py-6 bg-white hover:bg-gray-50 text-black border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px] inline-flex items-center justify-center rounded-md"
            style={{ fontWeight: 900 }}
          >
            📞 電話する
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-4 md:gap-8 px-4">
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-2xl md:text-3xl text-[#ff0000]" style={{ fontWeight: 900 }}>40年</div>
            <div className="text-xs md:text-sm text-black" style={{ fontWeight: 700 }}>伝統の味</div>
          </div>
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-2xl md:text-3xl text-[#f5b91f]" style={{ fontWeight: 900 }}>100%</div>
            <div className="text-xs md:text-sm text-black" style={{ fontWeight: 700 }}>ビーフ</div>
          </div>
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-2xl md:text-3xl text-[#58c6ca]" style={{ fontWeight: 900 }}>毎日</div>
            <div className="text-xs md:text-sm text-black" style={{ fontWeight: 700 }}>新鮮食材</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 opacity-100 animate-bounce">
          <div className="w-6 h-10 border-3 border-black rounded-full flex items-start justify-center p-2 bg-white">
            <div className="w-1 h-2 bg-black rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}

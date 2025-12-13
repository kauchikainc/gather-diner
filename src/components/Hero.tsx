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
          src="/images/logo.png"
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
            <span style={{ fontWeight: 900 }}>Since 2025</span>
          </div>
        </div>

        {/* Logo and Main Title */}
        <div className="mb-6 flex flex-col items-center">
          <h1>
            <img
              src="/images/logo-text.png"
              alt="Gather"
              className="h-64 md:h-40 w-auto"
            />
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto" style={{ fontWeight: 600 }}>
            写真映え×ガツンと旨いホットドッグ店
          <br />
            80'sアメリカ空間
        </p>

        {/* Business Hours Badge & CTA Button */}
        <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Business Hours Badge */}
          <div className="bg-[#f5b91f] text-white px-8 py-2 rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform -rotate-1 text-center">
            <p className="text-sm" style={{ fontWeight: 700 }}>OPEN</p>
            <p className="text-2xl" style={{ fontWeight: 900 }}>11:00 ~ 19:00</p>
            <p className="text-sm" style={{ fontWeight: 500 }}>L.O 18:30</p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => onNavigate?.('menu')}
            className="px-8 py-6 bg-[#ff0000] hover:bg-[#cc0000] text-white text-2xl rounded-lg border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-[-2px] hover:translate-y-[-2px] rotate-1 h-auto"
            style={{ fontWeight: 900 }}
          >
            メニューを見る
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-4 md:gap-8 px-4">
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-xl md:text-xl text-[#ff0000]" style={{ fontWeight: 900 }}>80's</div>
            <div className="text-xs md:text-sm text-black" style={{ fontWeight: 700 }}>アメリカの味</div>
          </div>
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-xl md:text-xl text-[#f5b91f]" style={{ fontWeight: 900 }}>パリッ</div>
            <div className="text-xs md:text-sm text-black" style={{ fontWeight: 700 }}>ソーセージ</div>
          </div>
          <div className="text-center bg-white px-4 py-4 md:px-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex-1 max-w-[120px] md:max-w-none">
            <div className="text-xl md:text-xl text-[#58c6ca]" style={{ fontWeight: 900 }}>毎日</div>
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

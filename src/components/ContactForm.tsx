import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram } from 'lucide-react';

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

/**
 * お問い合わせフォームページコンポーネント
 *
 * トップページのデザインに合わせた、
 * 80年代レトロ風の雰囲気を表現
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（モックアップなので送信はしない）
    console.log('フォーム送信:', formData);
    setIsSubmitted(true);

    // 3秒後に送信完了メッセージをリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 10px, transparent 10px, transparent 20px)',
        }}></div>
      </div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>

      {/* ページタイトルセクション */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center space-y-6">
          <div>
            <span className="text-white bg-[#58c6ca] tracking-widest mb-4 inline-block px-6 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ fontWeight: 900 }}>
              ★ CONTACT US ★
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '4px 4px 0px #000' }}>
              お問い合わせ
            </span>
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
            ご質問など、お気軽にお問い合わせください
          </p>
        </div>
      </div>

      {/* フォームセクション */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg p-8 md:p-12">
            {isSubmitted ? (
              // 送信完了メッセージ
              <div className="text-center py-12">
                <div
                  className="inline-block px-8 py-4 bg-[#f5b91f] text-white rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6"
                >
                  <p className="text-2xl" style={{ fontWeight: 900 }}>
                    送信完了！
                  </p>
                </div>
                <p className="text-lg text-black" style={{ fontWeight: 500 }}>
                  お問い合わせありがとうございます。<br />
                  担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              // フォーム
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* お名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-black text-lg mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    お名前 <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-black focus:border-[#ff0000] shadow-sm focus:shadow-lg transition-all text-black rounded-lg"
                    style={{ fontWeight: 500 }}
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-black text-lg mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    メールアドレス <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-black focus:border-[#ff0000] shadow-sm focus:shadow-lg transition-all text-black rounded-lg"
                    style={{ fontWeight: 500 }}
                    placeholder="example@email.com"
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-black text-lg mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    お問い合わせ内容 <span style={{ color: '#ff0000' }}>*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-2 border-black focus:border-[#f5b91f] shadow-sm focus:shadow-lg transition-all text-black rounded-lg resize-none"
                    style={{ fontWeight: 500 }}
                    placeholder="ご質問などをご記入ください"
                  />
                </div>

                {/* 送信ボタン */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-12 py-6 bg-[#ff0000] hover:bg-[#cc0000] text-white text-xl border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all rounded-md"
                    style={{
                      fontWeight: 900
                    }}
                  >
                    送信する
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* 店舗情報 */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6">
            {/* SNS */}
            <div className="bg-white p-6 rounded-lg border-4 border-[#ff0000] shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <div
                className="inline-block px-4 py-2 bg-[#ff0000] text-white rounded-full border-2 border-black mb-4"
                style={{ fontWeight: 900 }}
              >
                SNS
              </div>
              <p className="text-black text-lg mb-4" style={{ fontWeight: 600 }}>
                最新情報はSNSをチェック
              </p>
              <div className="flex flex-col gap-3">
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
              </div>
            </div>

            {/* 所在地 */}
            <div className="bg-white p-6 rounded-lg border-4 border-[#58c6ca] shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <div
                className="inline-block px-4 py-2 bg-[#58c6ca] text-white rounded-full border-2 border-black mb-4"
                style={{ fontWeight: 900 }}
              >
                ADDRESS
              </div>
              <p className="text-black text-lg mb-2" style={{ fontWeight: 600 }}>
                店舗所在地
              </p>
              <p
                className="text-xl mb-2"
                style={{
                  fontWeight: 900,
                  color: '#000'
                }}
              >
                北海道釧路市愛国東3丁目1-16
              </p>
              <p className="text-[#ff0000]" style={{ fontWeight: 700 }}>
                営業: 11:00 ~ 19:00 (L.O 18:30)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

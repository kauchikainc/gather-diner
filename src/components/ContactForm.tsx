import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    phone: '',
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
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef6e4] to-white pt-24 pb-16 relative overflow-hidden">
      {/* Retro Dots Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ff0000 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Decorative Stripes */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#ff0000] via-[#f5b91f] to-[#58c6ca]"></div>

      {/* ページタイトルセクション */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center space-y-6">
          <div>
            <span className="text-[#58c6ca] tracking-widest mb-4 inline-block bg-white px-6 py-3 rounded-full border-3 border-[#58c6ca] shadow-lg" style={{ fontWeight: 900 }}>
              ★ CONTACT US ★
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="text-[#ff0000]" style={{ fontWeight: 900, textShadow: '3px 3px 0px #f5b91f' }}>
              お問い合わせ
            </span>
          </h1>
          <p className="text-lg text-[#1d3557] max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
            ご質問・ご予約など、お気軽にお問い合わせください
          </p>
        </div>
      </div>

      {/* フォームセクション */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-8 border-white shadow-2xl rounded-lg p-8 md:p-12">
            {isSubmitted ? (
              // 送信完了メッセージ
              <div className="text-center py-12">
                <div
                  className="inline-block px-8 py-4 bg-[#f5b91f] text-white rounded-lg border-4 border-[#f5b91f] shadow-lg mb-6"
                >
                  <p className="text-2xl" style={{ fontWeight: 900 }}>
                    送信完了！
                  </p>
                </div>
                <p className="text-lg text-[#1d3557]" style={{ fontWeight: 500 }}>
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
                    className="block text-[#1d3557] text-lg mb-2"
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
                    className="w-full border-3 border-gray-300 focus:border-[#ff0000] shadow-sm focus:shadow-lg transition-all text-[#1d3557] rounded-lg"
                    style={{ fontWeight: 500 }}
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#1d3557] text-lg mb-2"
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
                    className="w-full border-3 border-gray-300 focus:border-[#ff0000] shadow-sm focus:shadow-lg transition-all text-[#1d3557] rounded-lg"
                    style={{ fontWeight: 500 }}
                    placeholder="example@email.com"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#1d3557] text-lg mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    電話番号
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-3 border-gray-300 focus:border-[#58c6ca] shadow-sm focus:shadow-lg transition-all text-[#1d3557] rounded-lg"
                    style={{ fontWeight: 500 }}
                    placeholder="03-1234-5678"
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#1d3557] text-lg mb-2"
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
                    className="w-full border-3 border-gray-300 focus:border-[#f5b91f] shadow-sm focus:shadow-lg transition-all text-[#1d3557] rounded-lg resize-none"
                    style={{ fontWeight: 500 }}
                    placeholder="ご質問やご予約内容などをご記入ください"
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
            {/* 電話でのお問い合わせ */}
            <div className="bg-white p-6 rounded-lg border-4 border-[#f5b91f] shadow-lg hover:shadow-xl transition-all">
              <div
                className="inline-block px-4 py-2 bg-[#f5b91f] text-white rounded-full mb-4"
                style={{ fontWeight: 900 }}
              >
                📞 PHONE
              </div>
              <p className="text-[#1d3557] text-lg mb-2" style={{ fontWeight: 600 }}>
                お電話でのお問い合わせ
              </p>
              <p
                className="text-3xl mb-2"
                style={{
                  fontWeight: 900,
                  color: '#ff0000',
                  textShadow: '2px 2px 0px #58c6ca'
                }}
              >
                03-1234-5678
              </p>
              <p className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 600 }}>
                営業時間: 11:00-15:00
              </p>
            </div>

            {/* 所在地 */}
            <div className="bg-white p-6 rounded-lg border-4 border-[#58c6ca] shadow-lg hover:shadow-xl transition-all">
              <div
                className="inline-block px-4 py-2 bg-[#58c6ca] text-white rounded-full mb-4"
                style={{ fontWeight: 900 }}
              >
                📍 ADDRESS
              </div>
              <p className="text-[#1d3557] text-lg mb-2" style={{ fontWeight: 600 }}>
                店舗所在地
              </p>
              <p
                className="text-xl mb-2"
                style={{
                  fontWeight: 900,
                  color: '#1d3557'
                }}
              >
                北海道釧路市愛国東
              </p>
              <p className="text-[#1d3557]/70 text-sm" style={{ fontWeight: 600 }}>
                Since 1985
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

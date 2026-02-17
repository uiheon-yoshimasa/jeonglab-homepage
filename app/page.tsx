'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'コンセプト設計',
    description:
      'ターゲットと目的を整理し、伝わる言葉と構成を組み立てます。',
  },
  {
    title: 'デザイン/実装',
    description:
      '美しさと使いやすさを両立するUIを、スピーディに形にします。',
  },
  {
    title: '改善と運用',
    description:
      '公開後の更新や改善も伴走し、成果に繋げます。',
  },
];

const works = [
  {
    title: 'ブランドサイト',
    tag: 'Web / Branding',
    description: '静かな余白とストーリーで世界観を表現。',
  },
  {
    title: 'イベントLP',
    tag: 'Landing Page',
    description: '短い導線で申し込みまで迷わせない構成。',
  },
  {
    title: 'ポートフォリオ',
    tag: 'Personal',
    description: '信頼感と人柄が伝わるデザインに。',
  },
];

const plans = [
  {
    name: 'スタンダード',
    price: '60,000円〜',
    detail: '1-3ページ / 2週間程度',
    points: ['構成設計', 'レスポンシブ対応', '基本SEO'],
  },
  {
    name: 'カスタム',
    price: 'お見積もり',
    detail: 'ページ数/機能に応じて',
    points: ['外部連携', 'CMS導入', '運用設計'],
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            ≡
          </button>
          <a className="logo" href="#home">
            JEONG LAB
          </a>
          <nav className="nav-links">
            <a href="#home">ホーム</a>
            <a href="#about">私について</a>
            <a href="#services">サービス</a>
            <a href="#works">実績</a>
            <a href="#pricing">料金</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
          <a className="btn btn-ghost" href="#contact">
            ご相談はこちら
          </a>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-scrim" onClick={handleMenuClose} />
        <nav className="mobile-menu-panel" aria-label="モバイルメニュー">
          <a href="#home" onClick={handleMenuClose}>
            ホーム
          </a>
          <a href="#about" onClick={handleMenuClose}>
            私について
          </a>
          <a href="#services" onClick={handleMenuClose}>
            サービス
          </a>
          <a href="#works" onClick={handleMenuClose}>
            実績
          </a>
          <a href="#pricing" onClick={handleMenuClose}>
            料金
          </a>
          <a href="#contact" onClick={handleMenuClose}>
            お問い合わせ
          </a>
          <a className="btn btn-ghost" href="#contact" onClick={handleMenuClose}>
            ご相談はこちら
          </a>
        </nav>
      </div>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div
              className="hero-copy hero-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-brand">JEONG LAB</span>
              <h1>My life, My Design.</h1>
              <p>感情を動かし、日常を彩るデジタル体験を。</p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">私について</h2>
              <p className="section-lead">
                「わかりやすさ」と「体験の質」を両立するWeb制作を得意にしています。
              </p>
            </motion.div>
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p>
                企画段階から伴走し、目的に合わせた構成設計やコピー提案も行います。
                デザインと実装を一貫して担当することで、スピードと品質を両立。
                小さな違和感まで整え、信頼感ある体験を提供します。
              </p>
              <div className="about-tags">
                <span>Next.js</span>
                <span>Framer Motion</span>
                <span>UI Design</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">サービス</h2>
              <p className="section-lead">初期設計から公開後の改善まで伴走します。</p>
            </motion.div>
            <div className="card-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="section works">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">実績</h2>
              <p className="section-lead">目的に合わせて形を変えるデザイン。</p>
            </motion.div>
            <div className="works-grid">
              {works.map((work, index) => (
                <motion.article
                  key={work.title}
                  className="work-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="work-tag">{work.tag}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">料金プラン</h2>
              <p className="section-lead">
                まずは小さく始めて、必要に応じて拡張できます。
              </p>
            </motion.div>
            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className="price-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="price-detail">{plan.detail}</p>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="btn btn-outline" href="#contact">
                    相談する
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">お問い合わせ</h2>
              <p className="section-lead">
                ざっくりとしたご相談でも構いません。ご希望や課題を教えてください。
              </p>
              <div className="contact-panel">
                <p>
                  返信目安: 24時間以内 / オンライン打ち合わせ可
                </p>
                <p>
                  <strong>info@jeonglab.com</strong>
                </p>
              </div>
            </motion.div>
            <motion.form
              className="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              action="https://formspree.io/f/xojnwvyg"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Portfolio Inquiry" />
              <label>
                お名前
                <input type="text" name="name" placeholder="山田太郎" required />
              </label>
              <label>
                メールアドレス
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </label>
              <label>
                ご相談内容
                <textarea
                  name="message"
                  placeholder="プロジェクトの概要やご希望をお書きください。"
                  rows={5}
                  required
                />
              </label>
              <button className="btn" type="submit">
                送信する
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-logo">JEONG LAB</p>
            <p className="footer-copy">
              感情が動く体験を、静かに、深く。
            </p>
          </div>
          <div className="footer-links">
            <a href="#home">ホーム</a>
            <a href="#services">サービス</a>
            <a href="#works">実績</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

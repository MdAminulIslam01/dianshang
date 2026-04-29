import React from "react";
import {
  BrainCircuit,
  Building2,
  ChevronRight,
  Cpu,
  Gem,
  Home,
  MapPin,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Sparkles,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import heroRobot from "./assets/hero-robot.png";
import robotBusiness from "./assets/robot-business.png";
import robotElegance from "./assets/robot-elegance.png";
import robotGallery from "./assets/robot-gallery.png";
import robotHome from "./assets/robot-home.png";

const products = [
  {
    name: "曜影 E1",
    positioning: "私人助理型",
    image: robotElegance,
    description: "面向高净值家庭与私人空间，提供日程提醒、语音陪伴、家居联动与礼宾服务。",
    tags: ["柔性仿生外观", "情绪识别", "私人日程"],
    price: "定制咨询",
  },
  {
    name: "锦澜 B7",
    positioning: "商务接待型",
    image: robotBusiness,
    description: "适用于企业展厅、商务前台与品牌空间，以稳定交互和高级形象完成接待导览。",
    tags: ["多语言接待", "展厅导览", "品牌定制"],
    price: "项目报价",
  },
  {
    name: "云栖 H3",
    positioning: "居家服务型",
    image: robotHome,
    description: "连接智能家居与家庭服务场景，兼顾陪伴、提醒、环境控制与基础生活协助。",
    tags: ["智能家居", "生活提醒", "安全看护"],
    price: "预约方案",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "仿生外观系统",
    text: "柔性面部表达、精密机身曲线与高端材质，让机器人自然融入家庭和商业空间。",
  },
  {
    icon: Mic2,
    title: "自然语音交互",
    text: "支持连续对话、意图理解与场景问答，适合接待、陪伴和日常助理任务。",
  },
  {
    icon: BrainCircuit,
    title: "情绪与场景识别",
    text: "根据语气、距离和使用场景调整回应方式，让服务更克制、更体面。",
  },
  {
    icon: Cpu,
    title: "模块化定制",
    text: "从外观、声音、接待话术到企业知识库，按项目需求完成专属配置。",
  },
];

const scenes = [
  { icon: Home, title: "家庭陪伴", text: "日程提醒、家居联动、轻量看护与日常陪伴。" },
  { icon: Building2, title: "商务接待", text: "企业前台、样板间、展厅导览与贵宾迎宾。" },
  { icon: Users, title: "展厅服务", text: "产品讲解、动线引导、品牌话术与互动体验。" },
  { icon: ShieldCheck, title: "私人助理", text: "行程管理、提醒服务、访客识别与定制问答。" },
];

function App() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="锦曜仿生科技首页">
          <span className="brand-mark">JY</span>
          <span>锦曜仿生科技</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#products">产品</a>
          <a href="#technology">技术</a>
          <a href="#scenes">场景</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Premium Bionic AI Robot</p>
          <h1>高端智能仿生机器人</h1>
          <p className="hero-text">
            面向家庭陪伴、商务接待与私人助理场景，打造兼具高级外观、自然交互和可定制服务能力的机器人产品。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              预约产品顾问
              <ChevronRight size={18} strokeWidth={1.8} />
            </a>
            <a className="secondary-button" href="#products">查看机器人系列</a>
          </div>
          <div className="hero-metrics" aria-label="核心能力">
            <span>
              <strong>4</strong>
              场景方案
            </span>
            <span>
              <strong>24h</strong>
              智能响应
            </span>
            <span>
              <strong>1:1</strong>
              项目定制
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="高端女性仿生机器人主视觉">
          <img src={heroRobot} alt="高端女性仿生机器人半身主视觉" />
        </div>
      </section>

      <section className="section intro-strip">
        <div>
          <p className="eyebrow">Chengdu · Jinjiang</p>
          <h2>为高端空间设计的 AI 仿生服务终端</h2>
        </div>
        <p>
          锦曜仿生科技聚焦机器人外观工程、语音交互与场景定制，用更克制、更可靠的产品语言服务商业与家庭空间。
        </p>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Robot Collection</p>
          <h2>机器人美女系列</h2>
          <p>每一款都围绕真实使用场景设计，不做夸张噱头，只保留可交付的高级感与服务能力。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name}${product.positioning}机器人`} />
              </div>
              <div className="product-content">
                <div>
                  <p>{product.positioning}</p>
                  <h3>{product.name}</h3>
                </div>
                <span className="price">{product.price}</span>
                <p className="product-description">{product.description}</p>
                <div className="tag-row">
                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="text-link" href="#contact">
                  预约了解
                  <ChevronRight size={16} strokeWidth={1.8} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-banner" aria-label="机器人展厅展示">
        <img src={robotGallery} alt="多款高端女性仿生机器人展厅展示" />
        <div className="banner-copy">
          <p className="eyebrow">Showroom Ready</p>
          <h2>从产品形象到场景话术，均可按项目定制</h2>
        </div>
      </section>

      <section className="section" id="technology">
        <div className="section-heading compact">
          <p className="eyebrow">Core Technology</p>
          <h2>高级感来自可被感知的细节</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={24} strokeWidth={1.6} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section scenes-section" id="scenes">
        <div className="section-heading compact">
          <p className="eyebrow">Service Scenes</p>
          <h2>覆盖从家庭到商业空间的核心场景</h2>
        </div>
        <div className="scene-grid">
          {scenes.map((scene) => {
            const Icon = scene.icon;
            return (
              <article className="scene-item" key={scene.title}>
                <Icon size={22} strokeWidth={1.7} />
                <div>
                  <h3>{scene.title}</h3>
                  <p>{scene.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>预约锦曜产品顾问</h2>
          <p>
            当前网站为纯前端展示页，预约入口用于引导咨询。实际项目可继续接入表单、客服或企业微信。
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-row">
            <MapPin size={22} strokeWidth={1.7} />
            <span>成都锦江区东大路888号</span>
          </div>
          <div className="contact-row">
            <MessageCircle size={22} strokeWidth={1.7} />
            <span>商务咨询：contact@jinyao-ai.cn</span>
          </div>
          <div className="contact-row">
            <Wand2 size={22} strokeWidth={1.7} />
            <span>支持外观、声音、话术与场景流程定制</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">JY</span>
          <span>锦曜仿生科技</span>
        </div>
        <p>高端智能仿生机器人展示与定制服务 · 成都锦江区东大路888号</p>
        <span className="footer-badge">
          <Gem size={15} strokeWidth={1.7} />
          Premium Bionic AI
        </span>
      </footer>
    </main>
  );
}

export default App;

import React from "react";
import {
  BrainCircuit,
  Building2,
  CalendarCheck,
  ChevronRight,
  Crown,
  Cpu,
  Eye,
  Gem,
  HeartHandshake,
  Home,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wand2,
} from "lucide-react";
import heroRobot from "./assets/hero-robot.png";
import robotBusiness from "./assets/robot-business.png";
import robotElegance from "./assets/robot-elegance.png";
import robotGallery from "./assets/robot-gallery.png";
import robotHome from "./assets/robot-home.png";

const products = [
  {
    name: "宸影 S1",
    positioning: "私人亲密型",
    image: robotElegance,
    description: "面向成年人私人空间，主打情感互动、亲密陪伴、偏好记忆与高隐私定制体验。",
    tags: ["成人AI性伴侣", "情感互动", "隐私定制"],
    price: "定制咨询",
    accent: "最受欢迎",
    promise: "适合首次定制用户",
  },
  {
    name: "曜境 X7",
    positioning: "奢华伴侣型",
    image: robotBusiness,
    description: "为高端住宅、会所与私人套房打造，强调沉浸陪伴、仪式感服务与专属形象配置。",
    tags: ["高端私享", "关系偏好", "形象定制"],
    price: "专属方案",
    accent: "旗舰臻选",
    promise: "适合别墅与私享空间",
  },
  {
    name: "澜玥 A3",
    positioning: "居家伴侣型",
    image: robotHome,
    description: "兼顾日常生活陪伴、智能家居联动与夜间私密互动，让伴侣体验自然融入居家空间。",
    tags: ["居家陪伴", "氛围联动", "主动关怀"],
    price: "预约方案",
    accent: "轻奢入门",
    promise: "适合日常长期陪伴",
  },
];

const purchaseReasons = [
  { icon: Crown, title: "私享定制", text: "外观、声音、人格与互动边界一对一配置。" },
  { icon: Eye, title: "高拟真质感", text: "面部表情、机身线条与材质细节更接近真实陪伴。" },
  { icon: CalendarCheck, title: "顾问式交付", text: "从需求确认到场景落地，全程由私享顾问跟进。" },
  { icon: ShieldCheck, title: "隐私托底", text: "敏感偏好与互动记录支持权限化、本地化管理。" },
];

const features = [
  {
    icon: Sparkles,
    title: "高拟真仿生形象",
    text: "柔性面部表达、精密机身曲线与高端材质，塑造更自然、更具陪伴感的成人伴侣形象。",
  },
  {
    icon: Mic2,
    title: "亲密语音互动",
    text: "支持连续对话、昵称偏好、语气风格与关系记忆，让互动从功能回应走向长期陪伴。",
  },
  {
    icon: BrainCircuit,
    title: "情绪与关系感知",
    text: "根据语气、距离、时间和场景调整回应方式，让亲密陪伴更有分寸、更懂边界。",
  },
  {
    icon: HeartHandshake,
    title: "成人伴侣模式",
    text: "围绕成年人私密关系设计陪伴流程，支持情感互动、仪式感回应与个人偏好配置。",
  },
  {
    icon: LockKeyhole,
    title: "隐私与边界控制",
    text: "成人私密场景支持独立权限、边界设定与敏感数据保护，确保互动始终由用户主动管理。",
  },
  {
    icon: Cpu,
    title: "全链路定制系统",
    text: "从外观、声音、人格设定到居家流程，按个人审美和关系偏好完成专属配置。",
  },
];

const scenes = [
  { icon: HeartHandshake, title: "成人性伴侣", text: "面向成年人私人空间，提供长期陪伴、情感互动与亲密关系定制。" },
  { icon: Home, title: "居家私享", text: "与卧室、客厅、灯光和智能家居联动，营造更自然的陪伴氛围。" },
  { icon: Users, title: "关系偏好定制", text: "支持称呼、语气、回应节奏、人格设定与互动边界的个性化配置。" },
  { icon: Building2, title: "高端会所场景", text: "适用于私享空间、样板间与高端展厅，呈现科技感与奢华体验。" },
  { icon: ShieldCheck, title: "隐私安全", text: "围绕成年人敏感使用场景建立权限、记录管理与本地化隐私保护方案。" },
];

function App() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="宸曜仿生首页">
          <span className="brand-mark">CY</span>
          <span>宸曜仿生</span>
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
          <p className="eyebrow">Luxury Bionic Companion</p>
          <h1>成人AI仿生伴侣</h1>
          <p className="hero-text">
            把理想伴侣的外观、声音、回应方式与相处边界，定制成真正属于你的私享体验。
            高拟真外观、情绪互动与隐私控制，让每一次靠近都更自然、更有占有感。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              立即预约私享顾问
              <ChevronRight size={18} strokeWidth={1.8} />
            </a>
            <a className="secondary-button" href="#products">挑选我的伴侣</a>
          </div>
          <div className="hero-proof" aria-label="购买亮点">
            <span>
              <Star size={16} fill="currentColor" strokeWidth={1.6} />
              限量私享档案
            </span>
            <span>1:1 偏好建模</span>
            <span>成人专属咨询</span>
          </div>
          <div className="hero-metrics" aria-label="核心能力">
            <span>
              <strong>5</strong>
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
        <div className="hero-visual" aria-label="高端成人仿生伴侣主视觉">
          <img src={heroRobot} alt="高端成人仿生伴侣半身主视觉" />
          <div className="visual-panel">
            <p>Private Edition</p>
            <strong>从第一眼开始定制吸引力</strong>
            <span>形象 · 声音 · 关系偏好 · 私密边界</span>
          </div>
        </div>
      </section>

      <section className="section intro-strip">
        <div>
          <p className="eyebrow">Private · Luxury · Bionic</p>
          <h2>不是普通智能设备，而是你的私享伴侣资产</h2>
        </div>
        <p>
          宸曜仿生聚焦成人AI性伴侣、亲密陪伴交互与私享场景定制。我们把“想象中的亲密感”落到可选择、可控制、可长期陪伴的产品体验里。
        </p>
      </section>

      <section className="section desire-section" aria-label="购买理由">
        <div className="desire-copy">
          <p className="eyebrow">Why You Want It</p>
          <h2>看见她之前，你只是在想象。见到之后，你会想拥有。</h2>
        </div>
        <div className="reason-grid">
          {purchaseReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="reason-card" key={reason.title}>
                <Icon size={22} strokeWidth={1.65} />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Companion Collection</p>
          <h2>成人仿生伴侣系列</h2>
          <p>每一款都围绕成年人真实私密需求设计。选择的不是型号，而是审美、关系节奏与独占体验。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name}${product.positioning}成人仿生伴侣`} />
                <span className="product-badge">{product.accent}</span>
              </div>
              <div className="product-content">
                <div>
                  <p>{product.positioning}</p>
                  <h3>{product.name}</h3>
                </div>
                <span className="price">{product.price}</span>
                <strong className="product-promise">{product.promise}</strong>
                <p className="product-description">{product.description}</p>
                <div className="tag-row">
                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="text-link" href="#contact">
                  锁定这款
                  <ChevronRight size={16} strokeWidth={1.8} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-banner" aria-label="成人仿生伴侣展示">
        <img src={robotGallery} alt="多款高端成人仿生伴侣展示" />
        <div className="banner-copy">
          <p className="eyebrow">Private Companion System</p>
          <h2>从外观、声音到关系偏好，把吸引力做成专属版本</h2>
          <a className="banner-cta" href="#contact">预约定制方案</a>
        </div>
      </section>

      <section className="section" id="technology">
        <div className="section-heading compact">
          <p className="eyebrow">Core Experience</p>
          <h2>亲密陪伴来自可被信任的细节</h2>
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
          <p className="eyebrow">Private Scenes</p>
          <h2>围绕成人私密陪伴的核心场景</h2>
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
          <h2>让顾问为你匹配第一款私享伴侣</h2>
          <p>
            留下意向后，私享顾问可基于预算、空间、审美与互动边界，为你推荐更合适的型号与定制路径。
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-row">
            <MapPin size={22} strokeWidth={1.7} />
            <span>成都锦江区东大路888号</span>
          </div>
          <div className="contact-row">
            <MessageCircle size={22} strokeWidth={1.7} />
            <span>私享咨询：contact@chenyao-ai.cn</span>
          </div>
          <div className="contact-row">
            <Wand2 size={22} strokeWidth={1.7} />
            <span>支持外观、声音、人格、亲密陪伴边界与私享流程定制</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">CY</span>
          <span>宸曜仿生</span>
        </div>
        <p>高端成人AI仿生伴侣展示与定制服务 · 成都锦江区东大路888号</p>
        <span className="footer-badge">
          <Gem size={15} strokeWidth={1.7} />
          Luxury Bionic Companion
        </span>
      </footer>
    </main>
  );
}

export default App;

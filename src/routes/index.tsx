import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Gift,
  Heart,
  LockKeyhole,
  MousePointerClick,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CHECKOUT_URL = "#oferta";

const curiosidades = [
  ["🚪", "Por que ele te segue até o banheiro?"],
  ["🍞", "Por que amassa pãozinho em você?"],
  ["🌙", "Por que corre pela casa de madrugada?"],
  ["👀", "O que significa quando ele fica te encarando?"],
  ["📦", "Por que uma caixa parece melhor que qualquer brinquedo?"],
  ["💛", "Como ele demonstra que confia de verdade em você?"],
];

const modulos = [
  {
    n: "01",
    emoji: "🧠",
    title: "A mente por trás dos bigodes",
    text: "Entenda como seu gato percebe a casa, as pessoas, os sons e as mudanças ao redor dele.",
  },
  {
    n: "02",
    emoji: "💬",
    title: "O idioma secreto dos gatos",
    text: "Aprenda a interpretar miados, olhares, orelhas, cauda, postura corporal e pequenos sinais do dia a dia.",
  },
  {
    n: "03",
    emoji: "🏠",
    title: "Uma casa pensada para ele",
    text: "Descubra formas simples de deixar o ambiente mais interessante, confortável e estimulante.",
  },
  {
    n: "04",
    emoji: "❤️",
    title: "Vínculo e confiança",
    text: "Saiba como fortalecer a relação respeitando o espaço, o tempo e a personalidade única do seu gato.",
  },
];

const faqs = [
  [
    "Serve para quem acabou de adotar um gato?",
    "Sim. A Missão Felina foi pensada tanto para quem está começando quanto para quem convive com gatos há anos e quer entender melhor os pequenos sinais do dia a dia.",
  ],
  [
    "Preciso entender de comportamento animal?",
    "Não. Todo o conteúdo é apresentado de forma leve, prática e fácil de aplicar na rotina.",
  ],
  [
    "O acesso é digital?",
    "Sim. Depois da confirmação da compra, você recebe acesso ao conteúdo digital e pode consultar pelo celular, tablet ou computador.",
  ],
  [
    "Isso substitui um veterinário?",
    "Não. O material é educativo e ajuda a observar e compreender melhor comportamentos. Questões de saúde sempre devem ser avaliadas por um médico-veterinário.",
  ],
];

function CatGuide() {
  return (
    <div className="cat-guide" aria-hidden="true">
      <div className="cat-bubble">pspsps… vem comigo 🐾</div>
      <div className="cat-face">
        <span className="cat-ear cat-ear-left" />
        <span className="cat-ear cat-ear-right" />
        <span className="cat-eye cat-eye-left" />
        <span className="cat-eye cat-eye-right" />
        <span className="cat-nose">♥</span>
        <span className="cat-whisker cat-whisker-1" />
        <span className="cat-whisker cat-whisker-2" />
        <span className="cat-whisker cat-whisker-3" />
        <span className="cat-whisker cat-whisker-4" />
      </div>
    </div>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="missao-page">
      <div className="top-strip">
        <PawPrint size={15} /> Uma experiência criada para quem sabe que gato não é pet. É família.
      </div>

      <section className="hero-section">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="paw-trail paw-one">🐾</div>
        <div className="paw-trail paw-two">🐾</div>
        <div className="hero-inner">
          <div className="hero-copy reveal is-visible">
            <div className="brand-pill"><PawPrint size={17} /> MISSÃO FELINA</div>
            <h1>
              Seu gato fala com você <span>todos os dias.</span><br />
              Falta só aprender o idioma dele.
            </h1>
            <p className="hero-sub">
              Descubra o significado dos comportamentos mais curiosos do seu gato e transforme pequenos momentos da rotina em uma relação ainda mais próxima, segura e feliz.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#oferta">
                ACEITAR A MISSÃO <PawPrint size={19} />
              </a>
              <a className="soft-link" href="#descobrir">
                Quero descobrir mais <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-trust">
              <span><Check size={15} /> Conteúdo digital</span>
              <span><Check size={15} /> Acesso imediato</span>
              <span><Check size={15} /> Leitura simples e prática</span>
            </div>
          </div>

          <div className="hero-art reveal is-visible">
            <div className="sun-circle" />
            <div className="hero-card note-a">“Por que ele faz isso?” 🤔</div>
            <div className="hero-card note-b">Tradução: eu confio em você. 💛</div>
            <div className="big-cat">
              <div className="big-cat-ear left" />
              <div className="big-cat-ear right" />
              <div className="big-cat-head">
                <div className="big-cat-eye left" />
                <div className="big-cat-eye right" />
                <div className="big-cat-muzzle">ω</div>
              </div>
              <div className="big-cat-body"><span className="big-cat-paw">●</span></div>
              <div className="big-cat-tail" />
            </div>
            <div className="yarn">🧶</div>
          </div>
        </div>
        <div className="wave-bottom" />
      </section>

      <section className="curiosity-section" id="descobrir">
        <div className="section-wrap">
          <Reveal className="section-heading">
            <span className="eyebrow">VOCÊ REALMENTE CONHECE O SEU GATO?</span>
            <h2>Tem coisa que parece mania.<br /><span>Mas é comunicação.</span></h2>
            <p>Quando você entende o motivo por trás dos comportamentos, começa a enxergar seu gato de outro jeito.</p>
          </Reveal>

          <div className="curiosity-grid">
            {curiosidades.map(([emoji, text], i) => (
              <Reveal className="curiosity-card" key={text}>
                <div className="curiosity-emoji">{emoji}</div>
                <p>{text}</p>
                <span className="card-number">0{i + 1}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="thought-box">
            <div className="thought-cat">🐈</div>
            <div>
              <span>O que muda quando você entende?</span>
              <h3>Você para de apenas conviver com seu gato e começa a <em>compreendê-lo.</em></h3>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mission-section">
        <div className="section-wrap mission-wrap">
          <Reveal className="mission-intro">
            <div className="mission-stamp"><Star size={18} fill="currentColor" /> SUA MISSÃO COMEÇA AQUI</div>
            <h2>Uma jornada para enxergar o mundo <span>pelos olhos dele.</span></h2>
            <p>
              A <strong>Missão Felina</strong> organiza o que todo tutor gostaria de saber em uma experiência leve, visual e gostosa de explorar — sem termos complicados e sem transformar amor em obrigação.
            </p>
            <a href="#oferta" className="secondary-cta">QUERO COMEÇAR <ArrowRight size={18} /></a>
          </Reveal>

          <div className="mission-path">
            {modulos.map((modulo, i) => (
              <Reveal className={`module-card module-${i + 1}`} key={modulo.n}>
                <span className="module-number">MISSÃO {modulo.n}</span>
                <div className="module-emoji">{modulo.emoji}</div>
                <h3>{modulo.title}</h3>
                <p>{modulo.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="love-section">
        <div className="section-wrap love-grid">
          <Reveal className="love-art">
            <div className="photo-frame">
              <div className="frame-sparkle">✦</div>
              <div className="hug-scene">
                <span className="person">☺</span>
                <span className="hug-cat">🐈</span>
                <span className="heart-float">♥</span>
              </div>
              <span className="frame-caption">vocês dois, só que ainda mais conectados.</span>
            </div>
          </Reveal>
          <Reveal className="love-copy">
            <span className="eyebrow">NÃO É SOBRE “ADESTRAR” UM GATO</span>
            <h2>É sobre construir uma relação em que ele se sinta <span>entendido.</span></h2>
            <p>Gatos têm limites, preferências, medos e formas próprias de demonstrar carinho. Quanto mais você reconhece esses sinais, mais fácil fica oferecer segurança e criar boas experiências juntos.</p>
            <ul>
              <li><Heart size={19} fill="currentColor" /> Mais conexão na rotina</li>
              <li><Sparkles size={19} /> Um ambiente mais interessante</li>
              <li><PawPrint size={19} /> Mais respeito à personalidade dele</li>
              <li><Star size={19} /> Mais confiança entre vocês</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="inside-section">
        <div className="section-wrap">
          <Reveal className="section-heading light-heading">
            <span className="eyebrow">O QUE VOCÊ RECEBE</span>
            <h2>Seu kit para decifrar o <span>universo felino.</span></h2>
          </Reveal>
          <div className="inside-grid">
            <Reveal className="inside-card main-product">
              <div className="product-cover">
                <PawPrint size={42} />
                <strong>MISSÃO<br />FELINA</strong>
                <small>Manual de tradução humano ↔ gato</small>
              </div>
              <div>
                <span className="mini-tag">CONTEÚDO PRINCIPAL</span>
                <h3>Guia Missão Felina</h3>
                <p>Um material visual e direto ao ponto para consultar sempre que surgir aquele clássico: “por que meu gato está fazendo isso?”</p>
              </div>
            </Reveal>
            <Reveal className="inside-card">
              <div className="bonus-icon"><Gift /></div>
              <span className="mini-tag">BÔNUS</span>
              <h3>Checklist Casa Felina</h3>
              <p>Um roteiro simples para olhar sua casa pela perspectiva do seu gato e identificar oportunidades de enriquecimento.</p>
            </Reveal>
            <Reveal className="inside-card">
              <div className="bonus-icon"><BookOpen /></div>
              <span className="mini-tag">BÔNUS</span>
              <h3>Dicionário de Sinais</h3>
              <p>Uma consulta rápida de posturas, expressões e comportamentos comuns para você reconhecer sinais com mais facilidade.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="manifesto-section">
        <Reveal className="manifesto-card">
          <div className="manifesto-paws">🐾</div>
          <p>“Ele pode não falar a sua língua.<br />Mas isso nunca significou que ele não estivesse dizendo nada.”</p>
          <span>— Missão Felina</span>
        </Reveal>
      </section>

      <section className="offer-section" id="oferta">
        <div className="section-wrap offer-wrap">
          <Reveal className="offer-copy">
            <span className="eyebrow">PRONTO PARA ACEITAR?</span>
            <h2>Seu gato já faz a parte dele.<br /><span>Agora é a sua vez.</span></h2>
            <p>Entre para a Missão Felina e comece hoje a perceber detalhes que talvez tenham passado despercebidos por anos.</p>
            <div className="guarantee-mini"><ShieldCheck size={30} /><div><strong>Compra protegida</strong><span>Acesso digital após a confirmação do pagamento.</span></div></div>
          </Reveal>
          <Reveal className="offer-card">
            <div className="offer-ribbon">🐾 MISSÃO LIBERADA</div>
            <PawPrint className="offer-paw" size={40} />
            <h3>Missão Felina</h3>
            <p className="offer-sub">Experiência completa + materiais bônus</p>
            <div className="offer-items">
              <span><Check /> Guia Missão Felina</span>
              <span><Check /> Checklist Casa Felina</span>
              <span><Check /> Dicionário de Sinais</span>
              <span><Check /> Acesso digital</span>
            </div>
            <div className="offer-label">ACESSO COMPLETO</div>
            <a className="checkout-button" href={CHECKOUT_URL}>
              QUERO ENTRAR NA MISSÃO <MousePointerClick size={20} />
            </a>
            <div className="safe-line"><LockKeyhole size={14} /> Ambiente seguro • acesso digital</div>
          </Reveal>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-wrap faq-wrap">
          <Reveal className="faq-title">
            <span className="eyebrow">ANTES DE PARTIR...</span>
            <h2>Dúvidas de tutor <span>curioso</span></h2>
            <div className="faq-cat">🐱</div>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <Reveal className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{q}</span><ChevronDown size={20} />
                </button>
                <div className="faq-answer"><p>{a}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo"><PawPrint /> MISSÃO FELINA</div>
        <p>Feito com carinho para humanos oficialmente adotados por gatos. 🐾</p>
        <small>Conteúdo educativo. Não substitui orientação veterinária.</small>
      </footer>

      <CatGuide />
      {scrolled && (
        <a href="#oferta" className="mobile-sticky-cta">
          ACEITAR A MISSÃO <PawPrint size={17} />
        </a>
      )}
    </main>
  );
}

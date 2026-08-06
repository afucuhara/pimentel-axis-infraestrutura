/* eslint-disable @next/next/no-img-element */

const whatsapp =
  "https://wa.me/5511999260226?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

const services = [
  {
    title: "Pavimentação Asfáltica",
    text: "Execução de pavimentação asfáltica com qualidade, segurança e durabilidade para obras públicas e privadas.",
    image: "/assets/projeto-equipe-aplicacao.webp",
  },
  {
    title: "Recapeamento Asfáltico",
    text: "Recuperação de pavimentos por meio da aplicação de uma nova camada asfáltica, restabelecendo qualidade e segurança.",
    image: "/assets/projeto-recapeamento-finalizado.webp",
  },
  {
    title: "Operação Tapa-Buracos",
    text: "Manutenção viária para correção de buracos e falhas localizadas, recuperando a superfície do pavimento.",
    image: "/assets/projeto-reparo-localizado.webp",
  },
  {
    title: "Fresagem Asfáltica",
    text: "Remoção controlada da camada asfáltica para preparar a via para serviços de recuperação e recapeamento.",
    image: "/assets/projeto-preparacao-pavimento.webp",
  },
  {
    title: "Terraplenagem",
    text: "Preparação, regularização e compactação do terreno para a execução segura das etapas de infraestrutura.",
    image: "/assets/infraestrutura-base.webp",
  },
  {
    title: "Guias e Sarjetas",
    text: "Execução de guias e sarjetas para organização viária, acabamento e condução adequada das águas pluviais.",
    image: "/assets/projeto-superficie-preparada.webp",
  },
  {
    title: "Piso Intertravado",
    text: "Execução de pavimentação com piso intertravado para áreas que exigem resistência, funcionalidade e acabamento.",
    image: "/assets/projeto-compactacao-via.webp",
  },
];

const differentials = [
  ["Equipe especializada", "Profissionais qualificados para executar serviços de pavimentação e infraestrutura com segurança."],
  ["Equipamentos modernos", "Tecnologia e equipamentos adequados para garantir eficiência e qualidade na execução."],
  ["Atendimento personalizado", "Cada projeto recebe uma solução compatível com as necessidades do cliente e da obra."],
  ["Cumprimento de prazos", "Planejamento e compromisso para entregar os serviços dentro dos prazos estabelecidos."],
  ["Alto padrão de qualidade", "Cuidado em todas as etapas para alcançar um resultado seguro, resistente e durável."],
  ["Segurança em todas as etapas", "A execução é conduzida com atenção constante à segurança da equipe e do local."],
  ["Obras públicas e privadas", "Soluções em pavimentação, manutenção viária e infraestrutura para diferentes projetos."],
];

const workExamples = [
  {
    image: "/assets/projeto-equipe-aplicacao.webp",
    title: "Operação Tapa-Buracos",
    alt: "Equipe Pimentel Axis aplicando massa asfáltica em reparo viário",
  },
  {
    image: "/assets/projeto-compactacao-equipe.webp",
    title: "Pavimentação Asfáltica",
    alt: "Profissional compactando reparo asfáltico em via urbana",
  },
  {
    image: "/assets/projeto-compactacao-via.webp",
    title: "Fresagem Asfáltica",
    alt: "Via urbana preparada para receber nova camada asfáltica",
  },
  {
    image: "/assets/projeto-recapeamento-finalizado.webp",
    title: "Recapeamento Asfáltico",
    alt: "Trecho de rua após conclusão do recapeamento asfáltico",
  },
  {
    image: "/assets/projeto-preparacao-pavimento.webp",
    title: "Fresagem Asfáltica",
    alt: "Preparação e regularização de pavimento em via sinalizada",
  },
  {
    image: "/assets/projeto-reparo-localizado.webp",
    title: "Operação Tapa-Buracos",
    alt: "Reparo asfáltico localizado concluído junto à calçada",
  },
  {
    image: "/assets/projeto-preparacao-noturna.webp",
    title: "Fresagem Asfáltica",
    alt: "Superfície de rua preparada durante operação noturna",
  },
  {
    image: "/assets/projeto-compactacao-noturna.webp",
    title: "Pavimentação Asfáltica",
    alt: "Rolo compactador executando acabamento asfáltico durante a noite",
  },
  {
    image: "/assets/projeto-superficie-preparada.webp",
    title: "Recapeamento Asfáltico",
    alt: "Área de pavimento regularizada e preparada para nova aplicação",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.3A9.94 9.94 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.77.8-3.04-.2-.31A8.1 8.1 0 1 1 12.04 20.13Zm4.44-6.1c-.24-.12-1.42-.7-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.06 3.59.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner shell">
          <a className="brand" href="#inicio" aria-label="Pimentel Axis — início">
            <img src="/assets/pimentel-axis-logo-horizontal.png" alt="Pimentel Axis Infraestrutura" width="464" height="95" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#empresa">A empresa</a>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
            Solicitar orçamento <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <div className="hero-copy reveal">
            <p className="eyebrow light"><span /> PIMENTEL AXIS INFRAESTRUTURA</p>
            <h1>Construindo qualidade, segurança e <em>durabilidade em cada projeto.</em></h1>
            <p className="hero-description">
              Especialistas em pavimentação asfáltica, manutenção viária e obras de infraestrutura, com tecnologia, equipamentos modernos e uma equipe altamente qualificada.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">
                Falar com a equipe <ArrowIcon />
              </a>
              <a className="button ghost" href="#servicos">Conhecer serviços</a>
            </div>
          </div>

        </div>
      </section>

      <section className="intro section" id="empresa">
        <div className="shell intro-grid">
          <div className="section-heading">
            <p className="eyebrow"><span /> QUEM SOMOS</p>
            <h2>Soluções completas para <em>transformar espaços.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              A Pimentel Axis Infraestrutura nasceu com o propósito de transformar espaços através de soluções completas em pavimentação e infraestrutura.
            </p>
            <p>
              Somos especializados em pavimentação asfáltica, manutenção viária e obras de infraestrutura. Atuamos com tecnologia, equipamentos modernos e uma equipe altamente qualificada para entregar serviços com qualidade, segurança e dentro dos prazos estabelecidos.
            </p>
            <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">CONVERSE SOBRE SEU PROJETO <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="image-statement" aria-label="Obra de pavimentação Pimentel Axis">
        <div className="statement-card">
          <span>Pimentel Axis Infraestrutura</span>
          <strong>Qualidade, segurança e compromisso em cada projeto.</strong>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="shell">
          <div className="services-top">
            <div className="section-heading">
              <p className="eyebrow light"><span /> NOSSOS SERVIÇOS</p>
              <h2>Especialistas em pavimentação e <em>infraestrutura.</em></h2>
            </div>
            <p>Soluções com alto padrão de qualidade para obras públicas e privadas em todo o Estado de São Paulo.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Solicitar orçamento para ${service.title}`}>
                  Solicitar orçamento <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-examples section" id="projetos" aria-labelledby="work-examples-title">
        <div className="shell">
          <div className="examples-heading">
            <div>
              <p className="eyebrow"><span /> PROJETOS EXECUTADOS</p>
              <h2 id="work-examples-title">Nosso trabalho <em>em campo.</em></h2>
            </div>
            <p>
              Registros reais de serviços de pavimentação asfáltica, recapeamento, manutenção viária e preparação de pavimentos.
            </p>
          </div>

          <div className="examples-grid">
            {workExamples.map((work) => (
              <figure key={work.image}>
                <img src={work.image} alt={work.alt} decoding="async" />
                <figcaption>{work.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="shell process-grid">
          <div className="process-image" role="img" aria-label="Terraplenagem e preparação do terreno para obra de infraestrutura" />
          <div className="process-content">
            <p className="eyebrow"><span /> NOSSOS PRINCÍPIOS</p>
            <h2>Missão, visão <em>e valores.</em></h2>
            <p>Princípios que orientam nossa atuação em cada serviço de pavimentação e infraestrutura.</p>
            <ol>
              <li><div><strong>Missão</strong><p>Executar obras de infraestrutura com qualidade, segurança e eficiência.</p></div></li>
              <li><div><strong>Visão</strong><p>Ser referência nacional em pavimentação e infraestrutura.</p></div></li>
              <li><div><strong>Valores</strong><p>Qualidade, Segurança, Transparência, Compromisso, Sustentabilidade e Respeito aos clientes.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="differentials section" id="diferenciais">
        <div className="shell">
          <div className="differentials-heading">
            <div>
              <p className="eyebrow"><span /> NOSSOS DIFERENCIAIS</p>
              <h2>Qualidade e segurança <em>em todas as etapas.</em></h2>
            </div>
            <p>Equipe especializada, equipamentos modernos e atendimento personalizado para obras públicas e privadas.</p>
          </div>
          <div className="differentials-grid">
            {differentials.map(([title, text]) => (
              <article key={title}>
                <span className="check"><CheckIcon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-bg" />
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow light"><span /> SOLICITE UM ORÇAMENTO</p>
            <h2>A melhor solução para <em>o seu projeto.</em></h2>
            <p>Nossa equipe está preparada para desenvolver a melhor solução para o seu projeto. Atendimento em todo o Estado de São Paulo.</p>
          </div>
          <div className="contact-card">
            <span>ATENDIMENTO PELO WHATSAPP</span>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <span className="wa-icon"><WhatsAppIcon /></span>
              <span><small>FALE AGORA COM NOSSA EQUIPE</small><strong>(11) 99926-0226</strong></span>
              <ArrowIcon />
            </a>
            <p>Fale com especialistas em pavimentação asfáltica e infraestrutura.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand">
            <img src="/assets/pimentel-axis-logo-horizontal.png" alt="Pimentel Axis Infraestrutura" width="464" height="95" />
            <p>Especialistas em Pavimentação Asfáltica e Infraestrutura. Atendimento em todo o Estado de São Paulo.</p>
          </div>
          <div>
            <strong>Navegação</strong>
            <a href="#empresa">A empresa</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#diferenciais">Diferenciais</a><a href="#contato">Contato</a>
          </div>
          <div>
            <strong>Principais serviços</strong>
            <a href="#servicos">Pavimentação Asfáltica</a><a href="#servicos">Recapeamento Asfáltico</a><a href="#servicos">Operação Tapa-Buracos</a><a href="#servicos">Fresagem Asfáltica</a><a href="#servicos">Terraplenagem</a><a href="#servicos">Guias e Sarjetas</a><a href="#servicos">Piso Intertravado</a>
          </div>
          <div>
            <strong>Fale conosco</strong>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: (11) 99926-0226</a>
            <span>Qualidade • Segurança • Compromisso</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Pimentel Axis Infraestrutura. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Pimentel Axis pelo WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

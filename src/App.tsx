import { useState } from "react";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Soup,
  Palmtree,
  Heart,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { Header } from "./components/Header";
import { Reveal } from "./components/Reveal";
import {
  photos,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  MAPS_URL,
  MAPS_EMBED,
} from "./lib/carebao";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-sol text-sol" />
      ))}
    </span>
  );
}

function PrimaryCta({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracota px-7 py-3.5 text-base font-semibold text-creme shadow-lg shadow-madeira/30 transition-all duration-200 hover:bg-barro hover:shadow-xl active:scale-[0.97]"
    >
      {children}
    </a>
  );
}

function GhostCta({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-areia/70 bg-creme/10 px-7 py-3.5 text-base font-semibold text-creme backdrop-blur-sm transition-all duration-200 hover:bg-creme/20 active:scale-[0.97]"
    >
      {children}
    </a>
  );
}

const reviews = [
  {
    text: "Não entendi essa nota 4,4 😵‍💫 Restaurante maravilhoso, musica na altura certa, atendimento muito atencioso, cerveja estupidamente gelada e a comida maravilhosa. Sem duvidas, uma das moquecas mais deliciosas que eu já comi!",
    author: "Gislaine Marques",
  },
  {
    text: "Lugar aconchegante, com uma comida muito boa, preços bons, suco natural de laranja delicioso, fomos muito bem servidos e atendidos.",
    author: "Imperial Agrícola",
  },
  {
    text: "O local é bem tranquilo, comida boa e caseira. Bem localizado.",
    author: "Cleidinara Silva",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="topo" className="bg-creme text-madeira">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={photos.fachada}
          alt="Fachada de madeira do Restaurante Carebão em Regência, com telhado de telhas e jardim tropical"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-mata/90 via-madeira/75 to-madeira/60" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:pt-32">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-sol uppercase">
              Regência · Linhares — ES
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-creme sm:text-5xl md:text-6xl">
              Você veio conhecer Regência.
              <br />
              <span className="text-areia">Agora falta provar o sabor daqui.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-areia md:text-xl">
              Comida capixaba de verdade, em um dos cantinhos mais tradicionais de Regência.
            </p>
            <p className="mt-3 max-w-xl text-base text-areia/80">
              Moqueca, comida caseira, porções e aquele clima gostoso de vila que combina com um
              dia de praia.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta href={WHATSAPP_URL}>Quero conhecer o Carebão</PrimaryCta>
              <GhostCta href={MAPS_URL}>Como chegar</GhostCta>
            </div>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-areia">
              <Stars />
              <span className="font-semibold text-creme">4,4/5 no Google</span>
              <span className="text-areia/70">542 avaliações</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* BARRA DE CONFIANÇA */}
      <section className="bg-mata text-areia">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-5 py-7 text-sm md:grid-cols-5 md:items-center md:text-center">
          <li className="flex items-center gap-2 md:flex-col md:gap-1">
            <Stars className="shrink-0" />
            <span>
              <strong className="text-creme">4,4 no Google</strong>
              <span className="block text-areia/70">542 avaliações</span>
            </span>
          </li>
          {[
            { icon: <Soup className="size-5 text-sol" aria-hidden />, label: "Comida capixaba" },
            { icon: <Palmtree className="size-5 text-sol" aria-hidden />, label: "Clima de Regência" },
            { icon: <MapPin className="size-5 text-sol" aria-hidden />, label: "Regência — Linhares/ES" },
            {
              icon: <UtensilsCrossed className="size-5 text-sol" aria-hidden />,
              label: "Refeição no local",
            },
          ].map((item) => (
            <li key={item.label} className="flex items-center gap-2 md:flex-col md:gap-1.5">
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* O SABOR DE REGÊNCIA */}
      <section id="restaurante" className="bg-creme py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-terracota uppercase">
              O sabor de Regência
            </p>
            <h2 className="font-display text-3xl leading-tight text-mata md:text-[2.75rem]">
              Mais que uma refeição. Um pedaço de Regência à mesa.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-madeira/85">
              <p>Regência tem mar, rio, surf, cultura e muita história.</p>
              <p className="font-display text-2xl text-oliva">E também tem sabor.</p>
              <p>
                No Carebão, a cozinha combina sabores capixabas e aquele jeito simples de comida que
                você chega, senta e aproveita sem pressa.
              </p>
            </div>
            <div className="mt-8 h-px w-32 bg-terracota/50" />
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-1 rounded-[1.75rem] bg-areia/70" />
              <img
                src={photos.salao}
                alt="Salão aberto do Carebão com mesas e bancos rústicos de madeira sob telhado de telhas"
                loading="lazy"
                className="relative aspect-4/3 w-full rounded-3xl object-cover shadow-xl shadow-madeira/20"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESTAQUE MOQUECA */}
      <section className="bg-mata py-20 text-areia md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
          <Reveal>
            <img
              src={photos.pratoMoqueca}
              alt="Prato servido no Carebão com caldo amarelo, farinha, batata e cerveja gelada sobre mesa de madeira"
              loading="lazy"
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-2xl shadow-black/40"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-sol uppercase">
              Um sabor de Regência
            </p>
            <h2 className="font-display text-3xl leading-tight text-creme md:text-[2.75rem]">
              A moqueca capixaba que tem gosto de Espírito Santo.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-areia/85">
              <p>Tem pratos que alimentam.</p>
              <p>E tem pratos que fazem parte do lugar.</p>
              <p>A moqueca capixaba é uma dessas experiências.</p>
              <p>
                No Carebão, ela faz parte da identidade da casa e ajuda a contar a história de
                Regência.
              </p>
            </div>
            <div className="mt-9">
              <PrimaryCta href={WHATSAPP_URL}>Quero experimentar</PrimaryCta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTROS SABORES */}
      <section className="bg-creme py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl text-mata md:text-4xl">Outros sabores da casa</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: photos.panelas,
                alt: "Panelas de barro com moqueca, feijão e acompanhamentos sobre toalha xadrez",
                title: "Moqueca capixaba",
                text: "Um dos grandes destaques da casa.",
              },
              {
                img: photos.almoco,
                alt: "Prato de arroz com feijão, carne com cebola, salada e farofa em mesa de madeira",
                title: "Comida caseira",
                text: "Para quem quer comer bem durante o passeio.",
              },
              {
                img: photos.salao,
                alt: "Mesas compridas de madeira no salão do Carebão, prontas para grupos",
                title: "Porções",
                text: "Para compartilhar ou acompanhar a conversa.",
              },
            ].map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-md shadow-madeira/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-madeira/20">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-mata">{c.title}</h3>
                    <p className="mt-2 text-madeira/75">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-areia/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl text-mata md:text-4xl">Quem passa por aqui, lembra.</h2>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-madeira/75">
              <Stars />
              4,4 estrelas no Google • 542 avaliações
            </p>
          </Reveal>
          <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {reviews.map((r, i) => (
              <Reveal
                as="li"
                key={r.author}
                delay={i * 100}
                className="w-[85%] shrink-0 snap-center md:w-auto"
              >
                <figure className="flex h-full flex-col rounded-3xl border border-madeira/10 bg-creme p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <Stars className="mb-4" />
                  <blockquote className="grow text-madeira/85">“{r.text}”</blockquote>
                  <figcaption className="mt-6 font-semibold text-terracota">— {r.author}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* REGÊNCIA */}
      <section className="bg-creme py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={photos.placa}
                alt="Placa de madeira pintada à mão com o nome Restaurante Carebão entre plantas e flores"
                loading="lazy"
                className="col-span-2 aspect-video w-full rounded-3xl object-cover"
              />
              <img
                src={photos.fachadaLarga}
                alt="Vista da rua de terra em Regência com o Carebão ao fundo"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <img
                src={photos.salao}
                alt="Pessoas almoçando nas mesas de madeira do Carebão"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-terracota uppercase">
              Regência
            </p>
            <h2 className="font-display text-3xl leading-tight text-mata md:text-[2.75rem]">
              Seu passeio por Regência merece uma boa parada.
            </h2>
            <p className="mt-6 text-lg text-madeira/85">
              Depois da praia, do surf, do passeio pela vila ou de um dia explorando a região, nada
              melhor que sentar, comer bem e aproveitar o clima de Regência.
            </p>
            <p className="mt-8 flex flex-wrap items-center gap-3 font-display text-xl text-oliva">
              <span>Regência</span>
              <span className="text-terracota">→</span>
              <span>passeio</span>
              <span className="text-terracota">→</span>
              <span>fome</span>
              <span className="text-terracota">→</span>
              <span className="text-terracota">Carebão</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* POR QUE O CAREBÃO */}
      <section className="bg-mata py-20 text-areia md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl text-creme md:text-4xl">Por que o Carebão?</h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Soup className="size-6" aria-hidden />,
                title: "Sabor capixaba",
                text: "Receitas que valorizam os sabores da região.",
              },
              {
                icon: <Palmtree className="size-6" aria-hidden />,
                title: "Clima de Regência",
                text: "Um ambiente rústico e acolhedor integrado à atmosfera da vila.",
              },
              {
                icon: <Heart className="size-6" aria-hidden />,
                title: "Comida feita com carinho",
                text: "Uma experiência simples, humana e sem frescura.",
              },
              {
                icon: <MapPin className="size-6" aria-hidden />,
                title: "No coração de Regência",
                text: "Localizado na Avenida Principal.",
              },
            ].map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 90}>
                <div className="mb-4 inline-flex rounded-2xl bg-oliva/25 p-3 text-sol">{b.icon}</div>
                <h3 className="font-display text-xl text-creme">{b.title}</h3>
                <p className="mt-2 text-areia/80">{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-creme py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl text-mata md:text-4xl">Um pouco da casa</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <figure className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={photos.fachada}
                alt="Varanda de madeira do Restaurante Carebão vista do jardim"
                loading="lazy"
                className="size-full min-h-64 object-cover transition-transform duration-700 hover:scale-105 md:min-h-[32rem]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-madeira/85 to-transparent p-6 font-display text-2xl text-creme md:text-3xl">
                Entre. Sente. Aproveite.
              </figcaption>
            </figure>
            {[
              { img: photos.panelas, alt: "Panelas de barro com moqueca e acompanhamentos" },
              { img: photos.almoco, alt: "Almoço servido com arroz, feijão e carne" },
              { img: photos.salao, alt: "Mesas de madeira no salão coberto" },
              { img: photos.placa, alt: "Placa artesanal do Restaurante Carebão" },
              { img: photos.pratoMoqueca, alt: "Prato com caldo, farinha e batata" },
              { img: photos.fachadaLarga, alt: "Fachada completa do Carebão em Regência" },
            ].map((g) => (
              <figure key={g.alt} className="overflow-hidden rounded-2xl">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="bg-areia/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl text-mata md:text-4xl">O que vai para a mesa?</h2>
            <p className="mt-3 text-madeira/75">R$ 20–40 por pessoa · refeição no local e para viagem</p>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: photos.panelas,
                alt: "Panela de barro com moqueca capixaba",
                title: "Moqueca capixaba",
                text: "O prato mais lembrado por quem senta aqui.",
              },
              {
                img: photos.almoco,
                alt: "Prato executivo com arroz, feijão, carne e salada",
                title: "Prato executivo",
                text: "Comida caseira servida no ritmo do almoço.",
              },
              {
                img: photos.pratoMoqueca,
                alt: "Prato servido com caldo e acompanhamentos, ao lado de cerveja gelada",
                title: "Porções",
                text: "Para dividir na mesa com a conversa em dia.",
              },
            ].map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-creme shadow-md shadow-madeira/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="flex grow flex-col p-6">
                    <h3 className="font-display text-2xl text-mata">{c.title}</h3>
                    <p className="mt-2 grow text-madeira/75">{c.text}</p>
                    <p className="mt-4 text-sm text-madeira/50">Valores sob consulta no restaurante</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-mata px-7 py-3.5 text-base font-semibold text-creme transition-all duration-200 hover:bg-oliva active:scale-[0.97]"
            >
              Ver cardápio completo
            </button>
          </div>
        </div>
      </section>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-madeira/70 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Cardápio completo"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-creme p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar"
              className="absolute top-4 right-4 rounded-full p-2 text-madeira/60 hover:bg-areia/60"
            >
              <X className="size-5" aria-hidden />
            </button>
            <h3 className="font-display text-2xl text-mata">Cardápio completo</h3>
            <p className="mt-3 text-madeira/80">
              O cardápio digital do Carebão ainda está sendo preparado. Enquanto isso, fale com a
              gente no WhatsApp para saber o que está saindo hoje.
            </p>
            <div className="mt-6 space-y-3">
              {["Moqueca capixaba", "Prato executivo", "Porções"].map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-between rounded-2xl border border-madeira/10 bg-card px-4 py-3"
                >
                  <span className="font-semibold text-mata">{n}</span>
                  <span className="text-sm text-madeira/50">consultar</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-terracota px-6 font-semibold text-creme transition-colors hover:bg-barro"
            >
              Perguntar no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-creme py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-mata md:text-[2.75rem]">
              Chegou em Regência? É fácil encontrar.
            </h2>
            <p className="mt-5 text-lg text-madeira/85">
              Estamos na Avenida Principal de Regência, em Linhares/ES.
            </p>
            <ul className="mt-7 space-y-4 text-madeira/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-terracota" aria-hidden />
                <span>
                  <strong className="block text-mata">Restaurante Carebão</strong>
                  Avenida Principal em Regência
                  <br />
                  Linhares — ES
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-terracota" aria-hidden />
                <a href="tel:+5527998265680" className="underline-offset-4 hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta href={MAPS_URL}>Abrir no Google Maps</PrimaryCta>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-mata/30 px-7 py-3.5 text-base font-semibold text-mata transition-all duration-200 hover:bg-mata hover:text-creme active:scale-[0.97]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <iframe
              title="Mapa da localização do Restaurante Carebão em Regência"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-3xl border border-madeira/10 shadow-lg shadow-madeira/15 md:h-[26rem]"
            />
          </Reveal>
        </div>
      </section>

      {/* HORÁRIO */}
      <section className="bg-oliva/15 py-16">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <Clock className="mx-auto size-7 text-terracota" aria-hidden />
          <h2 className="mt-4 font-display text-3xl text-mata">Estamos esperando por você</h2>
          <p className="mt-3 font-display text-2xl text-oliva">Abre às 11h</p>
          <p className="mt-5 text-sm text-madeira/60">
            Horários podem sofrer alterações em feriados e datas especiais.
          </p>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src={photos.fachadaLarga}
          alt="Restaurante Carebão visto da avenida principal de Regência"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-madeira/85" />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl leading-tight text-creme md:text-5xl">
            Seu próximo almoço em Regência pode ser aqui.
          </h2>
          <p className="mt-5 text-lg text-areia/90">
            Venha conhecer o Carebão, provar a comida capixaba e aproveitar o melhor da vila.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCta href={WHATSAPP_URL}>Falar com o Carebão</PrimaryCta>
            <GhostCta href={MAPS_URL}>Como chegar</GhostCta>
          </div>
          <p className="mt-7 text-sm text-areia/75">Avenida Principal — Regência, Linhares/ES</p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-mata pt-16 pb-28 text-areia md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-creme">CAREBÃO</p>
            <p className="mt-2 text-areia/80">O sabor de Regência.</p>
          </div>
          <div className="text-areia/85">
            <p>Avenida Principal em Regência</p>
            <p>Linhares — ES</p>
            <a href="tel:+5527998265680" className="mt-3 inline-block hover:text-sol">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <ul className="space-y-2">
              {[
                { href: "#restaurante", label: "Restaurante" },
                { href: "#cardapio", label: "Cardápio" },
                { href: "#avaliacoes", label: "Avaliações" },
                { href: "#localizacao", label: "Como chegar" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-areia/85 hover:text-sol">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-terracota px-6 font-semibold text-creme transition-colors hover:bg-barro"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl px-5 text-sm text-areia/55">
          © {new Date().getFullYear()} Restaurante Carebão — Regência, Linhares/ES.
        </p>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Carebão no WhatsApp"
        className="fixed right-6 bottom-6 z-50 hidden size-14 items-center justify-center rounded-full bg-terracota text-creme shadow-xl shadow-madeira/40 transition-transform duration-200 hover:scale-105 active:scale-95 md:flex"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-madeira/20 bg-creme/95 p-3 backdrop-blur md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-terracota font-semibold text-creme active:scale-[0.98]"
        >
          <MessageCircle className="size-5" aria-hidden /> Falar com o Carebão
        </a>
      </div>
    </div>
  );
}

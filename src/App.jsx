import firelaLogo from './assets/images/firela-logo.webp'
import heroFirela from './assets/images/hero-firela.webp'
import siteData from './data/site'

function App() {
  const whatsappHref = `https://wa.me/525548746673?text=${encodeURIComponent(
    siteData.contact.whatsappMessage,
  )}`

  return (
    <div className="min-h-screen bg-firela-white text-firela-black">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
          <a href="#" className="flex items-center gap-3">
            <img
              src={firelaLogo}
              alt={siteData.brand.fullName}
              className="h-12 w-auto sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-black/75 transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-firela-black px-5 py-2.5 text-sm font-medium text-firela-white transition hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,215,219,0.52),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(219,204,213,0.45),transparent_28%)]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-24">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                {siteData.home.eyebrow}
              </p>

              <h1 className="max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                {siteData.home.title}
              </h1>

              <p className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
                {siteData.home.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-firela-black px-6 py-3 text-sm font-medium text-firela-white transition hover:opacity-90"
                >
                  {siteData.home.primaryCta.label}
                </a>

                <a
                  href={siteData.home.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-firela-black transition hover:bg-firela-rose-soft"
                >
                  {siteData.home.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-6 h-32 w-32 rounded-full bg-firela-blue-soft blur-3xl" />
              <div className="absolute top-16 right-6 h-28 w-28 rounded-full bg-firela-rose-soft/80 blur-3xl" />
              <div className="absolute right-0 -bottom-10 h-40 w-40 rounded-full bg-firela-blue-deep/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-black/65 backdrop-blur">
                    Diseño floral
                  </div>

                  <img
                    src={heroFirela}
                    alt="Montaje floral de FIRELA"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/18 via-black/0 to-transparent" />

                  <div className="absolute bottom-5 right-5 max-w-[220px] rounded-[1.3rem] border border-white/55 bg-white/82 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">
                      FIRELA
                    </p>
                    <p className="mt-2 text-sm leading-6 text-black/78">
                      Propuestas florales con presencia visual para momentos
                      especiales.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-black/8 bg-firela-rose-soft/45 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                      Detalle
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/70">
                      Cada arreglo debe sentirse fino, cuidado y digno de ser
                      regalado.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/8 bg-firela-blue-soft/50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                      Identidad
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/70">
                      Una marca floral con una imagen limpia, moderna y
                      profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="border-t border-black/8">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                  {siteData.about.title}
                </p>
                <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                  Una marca floral construida con profesionalismo, detalle y
                  sensibilidad.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-black/72">
                  {siteData.about.description}
                </p>
              </div>

              <div className="grid gap-4">
                {siteData.about.highlights.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.5rem] border border-black/8 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] ${
                      index % 2 === 0 ? 'bg-white' : 'bg-firela-rose-soft/35'
                    }`}
                  >
                    <p className="text-sm leading-7 text-black/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="lo-que-hacemos"
          className="border-t border-black/8 bg-firela-blue-soft/35"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                {siteData.services.title}
              </p>
              <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                Propuestas florales pensadas para transmitir algo importante.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {siteData.services.items.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.75rem] border border-black/8 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] ${
                    index === 1 ? 'bg-firela-rose-soft/45' : 'bg-white'
                  }`}
                >
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nuestros-clientes" className="border-t border-black/8">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                  {siteData.clients.title}
                </p>
                <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                  Pensado para personas que quieren regalar, decorar o expresar
                  algo con flores.
                </h2>
                <p className="text-base leading-8 text-black/72">
                  {siteData.clients.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siteData.clients.items.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.5rem] border border-black/8 p-5 ${
                      index === 0 || index === 3
                        ? 'bg-firela-rose-soft/35'
                        : 'bg-white'
                    }`}
                  >
                    <p className="text-sm leading-7 text-black/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="border-t border-black/8 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                  Galería
                </p>
                <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                  Un catálogo visual con mejor presencia, sin carruseles
                  chafas ni caos visual.
                </h2>
                <p className="text-base leading-8 text-black/72">
                  Aquí después montaremos una galería premium con fotos reales
                  de arreglos, pensada para que cada pieza se vea elegante y
                  pueda llevar a una consulta directa por WhatsApp.
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-medium text-firela-black transition hover:bg-firela-rose-soft"
              >
                Pedir información
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
                >
                  <div
                    className={`aspect-[4/5] ${
                      index % 3 === 1
                        ? 'bg-[linear-gradient(180deg,rgba(219,204,213,0.65),rgba(204,215,219,0.2))]'
                        : 'bg-[linear-gradient(180deg,rgba(204,215,219,0.55),rgba(169,187,194,0.2))]'
                    }`}
                  />
                  <div className="space-y-3 p-5">
                    <p className="text-lg font-medium">Arreglo floral</p>
                    <p className="text-sm leading-7 text-black/70">
                      Espacio temporal para fotografía real del catálogo.
                    </p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium underline underline-offset-4"
                    >
                      Me interesa este diseño
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="border-t border-black/8 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
              Contacto
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Hablemos de la idea floral que tienes en mente.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-black/72">
              Si viste un estilo que te gustó o quieres cotizar un arreglo,
              podemos llevar la conversación directo a WhatsApp.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-firela-rose-soft/45 p-6">
            <div className="space-y-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-firela-black px-6 py-3 text-sm font-medium text-firela-white transition hover:opacity-90"
              >
                Enviar mensaje por WhatsApp
              </a>

              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-black/75 transition hover:text-black"
              >
                Instagram
              </a>

              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-black/75 transition hover:text-black"
              >
                Facebook
              </a>

              <p className="pt-3 text-sm text-black/65">
                Teléfono: {siteData.contact.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
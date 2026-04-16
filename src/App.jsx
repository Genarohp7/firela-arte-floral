import { useState } from 'react'
import firelaLogo from './assets/images/firela-logo.webp'
import heroFirela from './assets/images/hero-firela.webp'
import aboutFirela from './assets/images/about-firela.webp'
import servicesFirela from './assets/images/services-firela.webp'
import galleryCoverFirela from './assets/images/gallery-cover-firela.webp'
import galleryItem01 from './assets/images/gallery-item-01.webp'
import galleryItem02 from './assets/images/gallery-item-02.webp'
import galleryItem03 from './assets/images/gallery-item-03.webp'
import galleryItem04 from './assets/images/gallery-item-04.webp'
import galleryItem05 from './assets/images/gallery-item-05.webp'
import galleryItem06 from './assets/images/gallery-item-06.webp'
import siteData from './data/site'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const createWhatsAppHref = (message) =>
    `https://wa.me/525548746673?text=${encodeURIComponent(message)}`

  const whatsappHref = createWhatsAppHref(siteData.contact.whatsappMessage)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen((current) => !current)

  const galleryItems = [
    {
      id: 'gallery-01',
      title: 'Diseño floral 01',
      description:
        'Una propuesta floral con presencia elegante para regalo o un momento especial.',
      image: galleryItem01,
      message:
        'Hola, vi el Diseño floral 01 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
    {
      id: 'gallery-02',
      title: 'Diseño floral 02',
      description:
        'Composición con una imagen más delicada y una presentación cuidada.',
      image: galleryItem02,
      message:
        'Hola, vi el Diseño floral 02 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
    {
      id: 'gallery-03',
      title: 'Diseño floral 03',
      description:
        'Arreglo con intención estética para sorprender con un detalle especial.',
      image: galleryItem03,
      message:
        'Hola, vi el Diseño floral 03 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
    {
      id: 'gallery-04',
      title: 'Diseño floral 04',
      description:
        'Una pieza floral con mejor presencia visual para una ocasión importante.',
      image: galleryItem04,
      message:
        'Hola, vi el Diseño floral 04 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
    {
      id: 'gallery-05',
      title: 'Diseño floral 05',
      description:
        'Detalle floral pensado para regalar con elegancia y sensibilidad.',
      image: galleryItem05,
      message:
        'Hola, vi el Diseño floral 05 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
    {
      id: 'gallery-06',
      title: 'Diseño floral 06',
      description:
        'Propuesta floral con un estilo cuidado y una presentación fina.',
      image: galleryItem06,
      message:
        'Hola, vi el Diseño floral 06 en la galería de FIRELA y me gustaría saber su precio y disponibilidad.',
    },
  ]

  return (
    <div className="min-h-screen bg-firela-white text-firela-black">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
          <a href="#" className="flex items-center gap-3" onClick={closeMobileMenu}>
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

          <div className="hidden lg:block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-firela-black px-5 py-2.5 text-sm font-medium text-firela-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-firela-black shadow-sm transition hover:bg-firela-rose-soft lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-black/8 bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? 'max-h-[420px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10">
            <nav className="flex flex-col gap-2">
              {siteData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-black/80 transition hover:bg-firela-blue-soft/35 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 border-t border-black/8 pt-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center rounded-full bg-firela-black px-6 py-3 text-sm font-medium text-firela-white transition hover:opacity-90"
              >
                Enviar mensaje por WhatsApp
              </a>
            </div>
          </div>
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
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative">
                <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-firela-blue-soft/70 blur-3xl" />
                <div className="absolute -bottom-6 right-2 h-28 w-28 rounded-full bg-firela-rose-soft/70 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                  <div className="overflow-hidden rounded-[1.6rem]">
                    <img
                      src={aboutFirela}
                      alt="Detalle floral elaborado por FIRELA"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
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

                <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
        </section>

        <section
          id="lo-que-hacemos"
          className="border-t border-black/8 bg-firela-blue-soft/35"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="space-y-8">
                <div className="max-w-2xl space-y-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                    {siteData.services.title}
                  </p>
                  <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                    Diseños florales pensados para verse especiales y sentirse
                    memorables.
                  </h2>
                  <p className="text-base leading-8 text-black/72">
                    {siteData.services.intro}
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

              <div className="relative">
                <div className="absolute -right-4 top-8 h-24 w-24 rounded-full bg-firela-rose-soft/70 blur-3xl" />
                <div className="absolute -left-4 bottom-0 h-28 w-28 rounded-full bg-firela-blue-soft/75 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <div className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/82 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-black/65 backdrop-blur">
                      Lo que hacemos
                    </div>

                    <img
                      src={servicesFirela}
                      alt="Propuesta floral elaborada por FIRELA"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="border-t border-black/8 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                    {siteData.gallery.title}
                  </p>
                  <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                    {siteData.gallery.heading}
                  </h2>
                  <p className="text-base leading-8 text-black/72">
                    {siteData.gallery.description}
                  </p>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-medium text-firela-black transition hover:bg-firela-rose-soft"
                >
                  {siteData.gallery.buttonLabel}
                </a>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-firela-blue-soft/75 blur-3xl" />
                <div className="absolute -right-3 bottom-0 h-28 w-28 rounded-full bg-firela-rose-soft/75 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <div className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/82 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-black/65 backdrop-blur">
                      Catálogo FIRELA
                    </div>

                    <img
                      src={galleryCoverFirela}
                      alt="Portada de galería floral de FIRELA"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/5] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-sm leading-7 text-black/70">
                      {item.description}
                    </p>

                    <a
                      href={createWhatsAppHref(item.message)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-firela-black px-4 py-2 text-sm font-medium text-firela-white transition hover:opacity-90"
                    >
                      Me interesa este diseño
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/8 bg-firela-blue-soft/30">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] sm:p-10 lg:p-12">
              <div className="absolute -top-10 -left-6 h-28 w-28 rounded-full bg-firela-blue-soft blur-3xl" />
              <div className="absolute right-0 -bottom-10 h-32 w-32 rounded-full bg-firela-rose-soft/80 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-firela-blue-deep">
                    {siteData.finalCta.eyebrow}
                  </p>
                  <h2 className="max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl">
                    {siteData.finalCta.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-black/72">
                    {siteData.finalCta.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-medium text-firela-black transition hover:bg-firela-rose-soft"
                  >
                    {siteData.finalCta.primaryLabel}
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-firela-black px-6 py-3 text-sm font-medium text-firela-white transition hover:opacity-90"
                  >
                    {siteData.finalCta.secondaryLabel}
                  </a>
                </div>
              </div>
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
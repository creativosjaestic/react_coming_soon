import { toTelHref } from '../phone'
import ContactList from '../components/ContactList'
import Copyright from '../components/Copyright'
import Logo from '../components/Logo'
import MapEmbed from '../components/MapEmbed'
import SocialLinks from '../components/SocialLinks'
import { MailIcon, PhoneIcon } from '../Icons'

const StorefrontTemplate = ({
  title,
  siteName,
  website,
  description,
  email,
  phone,
  address,
  logoUrl,
  socials,
  mapEmbedUrl,
  directionsUrl,
}) => (
  <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f3f7fb] text-[#0f2747]">
    <div className="relative z-10 drop-shadow-[0_8px_10px_rgb(15_39_71/0.3)]" aria-hidden="true">
      <div className="awning" />
    </div>
    <div
      className="pointer-events-none absolute inset-x-0 top-12 h-48 bg-linear-to-b from-brand/10 to-transparent"
      aria-hidden="true"
    />

    <main className="relative mx-auto grid w-full max-w-6xl flex-1 gap-12 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-14">
      <div className="min-w-0">
        <Logo logoUrl={logoUrl} siteName={siteName} className="mb-10 h-16 w-auto sm:h-20" />

        <h1 className="text-5xl leading-[0.95] sm:text-7xl lg:text-6xl xl:text-7xl font-extrabold text-brand">
          {title}
        </h1>

        <p className="mt-6 max-w-[34rem] text-lg text-[#0f2747]/80 text-pretty">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {phone && (
            <a
              href={toTelHref(phone)}
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b40f] px-6 py-3 font-semibold text-[#0f2747] shadow-sm transition-colors hover:bg-[#e3a400] motion-reduce:transition-none"
            >
              <PhoneIcon className="size-5" />
              Llamar ahora
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-2.5 font-semibold text-brand transition-colors hover:bg-brand hover:text-white motion-reduce:transition-none"
            >
              <MailIcon className="size-5" />
              Escríbenos
            </a>
          )}
        </div>

        <ContactList
          email={email}
          phone={phone}
          className="mt-8 space-y-2 text-[#0f2747]/80"
          itemClassName="flex items-center gap-3"
          iconClassName="size-5 shrink-0 text-brand"
        />
      </div>

      <section aria-label="Ubicación" className="min-w-0">
        {mapEmbedUrl ? (
          <div className="overflow-hidden rounded-3xl border-4 border-white shadow-xl ring-2 ring-brand/80">
            <MapEmbed
              url={mapEmbedUrl}
              address={address}
              className="block aspect-4/3 w-full border-0 lg:aspect-5/4"
            />
          </div>
        ) : (
          <div className="grid min-h-64 place-items-center rounded-3xl bg-brand p-10">
            {logoUrl ? (
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <Logo
                  logoUrl={logoUrl}
                  siteName={siteName}
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            ) : (
              <p className="font-display text-4xl font-bold text-white text-balance">{siteName}</p>
            )}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <ContactList
            address={address}
            className="min-w-0"
            itemClassName="flex items-start gap-3"
            iconClassName="mt-0.5 size-5 shrink-0 text-brand"
          />
          {directionsUrl && (
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline decoration-2 underline-offset-4 hover:decoration-[#f5b40f]"
            >
              Cómo llegar
            </a>
          )}
        </div>
      </section>
    </main>

    <footer className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 pb-8 sm:px-6 lg:px-8">
      <SocialLinks
        socials={socials}
        className="-ml-2.5 flex gap-1"
        itemClassName="rounded-full text-brand hover:bg-brand/10"
      />
      <Copyright name={website} className="text-sm text-[#0f2747]/60" />
    </footer>
  </div>
)

export default StorefrontTemplate

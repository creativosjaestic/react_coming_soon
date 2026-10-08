import { toTelHref } from '../phone'
import ContactList from '../components/ContactList'
import Copyright from '../components/Copyright'
import Logo from '../components/Logo'
import MapEmbed from '../components/MapEmbed'
import SocialLinks from '../components/SocialLinks'
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from '../Icons'

/* Two drifting layers of thin bright ridges (turbulence noise) read as sunlight caustics on the pool floor. */
const CausticLayer = ({ id, frequency, seed, className }) => (
  <svg className={className} aria-hidden="true">
    <filter id={id} x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency={frequency} numOctaves="2" seed={seed} />
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1 0 0 0 0" />
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0 0 0 .6 1 .6 0 0 0 0" />
      </feComponentTransfer>
      <feGaussianBlur stdDeviation="0.7" />
    </filter>
    <rect width="100%" height="100%" filter={`url(#${id})`} />
  </svg>
)

/*
 * From `lg` up the page is exactly one viewport tall (deck row, water band, footer row) so
 * nothing needs scrolling; below that it stacks and scrolls naturally.
 */
const PoolTemplate = ({
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
  activitiesUrl,
  activitiesLabel,
}) => (
  <div className="flex min-h-svh flex-col overflow-x-hidden bg-deck text-brand lg:h-svh lg:min-h-[32rem]">
    <header className="pool-tiles">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-6 pt-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8 lg:py-3">
        <Logo
          logoUrl={logoUrl}
          siteName={siteName}
          className="h-36 w-auto self-start sm:h-44 lg:h-[clamp(5.5rem,21svh,13rem)]"
        />
        <ContactList
          email={email}
          phone={phone}
          address={address}
          className="space-y-2 lg:text-lg"
          itemClassName="flex items-start gap-3"
          iconClassName="mt-1 size-5 shrink-0 text-royal"
        />
      </div>
    </header>

    <main className="pool-water relative isolate flex flex-1 flex-col text-white" aria-labelledby="pool-title">
      <div className="pool-caustics" aria-hidden="true">
        <CausticLayer id="caustic-a" frequency="0.008 0.014" seed="3" className="pool-caustics-a" />
        <CausticLayer id="caustic-b" frequency="0.011 0.008" seed="11" className="pool-caustics-b" />
      </div>
      <div className="pool-waterline" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 gap-10 px-4 pb-14 pt-16 sm:px-6 lg:min-h-0 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="min-w-0">
          <h1
            id="pool-title"
            className="text-[clamp(2.25rem,11.5vw,5rem)] font-extrabold leading-[0.9] tracking-tight lg:text-[clamp(3rem,min(5.6vw,15svh),5rem)]"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg/relaxed text-white/90 text-pretty lg:mt-[clamp(1rem,3svh,2rem)]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-[clamp(1.25rem,4svh,2.5rem)]">
            {phone && (
              <a
                href={toTelHref(phone)}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-brand shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
              >
                <PhoneIcon className="size-5" />
                Llamar ahora
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand motion-reduce:transition-none"
              >
                <MailIcon className="size-5" />
                Escríbenos
              </a>
            )}
            {activitiesUrl && (
              <a
                href={activitiesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:decoration-4"
              >
                {activitiesLabel}
                <ArrowUpRightIcon className="size-5 text-accent" />
              </a>
            )}
          </div>
        </div>

        {mapEmbedUrl && (
          <section aria-label="Ubicación" className="flex flex-col gap-3">
            <div className="pool-coping">
              <MapEmbed
                url={mapEmbedUrl}
                address={address}
                className="block aspect-4/3 w-full rounded-[1.4rem] border-0 lg:aspect-auto lg:h-[clamp(11rem,46svh,30rem)]"
              />
            </div>
            {directionsUrl && (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:decoration-4"
              >
                Cómo llegar
              </a>
            )}
          </section>
        )}
      </div>

      <div className="pool-rope" aria-hidden="true" />
    </main>

    <footer className="pool-tiles">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 pb-3 pt-4 sm:px-6 lg:px-8">
        <SocialLinks
          socials={socials}
          className="-ml-2.5 flex gap-1"
          itemClassName="rounded-full text-brand hover:bg-brand/10"
        />
        <Copyright name={website} className="text-sm text-brand/70" />
      </div>
    </footer>
  </div>
)

export default PoolTemplate

import bg from '../assets/bg.avif'
import ContactList from '../components/ContactList'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'

const ParallaxTemplate = ({
  title,
  siteName,
  description,
  email,
  phone,
  address,
  logoUrl,
  socials,
}) => (
  <div
    className="min-h-screen bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="flex min-h-screen flex-col bg-linear-to-t from-black/80 via-black/50 to-black/40">
      <header className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-6">
        {logoUrl ? (
          <Logo logoUrl={logoUrl} siteName={siteName} className="h-12 w-auto rounded-md" />
        ) : (
          <p className="font-display text-xl font-bold">{siteName}</p>
        )}
        <ContactList
          email={email}
          phone={phone}
          className="flex flex-wrap items-center gap-x-6 gap-y-1"
          itemClassName="flex items-center gap-2"
          iconClassName="size-4 shrink-0"
        />
      </header>

      <main className="container mx-auto flex-1 px-4 py-16 sm:py-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
          <span className="mt-5 block h-1 w-16 rounded-full bg-brand" aria-hidden="true" />
          <p className="mt-6 text-lg text-white/90 text-pretty">{description}</p>

          {socials.length > 0 && (
            <div className="mt-12">
              <p className="mb-3">Síguenos</p>
              <SocialLinks
                socials={socials}
                className="flex gap-3"
                itemClassName="rounded-xl bg-white/85 text-gray-800 hover:bg-white"
              />
            </div>
          )}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6">
        <ContactList
          address={address}
          className="flex"
          itemClassName="flex items-center gap-2"
          iconClassName="size-5 shrink-0"
        />
      </footer>
    </div>
  </div>
)

export default ParallaxTemplate

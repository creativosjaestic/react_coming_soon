import { MailIcon } from '../Icons'
import ContactList from '../components/ContactList'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'

const BeautyTemplate = ({
  title,
  siteName,
  website,
  description,
  email,
  phone,
  address,
  logoUrl,
  socials,
}) => (
  <main className="grid min-h-screen place-items-center bg-gray-100 p-4">
    <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg md:min-h-[600px] md:grid-cols-2">
      <div className="flex min-w-0 flex-col justify-between gap-12 bg-[#f5f5f0] p-8 md:p-12">
        <div>
          <p className="text-sm font-medium tracking-wide text-gray-600">{website}</p>
          <h1 className="mt-6 text-4xl font-bold break-words lg:text-5xl">{title}</h1>
          <p className="mt-2 font-display text-3xl font-semibold text-gray-900">{siteName}</p>
          <p className="mt-6 max-w-md text-gray-700 text-pretty">{description}</p>

          {email && (
            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 motion-reduce:transition-none"
            >
              <MailIcon className="size-4" />
              Escríbenos
            </a>
          )}
        </div>

        <footer className="space-y-4">
          <ContactList
            email={email}
            phone={phone}
            address={address}
            className="space-y-2 text-sm text-gray-700"
            itemClassName="flex items-center gap-2"
            iconClassName="size-4 shrink-0 text-brand"
          />
          <SocialLinks
            socials={socials}
            className="-ml-2.5 flex gap-1"
            itemClassName="rounded-full text-gray-900 hover:bg-black/5"
          />
        </footer>
      </div>

      <div className="grid min-h-64 place-items-center bg-brand p-10">
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
    </div>
  </main>
)

export default BeautyTemplate

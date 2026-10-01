import ContactList from '../components/ContactList'
import Copyright from '../components/Copyright'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'

const ModernTemplate = ({
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
  <div className="flex min-h-screen flex-col bg-linear-to-br from-gray-50 to-gray-100">
    <main className="flex grow items-center justify-center sm:p-6">
      <div className="w-full max-w-5xl overflow-hidden bg-white sm:rounded-2xl sm:shadow-xl md:flex">
        <div className="p-8 md:w-1/2 md:p-12">
          <Logo logoUrl={logoUrl} siteName={siteName} className="mb-8 h-16 w-auto" />

          <h1 className="mb-3 text-4xl font-extrabold text-brand">{title}</h1>

          <p className="mb-8 text-lg text-gray-600 text-pretty">{description}</p>

          <ContactList
            email={email}
            phone={phone}
            address={address}
            className="mb-8 space-y-4"
            itemClassName="flex items-center gap-3 text-gray-700"
            iconClassName="size-10 shrink-0 rounded-full bg-brand/10 p-2.5 text-brand"
          />

          <SocialLinks
            socials={socials}
            className="-ml-2 flex gap-1"
            itemClassName="rounded-full text-gray-800 hover:bg-gray-100"
          />
        </div>

        <div className="grid min-h-64 place-items-center bg-brand p-12 md:w-1/2">
          {logoUrl ? (
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <Logo
                logoUrl={logoUrl}
                siteName={siteName}
                className="max-h-40 w-auto object-contain"
              />
            </div>
          ) : (
            <p className="font-display text-5xl font-bold text-white text-balance">
              {website}
            </p>
          )}
        </div>
      </div>
    </main>

    <footer className="py-6">
      <Copyright name={website} className="text-center text-sm text-gray-500" />
    </footer>
  </div>
)

export default ModernTemplate

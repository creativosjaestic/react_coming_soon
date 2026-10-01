import ContactList from '../components/ContactList'
import Copyright from '../components/Copyright'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'

const MinimalTemplate = ({
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
  <div className="flex min-h-screen flex-col">
    <main className="flex grow items-center justify-center p-4">
      <div className="mx-auto max-w-3xl text-center">
        <Logo
          logoUrl={logoUrl}
          siteName={siteName}
          className="mx-auto mb-8 h-20 w-auto sm:h-32"
        />

        <h1 className="mb-4 text-4xl font-bold text-brand sm:text-5xl">{title}</h1>

        <p className="mx-auto mb-10 max-w-prose text-xl text-gray-600 text-pretty">
          {description}
        </p>

        <ContactList
          email={email}
          phone={phone}
          address={address}
          className="flex flex-wrap justify-center gap-4"
          itemClassName="flex grow basis-56 flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 text-gray-700"
          iconClassName="size-8 text-brand"
        />
      </div>
    </main>

    <footer className="bg-gray-50 py-6">
      <SocialLinks
        socials={socials}
        className="mb-4 flex justify-center gap-2"
        itemClassName="rounded-full text-gray-800 hover:bg-gray-200"
      />
      <Copyright name={website} className="text-center text-sm text-gray-500" />
    </footer>
  </div>
)

export default MinimalTemplate

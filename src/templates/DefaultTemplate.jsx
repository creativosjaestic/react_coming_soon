import mockup from '../assets/mockup.png'
import ContactList from '../components/ContactList'
import Copyright from '../components/Copyright'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'

const DefaultTemplate = ({
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
  <div className="flex min-h-screen flex-col bg-white">
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md text-center sm:max-w-2xl lg:mx-0 lg:text-left">
        <Logo
          logoUrl={logoUrl}
          siteName={siteName}
          className="mx-auto mb-8 h-32 w-auto lg:hidden"
        />

        <h1 className="text-4xl font-bold text-brand sm:text-6xl">{title}</h1>
        <p className="mt-2 text-2xl font-medium text-gray-900 sm:text-3xl">{website}</p>
        <p className="mt-5 text-lg text-gray-600 text-pretty sm:text-xl lg:text-lg xl:text-xl">
          {description}
        </p>

        <ContactList
          email={email}
          phone={phone}
          address={address}
          showLabels
          className="mx-auto mt-10 flex w-fit flex-col gap-5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:flex-col lg:justify-start"
          itemClassName="flex items-center gap-3 text-left"
          iconClassName="size-14 shrink-0 rounded-full bg-brand/10 p-3.5 text-brand"
          labelClassName="text-sm text-gray-500"
        />
      </div>

      <div className="relative hidden lg:block">
        <img src={mockup} alt="" className="w-full" />
        {logoUrl && (
          <div className="absolute inset-0 grid place-items-center p-12">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <Logo
                logoUrl={logoUrl}
                siteName={siteName}
                className="max-h-40 w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </main>

    <footer className="px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      <SocialLinks
        socials={socials}
        className="flex justify-center gap-2"
        itemClassName="rounded-full text-gray-800 hover:bg-gray-100"
      />
      <Copyright name={website} className="mt-6 text-center text-sm text-gray-500" />
    </footer>
  </div>
)

export default DefaultTemplate

import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

const env = import.meta.env

const DEFAULT_THEME_COLOR = 'rgb(236 72 153)'
const DEFAULT_ACCENT_COLOR = 'rgb(245 180 15)'

const SOCIAL_NETWORKS = [
  { name: 'Instagram', url: env.VITE_APP_SOCIAL_INSTAGRAM, Icon: InstagramIcon },
  { name: 'Facebook', url: env.VITE_APP_SOCIAL_FACEBOOK, Icon: FacebookIcon },
  { name: 'X', url: env.VITE_APP_SOCIAL_TWITTER, Icon: TwitterIcon },
]

const address = env.VITE_APP_ADDRESS
const showMap = env.VITE_APP_SHOW_MAP !== 'false'
const mapEmbedUrl = showMap
  ? env.VITE_APP_MAP_EMBED_URL ||
    (address && `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`)
  : undefined

const config = {
  template: env.VITE_APP_TEMPLATE || 'default',
  siteName: env.VITE_APP_NAME,
  website: env.VITE_APP_WEBSITE,
  title: env.VITE_APP_TITLE,
  description: env.VITE_APP_DESCRIPTION,
  email: env.VITE_APP_EMAIL,
  phone: env.VITE_APP_PHONE,
  address,
  mapEmbedUrl: mapEmbedUrl || undefined,
  directionsUrl:
    address && `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
  themeColor: env.VITE_APP_COLOR || DEFAULT_THEME_COLOR,
  accentColor: env.VITE_APP_ACCENT_COLOR || DEFAULT_ACCENT_COLOR,
  logoUrl: env.VITE_APP_SHOW_LOGO === 'true' ? env.VITE_APP_URL_LOGO : undefined,
  activitiesUrl: env.VITE_APP_ACTIVITIES_URL,
  activitiesLabel: env.VITE_APP_ACTIVITIES_LABEL || 'Descubre más actividades',
  socials: SOCIAL_NETWORKS.filter(({ url }) => Boolean(url)),
}

export default config

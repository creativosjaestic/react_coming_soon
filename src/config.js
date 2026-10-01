import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

const env = import.meta.env

const DEFAULT_THEME_COLOR = 'rgb(236 72 153)'

const SOCIAL_NETWORKS = [
  { name: 'Instagram', url: env.VITE_APP_SOCIAL_INSTAGRAM, Icon: InstagramIcon },
  { name: 'Facebook', url: env.VITE_APP_SOCIAL_FACEBOOK, Icon: FacebookIcon },
  { name: 'X', url: env.VITE_APP_SOCIAL_TWITTER, Icon: TwitterIcon },
]

const config = {
  template: env.VITE_APP_TEMPLATE || 'default',
  siteName: env.VITE_APP_NAME,
  website: env.VITE_APP_WEBSITE,
  title: env.VITE_APP_TITLE,
  description: env.VITE_APP_DESCRIPTION,
  email: env.VITE_APP_EMAIL,
  phone: env.VITE_APP_PHONE,
  address: env.VITE_APP_ADDRESS,
  themeColor: env.VITE_APP_COLOR || DEFAULT_THEME_COLOR,
  logoUrl: env.VITE_APP_SHOW_LOGO === 'true' ? env.VITE_APP_URL_LOGO : undefined,
  socials: SOCIAL_NETWORKS.filter(({ url }) => Boolean(url)),
}

export default config

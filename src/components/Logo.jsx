function Logo({ logoUrl, siteName, className }) {
  if (!logoUrl) return null

  return <img src={logoUrl} alt={siteName ?? ''} className={className} />
}

export default Logo

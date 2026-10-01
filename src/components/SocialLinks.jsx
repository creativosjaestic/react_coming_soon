function SocialLinks({ socials, className, itemClassName = '' }) {
  if (socials.length === 0) return null

  return (
    <ul className={className}>
      {socials.map(({ name, url, Icon }) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`inline-flex size-11 items-center justify-center transition-colors motion-reduce:transition-none ${itemClassName}`}
          >
            <Icon className="size-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks

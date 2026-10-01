import { LocationIcon, MailIcon, PhoneIcon } from '../Icons'

const toTelHref = (phone) => `tel:${phone.replace(/\s+/g, '')}`

function ContactList({
  email,
  phone,
  address,
  showLabels = false,
  className,
  itemClassName,
  iconClassName,
  labelClassName,
}) {
  const contacts = [
    { key: 'email', label: 'Correo electrónico', Icon: MailIcon, text: email, href: email && `mailto:${email}` },
    { key: 'phone', label: 'Teléfono', Icon: PhoneIcon, text: phone, href: phone && toTelHref(phone) },
    { key: 'address', label: 'Dirección', Icon: LocationIcon, text: address },
  ].filter(({ text }) => Boolean(text))

  if (contacts.length === 0) return null

  return (
    <ul className={className}>
      {contacts.map(({ key, label, Icon, text, href }) => (
        <li key={key} className={itemClassName}>
          <span className={iconClassName}>
            <Icon className="size-full" />
          </span>
          <div className="min-w-0">
            {showLabels && <p className={labelClassName}>{label}</p>}
            {href ? (
              <a href={href} className="break-words hover:underline">
                {text}
              </a>
            ) : (
              <address className="break-words not-italic">{text}</address>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ContactList

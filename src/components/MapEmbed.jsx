function MapEmbed({ url, address, className }) {
  if (!url) return null

  return (
    <iframe
      src={url}
      title={address ? `Mapa: ${address}` : 'Mapa'}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={className}
    />
  )
}

export default MapEmbed

function Copyright({ name, className }) {
  return (
    <p className={className}>
      © {new Date().getFullYear()} {name}. Todos los derechos reservados.
    </p>
  )
}

export default Copyright

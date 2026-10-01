import config from './config'
import TEMPLATES from './templates'

function App() {
  const Template = TEMPLATES[config.template] ?? TEMPLATES.default

  return (
    <div className="contents" style={{ '--brand': config.themeColor }}>
      <Template {...config} />
    </div>
  )
}

export default App

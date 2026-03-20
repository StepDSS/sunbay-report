import { useState } from 'react'

const wfData = {
  conservative: [
    ['EU-27', 1230, '#F66731'],
    ['DE + FR', 431, '#D4562A'],
    ['Germany', 303, '#3A2F98'],
    ['France', 127.5, '#5A4FBB'],
    ['Poland', 49, '#F3B701']
  ],
  extended: [
    ['EU-27', 1480, '#F66731'],
    ['DE + FR', 535, '#D4562A'],
    ['Germany', 376, '#3A2F98'],
    ['France', 158.3, '#5A4FBB'],
    ['Poland', 63, '#F3B701']
  ]
}

export default function TAMWaterfall() {
  const [type, setType] = useState('conservative')
  const data = wfData[type]
  const maxVal = data[0][1]

  return (
    <section id="tam-waterfall">
      <h2>TAM Waterfall</h2>
      <div className="tam-toggle">
        <button className={`tam-btn${type === 'conservative' ? ' active' : ''}`} onClick={() => setType('conservative')}>Conservative</button>
        <button className={`tam-btn${type === 'extended' ? ' active' : ''}`} onClick={() => setType('extended')}>Extended</button>
      </div>
      <div>
        {data.map(([label, value, color]) => (
          <div className="wf-bar-row" key={label}>
            <div className="wf-bar-label">{label}</div>
            <div className="wf-bar-track">
              <div className="wf-bar" style={{ width: `${Math.max((value / maxVal) * 100, 3)}%`, background: color }}>
                <span>EUR{value}M</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

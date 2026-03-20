import { useState, useMemo } from 'react'

function fmt(n) {
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B'
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K'
  return '$' + n.toFixed(0)
}

export default function ReturnCalculator() {
  const [check, setCheck] = useState(1200000)
  const [postmoney, setPostmoney] = useState(6000000)
  const [fund, setFund] = useState(70000000)
  const [dilution, setDilution] = useState(50)
  const [exitLog, setExitLog] = useState(8)

  const exit = Math.pow(10, exitLog)
  const ownership = check / postmoney
  const ownExit = ownership * (1 - dilution / 100)
  const gross = exit * ownExit
  const multiple = gross / check
  const fundRet = gross / fund
  const req1x = fund / ownExit
  const req3x = (3 * fund) / ownExit
  const req10x = (10 * fund) / ownExit

  return (
    <section id="calculator">
      <h3>Return Sensitivity Model</h3>
      <div className="calc-container">
        <div className="calc-grid">
          <div className="calc-input">
            <label>Check Size</label>
            <span className="val">{fmt(check)}</span>
            <input type="range" min="100000" max="2000000" step="50000" value={check} onChange={(e) => setCheck(+e.target.value)} />
          </div>
          <div className="calc-input">
            <label>Post-Money Valuation</label>
            <span className="val">{fmt(postmoney)}</span>
            <input type="range" min="3000000" max="15000000" step="500000" value={postmoney} onChange={(e) => setPostmoney(+e.target.value)} />
          </div>
          <div className="calc-input">
            <label>Fund Size</label>
            <span className="val">{fmt(fund)}</span>
            <input type="range" min="50000000" max="100000000" step="5000000" value={fund} onChange={(e) => setFund(+e.target.value)} />
          </div>
          <div className="calc-input">
            <label>Dilution Through Future Rounds</label>
            <span className="val">{dilution}%</span>
            <input type="range" min="0" max="80" step="5" value={dilution} onChange={(e) => setDilution(+e.target.value)} />
          </div>
          <div className="calc-input" style={{ gridColumn: '1 / -1' }}>
            <label>Exit Valuation (log scale)</label>
            <span className="val">{fmt(exit)}</span>
            <input type="range" min="7" max="9.3" step="0.01" value={exitLog} onChange={(e) => setExitLog(+e.target.value)} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
              <span>$10M</span><span>$100M</span><span>$1B</span><span>$2B</span>
            </div>
          </div>
        </div>
        <div className="calc-outputs">
          <div className="calc-out"><div className="label">Ownership at Entry</div><div className="value">{(ownership * 100).toFixed(1)}%</div></div>
          <div className="calc-out"><div className="label">Ownership at Exit</div><div className="value">{(ownExit * 100).toFixed(1)}%</div></div>
          <div className="calc-out"><div className="label">Gross Return to Fund</div><div className="value">{fmt(gross)}</div></div>
          <div className="calc-out"><div className="label">Return Multiple</div><div className="value">{multiple.toFixed(1)}x</div></div>
          <div className="calc-out"><div className="label">Fund Return Contribution</div><div className="value">{fundRet.toFixed(2)}x ({(fundRet * 100).toFixed(0)}%)</div></div>
          <div className="calc-out"><div className="label">Required Exit for 1x Fund</div><div className="value risk">{fmt(req1x)}</div></div>
          <div className="calc-out"><div className="label">Required Exit for 3x Fund</div><div className="value risk">{fmt(req3x)}</div></div>
          <div className="calc-out"><div className="label">Required Exit for 10x Fund</div><div className="value risk">{fmt(req10x)}</div></div>
        </div>
      </div>
    </section>
  )
}

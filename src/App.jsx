import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Recommendation from './components/Recommendation'
import KeyArguments from './components/KeyArguments'
import TeamSection from './components/TeamSection'
import ProductSection from './components/ProductSection'
import MarketSection from './components/MarketSection'
import CompetitiveSection from './components/CompetitiveSection'
import TractionSection from './components/TractionSection'
import RoundReturns from './components/RoundReturns'
import ReturnCalculator from './components/ReturnCalculator'
import TAMWaterfall from './components/TAMWaterfall'
import SourcesSection from './components/SourcesSection'
import IntegrationHeatmap from './components/IntegrationHeatmap'
import TAMAdoptionFilter from './components/TAMAdoptionFilter'
import DebtRecoveryCalc from './components/DebtRecoveryCalc'

export default function App() {
  const [analysisOpen, setAnalysisOpen] = useState(false)
  return (
    <>
      <Nav analysisOpen={analysisOpen} />
      <main>
        <Header />
        <Recommendation />
        <KeyArguments />
        <TeamSection />
        <ProductSection />
        <MarketSection />
        <CompetitiveSection />
        <TractionSection />
        <RoundReturns />
        <section id="interactive-analysis">
          <h2>D. Interactive Analysis</h2>
          {!analysisOpen ? (
            <button className="analysis-open-btn" onClick={() => setAnalysisOpen(true)}>
              Open Interactive Analysis
            </button>
          ) : (
            <>
              <button className="analysis-open-btn close" onClick={() => setAnalysisOpen(false)}>
                Close Interactive Analysis
              </button>
              <TAMAdoptionFilter />
              <TAMWaterfall />
              <IntegrationHeatmap />
              <DebtRecoveryCalc />
              <ReturnCalculator />
</>
          )}
        </section>
        <SourcesSection />
      </main>
    </>
  )
}

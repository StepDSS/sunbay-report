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
import CompetitorRadar from './components/CompetitorRadar'

export default function App() {
  const [view, setView] = useState('memo')
  return (
    <>
      <Nav view={view} setView={setView} />
      <main>
        {view === 'memo' ? (
          <>
            <Header />
            <Recommendation />
            <KeyArguments />
            <TeamSection />
            <ProductSection />
            <MarketSection />
            <CompetitiveSection />
            <TractionSection />
            <RoundReturns />
            <ReturnCalculator />
            <TAMWaterfall />
            <SourcesSection />
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: '0.5rem' }}>Interactive Analysis</h1>
            <p className="subtitle">Sunbay.io — Data Explorer</p>
            <IntegrationHeatmap />
            <TAMAdoptionFilter />
            <DebtRecoveryCalc />
            <CompetitorRadar />
            <ReturnCalculator />
            <TAMWaterfall />
          </>
        )}
      </main>
    </>
  )
}

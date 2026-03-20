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

export default function App() {
  return (
    <>
      <Nav />
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
        <ReturnCalculator />
        <TAMWaterfall />
        <SourcesSection />
      </main>
    </>
  )
}

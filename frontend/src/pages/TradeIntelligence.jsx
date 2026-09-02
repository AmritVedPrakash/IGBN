import React from 'react'
import TradeHero from '../components/sections/trade-intelligence/TradeHero'
import AskIGBNAI from '../components/sections/trade-intelligence/AskIGBNAI'
import GlobalCurrencyMarket from '../components/sections/trade-intelligence/GlobalCurrencyMarket'
import GlobalCommodityMarket from '../components/sections/trade-intelligence/GlobalCommodityMarket'
import CommodityNews from '../components/sections/trade-intelligence/CommodityNews'
import ExploreByCountry from '../components/sections/trade-intelligence/ExploreByCountry'
import LiveTradeAlertsSection from '../components/sections/trade-intelligence/live-trade-alerts/LiveTradeAlertsSection'

export default function TradeIntelligence() {
  return (
    <>
    <TradeHero/>
    <AskIGBNAI/>
    <GlobalCurrencyMarket/>
    <GlobalCommodityMarket/>
    <CommodityNews/>
    <ExploreByCountry/>
    <LiveTradeAlertsSection />
    
    </>
  )
}

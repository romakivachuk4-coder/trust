import React, { useState } from 'react';
import { 
  Settings, Search, ScanLine, Copy, ArrowUpRight, ArrowDown, 
  RefreshCcw, Plus, Clock, SlidersHorizontal, ChevronRight,
  Home, TrendingUp, ArrowUpDown, Gift, Compass
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Избранное');

  const tokens = [
    { id: 'sol', name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false, logo: '≡' },
    { id: 'eth', name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true, logo: '♦' },
    { id: 'btc', name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true, logo: '₿' },
    { id: 'bnb', name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true, logo: '◇' },
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white font-sans flex flex-col mx-auto max-w-[450px] relative overflow-hidden select-none">
      
      {/* --- HEADER (SEARCH & SETTINGS) --- */}
      <header className="flex justify-between items-center px-4 pt-4 pb-2 gap-3">
        <div className="relative p-1">
          <Settings className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black"></div>
        </div>
        
        <div className="flex-1 bg-[#1c1c1e] rounded-full flex items-center px-4 py-2.5 border border-white/5 shadow-inner">
          <Search className="text-[#8e8e93] w-4 h-4 mr-2" strokeWidth={2.5} />
          <span className="text-[17px] text-[#8e8e93] font-normal">Поиск</span>
        </div>
        
        <ScanLine className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
      </header>

      {/* --- WALLET SELECTOR --- */}
      <div className="flex justify-center items-center gap-2.5 mt-4">
        <div className="flex items-center gap-1.5 bg-[#1c1c1e] pl-4 pr-3 py-1.5 rounded-full active:opacity-60 transition-opacity">
          <span className="text-[15px] font-bold tracking-tight text-[#f5f5f5]">Основной кошелек</span>
          <ChevronRight className="w-4 h-4 text-[#8e8e93] mt-0.5" strokeWidth={3} />
        </div>
        <button className="p-1 active:scale-90 transition-transform">
          <Copy className="w-5 h-5 text-[#8e8e93]" strokeWidth={2.2} />
        </button>
      </div>

      {/* --- MAIN BALANCE --- */}
      <div className="flex flex-col items-center mt-7 mb-8">
        <h1 className="text-[48px] font-bold tracking-tight leading-tight">0,00 $</h1>
        <div className="text-[#8e8e93] text-[16px] mt-1 font-semibold">0,00 $ (0.00%)</div>
      </div>

      {/* --- ACTION BUTTONS --- */}
      <nav className="flex justify-between px-5 mb-9">
        <ActionButton icon={<ArrowUpRight size={28} />} label="Отпр..." />
        <ActionButton icon={<ArrowDown size={28} />} label="Полу..." />
        <ActionButton icon={<RefreshCcw size={28} />} label="Обмен" />
        <ActionButton icon={<Plus size={34} />} label="Поку..." isAccent />
      </nav>

      {/* --- TABS --- */}
      <div className="flex px-5 items-center justify-between border-b border-[#1c1c1e] mb-4">
        <div className="flex gap-7 text-[16px] font-bold">
          {['Криптовалюта', 'Избранное', 'NFT'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 transition-colors ${activeTab === tab ? 'text-white border-b-[3px] border-[#4ff0b7]' : 'text-[#8e8e93]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-5 pb-3 text-[#f2f2f2]">
          <Clock size={22} strokeWidth={2.2} />
          <SlidersHorizontal size={22} strokeWidth={2.2} />
        </div>
      </div>

      {/* --- TOKEN LIST --- */}
      <div className="px-5 flex flex-col gap-6 overflow-y-auto pb-40">
        {tokens.map((token) => (
          <div key={token.id} className="flex justify-between items-center active:bg-white/5 rounded-xl transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-[20px] 
                ${token.id === 'sol' ? 'bg-black border border-gray-800 text-[#00FFA3]' : 
                  token.id === 'eth' ? 'bg-white text-black' : 
                  token.id === 'btc' ? 'bg-[#F7931A] text-white' : 'bg-[#F3BA2F] text-black'}`}>
                {token.logo}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[18px] tracking-wide leading-none mb-1.5">{token.name}</span>
                <span className="text-[14px] text-[#8e8e93] font-bold uppercase tracking-wider">{token.cap}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-[18px] leading-none mb-1.5">{token.price}</span>
              <span className={`text-[14px] font-bold ${token.up ? 'text-[#4ff0b7]' : 'text-[#ff3b30]'}`}>
                {token.change}
              </span>
            </div>
          </div>
        ))}
        
        <button className="text-[#4ff0b7] font-bold text-[16px] py-2 mt-2 active:opacity-50">
          Просмотреть токены
        </button>

        {/* --- EARN SECTION (PREVIEW) --- */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[22px] font-bold">Заработок</h2>
            <ChevronRight className="w-5 h-5 text-[#8e8e93] mt-1" strokeWidth={3} />
          </div>
          <div className="flex gap-3 overflow-hidden opacity-80 scale-95 origin-left">
            <div className="w-[170px] h-[100px] bg-[#1c1c1e] rounded-[24px] border border-white/5 p-4 flex flex-col justify-end">
              <span className="text-[14px] text-[#8e8e93] font-bold">30.83% APY</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION BAR --- */}
      <footer className="absolute bottom-0 left-0 right-0 bg-[#0c0c0c]/95 backdrop-blur-2xl border-t border-[#1c1c1e] pt-3 pb-8 px-4 flex justify-between items-end z-50">
        <NavButton icon={<Home size={26} />} label="Главная" active />
        <NavButton icon={<TrendingUp size={26} />} label="Популярные" />
        
        <div className="relative -top-5 flex flex-col items-center">
          <div className="bg-[#4ff0b7] w-[62px] h-[62px] rounded-full flex items-center justify-center text-black shadow-[0_0_25px_rgba(79,240,183,0.2)] active:scale-90 transition-transform">
            <ArrowUpDown size={30} strokeWidth={2.5} />
          </div>
          <span className="text-[11px] text-[#8e8e93] mt-2.5 font-bold uppercase tracking-tighter">Торговать</span>
        </div>

        <NavButton icon={<Gift size={26} />} label="Награды" />
        <NavButton icon={<Compass size={26} />} label="Подробнее" />
      </footer>
    </div>
  );
}

function ActionButton({ icon, label, isAccent = false }) {
  return (
    <div className="flex flex-col items-center gap-2.5 cursor-pointer active:scale-95 transition-transform">
      <div className={`w-[74px] h-[74px] rounded-[26px] flex items-center justify-center transition-colors
        ${isAccent ? 'bg-[#4ff0b7] text-black shadow-[0_4px_15px_rgba(79,240,183,0.1)]' : 'bg-[#1c1c1e] text-white hover:bg-[#2c2c2e]'}`}>
        {icon}
      </div>
      <span className="text-[13px] text-[#8e8e93] font-bold tracking-tight">{label}</span>
    </div>
  );
}

function NavButton({ icon, label, active = false }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all active:opacity-50 ${active ? 'text-[#4ff0b7]' : 'text-[#8e8e93]'}`}>
      <div className={`${active ? 'bg-[#4ff0b7]/10 p-2 rounded-xl' : ''}`}>
        {icon}
      </div>
      <span className="text-[11px] font-bold tracking-tight">{label}</span>
    </div>
  );
}

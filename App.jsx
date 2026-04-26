import React from 'react';
import * as Icons from 'lucide-react';

// Чистые данные без лишних функций для стабильности деплоя
const TOKENS = [
  { id: 'sol', name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false, logo: '≡', color: 'text-[#00FFA3]' },
  { id: 'eth', name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true, logo: '♦', color: 'text-black' },
  { id: 'btc', name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true, logo: '₿', color: 'text-white' },
  { id: 'bnb', name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true, logo: '◇', color: 'text-black' },
];

export default function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white font-sans flex flex-col mx-auto max-w-[440px] relative overflow-hidden">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-4 pt-6 pb-2 gap-3">
        <div className="relative">
          <Icons.Settings className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex-1 bg-[#1c1c1e] rounded-full flex items-center px-4 py-2.5 border border-white/5">
          <Icons.Search className="text-[#8e8e93] w-4 h-4 mr-2" strokeWidth={3} />
          <span className="text-[17px] text-[#8e8e93]">Поиск</span>
        </div>
        <Icons.ScanLine className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
      </header>

      {/* WALLET SELECTOR */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <div className="flex items-center gap-1 bg-[#1c1c1e] px-4 py-1.5 rounded-full shadow-lg">
          <span className="text-[15px] font-bold">Основной кошелек</span>
          <Icons.ChevronRight className="w-4 h-4 text-gray-500 mt-0.5" strokeWidth={3} />
        </div>
        <Icons.Copy className="w-5 h-5 text-gray-500" strokeWidth={2} />
      </div>

      {/* BALANCE */}
      <div className="flex flex-col items-center mt-8 mb-8">
        <h1 className="text-[52px] font-bold tracking-tight leading-none">0,00 $</h1>
        <div className="text-[#8e8e93] text-[16px] mt-2 font-bold uppercase tracking-tight">0,00 $ (0.00%)</div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-between px-5 mb-10">
        <BigBtn icon={<Icons.ArrowUpRight size={32} />} label="Отпр..." />
        <BigBtn icon={<Icons.ArrowDown size={32} />} label="Полу..." />
        <BigBtn icon={<Icons.RefreshCcw size={32} />} label="Обмен" />
        <BigBtn icon={<Icons.Plus size={38} />} label="Поку..." isGreen />
      </div>

      {/* TABS */}
      <div className="flex px-5 items-center justify-between border-b border-[#1c1c1e] mb-6">
        <div className="flex gap-8 text-[16px] font-bold">
          <div className="text-gray-500 pb-3 uppercase tracking-wider text-[13px]">Криптовалюта</div>
          <div className="text-white pb-3 border-b-2 border-[#4ff0b7] uppercase tracking-wider text-[13px]">Избранное</div>
          <div className="text-gray-500 pb-3 uppercase tracking-wider text-[13px]">NFT</div>
        </div>
        <div className="flex gap-5 pb-3 text-white">
          <Icons.Clock size={22} />
          <Icons.SlidersHorizontal size={22} />
        </div>
      </div>

      {/* TOKEN LIST */}
      <div className="px-5 flex flex-col gap-7 flex-1 overflow-y-auto pb-32">
        {TOKENS.map((token) => (
          <div key={token.id} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                ${token.id === 'sol' ? 'bg-black border border-gray-800' : 
                  token.id === 'eth' ? 'bg-white' : 
                  token.id === 'btc' ? 'bg-[#F7931A]' : 'bg-[#F3BA2F]'} ${token.color}`}>
                {token.logo}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[19px] leading-tight">{token.name}</span>
                <span className="text-[13px] text-gray-500 font-bold tracking-widest uppercase">{token.cap}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-[19px] leading-tight">{token.price}</span>
              <span className={`text-[13px] font-bold ${token.up ? 'text-[#4ff0b7]' : 'text-red-500'}`}>
                {token.change}
              </span>
            </div>
          </div>
        ))}
        <button className="text-[#4ff0b7] font-bold text-[16px] mt-2 mb-10">Просмотреть токены</button>
      </div>

      {/* NAVIGATION BAR */}
      <footer className="absolute bottom-0 left-0 right-0 bg-[#0c0c0c]/95 backdrop-blur-xl border-t border-[#1c1c1e] pt-3 pb-9 px-4 flex justify-between items-end">
        <NavIcon icon={<Icons.Home size={28}/>} label="Главная" active />
        <NavIcon icon={<Icons.TrendingUp size={28}/>} label="Популярные" />
        
        <div className="relative -top-6 flex flex-col items-center">
          <div className="bg-[#4ff0b7] w-[66px] h-[66px] rounded-full flex items-center justify-center text-black shadow-[0_0_25px_rgba(79,240,183,0.35)]">
            <Icons.ArrowUpDown size={34} strokeWidth={2.5} />
          </div>
          <span className="text-[11px] text-gray-500 mt-2 font-bold uppercase">Торговать</span>
        </div>

        <NavIcon icon={<Icons.Gift size={28}/>} label="Награды" />
        <NavIcon icon={<Icons.Compass size={28}/>} label="Подробнее" />
      </footer>
    </div>
  );
}

function BigBtn({ icon, label, isGreen }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className={`w-[78px] h-[78px] rounded-[28px] flex items-center justify-center shadow-lg
        ${isGreen ? 'bg-[#4ff0b7] text-black' : 'bg-[#1c1c1e] text-white'}`}>
        {icon}
      </div>
      <span className="text-[13px] text-gray-400 font-bold">{label}</span>
    </div>
  );
}

function NavIcon({ icon, label, active }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${active ? 'text-[#4ff0b7]' : 'text-gray-500'}`}>
      {icon}
      <span className="text-[11px] font-bold">{label}</span>
    </div>
  );
}

import React from 'react';
import { 
  Settings, Search, ScanLine, Copy, ArrowUpRight, ArrowDown, 
  RefreshCcw, Plus, Clock, SlidersHorizontal, ChevronRight,
  Home, TrendingUp, ArrowUpDown, Gift, Compass
} from 'lucide-react';

export default function App() {
  const tokens = [
    { name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false, logo: '≡', logoBg: 'bg-black border border-gray-800 text-[#00FFA3]' },
    { name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true, logo: '♦', logoBg: 'bg-white text-black' },
    { name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true, logo: '₿', logoBg: 'bg-[#F7931A] text-white' },
    { name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true, logo: '◇', logoBg: 'bg-[#F3BA2F] text-black' },
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white font-sans flex flex-col mx-auto max-w-[440px] relative overflow-hidden select-none">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 pt-6 pb-2 gap-3">
        <div className="relative">
          <Settings className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex-1 bg-[#1c1c1e] rounded-full flex items-center px-4 py-2.5 border border-white/5">
          <Search className="text-[#8e8e93] w-4 h-4 mr-2" strokeWidth={3} />
          <span className="text-[17px] text-[#8e8e93]">Поиск</span>
        </div>
        <ScanLine className="text-[#f2f2f2] w-7 h-7" strokeWidth={1.5} />
      </div>

      {/* WALLET */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <div className="flex items-center gap-1 bg-[#1c1c1e] px-4 py-1.5 rounded-full">
          <span className="text-[15px] font-bold">Основной кошелек</span>
          <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5" strokeWidth={3} />
        </div>
        <Copy className="w-5 h-5 text-gray-500 active:text-white" />
      </div>

      {/* BALANCE */}
      <div className="flex flex-col items-center mt-8 mb-8">
        <h1 className="text-[52px] font-bold tracking-tight leading-none">0,00 $</h1>
        <div className="text-[#8e8e93] text-[16px] mt-2 font-bold uppercase">0,00 $ (0.00%)</div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between px-5 mb-10">
        <Btn icon={<ArrowUpRight size={32} />} label="Отпр..." />
        <Btn icon={<ArrowDown size={32} />} label="Полу..." />
        <Btn icon={<RefreshCcw size={32} />} label="Обмен" />
        <Btn icon={<Plus size={38} />} label="Поку..." isGreen />
      </div>

      {/* TABS */}
      <div className="flex px-5 items-center justify-between border-b border-[#1c1c1e] mb-6">
        <div className="flex gap-8 text-[13px] font-bold uppercase tracking-widest">
          <div className="text-gray-500 pb-3">Криптовалюта</div>
          <div className="text-white pb-3 border-b-2 border-[#4ff0b7]">Избранное</div>
          <div className="text-gray-500 pb-3">NFT</div>
        </div>
        <div className="flex gap-5 pb-3 text-white">
          <Clock size={22} />
          <SlidersHorizontal size={22} />
        </div>
      </div>

      {/* LIST */}
      <div className="px-5 flex flex-col gap-7 flex-1 overflow-y-auto pb-40">
        {tokens.map((t, i) => (
          <div key={i} className="flex justify-between items-center active:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${t.logoBg}`}>
                {t.logo}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[19px] leading-tight">{t.name}</span>
                <span className="text-[13px] text-gray-500 font-bold tracking-widest uppercase">{t.cap}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-[19px] leading-tight">{t.price}</span>
              <span className={`text-[13px] font-bold ${t.up ? 'text-[#4ff0b7]' : 'text-red-500'}`}>
                {t.change}
              </span>
            </div>
          </div>
        ))}
        <button className="text-[#4ff0b7] font-bold text-[16px] py-4 text-center">Просмотреть токены</button>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-[#1c1c1e] pt-3 pb-10 px-4 flex justify-between items-end">
        <Nav icon={<Home size={28}/>} label="Главная" active />
        <Nav icon={<TrendingUp size={28}/>} label="Популярные" />
        
        <div className="relative -top-6 flex flex-col items-center">
          <div className="bg-[#4ff0b7] w-[66px] h-[66px] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(79,240,183,0.3)] active:scale-90 transition-transform">
            <ArrowUpDown size={34} strokeWidth={2.5} />
          </div>
          <span className="text-[11px] text-gray-500 mt-2 font-bold uppercase">Торговать</span>
        </div>

        <Nav icon={<Gift size={28}/>} label="Награды" />
        <Nav icon={<Compass size={28}/>} label="Подробнее" />
      </div>
    </div>
  );
}

function Btn({ icon, label, isGreen }) {
  return (
    <div className="flex flex-col items-center gap-2.5 active:scale-95 transition-transform">
      <div className={`w-[78px] h-[78px] rounded-[28px] flex items-center justify-center ${isGreen ? 'bg-[#4ff0b7] text-black' : 'bg-[#1c1c1e] text-white'}`}>
        {icon}
      </div>
      <span className="text-[13px] text-gray-400 font-bold">{label}</span>
    </div>
  );
}

function Nav({ icon, label, active }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${active ? 'text-[#4ff0b7]' : 'text-gray-500'} active:opacity-50`}>
      {icon}
      <span className="text-[11px] font-bold">{label}</span>
    </div>
  );
}

import React from 'react';
import { 
  Settings, Search, ScanLine, Copy, ArrowUpRight, ArrowDown, 
  RefreshCcw, Plus, Clock, SlidersHorizontal, ChevronRight,
  Home, TrendingUp, ArrowUpDown, Gift, Compass
} from 'lucide-react';

export default function App() {
  const tokens = [
    { id: 'sol', name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false },
    { id: 'eth', name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true },
    { id: 'btc', name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true },
    { id: 'bnb', name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true },
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white font-sans flex flex-col mx-auto max-w-[440px] relative overflow-hidden">
      
      {/* --- TOP BAR --- */}
      <div className="flex justify-between items-center px-4 pt-5 gap-3">
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

      {/* --- WALLET HEADER --- */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <div className="flex items-center gap-1 bg-[#1c1c1e] px-4 py-1.5 rounded-full active:opacity-50">
          <span className="text-[15px] font-bold">Основной кошелек</span>
          <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5" strokeWidth={3} />
        </div>
        <Copy className="w-5 h-5 text-gray-500 active:text-white" />
      </div>

      {/* --- BALANCE --- */}
      <div className="flex flex-col items-center mt-7 mb-8">
        <h1 className="text-[50px] font-bold tracking-tight leading-none">0,00 $</h1>
        <div className="text-[#8e8e93] text-[16px] mt-2 font-bold tracking-tight">0,00 $ (0.00%)</div>
      </div>

      {/* --- MAIN ACTIONS --- */}
      <div className="flex justify-between px-5 mb-10">
        <Action icon={<ArrowUpRight size={30} />} label="Отпр..." />
        <Action icon={<ArrowDown size={30} />} label="Полу..." />
        <Action icon={<RefreshCcw size={30} />} label="Обмен" />
        <Action icon={<Plus size={36} />} label="Поку..." green />
      </div>

      {/* --- TABS --- */}
      <div className="flex px-5 items-center justify-between border-b border-[#1c1c1e] mb-5">
        <div className="flex gap-7 text-[16px] font-bold">
          <div className="text-gray-500 pb-3">Криптовалюта</div>
          <div className="text-white pb-3 border-b-2 border-[#4ff0b7]">Избранное</div>
          <div className="text-gray-500 pb-3">NFT</div>
        </div>
        <div className="flex gap-4 pb-3 text-white">
          <Clock size={22} strokeWidth={2.2} />
          <SlidersHorizontal size={22} strokeWidth={2.2} />
        </div>
      </div>

      {/* --- TOKEN LIST --- */}
      <div className="px-5 flex flex-col gap-6 overflow-y-auto flex-1 pb-40">
        {tokens.map((t) => (
          <div key={t.id} className="flex justify-between items-center active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                ${t.id === 'sol' ? 'bg-black border border-gray-800 text-[#00FFA3]' : 
                  t.id === 'eth' ? 'bg-white text-black' : 
                  t.id === 'btc' ? 'bg-[#F7931A] text-white' : 'bg-[#F3BA2F] text-black'}`}>
                {t.name[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[18px] leading-tight">{t.name}</span>
                <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider">{t.cap}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-[18px] leading-tight">{t.price}</span>
              <span className={`text-[13px] font-bold ${t.up ? 'text-[#4ff0b7]' : 'text-red-500'}`}>
                {t.change}
              </span>
            </div>
          </div>
        ))}
        <button className="text-[#4ff0b7] font-bold text-[16px] py-2 mt-2">Просмотреть токены</button>
      </div>

      {/* --- NAV BAR --- */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0c0c0c]/90 backdrop-blur-xl border-t border-[#1c1c1e] pt-3 pb-8 px-4 flex justify-between items-end">
        <Nav icon={<Home size={28}/>} label="Главная" active />
        <Nav icon={<TrendingUp size={28}/>} label="Популярные" />
        <div className="relative -top-6 flex flex-col items-center">
          <div className="bg-[#4ff0b7] w-[64px] h-[64px] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(79,240,183,0.3)]">
            <ArrowUpDown size={32} strokeWidth={2.5} />
          </div>
          <span className="text-[11px] text-gray-500 mt-2 font-bold">ТОРГОВАТЬ</span>
        </div>
        <Nav icon={<Gift size={28}/>} label="Награды" />
        <Nav icon={<Compass size={28}/>} label="Подробнее" />
      </div>
    </div>
  );
}

const Action = ({ icon, label, green }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-[76px] h-[76px] rounded-[28px] flex items-center justify-center transition-transform active:scale-90
      ${green ? 'bg-[#4ff0b7] text-black' : 'bg-[#1c1c1e] text-white'}`}>
      {icon}
    </div>
    <span className="text-[13px] text-gray-400 font-bold">{label}</span>
  </div>
);

const Nav = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer active:opacity-50 ${active ? 'text-[#4ff0b7]' : 'text-gray-500'}`}>
    {icon}
    <span className="text-[11px] font-bold">{label}</span>
  </div>
);

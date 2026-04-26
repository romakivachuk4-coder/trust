import React from 'react';
import { 
  Settings, Scan, ArrowUpRight, ArrowDown, Repeat, Plus, 
  Home, BarChart2, ArrowLeftRight, Gift, MoreHorizontal,
  Clock, SlidersHorizontal
} from 'lucide-react';

export default function CryptoApp() {
  const tokens = [
    { name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false },
    { name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true },
    { name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true },
    { name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true },
    { name: 'TON', cap: '5,12 $B', price: '5,42 $', change: '+3.15%', up: true },
    { name: 'ADA', cap: '1,05 $B', price: '0,45 $', change: '-0.85%', up: false },
    { name: 'XRP', cap: '32,10 $B', price: '0,62 $', change: '+0.45%', up: true },
  ];

  return (
    /* Оболочка для адаптации: на десктопе центрирует, на мобилках во весь экран */
    <div className="bg-black min-h-screen flex justify-center items-center font-sans selection:bg-[#4ef0b4]/30">
      
      <div className="w-full max-w-[430px] h-[100dvh] bg-[#0b0b0b] text-white flex flex-col relative overflow-hidden shadow-2xl border-x border-white/5">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-6 pb-3">
          <Settings className="text-[#8e8e8e] w-6 h-6 active:scale-90 transition-transform cursor-pointer" />
          <div className="flex items-center gap-1.5 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-[#262626] text-[13px] font-semibold active:bg-[#222]">
            Основной кошелек
            <div className="w-1.5 h-1.5 bg-[#ff4d4d] rounded-full ml-1"></div>
            <span className="text-[10px] text-gray-500 ml-0.5">▼</span>
          </div>
          <Scan className="text-[#8e8e8e] w-6 h-6 active:scale-90 transition-transform cursor-pointer" />
        </div>

        {/* Balance */}
        <div className="flex flex-col items-center py-6">
          <h1 className="text-[48px] font-bold tracking-tight leading-none">0,00 $</h1>
          <div className="text-[#8e8e8e] text-sm mt-2 font-medium">0,00 $ (0.00%)</div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-4 gap-3 px-5 my-4">
          <ActionButton icon={<ArrowUpRight size={28}/>} label="Отпр..." />
          <ActionButton icon={<ArrowDown size={28}/>} label="Полу..." />
          <ActionButton icon={<Repeat size={28}/>} label="Обмен" />
          <ActionButton icon={<Plus size={28}/>} label="Поку..." active />
        </div>

        {/* Tabs */}
        <div className="flex px-6 items-center justify-between border-b border-[#1a1a1a] mt-4">
          <div className="flex gap-7 text-[15px] font-bold">
            <div className="text-[#8e8e8e] pb-3 cursor-pointer">Криптовалюта</div>
            <div className="text-white pb-3 border-b-2 border-[#4ef0b4] relative z-10 cursor-pointer">Избранное</div>
            <div className="text-[#8e8e8e] pb-3 cursor-pointer">NFT</div>
          </div>
          <div className="flex gap-4 pb-3 text-[#8e8e8e]">
            <Clock size={20} className="cursor-pointer" />
            <SlidersHorizontal size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* Token List - Скроллится только этот блок */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 custom-scrollbar pb-32">
          {tokens.map((token, i) => (
            <div key={i} className="flex justify-between items-center active:bg-white/5 transition-colors rounded-lg -mx-2 px-2 py-1 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center font-bold text-xs border border-[#262626]">
                  {token.name}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[16px] leading-tight">{token.name}</span>
                  <span className="text-[12px] text-[#555] font-semibold">{token.cap}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-[16px] leading-tight">{token.price}</span>
                <span className={`text-[12px] font-bold ${token.up ? 'text-[#4ef0b4]' : 'text-[#ff4d4d]'}`}>
                  {token.change}
                </span>
              </div>
            </div>
          ))}
          <button className="w-full text-center py-4 text-[#4ef0b4] text-[14px] font-bold active:opacity-60 transition-opacity">
            Просмотреть токены
          </button>
        </div>

        {/* Bottom Nav - Зафиксирован внизу контейнера */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0b0b0b]/90 backdrop-blur-xl border-t border-[#1a1a1a] px-2 pt-3 pb-8 flex justify-around items-end">
          <NavItem icon={<Home size={24}/>} label="Главная" active />
          <NavItem icon={<BarChart2 size={24}/>} label="Популярные" />
          
          <div className="relative -top-6 flex flex-col items-center group">
            <div className="bg-[#4ef0b4] w-14 h-14 rounded-full flex items-center justify-center text-black shadow-[0_4px_25px_rgba(78,240,180,0.3)] border-[4px] border-[#0b0b0b] group-active:scale-90 transition-transform">
              <ArrowLeftRight size={28} strokeWidth={3} />
            </div>
            <span className="text-[10px] text-gray-500 mt-2 font-bold tracking-tighter">ТОРГОВАТЬ</span>
          </div>

          <NavItem icon={<Gift size={24}/>} label="Награды" />
          <NavItem icon={<MoreHorizontal size={24}/>} label="Подробнее" />
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, active = false }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className={`w-full aspect-square rounded-[20px] flex items-center justify-center transition-all group-active:scale-90
        ${active ? 'bg-[#4ef0b4] text-black' : 'bg-[#1a1a1a] text-white border border-white/5'}`}>
        {icon}
      </div>
      <span className="text-[11px] text-[#8e8e8e] font-semibold">{label}</span>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 cursor-pointer active:opacity-50 transition-all ${active ? 'text-[#4ef0b4]' : 'text-gray-500'}`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}

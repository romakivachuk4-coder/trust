import React from 'react';
import { 
  Settings, Scan, ArrowUpRight, ArrowDown, Repeat, Plus, 
  Home, BarChart2, ArrowLeftRight, Gift, MoreHorizontal,
  Clock, SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const tokens = [
    { name: 'SOL', cap: '2,74 $B', price: '86,45 $', change: '-0.12%', up: false },
    { name: 'ETH', cap: '7,92 $B', price: '2 346,91 $', change: '+1.29%', up: true },
    { name: 'BTC', cap: '17,24 $B', price: '78 101,78 $', change: '+0.55%', up: true },
    { name: 'BNB', cap: '753,22 $M', price: '631,99 $', change: '+0.23%', up: true },
    { name: 'TON', cap: '5,12 $B', price: '5,42 $', change: '+3.15%', up: true },
    { name: 'ADA', cap: '1,05 $B', price: '0,45 $', change: '-0.85%', up: false },
  ];

  return (
    <div className="bg-black min-h-screen flex justify-center items-center font-sans">
      <div className="w-full max-w-[430px] h-[100dvh] bg-[#0b0b0b] text-white flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-6 pb-3">
          <Settings className="text-gray-400 w-6 h-6" />
          <div className="flex items-center gap-1.5 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-gray-800 text-[13px] font-semibold">
            Основной кошелек
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full ml-1"></div>
            <span className="text-[10px] text-gray-500 ml-0.5">▼</span>
          </div>
          <Scan className="text-gray-400 w-6 h-6" />
        </div>

        {/* Balance */}
        <div className="flex flex-col items-center py-6">
          <h1 className="text-[48px] font-bold tracking-tight">0,00 $</h1>
          <div className="text-gray-500 text-sm mt-2 font-medium">0,00 $ (0.00%)</div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-4 gap-3 px-5 my-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square rounded-2xl bg-[#1a1a1a] flex items-center justify-center"><ArrowUpRight /></div>
            <span className="text-[11px] text-gray-400">Отпр...</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square rounded-2xl bg-[#1a1a1a] flex items-center justify-center"><ArrowDown /></div>
            <span className="text-[11px] text-gray-400">Полу...</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square rounded-2xl bg-[#1a1a1a] flex items-center justify-center"><Repeat /></div>
            <span className="text-[11px] text-gray-400">Обмен</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square rounded-2xl bg-[#4ef0b4] text-black flex items-center justify-center"><Plus /></div>
            <span className="text-[11px] text-gray-400">Поку...</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-6 items-center justify-between border-b border-gray-900 mt-4">
          <div className="flex gap-7 text-[15px] font-bold">
            <div className="text-gray-500 pb-3">Криптовалюта</div>
            <div className="text-white pb-3 border-b-2 border-[#4ef0b4]">Избранное</div>
            <div className="text-gray-500 pb-3">NFT</div>
          </div>
          <div className="flex gap-4 pb-3 text-gray-500">
            <Clock size={20} />
            <SlidersHorizontal size={20} />
          </div>
        </div>

        {/* Token List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 pb-32">
          {tokens.map((token, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center font-bold text-xs border border-gray-800">
                  {token.name}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[16px] leading-tight">{token.name}</span>
                  <span className="text-[12px] text-gray-500 font-semibold">{token.cap}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-[16px] leading-tight">{token.price}</span>
                <span className={`text-[12px] font-bold ${token.up ? 'text-[#4ef0b4]' : 'text-red-500'}`}>
                  {token.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0b0b0b]/90 backdrop-blur-xl border-t border-gray-900 px-2 pt-3 pb-8 flex justify-around items-end">
          <div className="flex flex-col items-center gap-1 text-[#4ef0b4]"><Home size={24}/><span className="text-[10px] font-bold">Главная</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-500"><BarChart2 size={24}/><span className="text-[10px] font-bold">Популярные</span></div>
          <div className="relative -top-6 flex flex-col items-center">
            <div className="bg-[#4ef0b4] w-14 h-14 rounded-full flex items-center justify-center text-black border-[4px] border-[#0b0b0b]">
              <ArrowLeftRight size={28} strokeWidth={3} />
            </div>
            <span className="text-[10px] text-gray-500 mt-2 font-bold uppercase">Торговать</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500"><Gift size={24}/><span className="text-[10px] font-bold">Награды</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-500"><MoreHorizontal size={24}/><span className="text-[10px] font-bold">Подробнее</span></div>
        </div>
      </div>
    </div>
  );
}

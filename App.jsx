import React, { useState, useEffect } from 'react';
import { 
  Settings, Search, ScanLine, Copy, ArrowUpRight, ArrowDown, 
  RefreshCcw, Plus, Clock, SlidersHorizontal, ChevronRight,
  Home, TrendingUp, ArrowUpDown, Gift, Compass, Loader2
} from 'lucide-react';

export default function App() {
  // Состояние для "Обновления экрана" (Pull to refresh)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  
  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY > startY && window.scrollY === 0) {
      setPullDistance(Math.min(currentY - startY, 100));
    }
  };

  const handleTouchEnd = () => {
    if (pullDistance > 60) {
      setIsRefreshing(true);
      // Имитация загрузки
      setTimeout(() => {
        setIsRefreshing(false);
        setPullDistance(0);
      }, 1500);
    } else {
      setPullDistance(0);
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-[100dvh] w-full text-white font-sans flex flex-col mx-auto max-w-[480px] relative shadow-2xl">
      
      {/* Индикатор обновления */}
      <div 
        className="absolute top-0 left-0 w-full flex justify-center items-center overflow-hidden transition-all duration-300 z-50"
        style={{ height: `${pullDistance}px`, opacity: pullDistance / 100 }}
      >
        {isRefreshing ? (
          <Loader2 className="animate-spin text-[#4ff0b7]" size={24} />
        ) : (
          <ArrowDown className="text-gray-500" size={24} style={{ transform: `rotate(${pullDistance * 2}deg)` }} />
        )}
      </div>

      <div 
        className="flex-1 overflow-y-auto pb-28 custom-scrollbar"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateY(${isRefreshing ? 50 : 0}px)`, transition: isRefreshing ? 'transform 0.3s' : 'none' }}
      >
        {/* --- Верхняя панель (Поиск + Настройки) --- */}
        <div className="flex justify-between items-center px-4 pt-5 gap-3">
          <div className="relative">
            <Settings className="text-[#e5e5e5] w-7 h-7" strokeWidth={1.5} />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0f0f0f]"></div>
          </div>
          
          <div className="flex-1 bg-[#1c1c1e] rounded-full flex items-center px-4 py-2 border border-white/5">
            <Search className="text-gray-400 w-4 h-4 mr-2" />
            <span className="text-[15px] text-gray-400 font-medium tracking-wide">Поиск</span>
          </div>
          
          <ScanLine className="text-[#e5e5e5] w-7 h-7" strokeWidth={1.5} />
        </div>

        {/* --- Название кошелька --- */}
        <div className="flex justify-center items-center gap-3 mt-5">
          <div className="flex items-center gap-1.5 bg-[#1c1c1e] px-4 py-1.5 rounded-full cursor-pointer active:bg-[#2c2c2e] transition-colors">
            <span className="text-[15px] font-semibold tracking-wide text-[#f5f5f5]">Основной кошелек</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <button className="text-gray-400 active:text-white transition-colors">
            <Copy className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* --- Баланс --- */}
        <div className="flex flex-col items-center mt-6 mb-7">
          <h1 className="text-[44px] font-bold tracking-tight leading-none">0,00 $</h1>
          <div className="text-gray-400 text-[15px] mt-2 font-medium">0,00 $ (0.00%)</div>
        </div>

        {/* --- Кнопки действий (4 в ряд) --- */}
        <div className="flex justify-between px-5 mb-8">
          <ActionBtn icon={<ArrowUpRight size={28} strokeWidth={2} />} label="Отпр..." />
          <ActionBtn icon={<ArrowDown size={28} strokeWidth={2} />} label="Полу..." />
          <ActionBtn icon={<RefreshCcw size={28} strokeWidth={2} />} label="Обмен" />
          <ActionBtn icon={<Plus size={32} strokeWidth={2.5} />} label="Поку..." isGreen />
        </div>

        {/* --- Вкладки (Избранное / NFT) --- */}
        <div className="flex px-5 items-center justify-between border-b border-[#1c1c1e] mb-4">
          <div className="flex gap-6 text-[16px] font-bold">
            <div className="text-gray-500 pb-3">Криптовалюта</div>
            <div className="text-white pb-3 border-b-[3px] border-[#4ff0b7] relative z-10">Избранное</div>
            <div className="text-gray-500 pb-3">NFT</div>
          </div>
          <div className="flex gap-4 pb-3 text-[#e5e5e5]">
            <Clock size={22} strokeWidth={2} />
            <SlidersHorizontal size={22} strokeWidth={2} />
          </div>
        </div>

        {/* --- Список токенов --- */}
        <div className="px-5 flex flex-col gap-5">
          <TokenRow icon="sol" name="SOL" cap="2,74 $B" price="86,45 $" change="-0.12%" isUp={false} />
          <TokenRow icon="eth" name="ETH" cap="7,92 $B" price="2 346,91 $" change="+1.29%" isUp={true} />
          <TokenRow icon="btc" name="BTC" cap="17,24 $B" price="78 101,78 $" change="+0.55%" isUp={true} />
          <TokenRow icon="bnb" name="BNB" cap="753,22 $M" price="631,99 $" change="+0.23%" isUp={true} />
          
          <button className="text-[#4ff0b7] font-semibold text-[15px] py-2 mt-2 tracking-wide active:opacity-70">
            Просмотреть токены
          </button>
        </div>

        {/* --- Секция "Заработок" --- */}
        <div className="mt-8 px-5">
          <div className="flex items-center gap-2 mb-4 cursor-pointer">
            <h2 className="text-[20px] font-bold">Заработок</h2>
            <ChevronRight className="w-5 h-5 text-gray-400 mt-1" strokeWidth={2.5} />
          </div>
          
          {/* Заглушки карточек из скриншота */}
          <div className="flex gap-3 overflow-hidden">
            <div className="w-[160px] h-[100px] bg-[#1c1c1e] rounded-[24px] border border-[#2c2c2e] p-3 flex flex-col justify-end relative overflow-hidden shrink-0">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
              <span className="text-[13px] text-gray-400">30.83% APY</span>
            </div>
            <div className="w-[160px] h-[100px] bg-[#1c1c1e] rounded-[24px] border border-[#2c2c2e] p-3 flex flex-col justify-end relative overflow-hidden shrink-0">
               <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
              <span className="text-[13px] text-gray-400">27.04% APY</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Нижнее навигационное меню --- */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#121214]/95 backdrop-blur-2xl border-t border-[#1c1c1e] pb-7 pt-3 px-4 flex justify-between items-end z-40">
        <NavBtn icon={<Home size={26} strokeWidth={2}/>} label="Главная" active />
        <NavBtn icon={<TrendingUp size={26} strokeWidth={2}/>} label="Популярные" />
        
        {/* Центральная кнопка Торговать */}
        <div className="relative -top-5 flex flex-col items-center group cursor-pointer w-[70px]">
          <div className="bg-[#4ff0b7] w-[60px] h-[60px] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(79,240,183,0.15)] group-active:scale-90 transition-transform">
            <ArrowUpDown size={28} strokeWidth={2.5} />
          </div>
          <span className="text-[11px] text-gray-400 mt-2 font-semibold">Торговать</span>
        </div>

        <NavBtn icon={<Gift size={26} strokeWidth={2}/>} label="Награды" />
        <NavBtn icon={<Compass size={26} strokeWidth={2}/>} label="Подробнее" />
      </div>
    </div>
  );
}

// --- Компонент кнопки действия ---
function ActionBtn({ icon, label, isGreen = false }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform w-[76px]">
      <div className={`w-[72px] h-[72px] rounded-[24px] flex items-center justify-center
        ${isGreen ? 'bg-[#4ff0b7] text-black' : 'bg-[#212123] text-white hover:bg-[#2c2c2e]'}`}>
        {icon}
      </div>
      <span className="text-[13px] text-gray-400 font-medium tracking-wide">{label}</span>
    </div>
  );
}

// --- Компонент нижней навигации ---
function NavBtn({ icon, label, active = false }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 cursor-pointer w-[64px] active:scale-90 transition-transform ${active ? 'text-[#4ff0b7]' : 'text-gray-500'}`}>
      {icon}
      <span className="text-[11px] font-semibold">{label}</span>
    </div>
  );
}

// --- Компонент строки криптовалюты ---
function TokenRow({ icon, name, cap, price, change, isUp }) {
  // Простые цвета для имитации логотипов
  const bgColors = {
    sol: 'bg-black border border-gray-700 text-[#00FFA3]',
    eth: 'bg-white text-black',
    btc: 'bg-[#F7931A] text-white',
    bnb: 'bg-[#F3BA2F] text-black'
  };

  return (
    <div className="flex justify-between items-center cursor-pointer active:bg-white/5 p-1 -mx-1 rounded-xl transition-colors">
      <div className="flex items-center gap-4">
        {/* Иконка */}
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[18px] ${bgColors[icon]}`}>
          {name === 'SOL' ? '≡' : name === 'ETH' ? '♦' : name === 'BTC' ? '₿' : '◇'}
        </div>
        
        <div className="flex flex-col">
          <span className="font-bold text-[18px] tracking-wide text-white leading-tight">{name}</span>
          <span className="text-[14px] text-gray-500 font-medium">{cap}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <span className="font-bold text-[18px] tracking-wide text-white leading-tight">{price}</span>
        <span className={`text-[14px] font-semibold mt-0.5 ${isUp ? 'text-[#4ff0b7]' : 'text-[#ff4d4f]'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Calendar, Users, Trophy, Bell, MapPin, ChevronLeft, 
  Info, Clock, Search, Filter, ChevronRight, Settings, 
  Edit2, Target, Zap, Wallet, MessageSquare, Shield, UserPlus, X
} from 'lucide-react';

// --- ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ ---
const PadelApp = () => {
  const [screen, setScreen] = useState('home');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans max-w-md mx-auto relative overflow-hidden shadow-2xl">
      
      {/* КОНТЕНТ ЭКРАНОВ */}
      <div className={`h-screen overflow-y-auto scrollbar-hide pb-32 transition-all duration-300 ${showPaymentModal ? 'blur-md scale-95 brightness-50' : ''}`}>
        
        {/* 1. ЭКРАН DASHBOARD */}
        {screen === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="p-6 flex justify-between items-center">
              <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Welcome back</p>
                <h1 className="text-2xl font-black italic">HELLO, ALEX! 👋</h1>
              </div>
              <div className="bg-zinc-900 p-2.5 rounded-2xl border border-zinc-800 relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-lime-400 border-2 border-black rounded-full"></span>
              </div>
            </header>

            <section className="px-6 mb-8" onClick={() => setScreen('matchDetails')}>
              <h2 className="text-sm font-black uppercase tracking-tighter mb-4 text-zinc-500 italic">Your Next Match</h2>
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[32px] p-6 border border-zinc-700/50 shadow-xl cursor-pointer hover:border-lime-400/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-lime-400 text-black text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">Confirmed</span>
                  <div className="flex items-center text-zinc-400 text-xs font-bold"><MapPin size={14} className="mr-1 text-lime-400" /> Riga Padel Center</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-4xl font-black italic leading-none mb-1">18:30</p>
                    <p className="text-zinc-500 text-sm font-bold uppercase italic">Today • Court #4</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-700 flex items-center justify-center text-[8px] font-black">PLAYER</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 mb-8 grid grid-cols-2 gap-4">
              <button onClick={() => setScreen('booking')} className="bg-lime-400 text-black rounded-3xl p-5 flex flex-col items-center gap-3 font-black italic uppercase shadow-lg shadow-lime-400/20 active:scale-95 transition-transform">
                <Calendar size={28} strokeWidth={2.5} /> <span>Book Court</span>
              </button>
              <button onClick={() => setScreen('matches')} className="bg-zinc-900 text-white rounded-3xl p-5 flex flex-col items-center gap-3 font-black italic uppercase border border-zinc-800 active:scale-95 transition-transform">
                <Users size={28} strokeWidth={2.5} /> <span>Find Match</span>
              </button>
            </section>

            <section className="px-6">
              <div className="bg-zinc-900 rounded-[32px] p-6 flex items-center justify-between border border-zinc-800 shadow-inner">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400"><Trophy size={28} /></div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Skill Level</p>
                    <p className="text-2xl font-black text-lime-400 italic leading-none">4.2 <span className="text-xs text-zinc-600">/ 7.0</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 text-[10px] uppercase font-black">Win Rate</p>
                  <p className="text-xl font-black italic">68%</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. ЭКРАН BOOKING */}
        {screen === 'booking' && (
          <div className="animate-in slide-in-from-right duration-300">
            <header className="p-6 flex items-center justify-between">
              <button onClick={() => setScreen('home')} className="bg-zinc-900 p-2.5 rounded-2xl border border-zinc-800"><ChevronLeft size={20} /></button>
              <h1 className="text-xl font-black italic uppercase">Book Court</h1>
              <div className="w-10" />
            </header>
            
            <section className="px-6 mb-8 overflow-x-auto flex gap-3 scrollbar-hide py-2">
              {[14, 15, 16, 17, 18, 19, 20].map(d => (
                <button key={d} className={`min-w-[65px] py-5 rounded-[24px] border transition-all flex flex-col items-center ${d === 15 ? 'bg-lime-400 text-black font-black border-lime-400 shadow-xl shadow-lime-400/20 scale-105' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                  <span className="text-[10px] uppercase font-black mb-1 opacity-60">Oct</span>
                  <span className="text-xl italic">{d}</span>
                </button>
              ))}
            </section>

            <section className="px-6 grid grid-cols-3 gap-3">
              {['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '20:00', '21:30', '23:00'].map(t => (
                <button key={t} className="py-5 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-lime-400 hover:text-white transition-all flex flex-col items-center">
                  <span className="text-sm font-black italic">{t}</span>
                  <span className="text-[10px] font-bold opacity-40 mt-1 uppercase">€32</span>
                </button>
              ))}
            </section>
          </div>
        )}

        {/* 3. ЭКРАН OPEN MATCHES */}
        {screen === 'matches' && (
          <div className="animate-in slide-in-from-right duration-300">
            <header className="p-6">
               <h1 className="text-4xl font-black italic uppercase mb-6 leading-none tracking-tighter">Open Games</h1>
               <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input type="text" placeholder="Search matches..." className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-lime-400 transition-colors" />
                  </div>
                  <button className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-lime-400"><Filter size={20} /></button>
               </div>
            </header>

            <section className="px-6 space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} onClick={() => setScreen('matchDetails')} className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 active:scale-95 transition-transform cursor-pointer group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-zinc-800 p-3.5 rounded-2xl text-lime-400 border border-zinc-700 group-hover:bg-lime-400 group-hover:text-black transition-colors"><Clock size={20} /></div>
                      <div>
                        <p className="font-black text-2xl italic leading-none uppercase">18:30</p>
                        <p className="text-xs text-zinc-500 font-bold mt-1 uppercase tracking-widest">Today • Court #{i+1}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Level</p>
                      <p className="text-sm font-black text-lime-400 italic uppercase">3.5 - 4.5</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-zinc-800/50">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(p => <div key={p} className="w-9 h-9 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[8px] font-black">PL</div>)}
                        <div className="w-9 h-9 rounded-full border-2 border-zinc-900 border-dashed bg-transparent text-zinc-600 flex items-center justify-center text-[10px] font-black">+1</div>
                     </div>
                     <button className="bg-white text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase italic tracking-wider group-hover:bg-lime-400 transition-colors">Join Match</button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {/* 4. ЭКРАН MATCH DETAILS */}
        {screen === 'matchDetails' && (
          <div className="animate-in fade-in duration-500">
            <div className="relative h-72 bg-zinc-800">
              <img src="https://images.unsplash.com/photo-1626224484214-4051d48d6896?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60" alt="Padel court" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <button onClick={() => setScreen('matches')} className="absolute top-6 left-6 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-20"><ChevronLeft size={20} /></button>
              <div className="absolute bottom-8 left-6 z-20">
                <span className="bg-lime-400 text-black text-[10px] font-black px-3 py-1 rounded-lg uppercase italic tracking-widest">Open Match</span>
                <h1 className="text-4xl font-black italic uppercase leading-none mt-3 tracking-tighter">Evening Smash</h1>
                <p className="text-zinc-300 text-xs font-bold mt-2 flex items-center gap-1 uppercase opacity-80"><MapPin size={12} className="text-lime-400" /> Riga Padel Center</p>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl flex items-center gap-4"><div className="text-lime-400 bg-lime-400/10 p-2 rounded-lg"><Clock size={20} /></div> <div><p className="text-[10px] text-zinc-500 font-black uppercase">Time</p><p className="font-black italic">18:30</p></div></div>
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl flex items-center gap-4"><div className="text-lime-400 bg-lime-400/10 p-2 rounded-lg"><Target size={20} /></div> <div><p className="text-[10px] text-zinc-500 font-black uppercase">Court</p><p className="font-black italic">#4</p></div></div>
            </div>

            <div className="px-6 mb-12">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 italic">Players Joined</h2>
                <span className="text-xs font-black text-lime-400 italic uppercase">3/4 Spots</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-black">P{i}</div>
                    <span className="text-xs font-black uppercase italic tracking-tight text-zinc-300">Player {i}</span>
                  </div>
                ))}
                <div className="bg-zinc-900/30 border border-zinc-800 border-dashed p-4 rounded-2xl flex items-center gap-3 text-zinc-600">
                  <div className="w-10 h-10 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-sm font-black">?</div>
                  <span className="text-xs italic font-bold">Waiting...</span>
                </div>
              </div>
            </div>

            <div className="px-6">
               <button onClick={() => setShowPaymentModal(true)} className="w-full py-5 bg-lime-400 text-black rounded-[28px] font-black italic text-xl uppercase shadow-2xl shadow-lime-400/30 active:scale-95 transition-transform tracking-widest">JOIN FOR 10€</button>
            </div>
          </div>
        )}

        {/* 5. ЭКРАН PROFILE */}
        {screen === 'profile' && (
          <div className="animate-in fade-in duration-500 px-6">
            <header className="py-8 flex justify-between items-center">
              <h1 className="text-2xl font-black uppercase italic">Profile</h1>
              <button className="bg-zinc-900 p-3 rounded-2xl border border-zinc-800 text-zinc-500"><Settings size={20} /></button>
            </header>
            
            <div className="flex flex-col items-center mb-10">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-[40px] bg-gradient-to-tr from-lime-400 to-emerald-500 p-1 shadow-2xl shadow-lime-400/20">
                  <div className="w-full h-full rounded-[36px] bg-zinc-950 flex items-center justify-center font-black text-3xl italic border-[6px] border-black">AK</div>
                </div>
                <button className="absolute bottom-0 right-0 bg-white text-black p-2.5 rounded-2xl border-4 border-black shadow-lg"><Edit2 size={16} /></button>
              </div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-2">Alex Karelin</h2>
              <div className="flex items-center gap-2">
                <span className="bg-zinc-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase text-zinc-500 border border-zinc-800 tracking-widest">Expert</span>
                <span className="text-lime-400 font-black italic text-sm tracking-widest">LVL 4.2</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 mb-8 flex items-center justify-between shadow-inner">
              <div className="flex items-center gap-4">
                <div className="bg-lime-400/10 p-4 rounded-2xl text-lime-400 shadow-inner"><Wallet size={24} /></div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Club Balance</p>
                  <p className="font-black text-2xl italic">€145.50</p>
                </div>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-xl font-black text-xs uppercase italic tracking-tighter active:scale-95 transition-transform">TOP UP</button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[{l:'Matches', v:'124', c:'text-blue-400'}, {l:'Win Rate', v:'68%', c:'text-lime-400'}, {l:'Rank', v:'#12', c:'text-amber-400'}].map(s => (
                <div key={s.l} className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl text-center shadow-sm">
                  <p className={`text-2xl font-black italic leading-none mb-1 ${s.c}`}>{s.v}</p>
                  <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest leading-none">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL ПОДТВЕРЖДЕНИЯ ОПЛАТЫ */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)}></div>
          
          <div className="relative w-full bg-zinc-950 rounded-t-[48px] border-t border-zinc-800 p-8 pb-14 animate-in slide-in-from-bottom-4 duration-500 shadow-[0_-25px_60px_rgba(0,0,0,0.8)]">
            <div className="w-16 h-1.5 bg-zinc-800 rounded-full mx-auto mb-10 opacity-50"></div>
            
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter">Confirm</h2>
               <button onClick={() => setShowPaymentModal(false)} className="text-zinc-600 hover:text-white"><X size={28} /></button>
            </div>
            
            <div className="bg-zinc-900/50 rounded-3xl border border-zinc-800 p-6 mb-10">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-800">
                <div>
                   <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total to pay</p>
                   <p className="text-4xl font-black text-lime-400 italic">€10.00</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Evening Smash</p>
                   <p className="text-xs font-bold text-zinc-400 italic">Court #4 • Today</p>
                </div>
              </div>

              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">Payment Method</p>
              <button className="w-full flex items-center justify-between p-5 bg-zinc-800/80 border-2 border-lime-400 rounded-[24px] shadow-lg shadow-lime-400/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-lime-400 text-black p-2 rounded-xl"><Wallet size={20} /></div>
                  <div className="text-left">
                    <p className="font-black italic text-sm uppercase">Club Balance</p>
                    <p className="text-[10px] text-lime-400 font-black uppercase">Avail: €145.50</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-lime-400 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-lime-400"></div>
                </div>
              </button>
            </div>

            <button 
              onClick={() => {
                 alert('MATCH JOINED SUCCESSFULLY! 🔥');
                 setShowPaymentModal(false);
                 setScreen('home');
              }}
              className="w-full py-5 bg-lime-400 text-black rounded-[28px] font-black italic text-xl uppercase shadow-2xl shadow-lime-400/30 active:scale-95 transition-all tracking-widest"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      )}

      {/* НИЖНЯЯ НАВИГАЦИЯ */}
      <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-950/90 backdrop-blur-2xl border-t border-zinc-900 px-8 py-5 flex justify-between items-center z-50 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 ${showPaymentModal ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <button onClick={() => setScreen('home')} className={`flex flex-col items-center gap-1.5 transition-all ${screen === 'home' ? 'text-lime-400 scale-110' : 'text-zinc-700'}`}>
          <Calendar size={22} strokeWidth={screen === 'home' ? 3 : 2} />
          <span className="text-[9px] uppercase font-black tracking-widest">Home</span>
        </button>
        <button onClick={() => setScreen('matches')} className={`flex flex-col items-center gap-1.5 transition-all ${screen === 'matches' || screen === 'matchDetails' ? 'text-lime-400 scale-110' : 'text-zinc-700'}`}>
          <Users size={22} strokeWidth={screen === 'matches' ? 3 : 2} />
          <span className="text-[9px] uppercase font-black tracking-widest">Games</span>
        </button>
        <button onClick={() => setScreen('booking')} className={`flex flex-col items-center gap-1.5 transition-all ${screen === 'booking' ? 'text-lime-400 scale-110' : 'text-zinc-700'}`}>
          <Target size={22} strokeWidth={screen === 'booking' ? 3 : 2} />
          <span className="text-[9px] uppercase font-black tracking-widest">Book</span>
        </button>
        <button onClick={() => setScreen('profile')} className={`flex flex-col items-center gap-1.5 transition-all ${screen === 'profile' ? 'text-lime-400 scale-110' : 'text-zinc-700'}`}>
          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center text-[8px] font-black italic transition-all ${screen === 'profile' ? 'border-lime-400 bg-lime-400 text-black rotate-12' : 'border-zinc-800 bg-zinc-900 text-zinc-600'}`}>AK</div>
          <span className="text-[9px] uppercase font-black tracking-widest">You</span>
        </button>
      </nav>
    </div>
  );
};

export default PadelApp;

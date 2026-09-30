import { useScrollReveal } from '@/hooks/useScrollReveal';

const schedule = [
  { day: 'Ponedeljek', hours: '06:30 – 22:00', isWeekend: false },
  { day: 'Torek', hours: '06:30 – 22:00', isWeekend: false },
  { day: 'Sreda', hours: '06:30 – 22:00', isWeekend: false },
  { day: 'Četrtek', hours: '06:30 – 22:00', isWeekend: false },
  { day: 'Petek', hours: '06:30 – 00:00', isWeekend: false },
  { day: 'Sobota', hours: '07:00 – 00:00', isWeekend: true },
  { day: 'Nedelja', hours: '07:00 – 21:00', isWeekend: true },
];

function getCurrentDayIndex(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

export default function HoursSection() {
  const todayIndex = getCurrentDayIndex();
  const { ref, visible } = useScrollReveal({ threshold: 0.10 });

  return (
    <section id="hours" className="relative w-full py-16 md:py-24 bg-background-50 bg-texture-lines">
      <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-transparent to-background-50 pointer-events-none"></div>
      <div
        ref={ref}
        className={`w-full px-4 md:px-6 max-w-4xl mx-auto relative z-10 reveal-on-scroll ${visible ? 'revealed' : ''}`}
      >
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary-500 font-heading font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">
            Kdaj smo odprti
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 mb-4">
            Delovni čas
          </h2>
          <p className="text-foreground-600 text-sm md:text-base">
            Vedno odprti za dobro kavo in prijeten klepet.
          </p>
        </div>

        <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden mb-10">
          <img
            src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/8a4bc8035e45492f62501a2b893a55be.png"
            alt="Korant – simbol Ptuja pri Baru Pri Oračih"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        <div className="bg-background-100 rounded-lg border border-background-200/70 overflow-hidden">
          {schedule.map((item, index) => {
            const isToday = index === todayIndex;
            return (
              <div
                key={item.day}
                className={`flex items-center justify-between px-5 py-4 ${
                  index < schedule.length - 1 ? 'border-b border-background-200/70' : ''
                } ${isToday ? 'bg-primary-50 border-l-4 border-l-primary-500' : ''} ${
                  item.isWeekend && !isToday ? 'bg-background-50/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isToday ? 'bg-primary-500 animate-pulse' : 'bg-background-300'
                    }`}
                  ></div>
                  <span
                    className={`text-sm md:text-base font-medium ${
                      isToday ? 'text-primary-700' : 'text-foreground-800'
                    }`}
                  >
                    {item.day}
                    {isToday && (
                      <span className="ml-2 text-xs text-primary-500 font-semibold">
                        (Danes)
                      </span>
                    )}
                  </span>
                </div>
                <span
                  className={`text-sm md:text-base font-semibold whitespace-nowrap ${
                    isToday ? 'text-primary-600' : 'text-foreground-700'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-foreground-500 text-xs md:text-sm">
            * Ob praznikih se delovni čas lahko spremeni. Za aktualne informacije nas spremljajte na družbenih omrežjih.
          </p>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="w-full bg-slate-900 pb-20 pt-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.2)] border border-white/10 aspect-video group" style={{ minHeight: '400px' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none"></div>
        <Image
          src="/images/landscape_dashboard_showcase.png"
          alt="AI Dashboard Platform Landscape"
          fill
          priority
          className="object-cover transition-transform duration-[10s] group-hover:scale-105"
        />
        
        {/* Floating gradient accents */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
      </div>
    </section>
  );
}

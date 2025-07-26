export default function WaveSeparator({ flip = false, color = "#eff6ff" }) {
  // color по умолчанию — голубой фон между секциями
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px]">
        <path fill={color} d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,85.3C840,85,960,107,1080,112C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
    </div>
  );
}

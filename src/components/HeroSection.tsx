import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Zap, Droplets, Settings } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/cogetech-logo.jpg';

const HeroSection = () => {
  const { t, dir } = useLanguage();

  const stats = [
    { icon: Sun, value: '500+', label: 'kWp Installed' },
    { icon: Settings, value: '100+', label: 'Projects' },
    { icon: Droplets, value: '50+', label: 'Pumping Systems' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
              {t.hero.cta}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </Link>
            <Link to="/solutions" className="btn-hero-outline inline-flex items-center justify-center gap-2">
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

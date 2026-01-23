import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            {t.cta.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ boxShadow: '0 10px 30px -10px rgba(249, 115, 22, 0.5)' }}
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

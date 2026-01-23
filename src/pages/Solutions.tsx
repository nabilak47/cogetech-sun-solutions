import { Sun, Droplets, Zap, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/CTASection';

// Service images
import solarInstallation from '@/assets/solar-installation.jpg';
import solarPumping from '@/assets/solar-pumping.jpg';
import electricalWiring from '@/assets/electrical-wiring.jpg';
import industrialAutomation from '@/assets/industrial-automation.jpg';

const Solutions = () => {
  const { t, dir } = useLanguage();

  const services = [
    {
      id: 'solar-installation',
      title: t.services.solarInstallation.title,
      description: t.services.solarInstallation.description,
      icon: Sun,
      image: solarInstallation,
      features: [
        'High-efficiency solar panels',
        'Professional installation',
        'System monitoring',
        'Maintenance support',
        'Grid-tie and off-grid solutions',
      ],
    },
    {
      id: 'solar-pumping',
      title: t.services.solarPumping.title,
      description: t.services.solarPumping.description,
      icon: Droplets,
      image: solarPumping,
      features: [
        'Submersible pumps',
        'Surface pumps',
        'Variable frequency drives',
        'Water level monitoring',
        'Complete irrigation systems',
      ],
    },
    {
      id: 'electrical-wiring',
      title: t.services.electricalWiring.title,
      description: t.services.electricalWiring.description,
      icon: Zap,
      image: electricalWiring,
      features: [
        'Industrial cabling',
        'Control panel installation',
        'Power distribution',
        'Safety systems',
        'Preventive maintenance',
      ],
    },
    {
      id: 'industrial-automation',
      title: t.services.industrialAutomation.title,
      description: t.services.industrialAutomation.description,
      icon: Settings,
      image: industrialAutomation,
      features: [
        'PLC programming',
        'HMI interfaces',
        'SCADA systems',
        'Process optimization',
        'Remote monitoring',
      ],
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.solutions}</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="btn-hero inline-flex items-center gap-2"
                  >
                    {t.hero.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Solutions;

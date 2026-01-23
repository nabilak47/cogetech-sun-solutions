import { Sun, Droplets, Zap, Settings } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PartnerCarousel from '@/components/PartnerCarousel';
import CTASection from '@/components/CTASection';

// Service images
import solarInstallation from '@/assets/solar-installation.jpg';
import solarPumping from '@/assets/solar-pumping.jpg';
import electricalWiring from '@/assets/electrical-wiring.jpg';
import industrialAutomation from '@/assets/industrial-automation.jpg';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.solarInstallation.title,
      description: t.services.solarInstallation.description,
      icon: Sun,
      image: solarInstallation,
    },
    {
      title: t.services.solarPumping.title,
      description: t.services.solarPumping.description,
      icon: Droplets,
      image: solarPumping,
    },
    {
      title: t.services.electricalWiring.title,
      description: t.services.electricalWiring.description,
      icon: Zap,
      image: electricalWiring,
    },
    {
      title: t.services.industrialAutomation.title,
      description: t.services.industrialAutomation.description,
      icon: Settings,
      image: industrialAutomation,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.services.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerCarousel />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Index;

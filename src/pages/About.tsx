import { Target, Shield, Award, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/CTASection';
import heroImage from '@/assets/hero-solar-farm.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t.about.quality,
      description: t.about.qualityText,
    },
    {
      icon: Shield,
      title: t.about.reliability,
      description: t.about.reliabilityText,
    },
    {
      icon: Users,
      title: t.about.expertise,
      description: t.about.expertiseText,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-lg text-gray-400">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Cogetech Solar Installation"
                className="w-full h-64 md:h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/90 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">kWp Installed</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.about.subtitle}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t.about.description}
              </p>

              {/* Mission */}
              <div className="bg-accent rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t.about.mission}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.about.missionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.values}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
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

export default About;

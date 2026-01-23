import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/CTASection';

// Partner logos
import nexansLogo from '@/assets/partners/nexans.png';
import shaktiLogo from '@/assets/partners/shakti.png';
import abbLogo from '@/assets/partners/abb.jpg';
import schneiderLogo from '@/assets/partners/schneider.png';
import veichiLogo from '@/assets/partners/veichi.jpg';
import geyaLogo from '@/assets/partners/geya.png';
import invtLogo from '@/assets/partners/invt.png';

const partners = [
  { 
    name: 'Nexans', 
    logo: nexansLogo,
    description: 'Global leader in cabling and connectivity solutions',
    category: 'Cables & Connectivity'
  },
  { 
    name: 'Shakti', 
    logo: shaktiLogo,
    description: 'Premium solar water pumping solutions',
    category: 'Solar Pumps'
  },
  { 
    name: 'ABB', 
    logo: abbLogo,
    description: 'World leader in electrification and automation',
    category: 'Automation'
  },
  { 
    name: 'Schneider Electric', 
    logo: schneiderLogo,
    description: 'Digital transformation of energy management',
    category: 'Energy Management'
  },
  { 
    name: 'Veichi', 
    logo: veichiLogo,
    description: 'Innovative variable frequency drive solutions',
    category: 'VFD Drives'
  },
  { 
    name: 'Geya', 
    logo: geyaLogo,
    description: 'Quality electrical components and equipment',
    category: 'Electrical Components'
  },
  { 
    name: 'INVT', 
    logo: invtLogo,
    description: 'Industrial automation and new energy solutions',
    category: 'Industrial Automation'
  },
];

const Partners = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.partners}</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.partners.subtitle}
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-24 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-3">
                    {partner.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partners */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.partners.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We carefully select our partners based on quality, reliability, and innovation. 
              Working with globally recognized brands ensures that every installation we deliver 
              meets the highest standards of performance and durability. Our partnerships enable 
              us to provide cutting-edge solutions that power Morocco's agricultural and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Partners;

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

// Partner logos
import nexansLogo from '@/assets/partners/nexans.png';
import shaktiLogo from '@/assets/partners/shakti.png';
import abbLogo from '@/assets/partners/abb.jpg';
import schneiderLogo from '@/assets/partners/schneider.png';
import veichiLogo from '@/assets/partners/veichi.jpg';
import geyaLogo from '@/assets/partners/geya.png';
import invtLogo from '@/assets/partners/invt.png';

const partners = [
  { name: 'Nexans', logo: nexansLogo },
  { name: 'Shakti', logo: shaktiLogo },
  { name: 'ABB', logo: abbLogo },
  { name: 'Schneider Electric', logo: schneiderLogo },
  { name: 'Veichi', logo: veichiLogo },
  { name: 'Geya', logo: geyaLogo },
  { name: 'INVT', logo: invtLogo },
];

const PartnerCarousel = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.partners.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-12 md:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Double the logos for infinite scroll effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo max-w-[120px] md:max-w-[160px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;

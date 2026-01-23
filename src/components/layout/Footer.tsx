import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import cogetechLogo from '@/assets/cogetech-logo.jpg';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/solutions', label: t.nav.solutions },
    { path: '/partners', label: t.nav.partners },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  const services = [
    t.services.solarInstallation.title,
    t.services.solarPumping.title,
    t.services.electricalWiring.title,
    t.services.industrialAutomation.title,
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={cogetechLogo} 
              alt="Cogetech" 
              className="h-16 w-auto object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/solutions"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.info.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                {t.contact.info.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {t.contact.info.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                {t.contact.info.email}
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3">{t.footer.followUs}</h4>
              <a
                href="https://web.facebook.com/profile.php?id=61558624210254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cogetech. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

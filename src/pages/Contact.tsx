import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      value: t.contact.info.address,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: t.contact.info.phone,
    },
    {
      icon: Mail,
      title: 'Email',
      value: t.contact.info.email,
    },
    {
      icon: Clock,
      title: 'Hours',
      value: t.contact.info.hours,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8">{t.contact.info.title}</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">{info.title}</h3>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h3 className="font-medium text-white mb-4">{t.footer.followUs}</h3>
                  <a
                    href="https://web.facebook.com/profile.php?id=61558624210254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 bg-muted rounded-2xl overflow-hidden h-64">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-accent">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">
                      {t.contact.info.address}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Morocco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

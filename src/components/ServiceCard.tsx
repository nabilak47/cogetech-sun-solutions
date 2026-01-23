import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const ServiceCard = ({ title, description, icon: Icon, image }: ServiceCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="card-service group overflow-hidden">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <Link 
        to="/solutions" 
        className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
      >
        {t.services.learnMore}
        <svg 
          className="w-4 h-4 ms-1 rtl:rotate-180" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;

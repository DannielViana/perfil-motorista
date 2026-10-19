import type { ReactNode } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { PhoneCall } from 'lucide-react';
import './App.css';

interface SocialLink {
  id: number;
  title: string;
  url: string;
  theme: 'whatsapp' | 'instagram' | 'phone';
  icon: ReactNode;
}

interface DriverProfile {
  name: string;
  category: string;
  rating: number;
  tripsCount: number;
  bio: string;
  avatarUrl: string;
}

export default function App() {
  const driver: DriverProfile = {
    name: "Danniel Viana",
    category: "Motorista Executivo & Particular",
    rating: 5.00,
    tripsCount: 3000,
    bio: "Serviço de transporte particular sob agendamento. Atendimento para viagens corporativas, traslados de aeroporto, congressos e eventos com total segurança e discrição.",
    avatarUrl: "./foto.jpeg"
  };

  const links: SocialLink[] = [
    {
      id: 1,
      title: "Agendar Viagem via WhatsApp",
      url: "https://wa.me/5581991009304?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20viagem%20particular.",
      theme: 'whatsapp',
      icon: <FaWhatsapp size={22} className="btn-icon" />
    },
    {
      id: 2,
      title: "Seguir no Instagram",
      url: "https://instagram.com/dtransfer",
      theme: 'instagram',
      icon: <FaInstagram size={22} className="btn-icon" />
    },
    {
      id: 3,
      title: "Ligar Diretamente",
      url: "tel:+5581991009304",
      theme: 'phone',
      icon: <PhoneCall size={20} className="btn-icon" />
    }
  ];

  return (
    <main className="container">
      <div className="card">
        <div className="avatar-wrapper">
          <img 
            src={driver.avatarUrl} 
            alt={`Foto de ${driver.name}`} 
            className="avatar"
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #d4af37',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>

        <h1>{driver.name}</h1>
        <div className="badge">
          ⭐ {driver.rating.toFixed(2)} • {driver.category}
        </div>

        <p className="trips-count">🚗 Mais de {driver.tripsCount.toLocaleString('pt-PT')} viagens realizadas</p>

        <p className="bio">{driver.bio}</p>

        <div className="links-list">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-link btn-${link.theme}`}
            >
              {link.icon}
              <span>{link.title}</span>
            </a>
          ))}
        </div>

        <footer>
          <p>© {new Date().getFullYear()} {driver.name}. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
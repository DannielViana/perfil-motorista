import { useState } from 'react';
import './App.css';

// 1. Definição do formato de um link de rede social/contato
interface SocialLink {
  id: number;
  title: string;
  url: string;
  isPrimary?: boolean; // A interrogação indica que este campo é opcional
}

// 2. Definição do perfil completo do motorista
interface DriverProfile {
  name: string;
  category: string;
  rating: number;
  tripsCount: number;
  bio: string;
  pixKey: string;
  avatarUrl: string;
}

export default function App() {
  const [copied, setCopied] = useState<boolean>(false);

  // Dados tipados do motorista
  const driver: DriverProfile = {
    name: "Carlos Silva",
    category: "Motorista Executivo & App",
    rating: 4.98,
    tripsCount: 5200,
    bio: "Viagens executivas, traslados para o aeroporto e eventos. Veículo higienizado, ar-condicionado e carregador para passageiros.",
    pixKey: "carlos.motorista@email.com",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  };

  // Lista tipada de links
  const links: SocialLink[] = [
    {
      id: 1,
      title: "Chamar no WhatsApp",
      url: "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20uma%20corrida.",
      isPrimary: true
    },
    {
      id: 2,
      title: "Seguir no Instagram",
      url: "https://instagram.com/seu_usuario"
    },
    {
      id: 3,
      title: "Ver Perfil na Uber / 99",
      url: "https://uber.com"
    },
    {
      id: 4,
      title: "Ligar Diretamente",
      url: "tel:+5511999999999"
    }
  ];

  // Função tipada para copiar a chave Pix
  const handleCopyPix = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(driver.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <main className="container">
      <div className="card">
        {/* Foto de Perfil */}
        <div className="avatar-wrapper">
          <img src={driver.avatarUrl} alt={`Foto de ${driver.name}`} className="avatar" />
        </div>

        {/* Nome e Avaliação */}
        <h1>{driver.name}</h1>
        <div className="badge">
          ⭐ {driver.rating} • {driver.category}
        </div>

        {/* Estatística rápida */}
        <p className="trips-count">🚗 Mais de {driver.tripsCount.toLocaleString('pt-BR')} corridas concluídas</p>

        {/* Descrição */}
        <p className="bio">{driver.bio}</p>

        {/* Botão interativo de Pix */}
        <button 
          type="button"
          onClick={handleCopyPix} 
          className={`btn-pix ${copied ? 'copied' : ''}`}
        >
          {copied ? "Chave Pix copiada com sucesso! ✅" : "Copiar Chave Pix 💳"}
        </button>

        {/* Links de contato */}
        <div className="links-list">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-link ${link.isPrimary ? 'primary' : ''}`}
            >
              {link.title}
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
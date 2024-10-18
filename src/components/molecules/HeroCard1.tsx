import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';  // Exemplo de ícone, você pode mudar conforme necessário

interface HeroCardProps {
  h2: string;
  h3: string;
}

export default function HeroCard1({ h2, h3 }: HeroCardProps) {
  return (
    <div className="bg-orange-500 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="mb-4">
        <FontAwesomeIcon icon={faThumbsUp} size="3x" className="text-white opacity-80" />
      </div>
      
      <h2 className="text-lg font-semibold text-center mb-2">
        {h2}
      </h2>
      
      <h3 className="text-2xl font-extrabold text-center">
        {h3}
      </h3>
    </div>
  );
}

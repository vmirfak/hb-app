import heartImage from "../assets/heart.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 via-pink-300 to-pink-100 flex flex-col items-center justify-center text-center p-6">
      {/* Mensagem de boas-vindas */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-md animate-fadeIn">
        Bom Dia, Amor da minha vida! 💖
      </h1>
      <p className="text-xl text-white mt-6 mb-12 font-light">
        Este é um espaço especial feito com <span className="font-semibold italic">MUITO</span> carinho só para ti.
      </p>

      {/* Imagem animada */}
      <div className="relative mt-8">
        <img
          src={heartImage}
          alt="Coração"
          className="w-50 h-40 animate-bounce"
        />
      </div>

      {/* Botão para avançar */}
      <div className="mt-12">
        <button
          onClick={() => navigate("/timeline")}
          className="px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-full shadow-xl hover:bg-pink-200 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-pink-300"
        >
          Vê o que preparei 🌟
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

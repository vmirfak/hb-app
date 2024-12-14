import { useState } from "react";
import moment1 from "../assets/moment1.jpg"
import moment2 from "../assets/moment2.jpg";
import moment3 from "../assets/moment3.jpg";
import moment4 from "../assets/moment4.jpg";
import moment5 from "../assets/moment5.jpg";
import moment6 from "../assets/moment6.jpeg";
import moment7 from "../assets/moment7.jpeg";
import moment8 from "../assets/moment8.jpeg";
import moment9 from "../assets/moment9.jpg";
import moment10 from "../assets/moment10.jpg";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    description: string;
  } | null>(null);
  const [revealedImages, setRevealedImages] = useState<number[]>([]);

  const navigate = useNavigate();

  const images = [
    { src: moment1, 
        description: "A nossa primeiríssima foto juntos!" },
    {
      src: moment2,
      description: "A nossa primeira foto digna de se emoldurar e de pôr no álbum de fotografias pré-casamento. Linda!",
    },
    {
      src: moment3,
      description: "A nossa primeira foto num fim-de-semana juntos. Que calor do caralho! 🔥",
    },
    {
      src: moment4,
      description: "Estamos sempre prontos para uma boa francesinha!",
    },
    {
      src: moment5,
      description: "O nosso primeiro concerto dos Calema juntos.",
    },
    {
      src: moment6,
      description: "O nosso dia de Spa. Que bem que soube!",
    },
    {
      src: moment7,
      description: "A nossa primeira foto juntos fora do país! Não é a foto onde estamos mais lindos e com a melhor pose, mas é marcante!",
    },
    {
      src: moment8,
      description: "Nós e o nosso gosto por coisinhas doces!",
    },
    {
      src: moment9,
      description: "Nós e a nossa vontade constante de andarmos sempre aos beijinhos. Mais uma foto para emoldurar!",
    },
    {
      src: moment10,
      description: "Tu e e teu gosto por churro(s)! 😏",
    },
  ];

  const handleCardClick = (
    image: { src: string; description: string },
    index: number
  ) => {
    setSelectedImage(image);
    setIsOpen(true);

    if (!revealedImages.includes(index)) {
      setRevealedImages((prev) => [...prev, index]);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const navigateToCongratsPage = () => {
    navigate("/congrats");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-pink-300 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow-lg">
        O Próximo Capítulo 💕
      </h1>
      <p className="text-lg md:text-xl text-white mb-6 text-center px-4">
        Cada imagem aqui conta uma história. Clica em todas as cartas para reviver esses
        momentos! 💖
      </p>

      {/* Galeria de Cartas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-40 h-40 bg-pink-400 rounded-xl flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleCardClick(image, index)}
          >
            {/* Se a imagem já foi revelada, mostre-a */}
            {revealedImages.includes(index) ? (
              <div
                className="w-full h-full bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${image.src})` }}
              />
            ) : (
              <div className="absolute text-2xl font-bold text-white">
                {index + 1}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de Detalhes da Foto */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 sm:w-96 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 ml-2 mb-2 text-white bg-white text-2xl font-bold p-1 rounded-full"
            >
              <span className="text-white">❌</span>
            </button>

            <img
              src={selectedImage.src}
              alt="Imagem especial"
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-lg text-gray-800">{selectedImage.description}</p>
          </div>
        </div>
      )}

       {/* Botão animado para ir à página de parabéns */}
       {revealedImages.length === images.length && (
        <button
          className="mt-8 px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-110"
          onClick={navigateToCongratsPage}
        >
          Vamos Celebrar! 🎉
        </button>
      )}
    </div>
  );
};

export default Gallery;

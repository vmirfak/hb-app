import { useState } from "react";
import moment1 from "../assets/moment1.jpg";
import moment2 from "../assets/moment2.jpg";
import moment3 from "../assets/moment3.jpg";
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
        description: "Nosso primeiro encontro. Foi mágico!" },
    {
      src: moment2,
      description: "A nossa viagem para a praia. Momentos inesquecíveis.",
    },
    {
      src: moment3,
      description: "O nosso primeiro aniversário juntos. Um dia perfeito.",
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
        Cada imagem aqui conta uma história. Clica nas cartas para reviver esses
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

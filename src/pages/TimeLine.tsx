import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TimeLine = () => {
  const navigate = useNavigate();
  const events = [
    {
      date: "11 de Outubro de 2023",
      title: "O Dia em que Te Conheci",
      details:
        "Primeiro dia de formação e lá estávamos nós. De todos os detalhes, lembro-me mais da tua cara vermelha de vergonha",
    },
    {
      date: "24 de Novembro de 2023",
      title: "O dia em que falámos pela primeira vez",
      details:
        "O dia em que eu falei contigo pela primeira vez! O dia em que te mandei mensagem e não respondeste!",
    },
    {
      date: "29 de Novembro de 2023",
      title: "O dia em que me respondeste à mensagem, finalmente!",
      details:
        "O dia em que a minha esperança no mundo regressou, o dia em que a paz foi restaurada e o dia em que eu não me senti ignorado.",
    },
    {
      date: "17 de Dezembro de 2023",
      title: "O nosso primeiro encontro",
      details:
        "Disse-te que estava um dia lindo de sol e perguntei-te se querias dar uma volta. O dia em que alguém me conduziu pela primeira vez, o dia em que usei o Azzaro - The Most Wanted, o dia em que falámos durante quase 4 horas seguidas, o dia em que falámos pela primeira vez pessoalmente mas que sentimos que nos conhecíamos há eternidades!",
    },
    {
      date: "28 de Dezembro de 2023",
      title: "O nosso primeiro beijo",
      details:
        "O dia que me pediste desculpa dizendo 'Desculpa, mas não resisti'",
    },
    {
      date: "9 de Fevereiro de 2024",
      title: "A nossa primeira vez",
      details:
        "Um dos momentos mais marcantes, porque foi a primeira vez que achávamos que não eramos compatíveis. Não foi tão mau quanto achámos na altura. Foi também a primeira noite em que dormimos juntos.",
    },
    {
      date: "8 de Dezembro de 2024",
      title: "A nossa primeira viagem juntos",
      details:
        "Ainda na memória recente. Os nossos primeiros dias juntos, fora do país!",
    },
    {
      date: "Hoje",
      title: "O teu dia",
      details:
        "Hoje todos celebramos o dia mais especial: o dia em que o mundo foi abençoado com a tua existência. Quero que saibas o quanto és importante para mim, o quanto iluminas os meus dias e tornas a minha vida mais feliz. Este gesto, por mais simples que seja, é apenas uma pequena parte de tudo o que sinto por ti. Espero que este dia seja tão especial para ti quanto és para mim. Amo-te mais do que as palavras podem descrever. 💖",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<null | (typeof events)[0]>(
    null
  );
  const [showTransition] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-pink-300 flex flex-col items-center p-6">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow-lg">
        A Nossa História 💕
      </h1>
      <p className="text-lg md:text-xl text-white mb-6 text-center px-4">
        Cada momento que vivemos juntos é uma página da nossa história. Aqui
        estão alguns dos capítulos mais especiais e marcantes. 💖
      </p>
      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-50"></div>
        <ul className="space-y-12">
          {events.map((event, index) => (
            <li
              key={index}
              className={`relative flex flex-col items-center md:items-${
                index % 2 === 0 ? "start" : "end"
              } text-center md:text-${
                index % 2 === 0 ? "right" : "left"
              } space-y-4`}
            >
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-pink-500 font-bold shadow-lg z-10">
                {index + 1}
              </div>
              <div
                className={`mt-4 px-4 py-2 rounded-lg shadow-md ${
                  index % 2 === 0
                    ? "bg-white text-pink-600 md:-translate-x-full"
                    : "bg-white text-pink-600 md:translate-x-full"
                }`}
              >
                <h2 className="text-base md:text-lg font-semibold">
                  {event.date}
                </h2>
                <p className="text-sm md:text-base">{event.title}</p>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="mt-2 px-3 py-1 bg-pink-500 text-white text-sm rounded-full shadow-md hover:bg-pink-600 transition"
                >
                  Descobre 💌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-pink-500">
              {selectedEvent.date}
            </h2>
            <h3 className="text-lg mt-2 text-pink-600 font-semibold">
              {selectedEvent.title}
            </h3>
            <p className="text-gray-700 mt-4">{selectedEvent.details}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition duration-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Transição para próxima página */}
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transform transition ${
          showTransition ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={() => navigate("/gallery")}
      >
        {/* Coração pulsante */}
        <div className="relative w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-3xl">💖</span>
          {/* Seta animada indicando interação */}
          <div className="absolute top-full mt-2 animate-bounce">
            <span className="text-white text-lg">⬆️</span>
          </div>
        </div>

        {/* Texto indicando interação */}
        <p className="mt-10 text-white text-lg font-semibold">
          Pronta para o próximo capítulo? 🌟
        </p>
      </div>
    </div>
  );
};

export default TimeLine;

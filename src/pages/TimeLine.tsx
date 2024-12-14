import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TimeLine = () => {
  const navigate = useNavigate();
  const events = [
    {
      date: "11 de Outubro de 2023",
      title: "O Dia em que Te Conheci",
      details:
        "Ah, o início de tudo! Primeiro dia de formação, e lá estavas tu, com aquele ar misterioso de quem esconde segredos do FBI. Eu? Totalmente distraído, mas depois olhei para ti, vi a tua cara vermelha de vergonha, e pensei: 'Ora aí está alguém que tem medo de socializar tanto quanto eu!' Um misto de mistério e fofura, difícil de esquecer.",
    },
    {
      date: "24 de Novembro de 2023",
      title: "O dia em que falámos pela primeira vez",
      details:
        "Finalmente, o dia em que tomei coragem para te mandar mensagem. Resultado? Não respondeste. Quem diria que a tua estratégia de difícil começava logo no primeiro contacto? 😭",
    },
    {
      date: "29 de Novembro de 2023",
      title: "O dia em que me respondeste à mensagem, finalmente!",
      details:
        "'Aleluia, irmãos!' A paz foi restaurada, a esperança voltou e, naquele momento, senti-me um vencedor da lotaria do afeto. O mundo voltou a girar 🌍",
    },
    {
      date: "17 de Dezembro de 2023",
      title: "O nosso primeiro encontro",
      details:
        "Convidei-te para um passeio e acabaste por me levar à Póvoa de Varzim. Sol, mar e conversa que parecia não ter fim. Estavas impecável (como sempre, mas naquele dia foste um nível acima): uma saia florida da Shein e botas pretas de cano alto – combinadas na perfeição, claro, porque tu não falhas no estilo. Foram 4 horas de partilha (e alguns olhares cúmplices que fingimos não notar), e tudo parecia natural, como se já nos conhecêssemos há anos. O ponto alto? O facto de te teres oferecido para conduzir, e eu ter percebido que estava ao lado da piloto mais charmosa que já conheci.",
    },
    {
      date: "28 de Dezembro de 2023",
      title: "O nosso primeiro beijo",
      details:
        "O dia que me pediste desculpa dizendo 'Desculpa, mas não resisti'. E eu a pensar: 'Resistir? Mas a fila está aberta há semanas!' Foi inesperado.",
    },
    {
      date: "9 de Fevereiro de 2024",
      title: "A nossa primeira vez",
      details:
        "A primeira vez é sempre... uma aventura. Achámos que não éramos compatíveis e que aquilo tinha sido uma fusão entre desastre natural e comédia romântica. Mas, no final, percebemos que até nos desastres há beleza. E, claro, foi a primeira noite em que dormimos juntos (ou tentámos, porque o nervosismo não deixou muito espaço para descanso).",
    },
    {
      date: "8 de Dezembro de 2024",
      title: "A nossa primeira viagem juntos",
      details:
        "Malas feitas e lá fomos nós para a Bélgica em pleno dezembro, com o objetivo claro: conquistar os mercados de Natal de Bruges, Gent e Bruxelas. Foi uma verdadeira aventura natalícia, com luzes a piscar, cheiros de comida deliciosa no ar e muita vontade de provar tudo. E, como bons gulosos, não dececionámos: comemos todos os docinhos possíveis e brindámos com cervejas saborosas que faziam parecer que o frio nem existia. Uma viagem cheia de magia, calor humano e uns quilinhos a mais – mas quem é que se importa, não é?",
    },
    {
      date: "Hoje",
      title: "O teu dia",
      details:
        "Hoje é o dia mais especial: o dia em que o mundo foi abençoado com a tua existência (e as farmácias com o teu choro ao nascer). Quero que saibas que és a luz da minha vida, mesmo quando levas horas para sair de casa. Este gesto, por mais simples que seja, é só um lembrete de que te amo mais do que pizza, cerveja e passeios na praia em dias de sol. Feliz aniversário, amor! 💖",
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

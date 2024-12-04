import { useState } from "react";

const Congrats = () => {
  const [revealedMessages, setRevealedMessages] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const messages = [
    "O teu sorriso ilumina o meu dia! 😍",
    "A tua bondade e o coração enorme que tens. 💖",
    "O jeito como sempre sabes como me fazer rir. 😂",
  ];

  const handleReveal = (index: number) => {
    const updatedMessages = [...revealedMessages];
    updatedMessages[index] = true;
    setRevealedMessages(updatedMessages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-pink-300 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 drop-shadow-lg">
        Parabéns, meu amor! 
      </h1>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 drop-shadow-lg">🎉💕</h1>
      <p className="text-lg md:text-xl text-white mb-6 text-center px-4 leading-relaxed">
        Hoje é um dia especial, não só por celebrarmos mais um marco incrível,
        mas por termos a oportunidade de recordar todas as razões pelas quais
        este momento significa tanto.
        <br />
        <br />
        Cada sorriso, cada gesto e cada memória construída contigo são como
        peças de um puzzle que completam um quadro perfeito. Tens um jeito único
        de tornar o mundo à tua volta mais luminoso, e hoje celebramos a tua
        capacidade de espalhar alegria e amor. 💕
        <br />
        <br />
        Há tanto em ti para admirar, e estas são apenas algumas das razões.
        Clica nas cartas para descobrir o que torna tudo ainda mais especial! 💖
      </p>

      {/* Mensagens dinâmicas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className="relative w-72 h-40 bg-pink-500 rounded-xl flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            {revealedMessages[index] ? (
              <p className="text-white text-lg text-center px-4">{message}</p>
            ) : (
              <button
                onClick={() => handleReveal(index)}
                className="text-white text-2xl font-semibold rounded-full px-6 py-3 bg-pink-400 shadow-md transform transition duration-500 hover:scale-110"
              >
                Revelar 💌
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-white text-md md:text-lg mt-10 text-center leading-relaxed">
        Cada momento contigo é um presente que celebro com gratidão. Obrigado
        por seres quem és, por tudo o que construímos juntos, e por cada dia que
        temos pela frente. Que este seja apenas o começo de algo ainda mais
        lindo. 🎁💕
      </p>

      {/* Botão para redirecionar para uma música no Apple Music */}
      <a
        href="https://music.apple.com/us/album/misfit/1781129434?i=1781129437"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-110"
      >
        Ouvir a nossa música especial 🎶
      </a>
    </div>
  );
};

export default Congrats;

"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estas segura?",
      "¿De verdad?",
      "¡Piensalo otra vez!",
      "¡Ultima oportunidad!",
      "¿De verdad que no?",
      "¡Te vas a arrepentir!",
      "¡Piensalo una vez mas!",
      "¿100% :(?",
      "¡Te estas equivocando!",
      "¡¡Ten corazon!!",
      "No seas tan fria :(",
      "Venga va",
      "Reconsideralo",
      "¿Es tu respuesta final?",
      "Me estas rompiendo el corazon ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        {yesPressed ? (
            <>
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
              <div className="text-4xl font-bold my-4">VAMOOOOOOOOOOOOOOOOOO!!! TE AMO♡♡♡♡♡</div>
            </>
        ) : (
            <>
              <img className="h-[200px]" src="https://media.tenor.com/OAJH7-07ssMAAAAi/hom-hold-me-tight.gif" />
              <h1 className="text-4xl my-4">¿Quieres ser mi San Valentin?</h1>
              <div>
                <button
                    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                >
                  Sí
                </button>
                <button
                    onClick={handleNoClick}
                    className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
        )}
      </div>
  );
}

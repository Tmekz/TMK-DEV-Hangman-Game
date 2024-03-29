type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      className={
        "flex  gap-6 text-6xl uppercase font-bold flex-wrap justify-center "
      }
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-black border-b-8 pb-3 w-12 text-center mt-10 "
        >
          {" "}
          <span
            className={`${
              guessedLetters.includes(letter) || reveal ? "visible" : "hidden"
            }  ${!guessedLetters.includes(letter) ? "text-red-400" : ""}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;

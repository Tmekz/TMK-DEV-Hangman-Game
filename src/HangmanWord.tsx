const HangmanWord = () => {
  const word = "test";
  const guessedLetters = ["", "", ""];
  return (
    <div
      className={
        "flex  gap-6 text-6xl uppercase font-bold flex-wrap justify-center "
      }
    >
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-black border-b-8 pb-3 w-12 text-center mt-10 "
        >
          {" "}
          <span
            className={`${
              guessedLetters.includes(letter) ? "visible" : "hidden"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;

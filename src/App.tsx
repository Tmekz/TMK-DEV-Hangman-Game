import { useState } from "react";
import words from "./wordsListDB.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

const App = () => {
  // using a random word in the list from DB.js
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // letters guessed by users
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // incorrect letters
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div className="max-w-[800px] flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-3xl text-center">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
};

export default App;

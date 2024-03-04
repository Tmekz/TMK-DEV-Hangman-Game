import { useState } from "react";
import words from "./wordsListDB.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

const App = () => {
  // using a word list in DB.js
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // letters guessed by users
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div className="max-w-[800px] flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-3xl text-center">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
};

export default App;

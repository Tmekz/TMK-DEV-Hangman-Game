import { useState } from "react";
import words from "./wordsListDB.json";

const App = () => {
  // using a word list in DB.js
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // letters guessed by users
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return <div>Hello</div>;
};

export default App;

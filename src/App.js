import React, { useState } from "react";

const LetterPyramid = () => {
  const [inputString, setInputString] = useState("");
  const [pyramid, setPyramid] = useState("");

  const generatePyramid = () => {
    let pyramid = "";

    const length = inputString.length;

    for (let i = 0; i < length; i++) {
      // Add spaces before each line
      for (let j = length - i; j > 0; j--) pyramid += " ";

      // Add characters and special symbols
      for (let j = 0; j <= i; j++) {
        pyramid += inputString[j];
      }

      // Add characters in decreasing order
      for (let j = i - 1; j >= 0; j--) {
        pyramid += inputString[j];
      }

      pyramid += "\n";
    }

    setPyramid(pyramid);
  };

  return (
    <div>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button onClick={generatePyramid}>Generate Pyramid</button>
      <pre>{pyramid}</pre>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Letter Pyramid Generator</h1>
      <LetterPyramid />
    </div>
  );
};

export default App;

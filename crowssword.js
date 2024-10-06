const crosswordSolver = (emptyPuzzle, words) => {
  // Helper function to check if a word fits in a given position
  const wordFits = (puzzle, word, row, col, direction) => {
    if (direction === "across") {
      if (col + word.length > puzzle[row].length) return false;
      for (let i = 0; i < word.length; i++) {
        if (puzzle[row][col + i] !== "." && puzzle[row][col + i] !== word[i])
          return false;
      }
    } else {
      if (row + word.length > puzzle.length) return false;
      for (let i = 0; i < word.length; i++) {
        if (puzzle[row + i][col] !== "." && puzzle[row + i][col] !== word[i])
          return false;
      }
    }
    return true;
  };


  // Helper function to place a word in the puzzle
  const placeWord = (puzzle, word, row, col, direction) => {
    const newPuzzle = puzzle.map((row) => [...row]);
    if (direction === "across") {
      for (let i = 0; i < word.length; i++) {
        newPuzzle[row][col + i] = word[i];
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        newPuzzle[row + i][col] = word[i];
      }
    }
    return newPuzzle;
  };

  // Helper function to solve the puzzle recursively
  
  const solve = (puzzle, remainingWords) => {
    if (remainingWords.length === 0) return puzzle;

    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle[row].length; col++) {
        if (!isNaN(puzzle[row][col])) {
          const numWords = parseInt(puzzle[row][col]);
          if (numWords > 0) {
            for (let direction of ["across", "down"]) {
              for (let i = 0; i < remainingWords.length; i++) {
                const word = remainingWords[i];
                if (wordFits(puzzle, word, row, col, direction)) {
                  const newPuzzle = placeWord(
                    puzzle,
                    word,
                    row,
                    col,
                    direction
                  );
                  const newRemainingWords = remainingWords.filter(
                    (_, index) => index !== i
                  );
                  const result = solve(newPuzzle, newRemainingWords);
                  if (result) return result;
                }
              }
            }
          }
        }
      }
    }
    return null;
  };

  try {
    // Parse the empty puzzle
    const puzzleRows = emptyPuzzle.split("\n");
    const puzzle = puzzleRows.map((row) => row.split(""));

    // Check for duplicate words
    if (new Set(words).size !== words.length) {
      throw new Error("Duplicate words are not allowed");
    }

    // Solve the puzzle
    const solution = solve(puzzle, words);

    if (solution) {
      // Convert the solution back to a string
      const solutionString = solution.map((row) => row.join("")).join("\n");
      console.log(solutionString);
    } else {
      throw new Error("No unique solution found");
    }
  } catch (error) {
    console.log("Error");
  }
};

// Example usage:
const emptyPuzzle = `2001
  0..0
  1000
  0..0`;
const words = ["casa", "alan", "ciao", "anta"];

crosswordSolver(emptyPuzzle, words);

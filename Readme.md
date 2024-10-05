# Crossword Solver

## Overview

This JavaScript program solves empty crossword puzzles. It takes an empty puzzle and a list of words as input, then fills the puzzle with the provided words.

## Features

- Solves crossword puzzles using a backtracking algorithm
- Handles various puzzle layouts and word combinations
- Provides error handling for invalid inputs or unsolvable puzzles

## Main Function: `crossword`

### Arguments

1. `emptyPuzzle` (string): Represents the empty crossword grid
2. `words` (array): List of words to fill the puzzle

### Output

- Prints the solved puzzle as a string to the console
- Prints 'Error' if no unique solution exists or if input conditions are not met

## Empty Puzzle Format

The `emptyPuzzle` string must follow these rules:

- Each character is either a number, a `.`, or a `\n`
- Numbers represent the count of words starting from that position
- `.` represents a space that doesn't need to be filled
- `\n` is used for line breaks

## Installation

1. Ensure you have Node.js installed on your machine
2. Clone the repository:
   ```
   git clone https://github.com/M-MDI/Crossword.git
   ```
3. Navigate to the project directory:
   ```
   cd Crossword
   ```

## Usage

1. Open `crosswordSolver.js` in your preferred text editor
2. Modify the `emptyPuzzle` and `words` variables with your input:

   ```javascript
   const emptyPuzzle = `2001
   0..0
   1000
   0..0`;

   const words = ['casa', 'alan', 'ciao', 'anta'];
   ```

3. Run the program:
   ```
   node crosswordSolver.js
   ```

4. The solution will be printed to the console:
   ```
   casa
   i..l
   anta
   o..n
   ```

## Example

```javascript
const emptyPuzzle = `2001
0..0
1000
0..0`;

const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(emptyPuzzle, words);
```
## Error Handling

The function will print 'Error' if:
- The puzzle has no unique solution
- There are duplicate words in the input list
- The puzzle format is invalid
- Any other specified conditions are not met

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

- M-MDI

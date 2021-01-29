// Function to randomize answers

export const shuffleArray = (array: any[]) => {
  // Spread in array creates a new array
  //   Sort randomly, this way is accurate enough for a quiz
  return [...array].sort(() => Math.random() - 0.5);
};

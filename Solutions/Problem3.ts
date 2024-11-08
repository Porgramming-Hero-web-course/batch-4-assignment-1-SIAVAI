{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLowerCase().split(" ");
    const givenWord = word.toLowerCase();

    let count = 0;
    for (const w of words) {
      if (givenWord === w) {
        count++;
      }
    }

    return count;
  };

  console.log(countWordOccurrences("I love typescript", "typescript"));
  console.log(countWordOccurrences("Yo yo yoy yoy oy yo yo yo yo yo", "yo"));
}

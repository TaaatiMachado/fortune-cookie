export const generateLuckyNumbers = (): number[] => {
  const maxAttempts = 100;
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const numbers = Array.from({ length: 60 }, (_, i) => i + 1);
    const shuffled = numbers.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 6).sort((a, b) => a - b);
    
    let consecutivePairs = 0;
    for (let i = 0; i < selected.length - 1; i++) {
      if (selected[i + 1] === selected[i] + 1) {
        consecutivePairs++;
      }
    }
    
    if (consecutivePairs <= 1) {
      return selected;
    }
    
    attempts++;
  }
  
  const numbers = Array.from({ length: 60 }, (_, i) => i + 1);
  const result = [];
  const used = new Set();
  
  while (result.length < 6) {
    const num = numbers[Math.floor(Math.random() * numbers.length)];
    if (!used.has(num)) {
      const tempResult = [...result, num].sort((a, b) => a - b);
      let consecutivePairs = 0;
      for (let i = 0; i < tempResult.length - 1; i++) {
        if (tempResult[i + 1] === tempResult[i] + 1) {
          consecutivePairs++;
        }
      }
      
      if (consecutivePairs <= 1) {
        result.push(num);
        used.add(num);
      }
    }
  }
  
  return result.sort((a, b) => a - b);
};

export const countConsecutivePairs = (numbers: number[]): number => {
  let consecutivePairs = 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] === sorted[i] + 1) {
      consecutivePairs++;
    }
  }
  
  return consecutivePairs;
};
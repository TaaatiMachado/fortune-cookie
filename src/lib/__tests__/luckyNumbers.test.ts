import { generateLuckyNumbers, countConsecutivePairs } from '../luckyNumbers';

describe('luckyNumbers', () => {
  describe('countConsecutivePairs', () => {
    it('counts consecutive pairs correctly', () => {
      expect(countConsecutivePairs([1, 2, 4, 5])).toBe(2);
      expect(countConsecutivePairs([1, 3, 5, 7])).toBe(0);
      expect(countConsecutivePairs([1, 2, 3])).toBe(2);
    });

    it('handles edge cases', () => {
      expect(countConsecutivePairs([5])).toBe(0);
      expect(countConsecutivePairs([])).toBe(0);
      expect(countConsecutivePairs([1, 3])).toBe(0);
    });
  });

  describe('generateLuckyNumbers', () => {
    it('generates exactly 6 numbers', () => {
      const numbers = generateLuckyNumbers();
      expect(numbers).toHaveLength(6);
    });

    it('generates numbers between 1 and 60', () => {
      const numbers = generateLuckyNumbers();
      numbers.forEach(number => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(60);
      });
    });

    it('generates unique numbers', () => {
      const numbers = generateLuckyNumbers();
      const uniqueNumbers = [...new Set(numbers)];
      expect(uniqueNumbers).toHaveLength(6);
    });

    it('returns numbers in sorted order', () => {
      const numbers = generateLuckyNumbers();
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      expect(numbers).toEqual(sortedNumbers);
    });

    it('has at most 1 consecutive pair', () => {
      const numbers = generateLuckyNumbers();
      const consecutivePairs = countConsecutivePairs(numbers);
      expect(consecutivePairs).toBeLessThanOrEqual(1);
    });
  });
});
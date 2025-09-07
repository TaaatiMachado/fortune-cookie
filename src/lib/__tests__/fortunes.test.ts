import { fortunes } from '../fortunes';

describe('fortunes', () => {
  it('exports an array of fortunes', () => {
    expect(Array.isArray(fortunes)).toBe(true);
    expect(fortunes.length).toBeGreaterThan(0);
  });

  it('has fortunes with correct structure', () => {
    fortunes.forEach(fortune => {
      expect(fortune).toHaveProperty('id');
      expect(fortune).toHaveProperty('text');
      expect(typeof fortune.id).toBe('number');
      expect(typeof fortune.text).toBe('string');
      expect(fortune.text.length).toBeGreaterThan(0);
    });
  });

  it('has unique fortune texts', () => {
    const texts = fortunes.map(f => f.text);
    const uniqueTexts = [...new Set(texts)];
    expect(uniqueTexts.length).toBe(texts.length);
  });

  it('has unique fortune IDs', () => {
    const ids = fortunes.map(f => f.id);
    const uniqueIds = [...new Set(ids)];
    expect(uniqueIds.length).toBe(ids.length);
  });
});
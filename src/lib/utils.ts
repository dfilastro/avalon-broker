// Function to calculate reading time in minutes
export function calculateReadingTime(text: string): number {
  // The average person reads 200ish words per minute, I use 2 words per minute
  // because I want to make each post to have different reading times, as they are too short
  const wordsPerMinute = 2;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

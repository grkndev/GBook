import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const truncate = (str: string, n: number) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const calculateMaxCharsInLine = (
  fontSize: number,
  maxWidth: number
): number => {
  // Ortalama karakter genişliği için yaklaşık bir değer (fontSize'ın 0.6'sı olarak varsayalım)
  const avgCharWidth = fontSize * 0.6;

  // Maksimum karakter sayısını hesapla
  const maxChars = Math.floor(maxWidth / avgCharWidth);

  return maxChars;
};

export { truncate, calculateMaxCharsInLine };
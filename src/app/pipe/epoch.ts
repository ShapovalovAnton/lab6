export interface Epoch {
  name: string;
  start: number;
  end: number;
}

export const EpochList: Epoch[] = [
  { name: 'Середньовіччя (500-1500)', start: 500, end: 1500 },
  { name: 'Відродження (1501-1700)', start: 1501, end: 1700 },
  { name: 'Бароко (1600-1750)', start: 1600, end: 1750 },
  { name: 'Класицизм (1751-1820)', start: 1751, end: 1820 },
  { name: 'Романтизм (1821-1900)', start: 1821, end: 1900 },
  { name: 'Модерн (1901-1945)', start: 1901, end: 1945 },
  { name: 'Сучасність (1946-2025)', start: 1946, end: 2025 }
];
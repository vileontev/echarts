import { useState } from 'react';
import { mockData } from '../data/data';

export type Item = string;

export const currencies: Item[] = ['$', '€', '¥'];

const indicatorMap: { [key: string]: string } = {
  $: 'Курс доллара',
  '€': 'Курс евро',
  '¥': 'Курс юаня',
};

// фильтруем данные по выбранной валюте
export const getFilteredData = (currency: Item) => {
  return mockData
    .filter((item) => item.indicator === indicatorMap[currency])
    .map((item) => ({
      month: item.month,
      value: item.value,
    }));
};

// функция для нахождения среднего значения
export const getAverage = (nums: number[]): number => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const length = nums.length;
  return length > 0 ? sum / length : 0; // чтобы избежать деления на 0
};

// хук для управления состоянием выбранной валюты
export const useCurrency = () => {
  const [value, setValue] = useState<Item | null>(currencies[0]);

  return { value, setValue };
};

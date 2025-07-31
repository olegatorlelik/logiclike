import {TCourse} from '../types';

export const getUniqTags = (courses: TCourse[]): string[] => {
  const res = courses.reduce(
    (acc, {tags}) => [...acc, ...tags],
    [] as string[],
  );

  return Array.from(new Set(res));
};

import { adjectives } from '$src/lib/adjectives.js';
import { nouns } from '$src/lib/nouns.js';
import { verbs } from '$src/lib/verbs.js';
import { Format } from '$src/main.js';

export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const fmtWord = (word: string, fmt: Format): string => {
  switch (fmt) {
    case 'UPPERCASE': {
      return word.toUpperCase();
    }
    case 'lowercase': {
      return word.toLowerCase();
    }
    case 'Startcase': {
      return word.replace(/^(.)/, match => match.toUpperCase());
    }
    case 'endcasE': {
      return word.replace(/(.)$/, match => match.toUpperCase());
    }
    case 'AlTeRnAtEcAsE': {
      // `(.)(.?)` - the first group matches any character, second group tries to match any character but is optional due to the `?`
      // this ensures that the last character is also matched and transformed even if it doesn't have a pair.
      return word.replace(/(.)(.?)/g, (_match, p1, p2) => p1.toUpperCase() + p2);
    }
    case 'aLtErNaTeCaSe': {
      return word.replace(/(.)(.?)/g, (_match, p1, p2) => p1 + p2.toUpperCase());
    }
  }
};

export const randomAdjective = (fmt: Format = 'lowercase'): string => {
  const randomIndex = randomInteger(0, adjectives.length - 1);
  const adjective = adjectives.at(randomIndex);
  if (!adjective) {
    throw `Failed to get adjective at index ${randomIndex} from array of ${adjectives.length} adjectives.`;
  }

  return fmtWord(adjective, fmt);
};

export const randomNoun = (fmt: Format = 'lowercase'): string => {
  const randomIndex = randomInteger(0, nouns.length - 1);
  const noun = nouns.at(randomIndex);
  if (!noun) {
    throw `Failed to get noun at index ${randomIndex} from array of ${nouns.length} nouns.`;
  }

  return fmtWord(noun, fmt);
};

export const randomVerb = (fmt: Format = 'lowercase'): string => {
  const randomIndex = randomInteger(0, verbs.length - 1);
  const verb = verbs.at(randomIndex);
  if (!verb) {
    throw `Failed to get verb at index ${randomIndex} from array of ${verbs.length} verbs.`;
  }

  return fmtWord(verb, fmt);
};

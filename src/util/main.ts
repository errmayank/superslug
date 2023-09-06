import { adjectives } from '$src/lib/adjectives.js';
import { nouns } from '$src/lib/nouns.js';
import { verbs } from '$src/lib/verbs.js';

export const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomAdjective = () => {
  const adjective = adjectives.at(randomInteger(0, adjectives.length - 1));
  if (!adjective) throw 'Unable to get random adjective, out of bounds.';

  return adjective;
};

export const randomNoun = () => {
  const noun = nouns.at(randomInteger(0, nouns.length - 1));
  if (!noun) throw 'Unable to get random noun, out of bounds.';

  return noun;
};

export const randomVerb = () => {
  const verb = verbs.at(randomInteger(0, verbs.length - 1));
  if (!verb) throw 'Unable to get random verb, out of bounds.';

  return verb;
};

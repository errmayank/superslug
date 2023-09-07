import { randomAdjective, randomNoun, randomVerb } from '$src/util/main.js';

export type SuperslugConfig = {
  separator?: ('-' | '_' | '.') | {};
};

export const superslug = (config?: SuperslugConfig) => {
  const separator = config?.separator ?? '-';

  return `${randomAdjective()}${separator}${randomNoun()}${separator}${randomVerb()}`;
};

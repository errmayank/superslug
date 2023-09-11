import { randomAdjective, randomNoun, randomVerb } from '$src/util/main.js';

export type Format =
  | 'UPPERCASE'
  | 'lowercase'
  | 'Startcase'
  | 'endcasE'
  | 'AlTeRnAtEcAsE'
  | 'aLtErNaTeCaSe';

export type Config = {
  separator?: ('-' | '_' | '.') | {};
  format?: Format;
};

export const superslug = (config?: Config) => {
  const spt = config?.separator ?? '-';
  const fmt = config?.format ?? 'lowercase';

  return `${randomAdjective(fmt)}${spt}${randomNoun(fmt)}${spt}${randomVerb(fmt)}`;
};

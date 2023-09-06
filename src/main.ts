import { randomAdjective, randomNoun, randomVerb } from '$src/util/main.js';

export const superslug = () => `${randomAdjective()}-${randomNoun()}-${randomVerb()}`;

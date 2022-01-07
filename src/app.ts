// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
{id: 0, name: "string", sex: "string", photo: "string", age: 0, health: 0},
{id: 1, name: "string", sex: "string", photo: "string", age: 0, health: 0},
{id: 2, name: "string", sex: "string", photo: "string", age: 0, health: 0}
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  {id: 0, name: "string", photo: "string", wings: 0, wheels: 0, clan: "string"},
  {id: 1, name: "string", photo: "string", wings: 0, wheels: 0, clan: "string"},
  {id: 2, name: "string", photo: "string", wings: 0, wheels: 0, clan: "string"},
];

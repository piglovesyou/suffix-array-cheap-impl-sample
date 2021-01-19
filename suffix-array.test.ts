import { strictEqual } from "assert";
import { readFileSync } from "fs";
import { createSuffixArrayFind } from "./suffix-array";

const find1 = createSuffixArrayFind('abcdef');
strictEqual(find1('0'), -1);
strictEqual(find1('z'), -1);
strictEqual(find1('a'), 0);
strictEqual(find1('b'), 1);
strictEqual(find1('c'), 2);
strictEqual(find1('d'), 3);
strictEqual(find1('e'), 4);
strictEqual(find1('f'), 5);

const find2 = createSuffixArrayFind('fedcba');
strictEqual(find2('0'), -1);
strictEqual(find2('z'), -1);
strictEqual(find2('f'), 0);
strictEqual(find2('e'), 1);
strictEqual(find2('d'), 2);
strictEqual(find2('c'), 3);
strictEqual(find2('b'), 4);
strictEqual(find2('a'), 5);

const find3 = createSuffixArrayFind('abc ab');
strictEqual(find3('abc'), 0);
strictEqual(find3('ab'), 4);

const find4 = createSuffixArrayFind('z ab abc');
strictEqual(find4('abc'), 5);
strictEqual(find4('ab'), 2);

const text = readFileSync('./lorem-ipsum.txt', 'utf-8');
const sub = 'Curabitur vitae';
const expect = 67427;

console.time('indexOf');
strictEqual(text.indexOf(sub), expect);
console.timeEnd('indexOf');

const find = createSuffixArrayFind(text);
console.time('Suffix Array');
strictEqual(find(sub), expect);
console.timeEnd('Suffix Array');

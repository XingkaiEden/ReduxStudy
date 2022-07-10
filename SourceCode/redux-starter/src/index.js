import { compose, pipe } from "lodash/fp";

const trim = (str) => str.trim();

const wrapInDev = (str) => `<div>${str}</div>`;

const toLowerCase = (str) => str.toLowerCase();

const input = "    hhhh    ";
console.log(wrapInDev(toLowerCase(trim(input))));

console.log(pipe(trim, toLowerCase, wrapInDev)(input));

console.log(compose(wrapInDev, toLowerCase, trim)(input));

/// <reference lib="webworker" />

import { findBigPrime } from "./find-big-prime";

addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;
  // postMessage(response);

  // const bigPrime = findBigPrime();
  const bigPrime = 10;

  debugger

  postMessage(bigPrime);
});

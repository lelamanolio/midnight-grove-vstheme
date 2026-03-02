/**
 * JS demo: classes, async, destructuring, optional chaining, regex, template strings.
 */
const API_URL = "https://example.com/api";
const rx = /(?<word>\w+)-(\d+)/giu;

export class PriceCalculator {
  #tax = 0.22;

  constructor(base = 100) {
    this.base = base;
  }

  get total() {
    return this.base * (1 + this.#tax);
  }

  static fromEnv(env = {}) {
    return new PriceCalculator(Number(env?.BASE ?? 100));
  }
}

export async function fetchJson(url = API_URL) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("fetch failed:", e);
    return null;
  }
}

export function demoTokens(input = "hello-42") {
  const m = rx.exec(input);
  const { word } = m?.groups ?? { word: "none" };

  const arr = [1, 2, 3].map((n) => n ** 2);
  const obj = { word, arr, ok: true, nothing: null };

  console.log(`word=${word}`, obj);
  return obj;
}

demoTokens();

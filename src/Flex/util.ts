/*
 * Original implementation by Vadim Dalecky (streamich): https://github.com/streamich/react-use
 */

import { DependencyList, useCallback, useRef } from "react";

interface BrowserInfo {
  name: string;
  version: string;
}

export const getBrowserInfo = (): BrowserInfo | Error => {
  if (typeof window === "undefined") {
    return new Error("window is undefined");
  }

  const ua = window.navigator.userAgent.toLowerCase();

  const regexes: { [key: string]: RegExp } = {
    chrome: /chrome\/([\d.]+)/,
    safari: /version\/([\d.]+).*safari/,
    firefox: /firefox\/([\d.]+)/,
    edge: /edge\/([\d.]+)/,
    opera: /opr\/([\d.]+)/,
  };

  for (const [name, regex] of Object.entries(regexes)) {
    const match = ua.match(regex);

    if (match) {
      return { name, version: match[1] };
    }
  }

  return new Error("Browser not detected");
};

export const useDebouncedFn = (
  fn: Function,
  ms: number = 0,
  deps: DependencyList = []
) => {
  const ready = useRef<boolean | null>(true);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const isReady = useCallback(() => ready.current, []);

  const debouncedFn = useCallback(() => {
    if (isReady()) {
      fn();
      ready.current = false;
      timeout.current = setTimeout(() => {
        ready.current = true;
        if (timeout.current) clearTimeout(timeout.current);
      }, ms);
    } else {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        fn();
        ready.current = true;
        if (timeout.current) clearTimeout(timeout.current);
      }, ms);
    }
  }, deps);

  return [debouncedFn, isReady];
};

export const getGaps = (
  rows: Record<string, number[]>,
  gap: number
): Record<number, Record<string, number>> => {
  let gaps = {};

  if (!gap) {
    return gaps;
  }

  const rowsIndex = Object.keys(rows);

  if (!rowsIndex) {
    return gaps;
  }

  if (rowsIndex.length === 1) {
    rows[1].forEach((rowIndex: number, i: number) => {
      gaps = {
        ...gaps,
        [rowIndex]: {
          marginRight: rows[1].length === i + 1 ? 0 : gap,
        },
      };
    });
  } else {
    rowsIndex.forEach((rowIndex: string) => {
      rows[rowIndex].forEach((index: number, i: number) => {
        gaps = {
          ...gaps,
          [index]: {
            marginRight: rows[rowIndex].length === i + 1 ? 0 : gap,
            marginBottom: parseInt(rowIndex, 10) === rowsIndex.length ? 0 : gap,
          },
        };
      });
    });
  }

  return gaps;
};

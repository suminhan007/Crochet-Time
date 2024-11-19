import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (fn: (...a: any) => void, delay: number, dep: any[] = []) => {
  const { current } = useRef<any>({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args: any) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      // @ts-ignore
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
};

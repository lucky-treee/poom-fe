import { useCallback, useState } from 'react';
import { throttle } from 'lodash';

const useThrottledState = <T>(initialValue: T, interval?: number) => {
  const [value, setValue] = useState<T>(initialValue);

  const throttledSetState = useCallback(throttle(setValue, interval ?? 300), [
    interval,
  ]);

  return [value, throttledSetState] as const;
};

export default useThrottledState;

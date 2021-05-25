import { useState } from 'react';

export const useForceUpdate = () => {
  const [, setForceUpdateCount] = useState<number>(0);
  return () => setForceUpdateCount((value) => value + 1);
};

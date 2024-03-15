import React, {useEffect, useRef, useState} from 'react';

interface ICountUp {
    end: number;
    duration: number;
    delay?: number
    className?: string
}

const CountUp = ({end, duration, delay, className}: ICountUp) => {
  const [count, setCount] = useState(0);
  const [isDelayed, setIsDelayed] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDelayed && delay) {
      timeout = setTimeout(() => {
        setIsDelayed(true);
      }, delay * 100);
    } else {
      const interval = setInterval(() => {
        if (count >= end) {
          clearInterval(interval);
        } else {
          setCount(count + 1);
        }
      }, duration * 100);

      intervalRef.current = interval;
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [count, delay, duration, end, isDelayed]);

  return <span className={className}>{count}</span>;
};

export default CountUp;
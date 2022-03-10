import React from "react";
import { useTimer } from "react-timer-hook";
const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <>
      <span>{minutes}</span>:<span>{seconds}</span>
    </>
  );
};

export default Timer;

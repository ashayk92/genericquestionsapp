import React from "react";
const Timer = (props) => {
  const { expiryTimeStamp } = props;
  const [countDown, setCountDown] = React.useState(expiryTimeStamp);
  const [runTimer, setRunTimer] = React.useState(true);

  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(expiryTimeStamp);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [expiryTimeStamp, runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  return (
    <>
      <span>{minutes}</span>:<span>{seconds}</span>
    </>
  );
};

export default Timer;

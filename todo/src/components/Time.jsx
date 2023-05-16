import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  return <div className="time">
    {time.toLocaleString("en-US", {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })}
  </div>;
};

export default Time;

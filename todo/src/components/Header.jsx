import { useEffect, useState } from "react";
import { days, month } from "../utils/data";
import Time from "./Time";

const Header = () => {
  const date = new Date();
  let hours = date.getHours();
  let [time, setTime] = useState("afternoon");
  let seconds = date.getSeconds();

  let [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent({
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours,
    });
    console.log(current);
  }, [seconds]);

  useEffect(() => {
    if (hours >= 7 && hours < 12) {
      setTime("morning");
      return;
    } else if (hours >= 12 && hours < 18) {
      setTime("afternoon");
      return;
    } else if (hours >= 18 && hours < 23) {
      setTime("evening");
      return;
    } else if (hours < 7 || hours >= 23) {
      setTime("hight");
      return;
    }
  }, [hours]);

  return (
    <div className={`header  ${time}`}>
      <div>
        <h1>{days[date.getDay()]}</h1>
        <span>
          {month[date.getMonth()]}, {date.getDate()}{" "}
        </span>
      </div>
      <div className="time_string">
        <Time />
      </div>
    </div>
  );
};

export default Header;

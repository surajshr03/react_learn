import React, { useState } from "react";

const Days = () => {
  const [day, setDay] = useState("day1");

  let onSubmit = (e) => {
    e.preventDefault();

    let data = {
      day: day,
    };
  };

  console.log(day);

  let days = [
    {
      label: "Sunday",
      value: "day1",
    },
    {
      label: "Monday",
      value: "day2",
    },
    {
      label: "Tuesday",
      value: "day3",
    },
    {
      label: "Wednesday",
      value: "day4",
    },
    {
      label: "Thursday",
      value: "day5",
    },
    {
      label: "Friday",
      value: "day6",
    },
    {
      label: "Saturday",
      value: "day7",
    },
  ];

  return (
    <div>
      Days:
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="day">Select day : </label>
        <select
          id="day"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          {days.map((item, i) => {
            return (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>

<br/>
<br/>
<br/>
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Days;

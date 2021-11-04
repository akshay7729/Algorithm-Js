// '12:01:00PM'

const timeConversion = (time) => {
  const splitTime = time.split(":");
  const getAMPM = splitTime[2].split("");
  let getHours = splitTime[0];
  let getMins = splitTime[1];
  let getSecs = getAMPM[0] + getAMPM[1];
  if (getAMPM[2].toLowerCase() === "p") {
    if (getHours !== "12") {
      getHours = 12 + parseInt(getHours);
    }
  } else {
    if (getHours === "12") {
      getHours = "00";
    }
  }
  return `${getHours}:${getMins}:${getSecs}`;
};

console.log("final", timeConversion("12:01:00PM"));

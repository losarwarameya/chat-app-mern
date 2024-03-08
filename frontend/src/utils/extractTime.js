export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  // const ampm = hours >= 12 ? "PM" : "AM";
  // const formattedHours = hours % 12 || 12;
  // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  // return `${formattedHours}:${formattedMinutes} ${ampm}`;
  return `${hours}:${minutes}`;
}

//pad a number with leading zeros
function padZero(num) {
  return num.toString().padStart(2, "0");
}

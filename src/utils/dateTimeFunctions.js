export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}
export default function formatDateShort(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export function formatTime(time) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(time).toLocaleTimeString("en-US", options);
}

export function formatTime2(time, format = "HH:mm") {
  if (!time) return ""; // Handle empty or undefined time

  const date = new Date(time);

  if (isNaN(date.getTime())) return ""; // Handle invalid date

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (format === "HH:mm") {
    return `${hours}:${minutes}`;
  } else if (format === "HH:mm:ss") {
    return `${hours}:${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}`; // Default format
}

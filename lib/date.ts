export function getDayAndMonth(date: string) {
  const eventDate = new Date(date);

  return {
    month: eventDate.toLocaleString("fr-CA", { month: "short" }).toUpperCase(),
    day: eventDate.getDate().toString().padStart(2, "0"),
  };
}

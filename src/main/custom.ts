export function customDateFormat(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const dd = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // Handle midnight (0) as 12
  const hh = String(hours).padStart(2, '0');

  return `${yyyy}/${mm}/${dd} ${hh}:${minutes}:${seconds} ${ampm}`;
}

export function generateOrderCode(): string {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  const datePart = `${yyyy}${mm}${dd}`;
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-char alphanumeric

  return `ORD-${datePart}-${randomPart}`;
}

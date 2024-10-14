export function getFormattedDate(date) {
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

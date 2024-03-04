export function formatDate(pDate) {
  const parseDate = new Date(pDate);
  const year = parseDate.getFullYear();
  const month = (parseDate.getMonth() + 1).toString().padStart(2, '0');
  const date = parseDate.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${date}`;
}

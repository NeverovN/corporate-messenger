export const useParseDate = (dateString: string | null) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  const parsedDate =
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2);

  return parsedDate;
};

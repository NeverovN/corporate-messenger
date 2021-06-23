import format from 'date-fns/format';

export const getDate = (dateString: string | null) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  const parsedDate = format(date, 'HH:mm, dd MMM');

  return parsedDate;
};

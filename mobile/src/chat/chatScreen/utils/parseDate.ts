import format from 'date-fns/format';

export const parseDate = (dateString: string | null) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  const parsedDate = format(date, 'HH:mm');

  return parsedDate;
};

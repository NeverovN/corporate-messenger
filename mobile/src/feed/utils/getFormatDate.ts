import { format } from 'date-fns';

export const getFormattedDate = (dateString: string) => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  const parsedDate = format(date, 'HH:mm, dd MMM yyyy');

  return parsedDate;
};

import { format } from 'date-fns';

export const getDate = (dateString: string | null) => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  const parsedDate = format(date, 'HH:mm, d MMM, yyyy');

  return parsedDate;
};

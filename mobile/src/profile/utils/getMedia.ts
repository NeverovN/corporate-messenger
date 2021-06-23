export const getMedia = (media: Array<any> | null | undefined) => {
  if (media && media.length) {
    return media;
  }

  return [];
};

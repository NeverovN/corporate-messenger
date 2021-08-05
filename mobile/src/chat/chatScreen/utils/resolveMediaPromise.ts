export const resolveMediaPromise = async (
  promisedMedia: Promise<string[]> | string[],
  setMedia: (media: string[]) => void,
) => {
  const media = await promisedMedia;
  setMedia(media);
};

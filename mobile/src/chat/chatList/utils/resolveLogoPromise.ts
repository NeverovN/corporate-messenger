export const resolveLogoPromise = async (
  logo: Promise<string | null> | string | null,
  setLogo: (logo: string | null) => void,
) => {
  setLogo(await logo);
};

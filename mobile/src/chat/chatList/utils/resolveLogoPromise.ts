export const resolveLogoPromise = async (
  logo: Promise<string | null> | null,
  setLogo: (logo: string | null) => void,
) => {
  setLogo(await logo);
};

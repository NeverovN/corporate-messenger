export const makeBase64URI = (base64: (string | null)[]) =>
  base64.map((el) => `data:image/png;base64,${el}`);

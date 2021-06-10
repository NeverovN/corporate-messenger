export const useOnMessagePressed = (msgId: string) => {
  return () => console.log(`message id: ${msgId} was pressed`);
};

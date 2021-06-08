export interface IMessage {
  id: string;
  author: string;
  receivers: string[];
  content: string;
  onPress(): void;
}

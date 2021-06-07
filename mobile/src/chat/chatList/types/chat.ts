export interface IChatItem {
  id: string;
  title: string;
  participants: string[];
  onPress(): void;
}

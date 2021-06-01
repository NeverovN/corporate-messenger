export interface IChatItem {
  guid: string;
  title: string;
  users: any[];
  onPress(): void;
}

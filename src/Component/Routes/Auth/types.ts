export interface NotificationProps {
  state: number[];
  setAction: React.Dispatch<React.SetStateAction<string>>;
  setNotification: React.Dispatch<React.SetStateAction<number[]>>;
  isLoading: boolean;
  vaildateUserResult: any;
}

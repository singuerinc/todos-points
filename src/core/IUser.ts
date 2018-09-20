interface IUser {
  name: string;
  avatar: string;
  points: {
    today: number;
    week: number;
  };
}

export { IUser };

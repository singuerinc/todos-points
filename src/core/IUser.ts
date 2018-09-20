interface IUser {
  name: string;
  points: {
    today: number;
    week: number;
  };
}

export { IUser };

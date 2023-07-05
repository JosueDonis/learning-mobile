export type UserType = {
  name?: string;
  email?: string;
  picture?: string;
};

export type AuthType = {
  user?: UserType | null;
  token?: string | null;
  isAuthenticated?: boolean | null;
};

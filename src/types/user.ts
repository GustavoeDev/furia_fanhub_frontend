export interface User {
  id: number;
  name_user: string;
  email: string;
  avatar: string;
  last_login: string;
}

export interface APIUpdateUser {
  user: User;
}

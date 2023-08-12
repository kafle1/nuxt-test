// types.d.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

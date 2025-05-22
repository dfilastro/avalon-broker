export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface PostsListProps {
  initialPosts: Post[];
}

export interface AuthorAvatarProps {
  user: User;
  post: Post | Post[];
  large?: boolean;
}

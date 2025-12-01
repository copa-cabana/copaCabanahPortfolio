export type Blog = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
};

export type CountItem = {
  icon: string;
  value: string;
  description: string;
};
export type Image = {
  id: number;
  attributes: {
    name: string;
    caption?: string;
    width: number;
    height: number;
    url: string;
  };
};

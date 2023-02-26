export type MenuItemType = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type ImageType = {
  src: string;
  alt: string;
  description?: string;
};

export type ImageGalleryType = {
  id: string;
  title: string;
  subtitle?: string;
  images: ImageType[];
};

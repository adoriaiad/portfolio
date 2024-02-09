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

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  technique: string;
};

export type ComicImageMenuType = {
  src: string;
  title: string;
  description: string;
  paths: string[];
}

export type BookItemType = {
  src: string;
  description: string;
  externalUrl?: string;
}

type ComponentPropsWithRef<Component> = import("react").ComponentProps<Component> & {
  ref?: import("react").Ref<Element>;
};

interface Exif {
  aperture: string;
  exposure_time: string;
  focal_length: string;
  iso: number;
  make: string;
  model: string;
  name: string;
}

interface Location {
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

interface Tag {
  title: string;
}

interface Collection {
  cover_photo: string | null;
  id: number;
  last_collected_at: string;
  published_at: string;
  title: string;
  updated_at: string;
  user: string | null;
}

interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface User {
  accepted_tos: boolean;
  bio: string | null;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string | null;
  last_name: string | null;
  location: string | null;
  name: string;
  portfolio_url: string | null;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: string | null;
  updated_at: string;
  username: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  social: {
    instagram_username: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
    paypal_email: string | null;
  };
}

interface Photo {
  alt_description: string | null;
  alternative_slugs: Record<string, string>;
  asset_type: string;
  blur_hash: string;
  breadcrumbs: string[];
  color: string;
  created_at: string;
  current_user_collections: Collection[];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: string | null;
  slug: string;
  topic_submissions: Record<string, unknown>;
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string | null;
      twitter_username: string | null;
      portfolio_url: string | null;
      bio: string | null;
      location: string | null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string | null;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      total_promoted_photos: number;
      total_illustrations: number;
      total_promoted_illustrations: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string | null;
        portfolio_url: string | null;
        twitter_username: string | null;
        paypal_email: string | null;
      };
    };
  } | null;
}

interface PhotoSearch {
  results: Photo[];
  total: number;
  total_pages: number;
}

type PhotoDetails = Photo & {
  tags: Tag[];
  created_at: string;
  liked_by_user: boolean;
  likes: number;
  views: number;
  downloads: number;
};

interface Profile {
  email: string;
  id: string;
  name: string;
}

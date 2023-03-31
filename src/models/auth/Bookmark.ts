import { HashtagOptions } from 'models/auth/response';

export type Bookmark = {
  id: number;
  name: string;
  address: string;
  hashtag: HashtagOptions;
  category: string;
  previewImageSrc?: string;
};

export type BookmarkList = Bookmark[];

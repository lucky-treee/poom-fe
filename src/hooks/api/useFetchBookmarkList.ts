import { useQuery } from '@tanstack/react-query';
import { BookmarkList } from 'models/bookmark';
import { fetchBookmarkList } from 'service/auth';

const useFetchBookmarkList = () => {
  return useQuery<BookmarkList, Error>({
    queryKey: ['fetchBookmarkList'],
    queryFn: async (): Promise<BookmarkList> => {
      const { bookmarkList } = await fetchBookmarkList();

      // TODO: 백엔드에서 내려주는 model과 view model을 변환 해 주어야 함.
      return bookmarkList.map(
        ({ id, name, address, hashtag, category, previewImageSrc }) => ({
          id,
          name,
          address,
          hashtag,
          category,
          previewImageSrc,
        })
      );
    },
  });
};

export default useFetchBookmarkList;

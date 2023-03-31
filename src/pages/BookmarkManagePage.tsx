import React from 'react';
import PathName from 'constants/PathName';
import { ReactComponent as BackIcon } from 'assets/components/navigate/Back.svg';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import BookmarkPreview from 'components/profile/BookmarkPreview';
import Typography from 'components/Typography';
import useFetchBookmarkList from 'hooks/api/useFetchBookmarkList';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BookmarkManagePage: React.FC = () => {
  const { t } = useTranslation();

  const { data: bookmarkList, isLoading } = useFetchBookmarkList();

  return (
    <div className="flex relative flex-col p-8 gap-6 h-1 min-h-screen">
      <Link
        className="flex flex-row gap-2 items-center"
        to={PathName.PROFILE_PAGE}
      >
        <BackIcon />
        <Typography type="title">{t('bookmark-manage-page-title')}</Typography>
      </Link>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <LoadingProgressIcon />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-4 pb-12">
          {bookmarkList
            ? bookmarkList.map((bookmark) => (
                <BookmarkPreview
                  key={bookmark.id}
                  id={bookmark.id}
                  name={bookmark.name}
                  address={bookmark.address}
                  hashtag={bookmark.hashtag}
                  category={bookmark.category}
                  previewImageSrc={bookmark.previewImageSrc}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default BookmarkManagePage;

import React from 'react';
import { ReactComponent as FavoriteIcon } from 'assets/components/Favorite.svg';
import { ReactComponent as NoImageIcon } from 'assets/components/NoImage.svg';
import Typography from 'components/base/Typography';
import HashtagChip from 'components/HashtagChip';
import { HashtagOptions } from 'models/auth/response';
import { useTranslation } from 'react-i18next';

type BookmarkPreviewProps = {
  id: number;
  name: string;
  address: string;
  hashtag: HashtagOptions;
  category: string;
  previewImageSrc?: string;
};

const BookmarkPreview: React.FC<BookmarkPreviewProps> = (props) => {
  const { id, name, address, hashtag, category, previewImageSrc } = props;

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 w-[160px]">
      <div className="relative bg-gray-300 w-full h-[160px] overflow-hidden rounded-md">
        {previewImageSrc ? (
          <img className="w-full h-full" src={previewImageSrc} alt="preview" />
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <NoImageIcon />
            <Typography type="caption" className="text-placeholder">
              {t('no-image-available-description')}
            </Typography>
          </div>
        )}
        <FavoriteIcon className="absolute top-2 left-2" />
        <HashtagChip
          hashtag={hashtag}
          size="small"
          className="absolute bottom-2 right-2"
        />
      </div>
      <div className="flex flex-col w-full">
        <Typography
          type="border-body"
          className="w-[160px] text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {name}
        </Typography>
        <Typography type="caption" className="text-gray-300 mb-1">
          {category}
        </Typography>
        <Typography type="caption" className="text-placeholder">
          {address}
        </Typography>
      </div>
    </div>
  );
};

export default BookmarkPreview;

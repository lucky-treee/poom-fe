import React from 'react';
import Typography from 'components/base/Typography';
import HashtagChip from 'components/HashtagChip';
import { useTranslation } from 'react-i18next';

type ModalProps = {
  title: string;
  category?: string;
  address?: string;
  review?: number;
};

const ShopDrawer: React.FC<ModalProps> = (props) => {
  const { title, category, address, review = 0 } = props;

  const { t } = useTranslation();

  return (
    <div className="absolute bottom-0 w-screen bg-white z-[1] drop-shadow-md-resverse rounded-t-lg">
      <div className="m-auto my-[12px] w-[42px] h-[5px] rounded-full bg-border-gray" />
      <div className="mx-[29px] mb-[70px]">
        <div>
          <Typography type="title" className="text-text">
            {title}
          </Typography>
          <Typography type="caption" className="text-disabled">
            {category}
          </Typography>
        </div>
        <div className="flex flex-col text-text mt-2">
          <Typography type="body" className="inline">
            {address}
          </Typography>
          <Typography type="body" className="inline">
            {t('review-count-message', {
              reviewCount: review.toLocaleString(),
            })}
          </Typography>
        </div>
        <HashtagChip hashtag="CLEAN" size="small" className="mt-2" />
      </div>
    </div>
  );
};

export default ShopDrawer;

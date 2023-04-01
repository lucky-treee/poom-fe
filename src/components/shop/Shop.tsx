import React from 'react';
import { ReactComponent as HeartIcon } from 'assets/components/Heart.svg';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import HashtagChip from 'components/HashtagChip';
import { Shop } from 'models/shop/Shop';

type ShopProps = {
  shop: Shop;
  review: number;
};

const Shop: React.FC<ShopProps> = ({ shop, review }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-[29px] mb-[70px]">
      <div>
        <div className="flex justify-between items-center">
          <Typography type="title" className="text-text">
            {shop.shopName}
          </Typography>
          <HeartIcon />
        </div>
        <Typography type="caption" className="text-disabled">
          {shop.category}
        </Typography>
      </div>
      <div className="w-[95%] flex justify-between items-center text-text mt-2">
        <Typography type="body" className="inline">
          {shop.shopAddress}
        </Typography>
        <div className="h-3 divider border-l border-border-gray" />
        <Typography type="body" className="inline">
          {t('review-count-message', {
            reviewCount: review.toLocaleString(),
          })}
        </Typography>
      </div>
      <HashtagChip hashtag="CLEAN" size="small" className="mt-2" />
    </div>
  );
};

export default Shop;

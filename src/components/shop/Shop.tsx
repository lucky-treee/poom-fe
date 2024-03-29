import React from 'react';
import { ReactComponent as HeartIcon } from 'assets/components/Heart.svg';
import { ReactComponent as BackArrowIcon } from 'assets/components/navigate/Back.svg';
import Typography from 'components/base/Typography';
import HashtagChip from 'components/HashtagChip';
import { FetchShopResponse } from 'models/shop/response';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

type ShopProps = {
  shop: FetchShopResponse;
  review: number;
};

const Shop: React.FC<ShopProps> = ({ shop, review }) => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <button type="button" className="mr-5" onClick={handleGoBack}>
              <BackArrowIcon />
            </button>
            <Typography type="title" className="text-text">
              {shop.shopName}
            </Typography>
          </div>
          <HeartIcon />
        </div>
      </div>
      <div className="text-text mt-2">
        <Typography type="caption" className="text-gray-500">
          {shop.flagshipProduct}
        </Typography>
        <Typography type="body" className="inline">
          {shop.shopAddress}
        </Typography>
        <Typography type="body">
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

import React from 'react';
import PathName from 'constants/PathName';
import { ReactComponent as BackIcon } from 'assets/components/navigate/Back.svg';
import Typography from 'components/base/Typography';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import ReviewContent from 'components/ReviewContent';
import ReviewTitleHeader from 'components/ReviewTitleHeader';
import useFetchUserReviewList from 'hooks/api/useFetchUserReviewList';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ReviewManagePage: React.FC = () => {
  const { t } = useTranslation();

  const { data: reviewList, isLoading } = useFetchUserReviewList();

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
          {reviewList?.map((review) => (
            <div key={review.id}>
              <ReviewTitleHeader
                shopName={review.shop.name}
                shopCategory="REFILL"
              />
              <ReviewContent
                imgSrcList={review.imgSrc}
                content={review.content}
                updatedAt={review.updatedAt}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewManagePage;

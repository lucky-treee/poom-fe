import React from 'react';
import PathName from 'constants/PathName';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import LocalDate from 'components/LocalDate';
import ReviewContent from 'components/ReviewContent';
import Shop from 'components/shop/Shop';
import Typography from 'components/Typography';
import { useFetchShopReviewList } from 'hooks/api/useFetchShopReviewList';
import { useGetShopById } from 'hooks/api/useGetShopById';
import { useGetUserInformation } from 'hooks/api/useGetUserInformation';
import { ShopReview } from 'models/auth/Review';
import { useNavigate, useParams } from 'react-router';

const ShopReviewHeader: React.FC<{ review: ShopReview }> = ({ review }) => {
  return (
    <h1
      id="review-title"
      className="flex justify-start items-center gap-1 mb-2"
    >
      <div id="profile-thumbnail" className="w-[21.69px] h-[21.69px]">
        <img
          src={review.profile.profileImageSrc}
          alt={`profile-${review.profile.nickname}`}
          className="w-full h-full rounded-full"
        />
      </div>
      <Typography type="body" className="tracking-[-0.04em]">
        {review.profile.nickname}
      </Typography>
      <LocalDate date={review.updatedAt} />
    </h1>
  );
};

const ShopPage: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id?: string }>() ?? {};

  const { data: shop, isLoading: isLoadingShop } = useGetShopById(
    parseInt(id!, 10)
  );

  const { data: reviewList, isLoading: isLoadingReviewList } =
    useFetchShopReviewList(parseInt(id!, 10));

  const { data: userInformation } = useGetUserInformation();

  const isLogin = Boolean(userInformation);

  const handleClickReviewWrite = () => {
    if (!isLogin) {
      navigate(PathName.LOGIN_PAGE);
    }
  };

  return (
    <div className="w-screen h-screen px-6 py-4">
      {isLoadingShop ? (
        <div className="flex justify-center items-center w-full h-full">
          <LoadingProgressIcon />
        </div>
      ) : (
        <Shop shop={shop!} review={reviewList?.length ?? 0} />
      )}

      <div className="flex justify-between items-center mb-4">
        <Typography type="subtitle">리뷰</Typography>
        <button
          type="button"
          className="text-primary text-sm tracking-[-0.04em]"
          onClick={handleClickReviewWrite}
        >
          리뷰 남기기
        </button>
      </div>

      {isLoadingReviewList ? (
        <div className="flex justify-center items-center w-full h-full">
          <LoadingProgressIcon />
        </div>
      ) : (
        reviewList?.map((review) => (
          <div key={review.id} className="mb-4">
            <ShopReviewHeader review={review} />
            <ReviewContent
              imgSrcList={review.imgSrc}
              content={review.content}
              updatedAt={review.updatedAt}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ShopPage;

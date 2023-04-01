import React from 'react';
import { ReactComponent as BackArrowIcon } from 'assets/components/navigate/back.svg';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import Shop from 'components/shop/Shop';
import { useGetShopById } from 'hooks/api/useGetShopById';
import { useNavigate, useParams } from 'react-router';

const ShopPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>() ?? {};
  const handleGoBack = () => navigate(-1);

  const { data: shop, isLoading } = useGetShopById(parseInt(id!, 10));

  return (
    <div className="w-screen h-screen">
      <button type="button" className="mx-[29px] py-4" onClick={handleGoBack}>
        <BackArrowIcon />
      </button>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <LoadingProgressIcon />
        </div>
      ) : (
        <Shop shop={shop!} review={1} />
      )}
    </div>
  );
};

export default ShopPage;

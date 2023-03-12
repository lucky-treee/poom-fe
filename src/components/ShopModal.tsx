import React from 'react';
import Drawer from 'components/Drawer';
import Typography from 'components/Typography';

type ModalProps = {
  title: string;
  category?: string;
  address?: string;
  review?: number;
};

const ShopModal: React.FC<ModalProps> = (props) => {
  const { title, category, address, review = 0 } = props;

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
        <div className="flex text-text mt-2">
          <Typography type="body" className="inline">
            {address}
          </Typography>
          <div className="w-[1px] h-[12px] bg-border-gray rounded-full m-1" />
          <Typography type="body" className="inline">
            리뷰{' '}
            {review.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            개
          </Typography>
        </div>
        <Drawer hashtag="CLEAN" size="small" className="mt-2" />
      </div>
    </div>
  );
};

export default ShopModal;

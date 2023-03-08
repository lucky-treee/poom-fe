import React from 'react';
import Chip from 'components/Chip';
import Typography from 'components/Typography';

const ShopModal: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-screen bg-white z-[1] drop-shadow-md-resverse rounded-t-lg">
      <div className="m-auto my-[12px] w-[42px] h-[5px] rounded-full bg-border-gray" />
      <div className="mx-[29px] mb-[70px]">
        <div>
          <Typography type="title" className="text-text">
            쓰레기 없는 행복 카페
          </Typography>
          <Typography type="caption" className="text-disabled">
            카페, 커피
          </Typography>
        </div>
        <div className="flex text-text mt-2">
          <Typography type="body" className="inline">
            서울시 땡땡구 204-12 현대빌딩 301호
          </Typography>
          <div className="w-[1px] h-[12px] bg-border-gray rounded-full m-1" />
          <Typography type="body" className="inline">
            리뷰 2,030개
          </Typography>
        </div>
        <Chip hashtag="CLEAN" size="small" className="mt-2" />
      </div>
      {/* <div>이미지 영역</div> */}
    </div>
  );
};

export default ShopModal;

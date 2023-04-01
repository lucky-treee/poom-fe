import React from 'react';
import { ReactComponent as CameraIcon } from 'assets/components/Camera.svg';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';

type ReviewImageListProps = {
  imgSrcList: string[];
};

const ReviewImageList: React.FC<ReviewImageListProps> = (props) => {
  const { imgSrcList } = props;

  const { t } = useTranslation();

  if (imgSrcList.length === 0) {
    return <div />;
  }
  if (imgSrcList.length === 1) {
    const imgSrc = imgSrcList[0];

    return (
      <div className="flex flex-row gap-2">
        <img
          src={imgSrc}
          alt="my review"
          className="w-[160px] h-[160px] rounded-md"
        />
      </div>
    );
  }
  if (imgSrcList.length === 2) {
    return (
      <div className="flex flex-row gap-2">
        <img
          src={imgSrcList[0]}
          alt="my review"
          className="w-[160px] h-[160px] rounded-md"
        />
        <img
          src={imgSrcList[1]}
          alt="my review"
          className="w-[160px] h-[160px] rounded-md"
        />
      </div>
    );
  }
  if (imgSrcList.length > 2 && imgSrcList.length <= 5) {
    return (
      <div className="flex flex-row gap-2">
        <img
          src={imgSrcList[0]}
          alt="my review"
          className="w-[160px] h-[160px] rounded-md"
        />
        <div className="flex flex-row flex-wrap w-[160px] h-[160px] gap-2">
          {imgSrcList.slice(1).map((imgSrc) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt="my review"
              className="w-[76px] h-[76px] rounded-md"
            />
          ))}
        </div>
      </div>
    );
  }
  if (imgSrcList.length > 5) {
    return (
      <div className="flex flex-row gap-2">
        <img
          src={imgSrcList[0]}
          alt="my review"
          className="w-[160px] h-[160px] rounded-md"
        />
        <div className="flex flex-row flex-wrap w-[160px] h-[160px] gap-2">
          {imgSrcList.slice(1, 5).map((imgSrc, index) =>
            index !== 3 ? (
              <img
                key={imgSrc}
                src={imgSrc}
                alt="my review"
                className="w-[76px] h-[76px] rounded-md"
              />
            ) : (
              <div key={imgSrc} className="relative">
                <img
                  src={imgSrc}
                  alt="my review"
                  className="w-[76px] h-[76px] rounded-md"
                />
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center bg-[#00000088] w-[76px] h-[76px] rounded-md">
                  <CameraIcon />
                  <Typography type="caption" className="text-white">
                    {t('review-image-list-more')}
                  </Typography>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
  return <div />;
};

export default ReviewImageList;

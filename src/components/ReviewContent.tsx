import React from 'react';
import LocalDate from 'components/LocalDate';
import ReviewImageList from 'components/ReviewImageList';
import Typography from 'components/Typography';
import { useLocation } from 'react-router';

type ReviewContentProps = {
  imgSrcList: string[];
  content: string;
  updatedAt: number;
};

const ReviewContent: React.FC<ReviewContentProps> = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const { imgSrcList, content, updatedAt } = props;

  return (
    <div className="flex flex-col gap-2 w-full">
      <ReviewImageList imgSrcList={imgSrcList} />
      <Typography type="body">{content}</Typography>
      {!pathname.includes('shop') && <LocalDate date={updatedAt} />}
    </div>
  );
};

export default ReviewContent;

import React from 'react';
import Typography from 'components/base/Typography';
import { HashtagOptions } from 'models/auth/response';
import { useTranslation } from 'react-i18next';

type SizeOptions = 'default' | 'small';

type HashtagChipProps = {
  hashtag: HashtagOptions;
  size?: SizeOptions;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const Size: Record<SizeOptions, string> = {
  default: 'py-2 px-4',
  small: 'py-1 px-3',
};

const Color: Record<HashtagOptions, string> = {
  GOOD: 'bg-green-500',
  CLEAN: 'bg-sky-500',
  NICE: 'bg-yellow-500',
  CHEAP: 'bg-cyan-500',
  QUALITY: 'bg-violet-500',
};

const HashtagChip: React.FC<HashtagChipProps> = (props) => {
  const { hashtag = 'GOOD', size = 'default', className } = props;

  const { t } = useTranslation();

  const hashTagText: Record<HashtagOptions, string> = {
    GOOD: t('hashtag-good'),
    CLEAN: t('hashtag-clean'),
    NICE: t('hashtag-nice'),
    CHEAP: t('hashtag-cheap'),
    QUALITY: t('hashtag-quality'),
  };

  const defaultStyle =
    'flex justify-center items-center rounded-full text-white w-fit';

  if (size === 'default') {
    return (
      <div
        className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
      >
        <Typography type="code">{hashTagText[hashtag]}</Typography>
      </div>
    );
  }

  if (size === 'small') {
    return (
      <div
        className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
      >
        <Typography type="caption">{hashTagText[hashtag]}</Typography>
      </div>
    );
  }

  return (
    <div
      className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
    >
      {hashTagText[hashtag]}
    </div>
  );
};

export default HashtagChip;

import React from 'react';
import Typography from 'components/Typography';

type SizeOptions = 'default' | 'small';

type HashtagOptions = 'GOOD' | 'CLEAN' | 'NICE' | 'CHEAP' | 'QUALITY';

type ChipProps = {
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

const Chip: React.FC<ChipProps> = (props) => {
  const { hashtag = 'GOOD', size = 'default', className } = props;

  const defaultStyle =
    'flex justify-center items-center rounded-full text-white w-fit';

  if (size === 'default') {
    return (
      <div
        className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
      >
        <Typography type="code">{hashtag}</Typography>
      </div>
    );
  }

  if (size === 'small') {
    return (
      <div
        className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
      >
        <Typography type="caption">{hashtag}</Typography>
      </div>
    );
  }

  return (
    <div
      className={`${defaultStyle} ${Color[hashtag]} ${Size[size]} ${className}`}
    >
      {hashtag}
    </div>
  );
};

export default Chip;

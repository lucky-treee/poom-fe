import React from 'react';
import { ReactComponent as NextIcon } from 'assets/auth/arrow-forward.svg';
import Typography from 'components/Typography';
import { Link } from 'react-router-dom';

interface SectionButtonProps {
  text: string;
  to: string;
  disabled?: boolean;
  className?: string;
}

const SectionButton: React.FC<SectionButtonProps> = (props) => {
  const { text, to, disabled, className } = props;

  return (
    <Link
      className={`flex flex-row justify-between items-center px-7 py-4 ${className}`}
      to={disabled ? to : ''}
    >
      <Typography className={disabled ? '' : 'text-gray-400'} type="subtitle">
        {text}
      </Typography>
      <NextIcon className={disabled ? '' : 'text-gray-400'} />
    </Link>
  );
};

export default SectionButton;

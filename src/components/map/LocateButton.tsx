import React from 'react';
import { ReactComponent as LocateIcon } from 'assets/map/Locate.svg';

type LocateButtonProps = {
  onClick: () => void;
  className?: string;
};

const LocateButton: React.FC<LocateButtonProps> = (props) => {
  const { onClick, className } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full outline-none border-none ${className}`}
    >
      <LocateIcon />
    </button>
  );
};

export default LocateButton;

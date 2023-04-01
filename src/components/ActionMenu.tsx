import React from 'react';

type ActionMenuProps = {
  children: React.ReactNode;
  open?: boolean;
  className?: string;
};

const ActionMenu: React.FC<ActionMenuProps> = (props) => {
  const { children, open, className } = props;

  return (
    <div
      className={`absolute top-4 right-0 rounded-md overflow-hidden shadow-md bg-white ${
        open ? '' : 'hidden'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ActionMenu;

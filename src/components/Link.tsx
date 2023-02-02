import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type LinkProps = RouterLinkProps;

const Link: React.FC<LinkProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <RouterLink
      {...rest}
      className={`${className} text-blue-500 visited:text-blue-500`}
    >
      {children}
    </RouterLink>
  );
};

export default Link;

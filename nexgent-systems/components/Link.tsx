import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <RouterLink {...props}>
      {children}
    </RouterLink>
  );
};
import React, { PropsWithChildren } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';

export interface ScrollToProps extends PropsWithChildren {
  anchorSelector: string;
}

export default function ScrollOnClick({ children, anchorSelector }: ScrollToProps) {
  const trigger = useScrollTrigger();
  const handleClick: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
    (event) => {
      const anchor = (event.currentTarget.ownerDocument || document).querySelector(anchorSelector);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [anchorSelector]
  );

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 2,
          right: 2,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

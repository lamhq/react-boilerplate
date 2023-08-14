import { styled } from '@mui/material/styles';

/**
 * Just a wrapper of <dialog> tag with some style
 */
export default styled('dialog')({
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: 4,
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
  overflowY: 'auto',
  maxHeight: 'calc(100% - 64px)',
  maxWidth: 600,
  padding: 0,
  '::backdrop': {
    background: 'hsl(0 0% 0% / 50%)',
  },
});

import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';

import Dialog from '../../molecules/Dialog';

export default function DialogDemo() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Dialog Demo
      </Typography>
      <Typography variant="body1" color="info" paragraph>
        This is a demo of the implementation of a modal dialog using the HTML dialog API.
      </Typography>
      <Typography variant="body1" color="info" paragraph>
        The Dialog API is a native browser API that allows you to create modal dialogs without
        additional dependencies or libraries.
      </Typography>

      <Typography variant="h2">Key features</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText>Uses the HTML Dialog API to create modal dialogs.</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText>
            Offers built-in accessibility features for the dialogs Easy to use, extend, and
            customize.
          </ListItemText>
        </ListItem>
        <Button variant="contained" onClick={handleOpenDialog}>
          Open Dialog
        </Button>
      </List>

      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
        <Typography variant="h3" gutterBottom>
          Dialog Title
        </Typography>

        <Typography variant="body1" gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </Typography>
        <Button variant="contained" onClick={handleCloseDialog}>
          Close
        </Button>
      </Dialog>
    </>
  );
}

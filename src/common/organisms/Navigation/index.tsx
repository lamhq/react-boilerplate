import ImageIcon from '@mui/icons-material/Image';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SyncIcon from '@mui/icons-material/Sync';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import NavigationItem from '../../molecules/NavigationItem';

export default function Navigation() {
  return (
    <>
      <Toolbar variant="dense" />

      <Divider />

      <List>
        <NavigationItem to="/" label="Home" icon={<HomeIcon fontSize="small" />} />
      </List>

      <Divider />

      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Demo
          </ListSubheader>
        }
      >
        <NavigationItem
          to="/demo/data-fetching"
          label="Data Fetching"
          icon={<SyncIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/data-mutation"
          label="Data Mutation"
          icon={<BorderColorIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/lazy-load-image-1"
          label="Image Lazy Loading (1)"
          icon={<ImageIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/lazy-load-image-2"
          label="Image Lazy Loading (2)"
          icon={<LandscapeIcon fontSize="small" />}
        />
      </List>
    </>
  );
}

import ImageIcon from '@mui/icons-material/Image';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SyncIcon from '@mui/icons-material/Sync';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
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

      <List component="nav" subheader={<ListSubheader component="div">Lazy Loading</ListSubheader>}>
        <NavigationItem
          to="/demo/lazy-load-image-1"
          label="Intersection API"
          icon={<ImageIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/lazy-load-image-2"
          label="HTML Lazy Attribute"
          icon={<LandscapeIcon fontSize="small" />}
        />
      </List>
      <List
        component="nav"
        subheader={<ListSubheader component="div">Data Fetching</ListSubheader>}
      >
        <NavigationItem
          to="/demo/data-fetching"
          label="Single Item"
          icon={<SyncIcon fontSize="small" />}
        />
        {/* <NavigationItem
          to="/demo/data-fetching"
          label="Pagination"
          icon={<SyncIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/data-fetching"
          label="Infinite Scrolling"
          icon={<SyncIcon fontSize="small" />}
        /> */}
      </List>
      <List
        component="nav"
        subheader={<ListSubheader component="div">Data Mutation</ListSubheader>}
      >
        <NavigationItem
          to="/demo/data-mutation"
          label="Delete Operation"
          icon={<DeleteIcon fontSize="small" />}
        />
        {/* <NavigationItem
          to="/demo/data-mutation"
          label="Add to Cart"
          icon={<BorderColorIcon fontSize="small" />}
        /> */}
      </List>
      {/* <List
        component="nav"
        subheader={<ListSubheader component="div">Form Handling</ListSubheader>}
      >
        <NavigationItem
          to="/demo/data-mutation"
          label="Validation"
          icon={<BorderColorIcon fontSize="small" />}
        />
        <NavigationItem
          to="/demo/data-mutation"
          label="Form Array"
          icon={<BorderColorIcon fontSize="small" />}
        />
      </List> */}
      <List component="nav" subheader={<ListSubheader component="div">Other</ListSubheader>}>
        <NavigationItem
          to="/demo/dialog"
          label="Accessibility Dialog"
          icon={<BorderColorIcon fontSize="small" />}
        />
      </List>
    </>
  );
}

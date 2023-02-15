import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, Typography } from "@mui/material";

interface MenuProps {
  sections: Array<MenuItemType>;
}

type MenuItemType = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const ITEM_HEIGHT = 48;

export default function LongMenu(props: MenuProps) {
  const { sections } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigation = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item: MenuItemType) => {
    setAnchorEl(null);
    navigation(item.url);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {sections.map((item, index) => (
          <MenuItem key={`menuitem-${index}`} onClick={() => handleClose(item)}>
            <ListItemIcon key={`listitem-${index}`}>
            {item.icon}
            </ListItemIcon>
            <Typography variant="body2" color={'text.secondary'} key={`label-${index}`}>{item.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

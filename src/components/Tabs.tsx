import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { MenuItemType } from "../models/type";
import { useMenuNavigation } from "../contexts/MenuNavigation";
import { useMediaQuery } from "@mui/material";

type ColorTabsProps = {
  sections: MenuItemType[];
  onhandleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function ColorTabs(props: ColorTabsProps) {
  const { sections, onhandleChange } = props;
  const menuNavigation = useMenuNavigation();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <Tabs
        value={menuNavigation.selected}
        onChange={onhandleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        orientation={isMobile? "vertical" : "horizontal"}
        variant={isMobile? "scrollable" : "standard"}
      >
        {sections.map((item, index) => (
          <Tab value={item.url} label={item.title} key={index} style={{fontFamily: 'Yomogi', fontSize:'18px'}}/>
        ))}
      </Tabs>
    </Box>
  );
}

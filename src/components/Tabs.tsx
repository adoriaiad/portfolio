import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { MenuItemType } from "../models/type";
import { useMenuNavigation } from "../contexts/MenuNavigation";

type ColorTabsProps = {
  sections: MenuItemType[];
  onhandleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function ColorTabs(props: ColorTabsProps) {
  const { sections, onhandleChange } = props;
  const menuNavigation = useMenuNavigation();
  /* const [value, setValue] = React.useState(anchor);
  const navigation = useNavigate();
 */
  return (
    <Box>
      <Tabs
        value={menuNavigation.selected}
        onChange={onhandleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {sections.map((item, index) => (
          <Tab value={item.url} label={item.title} key={index} style={{fontFamily: 'Yomogi', fontSize:'18px'}}/>
        ))}
      </Tabs>
    </Box>
  );
}

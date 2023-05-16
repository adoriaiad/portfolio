import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { MenuItemType } from "../models/type";

type ColorTabsProps = {
  sections: MenuItemType[];
  anchor: string;
  onhandleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function ColorTabs(props: ColorTabsProps) {
  const { sections, anchor, onhandleChange } = props;
  /* const [value, setValue] = React.useState(anchor);
  const navigation = useNavigate();
 */
  return (
    <Box>
      <Tabs
        value={anchor}
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

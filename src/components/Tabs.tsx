import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MenuItemType } from "../models/type";
import { useNavigate } from "react-router-dom";

type ColorTabsProps = {
  sections: MenuItemType[];
};

export default function ColorTabs(props: ColorTabsProps) {
  const { sections } = props;
  const [value, setValue] = React.useState("/");
  const navigation = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigation(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
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

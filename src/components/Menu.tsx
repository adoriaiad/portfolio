import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, MenuList, Paper, Typography } from "@mui/material";
import { MenuItemType } from "../models/type";

type MenuProps = {
  sections: MenuItemType[];
};

export default function LongMenu(props: MenuProps) {
  const { sections } = props;
  const navigation = useNavigate();
  const handleNavigate = (url: string) => {
    navigation(url);
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        width: "100%", 
        //maxWidth: 240,
        backgroundColor: "transparent"
      }}
    >
      <MenuList 
        sx={{ 
          display: "flex", 
          flexDirection: "column", // Forza l'allineamento verticale
          gap: 1, // Aggiunge un piccolo spazio tra le voci del menù
          width: "100%"
        }}
      >
        {sections.map((item, index) => (
          <MenuItem 
            key={`menuitem-${index}`} 
            onClick={() => handleNavigate(item.url)}
            sx={{
              borderRadius: 2, // Arrotonda gli angoli del bottone al passaggio del mouse
              paddingX: { xs: 3, md: 2 },
              "&:hover": {
                backgroundColor: "action.hover", // Effetto di hover nativo
              }
            }}
          >
            {item.icon && (
              <ListItemIcon key={`listitem-${index}`} sx={{minWidth: {xs: 45, md: 40}}}>
                {item.icon}
              </ListItemIcon>
            )}
            <Typography
              variant="body2"
              color={"text.secondary"}
              key={`label-${index}`}
              style={{ fontFamily: 'Yomogi' }}
              sx={{ 
                // Su smartphone il testo diventa più grande rispetto al desktop
                fontSize: { xs: "1.2rem", md: "0.9rem" }, 
                fontWeight: { xs: 500, md: 400 }, // Leggermente più spesso su mobile per leggibilità
                letterSpacing: "0.5px" // Distribuisce le lettere in orizzontale per un look pulito
              }}
            >
              {item.title.toUpperCase()}
            </Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}

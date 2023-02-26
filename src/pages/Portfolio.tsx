import * as React from 'react';
import { Grid } from "@mui/material";
import Accordions from "../components/Accordion";
import { ImageGalleryType } from "../models/type";
import p02 from "./../assets/img/02.jpg";
import p11 from "./../assets/img/11.jpg";

function Portfolio() {
  const [expanded, setExpanded] = React.useState<string | false>('01');
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const gallery: ImageGalleryType[] = [
    {
      id: "01",
      title: "Progetto in corso: Senti che musica! (albo illustrato)",
      images: [
        {
        src: p02,
        alt: "p02",
        description: "Amo creare illustrazioni che evochino leggerezza, allegria. Il mio stile coniuga semplicità e armonia tra i colori ricercando col digitale l'effetto morbido del pastello"
        },
        {
        src: p11,
        alt: "p11",
        },
      ],
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      {gallery.map((item, index) => (
        <Accordions imgGallery={item} expanded={expanded} handleChange={handleChange}/>
      ))}
    </Grid>
  );
}

export default Portfolio;

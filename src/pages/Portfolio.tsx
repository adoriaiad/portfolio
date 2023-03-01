import * as React from 'react';
import { Grid } from "@mui/material";
import Accordions from "../components/Accordion";
import { ImageGalleryType } from "../models/type";
import p02 from "./../assets/img/02.jpg";
import p11 from "./../assets/img/11.jpg";
import blu from "./../assets/img/blu.jpg";
import scoiattolo from "./../assets/img/scoiattolo.jpg";
import riccio from "./../assets/img/Riccio.jpg";
import cinghialotta from "./../assets/img/Cinghialotta.jpg";
import gufo from "./../assets/img/Gufo.jpg";
import marmotta from "./../assets/img/Marmotta.jpg";
import bozza from "./../assets/img/paginabozza.jpg";
import sketch from "./../assets/img/17_sketch.jpg";
import definitiva from "./../assets/img/17.jpg";
import pag01 from "./../assets/img/pagina01.jpg";
import pag02 from "./../assets/img/pagina02.jpg";
import pag03 from "./../assets/img/pagina03.jpg";
import m01 from "./../assets/img/mockup01.jpg";
import m02 from "./../assets/img/mockup02.jpg";

function Portfolio() {
  const [expanded, setExpanded] = React.useState<string | false>('01');
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const gallery: ImageGalleryType[] = [
    {
      id: "01",
      title: "Progetto in corso",
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
    {
      id: "02",
      title: "Studio dei personaggi",
      images: [
        {
        src: blu,
        alt: "blu",
        description: "Tutto nasce su carta per poi prendere colore attraverso la pittura digitale"
        },
        {
        src: scoiattolo,
        alt: "scoiattolo",
        },
        {
        src: riccio,
        alt: "riccio",
        },
        {
        src: cinghialotta,
        alt: "cinghialotta",
        },
        {
        src: gufo,
        alt: "gufo",
        },
        {
        src: marmotta,
        alt: "marmotta",
        },
      ],
    },
    {
      id: "03",
      title: "Dalla bozza...",
      images: [
        {
        src: bozza,
        alt: "bozza",
        description: "Piccoli animali musicisti simpatici e curiosi, in un bosco magico che si trasforma e si colora di allegria..."
        },
        {
        src: sketch,
        alt: "sketch",
        },
        {
        src: definitiva,
        alt: "definitiva",
        description: "...alla tavola definitiva"
        },
        {
        src: pag01,
        alt: "pag01",
        description: "...all'impaginazione"
        },
        {
        src: pag02,
        alt: "pag02",
        },
        {
        src: pag03,
        alt: "pag03",
        },
      ],
    },
    {
      id: "04",
      title: "Il mockup",
      images: [
        {
        src: m01,
        alt: "m01",
        description: "",
        },
        {
        src: m02,
        alt: "m02",
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

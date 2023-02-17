import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import isEmpty from "lodash.isempty";
import { useState } from "react";
import ImageView from "../components/ImageView";
import bimba from "./../assets/img/bimba.png";
import dino from "./../assets/img/dino.png";
import gatto from "./../assets/img/gatto.png";
import neve from "./../assets/img/neve.png";
import palloncini from "./../assets/img/palloncini.png";
import volpe from "./../assets/img/volpe.png";
import bimbi from "./../assets/img/bimbi.png";
import cani from "./../assets/img/cani.png";
import GoodBoy from "./../assets/img/GoodBoy.png";

type GalleryItem = {
  src: string;
  alt: string;
};
function Gallery() {
  const [selected, setSelected] = useState<GalleryItem>();

  const gallery: GalleryItem[] = [
    {
      src: gatto,
      alt: "gatto",
    },
    {
      src: neve,
      alt: "neve",
    },
    {
      src: bimba,
      alt: "bimba",
    },
    {
      src: dino,
      alt: "dino",
    },
    {
      src: palloncini,
      alt: "palloncini",
    },
    {
      src: bimbi,
      alt: "bimbi",
    },
    {
      src: volpe,
      alt: "volpe",
    },
    {
      src: cani,
      alt: "cani",
    },
    {
      src: GoodBoy,
      alt: "Good boy",
    },
  ];
  function showPicture(item: GalleryItem) {
    setSelected(item);
  }

  function closePicture() {
    setSelected(undefined);
  }

  return (
    <Grid
      container
      spacing={2}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      {isEmpty(selected) &&
        gallery.map((item, index) => (
          <Paper elevation={4} square className="Paper" key={index}>
            <Button
              onClick={() => {
                showPicture(item);
              }}
              key={index}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={"90%"}
                style={{ margin: "20px" }}
                key={index}
              />
            </Button>
          </Paper>
        ))}
      {selected && <ImageView src={selected.src} closeHandler={closePicture} />}
    </Grid>
  );
}

export default Gallery;

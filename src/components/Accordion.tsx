import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ImageGalleryType } from '../models/type';
import Grid from '@mui/material/Grid';

type AccordionsProps = {
    imgGallery: ImageGalleryType;
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    expanded: string | boolean;
}
export default function Accordions(props: AccordionsProps) {
  const { imgGallery, handleChange, expanded } = props;

  return (
    <div style={{marginBottom: '10px'}}>
      <Accordion expanded={expanded === imgGallery.id} onChange={handleChange(imgGallery.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panelid-${imgGallery.id}`}
        >
          <Typography variant={'h5'} color={'text.secondary'} sx={{ flexShrink: 0 }}>{imgGallery.title}</Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>{imgGallery.subtitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container
      spacing={2}
      style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            
          {imgGallery.images.map((img, index) => (
            <>
              { img.description && <Typography variant={'body1'} color={'text.secondary'} style={{ margin: "60px", maxWidth: "220px" }} key={index}>{img.description}</Typography> }
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '450px' }}
                key={index}
              />
            </>
          ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

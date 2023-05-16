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
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | boolean;
};
export default function Accordions(props: AccordionsProps) {
  const { imgGallery, handleChange, expanded } = props;

  return (
    <div style={{ marginBottom: '10px', width:'1200px' }} key={`div-${imgGallery.id}`}>
      <Accordion
        expanded={expanded === imgGallery.id}
        onChange={handleChange(imgGallery.id)}
        key={`acc-${imgGallery.id}`}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panelid-${imgGallery.id}`}
          key={`acsum-${imgGallery.id}`}
        >
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
            key={`typ-${imgGallery.id}`}
          >
            {imgGallery.title}
          </Typography>
          <Typography
            variant={'subtitle2'}
            color={'text.secondary'}
            style={{ fontFamily: 'Yomogi' }}
            key={`subtitle2${imgGallery.id}`}
          >
            {imgGallery.subtitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails key={`accdet-${imgGallery.id}`}>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
            }}
            key={`grid-${imgGallery.id}`}
          >
            {imgGallery.images.map((img, index) => (
              <div key={`${imgGallery.id}-${index}`} style={{ margin: '0px' }}>
                {img.description && (
                  <Typography
                    variant={'body1'}
                    color={'text.secondary'}
                    style={{
                      margin: '60px',
                      maxWidth: '220px',
                      fontFamily: 'Yomogi',
                    }}
                    key={`typ-${imgGallery.id}-${index}`}
                  >
                    {img.description}
                  </Typography>
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  width={'90%'}
                  style={{ margin: '20px', maxWidth: '450px' }}
                  key={`${imgGallery.id}-${index}`}
                />
              </div>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

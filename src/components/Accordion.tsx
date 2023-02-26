import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ImageGalleryType } from '../models/type';

type AccordionsProps = {
    imgGallery: ImageGalleryType;
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    expanded: string | boolean;
}
export default function Accordions(props: AccordionsProps) {
  const { imgGallery, handleChange, expanded } = props;

  return (
    <div>
      <Accordion expanded={expanded === imgGallery.id} onChange={handleChange(imgGallery.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panelid-${imgGallery.id}`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{imgGallery.title}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{imgGallery.subtitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {imgGallery.images.map((img, index) => (
            <>
              <Typography key={index}>{img.description}</Typography>
              <img
                src={img.src}
                alt={img.alt}
                width={'90%'}
                style={{ margin: '20px', maxWidth: '400px' }}
                key={index}
              />
            </>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

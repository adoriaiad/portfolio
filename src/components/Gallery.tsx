import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import isEmpty from 'lodash.isempty';
import { useState } from 'react';
import ActionAreaCard from './ActionAreaCard';
import ImageView from './ImageView';
import { GalleryItem } from '../models/type';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import { useGallery } from '../data/useGallery';

type GalleryProps = {
  selectedMarkerIDs: string[];
  handleClick: (id: string) => () => void;
};

function Gallery(props: GalleryProps) {
  const { handleClick, selectedMarkerIDs } = props;
  const { t } = useTranslation();
  const [selected, setSelected] = useState<GalleryItem>();
  const {gallery1, gallery2, gallery3} = useGallery();

  function showPicture(item: GalleryItem) {
    setSelected(item);
  }

  function closePicture() {
    setSelected(undefined);
  }

  return (
    <div style={{ marginBottom: '10px', width: '1200px' }} key={`div-04`}>
      {selected && <ImageView src={selected.src} closeHandler={closePicture} />}
      <Accordion
        expanded={selectedMarkerIDs.includes('04')}
        onChange={handleClick('04')}
        key={'04'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panelid-04`}
          key={`acsum-04`}
        >
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
            key={`typ-04`}
          >
            {t('MENU.GALLERY')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails key={`accdet-04`}>
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
          >
            {t('GALLERY.TITLE1')}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            {isEmpty(selected) &&
              gallery1.map((item, index) => (
                <ActionAreaCard
                  item={item}
                  clickHandler={showPicture}
                  key={`g1-${index}`}
                />
              ))}
          </Grid>
          <Divider />
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ marginTop: '20px', fontFamily: 'Yomogi' }}
          >
            {t('GALLERY.TITLE2')}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            {isEmpty(selected) &&
              gallery2.map((item, index) => (
                <ActionAreaCard
                  item={item}
                  clickHandler={showPicture}
                  key={`g2-${index}`}
                />
              ))}
          </Grid>
          <Divider />
          <Typography
            variant={'h6'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ marginTop: '20px', fontFamily: 'Yomogi' }}
          >
            {t('GALLERY.TITLE3')}
          </Typography>
          <Typography
            variant={'h6'}
            color={'text.secondary'}
            sx={{ flexShrink: 0 }}
            style={{ fontFamily: 'Yomogi' }}
          >
            {t('GALLERY.SUBTITLE3')}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            {isEmpty(selected) &&
              gallery3.map((item, index) => (
                <ActionAreaCard
                  item={item}
                  clickHandler={showPicture}
                  key={`g3-${index}`}
                />
              ))}
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end'
            }}
            key={`grid-back4`}
          >
            <IconButton key="04" color="primary" onClick={handleClick("04")}><ClearIcon /></IconButton>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Gallery;

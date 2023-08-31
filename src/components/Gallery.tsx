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
import bimba from './../assets/img/bimba.jpg';
import bimbineve from './../assets/img/bimbineve.jpg';
import dino from './../assets/img/dinorider.jpg';
import drago from './../assets/img/drago.jpg';
import gatto from './../assets/img/GattoStrega.jpg';
import palloncini from './../assets/img/palloncini.jpg';
import neve from './../assets/img/PupazzodiNeve.jpg';
import volpe from './../assets/img/volpeviolinista.jpg';
import settembre from './../assets/img/settembre.jpg';
import b01 from './../assets/img/Bozze01.jpg';
import b02 from './../assets/img/Bozze02.jpg';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

type GalleryProps = {
  selectedMarkerIDs: string[];
  handleClick: (id: string) => () => void;
};

function Gallery(props: GalleryProps) {
  const { handleClick, selectedMarkerIDs } = props;
  const { t } = useTranslation();
  const [selected, setSelected] = useState<GalleryItem>();

  const gallery1: GalleryItem[] = [
    {
      src: gatto,
      alt: 'gatto',
      title: t('GALLERY.CDTITLE'),
      description: t('GALLERY.GALLERY1.IMAGE1.DESCRIPTION') || '',
      technique: t('GALLERY.TECHNIQUE.MIXED_EXP'),
    },
    {
      src: neve,
      alt: 'neve',
      title: t('GALLERY.CDTITLE'),
      description: t('GALLERY.GALLERY1.IMAGE2.DESCRIPTION') || '',
      technique: t('GALLERY.TECHNIQUE.CARBONCINO'),
    },
    {
      src: bimba,
      alt: 'bimba',
      title: t('GALLERY.ILLUSTRATIONTITLE'),
      description: t('GALLERY.GALLERY1.IMAGE3.DESCRIPTION') || '',
      technique: t('GALLERY.TECHNIQUE.DIGITAL'),
    },
  ];
  const gallery2: GalleryItem[] = [
    {
      src: dino,
      alt: 'dino',
      title: t('GALLERY.CDTITLE'),
      description: t('GALLERY.GALLERY2.IMAGE1.DESCRIPTION') || '',
      technique: t('GALLERY.TECHNIQUE.DIGITAL'),
    },
    {
      src: palloncini,
      alt: 'palloncini',
      title: t('GALLERY.ILLUSTRATIONTITLE'),
      description: t('GALLERY.GALLERY2.IMAGE2.DESCRIPTION') || '',
      technique: t('TECH_MIXED'),
    },
    {
      src: drago,
      alt: 'drago',
      title: t('GALLERY.ILLUSTRATIONTITLE'),
      technique: t('GALLERY.TECHNIQUE.BROWNPAPER'),
    },
    {
      src: bimbineve,
      alt: 'bimbineve',
      title: t('GALLERY.ILLUSTRATIONTITLE'),
      description: t('GALLERY.GALLERY2.IMAGE4.DESCRIPTION') || '',
      technique: t('TECH_MIXED'),
    },
  ];

  const gallery3: GalleryItem[] = [
    {
      src: volpe,
      alt: 'volpe',
      title: t('GALLERY.GALLERY3.IMAGE1.TITLE'),
      technique: t('TECH_MIXED'),
    },
    {
      src: settembre,
      alt: 'settembre',
      title: t('GALLERY.GALLERY3.IMAGE2.TITLE'),
      technique: t('TECH_MIXED'),
    },
    {
      src: b01,
      alt: 'bozze',
      title: t('GALLERY.GALLERY3.IMAGE3.TITLE'),
      technique: t('GALLERY.TECHNIQUE.PENCIL'),
    },
    {
      src: b02,
      alt: 'bozze',
      title: t('GALLERY.GALLERY3.IMAGE4.TITLE'),
      technique: t('GALLERY.TECHNIQUE.PENCIL'),
    },
  ];

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

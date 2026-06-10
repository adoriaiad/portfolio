import { useTranslation } from 'react-i18next';
import { ImageGalleryType } from '../models/type';
import p02 from './../assets/img/gallery/02.jpg';
import p03 from './../assets/img/gallery/03.jpg';
import p11 from './../assets/img/gallery/11.jpg';
import anicerex from './../assets/img/gallery/anicerex.jpg';
import bimba from './../assets/img/gallery/bimba.jpg';
import bimbineve from './../assets/img/gallery/bimbineve.jpg';
import dino from './../assets/img/gallery/dinorider.jpg';
import drago from './../assets/img/gallery/drago.jpg';
import palloncini from './../assets/img/gallery/palloncini.jpg';
import neve from './../assets/img/gallery/PupazzodiNeve.jpg';
import volpe from './../assets/img/gallery/volpeviolinista.jpg';
import p01 from './../assets/img/gallery/01.jpg';
import autunno from './../assets/img/gallery/autunno.jpg';
import nuvole from './../assets/img/gallery/nuvole.jpg';
import maestra from './../assets/img/gallery/maestra.jpg';

export function usePortfolio() {
  const { t } = useTranslation();
  const items: ImageGalleryType = {
    id: '01',
    title: t('PORTFOLIO.PROJECT1.TITLE'),
    images: [
      {
        src: anicerex,
        alt: 'copertina di Piccolo T-rex va a scuola',
      },
      {
        src: nuvole,
        alt: 'nuvole',
      },
      {
        src: maestra,
        alt: 'maestra',
      },
      {
        src: p02,
        alt: 'p02',
      },
      {
        src: p01,
        alt: 'p01',
      },
      {
        src: neve,
        alt: 'neve',
      },
      {
        src: dino,
        alt: 'dino',
      },
      {
        src: drago,
        alt: 'drago',
      },
       {
        src: p11,
        alt: 'p11',
      },
      {
        src: p03,
        alt: 'p03',
      },
      {
        src: autunno,
        alt: 'autunno',
      },
      {
        src: bimba,
        alt: 'bimba',
      },
      {
        src: palloncini,
        alt: 'palloncini',
      },
      {
        src: bimbineve,
        alt: 'bimbineve',
      },
      {
        src: volpe,
        alt: 'volpe',
      },
    ],
  };

  return { items };
}

import { useTranslation } from 'react-i18next';
import { ImageGalleryType } from '../models/type';
import p02 from './../assets/img/02.jpg';
import p03 from './../assets/img/03.jpg';
import p04 from './../assets/img/04.jpg';
import p11 from './../assets/img/11.jpg';
import calzinodoppia from './../assets/img/calzinodoppia.jpg';
import bimba from './../assets/img/bimba.jpg';
import bimbineve from './../assets/img/bimbineve.jpg';
import dino from './../assets/img/dinorider.jpg';
import drago from './../assets/img/drago.jpg';
import edward from './../assets/img/edward.jpg';
import palloncini from './../assets/img/palloncini.jpg';
import neve from './../assets/img/PupazzodiNeve.jpg';
import volpe from './../assets/img/volpeviolinista.jpg';
import settembre from './../assets/img/settembre.jpg';
import p01 from './../assets/img/01.jpg';
import autunno from './../assets/img/autunno.jpg';
import nuvole from './../assets/img/nuvole.jpg';

export function usePortfolio() {
  const { t } = useTranslation();
  const items: ImageGalleryType = {
    id: '01',
    title: t('PORTFOLIO.PROJECT1.TITLE'),
    images: [
      {
        src: nuvole,
        alt: 'nuvole',
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
        src: p04,
        alt: 'p04',
      },
      {
        src: calzinodoppia,
        alt: 'Calzino doppia pagina',
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
        src: edward,
        alt: 'Edward',
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
        src: settembre,
        alt: 'settembre',
      },
      {
        src: volpe,
        alt: 'volpe',
      },
    ],
  };

  return { items };
}

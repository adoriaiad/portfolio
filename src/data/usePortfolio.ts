import { useTranslation } from 'react-i18next';
import { ImageGalleryType } from '../models/type';
import p02 from './../assets/img/02.jpg';
import p03 from './../assets/img/03.jpg';
import p04 from './../assets/img/04.jpg';
import p11 from './../assets/img/11.jpg';
import blu from './../assets/img/blu.jpg';
import scoiattolo from './../assets/img/scoiattolo.jpg';
import riccio from './../assets/img/Riccio.jpg';
import cinghialotta from './../assets/img/Cinghialotta.jpg';
import marmotta from './../assets/img/Marmotta.jpg';
import orso from './../assets/img/orso.jpg';
import bozza from './../assets/img/paginabozza.jpg';
import sketch from './../assets/img/17_sketch.jpg';
import definitiva from './../assets/img/17.jpg';
import pag01 from './../assets/img/pagina01.jpg';
import pag02 from './../assets/img/pagina02.jpg';
import pag03 from './../assets/img/pagina03.jpg';
import bimbo from './../assets/img/bimbo.jpg';
import calzino from './../assets/img/calzino.jpg';
import calzinodoppia from './../assets/img/calzinodoppia.jpg';
import pag04 from './../assets/img/pagina04.jpg';
import pag05 from './../assets/img/pagina05.jpg';

export function usePortfolio() {
  const { t } = useTranslation();
  const projects: ImageGalleryType = {
    id: '01',
    title: t('PORTFOLIO.PROJECT1.TITLE'),
    images: [
      {
        src: p02,
        alt: 'p02',
        description: t('PORTFOLIO.PROJECT1.IMAGES.DESCRIPTION1') || '',
      },
      {
        src: p11,
        alt: 'p11',
        description: t('PORTFOLIO.PROJECT1.IMAGES.DESCRIPTION2') || '',
      },
      {
        src: p03,
        alt: 'p03',
      },
      {
        src: p04,
        alt: 'p04',
      },
      {
        src: calzinodoppia,
        alt: 'Calzino doppia pagina',
      },
    ],
  };
  const characters: ImageGalleryType = {
    id: '02',
    title: t('PORTFOLIO.PROJECT2.TITLE'),
    images: [
      {
        src: blu,
        alt: 'blu',
        description: t('PORTFOLIO.PROJECT2.IMAGES.DESCRIPTION1') || '',
      },
      {
        src: scoiattolo,
        alt: 'scoiattolo',
      },
      {
        src: riccio,
        alt: 'riccio',
      },
      {
        src: cinghialotta,
        alt: 'cinghialotta',
      },
      {
        src: marmotta,
        alt: 'marmotta',
      },
      {
        src: orso,
        alt: 'orso',
      },
      {
        src: bimbo,
        alt: 'bimbo',
      },
      {
        src: calzino,
        alt: 'calzino',
      }
    ],
  };
  const sketches: ImageGalleryType = {
    id: '03',
    title: t('PORTFOLIO.PROJECT3.TITLE'),
    images: [
      {
        src: bozza,
        alt: 'bozza',
        //description: t('PORTFOLIO.PROJECT3.IMAGES.DESCRIPTION1') || '',
      },
      {
        src: sketch,
        alt: 'sketch',
      },
      {
        src: definitiva,
        alt: 'definitiva',
      },
      {
        src: pag01,
        alt: 'pag01',
        description: t('PORTFOLIO.PROJECT3.IMAGES.DESCRIPTION2') || '',
      },
      {
        src: pag02,
        alt: 'pag02',
      },
      {
        src: pag03,
        alt: 'pag03',
      },
      {
        src: pag04,
        alt: 'pag04',
      },
      {
        src: pag05,
        alt: 'pag05',
        //description: 'Il mockup',
      },
    ],
  };

  return { projects, characters, sketches };
}

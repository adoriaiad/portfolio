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

export function useGallery() {
  const { t } = useTranslation();
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

  return {gallery1, gallery2, gallery3};
}

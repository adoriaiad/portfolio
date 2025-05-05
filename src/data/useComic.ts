import c11 from './../assets/comics/thumbs/dutch.jpg';
import c12 from './../assets/comics/thumbs/smarthworking.jpg';
import c13 from './../assets/comics/thumbs/shopping.jpg';
import c14 from './../assets/comics/thumbs/spiaggia.jpg';
import c15 from './../assets/comics/thumbs/dieta_3.jpg';
import c16 from './../assets/comics/thumbs/ricette.jpg';
import c17 from './../assets/comics/thumbs/cane.jpg';
import c18 from './../assets/comics/thumbs/piove.jpg';
import c19 from './../assets/comics/thumbs/film.jpg';
import belgianlife_1 from './../assets/comics/belgianlife/dutch_0.jpg';
import belgianlife_2 from './../assets/comics/belgianlife/dutch_1.jpg';
import belgianlife_3 from './../assets/comics/belgianlife/dutch_2.jpg';
import belgianlife_4 from './../assets/comics/belgianlife/dutch_3.jpg';
import smart_1 from './../assets/comics/smartworking/smarthworking_1.jpg';
import smart_2 from './../assets/comics/smartworking/smarthworking_2.jpg';
import smart_3 from './../assets/comics/smartworking/smarthworking_3.jpg';
import smart_4 from './../assets/comics/smartworking/smarthworking_4.jpg';
import shopping_1 from './../assets/comics/shopping/shopping_1.jpg';
import shopping_2 from './../assets/comics/shopping/shopping_2.jpg';
import shopping_3 from './../assets/comics/shopping/shopping_3.jpg';
import shopping_4 from './../assets/comics/shopping/shopping_4.jpg';
import spiaggia_1 from './../assets/comics/spiaggia/spiaggia_1.jpg';
import spiaggia_2 from './../assets/comics/spiaggia/spiaggia_2.jpg';
import spiaggia_3 from './../assets/comics/spiaggia/spiaggia_3.jpg';
import spiaggia_4 from './../assets/comics/spiaggia/spiaggia_4.jpg';
import spiaggia_5 from './../assets/comics/spiaggia/spiaggia2_1.jpg';
import spiaggia_6 from './../assets/comics/spiaggia/spiaggia2_2.jpg';
import dieta_1 from './../assets/comics/dieta1/dieta3_1.jpg';
import dieta_2 from './../assets/comics/dieta1/dieta3_2.jpg';
import dieta_3 from './../assets/comics/dieta1/dieta3_3.jpg';
import dieta_4 from './../assets/comics/dieta1/dieta3_4.jpg';
import ricette_1 from './../assets/comics/dieta2/ricette_1.jpg';
import ricette_2 from './../assets/comics/dieta2/ricette_2.jpg';
import ricette_3 from './../assets/comics/dieta2/ricette_3.jpg';
import ricette_4 from './../assets/comics/dieta2/ricette_4.jpg';
import cane_1 from './../assets/comics/cane/cane_1.jpg';
import cane_2 from './../assets/comics/cane/cane_2.jpg';
import cane_3 from './../assets/comics/cane/cane_3.jpg';
import cane_4 from './../assets/comics/cane/cane_4.jpg';
import piove_1 from './../assets/comics/piove/piove-in-belgio_1.jpg';
import piove_2 from './../assets/comics/piove/piove-in-belgio_2.jpg';
import piove_3 from './../assets/comics/piove/piove-in-belgio_3.jpg';
import piove_4 from './../assets/comics/piove/piove-in-belgio_4.jpg';
import film_1 from './../assets/comics/film/film_1.jpg';
import film_2 from './../assets/comics/film/film_2.jpg';
import film_3 from './../assets/comics/film/film_3.jpg';
import film_4 from './../assets/comics/film/film_4.jpg';

import { ComicImageMenuType } from '../models/type';

export function useComic() {
  const comicThumbs: ComicImageMenuType[] = [
    {
      src: c11,
      title: 'La mia vita in Belgio',
      description: 'Non parlo fiammingo...',
      paths: [belgianlife_1, belgianlife_2, belgianlife_3, belgianlife_4],
    },
    {
      src: c12,
      title: 'Smart working',
      description: 'Ooops...',
      paths: [smart_1, smart_2, smart_3, smart_4],
    },
    {
      src: c13,
      title: 'Shopping',
      description: 'I camerini sono brutti e cattivi',
      paths: [shopping_1, shopping_2, shopping_3, shopping_4],
    },
    {
      src: c14,
      title: 'Mare, spiaggia...',
      description: '...sole',
      paths: [
        spiaggia_1,
        spiaggia_2,
        spiaggia_3,
        spiaggia_4,
        spiaggia_5,
        spiaggia_6,
      ],
    },
    {
      src: c15,
      title: 'Dieta - parte 1',
      description: 'Dieta sì, ma non troppo',
      paths: [dieta_1, dieta_2, dieta_3, dieta_4],
    },
    {
      src: c16,
      title: 'Dieta - parte 2',
      description: 'Ricettine dietetiche?',
      paths: [ricette_1, ricette_2, ricette_3, ricette_4],
    },
    {
      src: c17,
      title: '26 agosto - giornata mondiale del cane',
      description: '26 agosto - giornata mondiale del cane',
      paths: [cane_1, cane_2, cane_3, cane_4],
    },
    {
      src: c18,
      title: 'È settembre...',
      description: '...ma vivi in Belgio',
      paths: [piove_1, piove_2, piove_3, piove_4],
    },
    {
      src: c19,
      title: 'Effetto divano',
      description: '',
      paths: [film_1, film_2, film_3, film_4],
    },
  ];
  return { comicThumbs };
}

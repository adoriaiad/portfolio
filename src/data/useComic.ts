import c01 from './../assets/comics/thumbs/20200829.jpg';
import c02 from './../assets/comics/thumbs/20200830.jpg';
import c03 from './../assets/comics/thumbs/20200903.jpg';
import c04 from './../assets/comics/thumbs/20200918.jpg';
import c05 from './../assets/comics/thumbs/20200928.jpg';
import c06 from './../assets/comics/thumbs/20201120.jpg';
import c07 from './../assets/comics/thumbs/20201220.jpg';
import c08 from './../assets/comics/thumbs/20210126.jpg';
import c09 from './../assets/comics/thumbs/20210130.jpg';
import c10 from './../assets/comics/thumbs/20210308.jpg';
import meditazione_1 from './../assets/comics/meditazione/meditazione_1.jpg';
import meditazione_2 from './../assets/comics/meditazione/meditazione_2.jpg';
import meditazione_3 from './../assets/comics/meditazione/meditazione_3.jpg';
import meditazione_4 from './../assets/comics/meditazione/meditazione_4.jpg';
import meditazione_5 from './../assets/comics/meditazione/meditazione_5.jpg';
import meditazione_6 from './../assets/comics/meditazione/meditazione_6.jpg';
import pipistrelli_1 from './../assets/comics/pipistrelli/pipistrelli_1.jpg';
import pipistrelli_2 from './../assets/comics/pipistrelli/pipistrelli_2.jpg';
import pipistrelli_3 from './../assets/comics/pipistrelli/pipistrelli_3.jpg';
import pipistrelli_4 from './../assets/comics/pipistrelli/pipistrelli_4.jpg';
import passeggiata1_1 from './../assets/comics/passeggiata1/passeggiata1_1.jpg';
import passeggiata1_2 from './../assets/comics/passeggiata1/passeggiata1_2.jpg';
import passeggiata1_3 from './../assets/comics/passeggiata1/passeggiata1_3.jpg';
import passeggiata1_4 from './../assets/comics/passeggiata1/passeggiata1_4.jpg';
import passeggiata2_1 from './../assets/comics/passeggiata2/passeggiata2_1.jpg';
import passeggiata2_2 from './../assets/comics/passeggiata2/passeggiata2_2.jpg';
import passeggiata2_3 from './../assets/comics/passeggiata2/passeggiata2_3.jpg';
import passeggiata2_4 from './../assets/comics/passeggiata2/passeggiata2_4.jpg';
import ninja_1 from './../assets/comics/ninja/ninja_1.jpg';
import ninja_2 from './../assets/comics/ninja/ninja_2.jpg';
import ninja_3 from './../assets/comics/ninja/ninja_3.jpg';
import ninja_4 from './../assets/comics/ninja/ninja_4.jpg';
import questaelavia_1 from './../assets/comics/questaelavia/questaelavia_1.jpg';
import questaelavia_2 from './../assets/comics/questaelavia/questaelavia_2.jpg';
import questaelavia_3 from './../assets/comics/questaelavia/questaelavia_3.jpg';
import questaelavia_4 from './../assets/comics/questaelavia/questaelavia_4.jpg';
import questaelavia_5 from './../assets/comics/questaelavia/questaelavia_5.jpg';
import questaelavia_6 from './../assets/comics/questaelavia/questaelavia_6.jpg';
import torta_1 from './../assets/comics/torta/torta_1.jpg';
import torta_2 from './../assets/comics/torta/torta_2.jpg';
import torta_3 from './../assets/comics/torta/torta_3.jpg';
import torta_4 from './../assets/comics/torta/torta_4.jpg';
import kaboom_1 from './../assets/comics/kaboom.jpg';
import sveglia_1 from './../assets/comics/sveglia/sveglia_1.jpg';
import sveglia_2 from './../assets/comics/sveglia/sveglia_2.jpg';
import sveglia_3 from './../assets/comics/sveglia/sveglia_3.jpg';
import sveglia_4 from './../assets/comics/sveglia/sveglia_4.jpg';
import raimbow_1 from './../assets/comics/raimbow/raimbow_1.jpg';
import raimbow_2 from './../assets/comics/raimbow/raimbow_2.jpg';
import raimbow_3 from './../assets/comics/raimbow/raimbow_3.jpg';
import raimbow_4 from './../assets/comics/raimbow/raimbow_4.jpg';

import { ComicImageMenuType } from '../models/type';

export function useComic() {
  const comicThumbs: ComicImageMenuType[] = [
    {
      src: c01,
      title: 'Pace e tranquillità',
      description: 'Pace e tranquillità...o quasi!',
      paths: [
        meditazione_1,
        meditazione_2,
        meditazione_3,
        meditazione_4,
        meditazione_2,
        meditazione_5,
        meditazione_6,
      ],
    },
    {
      src: c02,
      title: 'Ma come fanno i pipistrelli?',
      description:
        'Quando tuo figlio ti fa una domanda ma la risposta è già dentro di lui...',
      paths: [pipistrelli_1, pipistrelli_2, pipistrelli_3, pipistrelli_4],
    },
    {
      src: c03,
      title: 'Passeggiate rilassanti 1',
      description:
        'Quando vuoi fare una passeggiata rilassante ma hai un beagle',
      paths: [passeggiata1_1, passeggiata1_2, passeggiata1_3, passeggiata1_4],
    },
    {
      src: c04,
      title: 'Passeggiate rilassanti 2',
      description: 'Passeggiando in città si incontra gente simpatica',
      paths: [passeggiata2_1, passeggiata2_2, passeggiata2_3, passeggiata2_4],
    },
    {
      src: c05,
      title: 'La torta',
      description: 'I bambini non hanno filtri',
      paths: [torta_1, torta_2, torta_3, torta_4],
    },
    {
      src: c06,
      title: 'Mi sono persa',
      description: 'Mi perdo, ma poi mi ritrovo',
      paths: [
        questaelavia_1,
        questaelavia_2,
        questaelavia_3,
        questaelavia_4,
        questaelavia_5,
        questaelavia_6,
      ],
    },
    {
      src: c07,
      title: 'Bimbo Ninja',
      description: 'Mio figlio "mi gioca"',
      paths: [ninja_1, ninja_2, ninja_3, ninja_4],
    },
    {
      src: c08,
      title: 'Kaboom!',
      description: 'Una ordinaria mattina come tante',
      paths: [kaboom_1],
    },
    {
      src: c09,
      title: 'Sveglia',
      description: 'Della serie: la mattina mi dovete parlare il pomeriggio',
      paths: [sveglia_1, sveglia_2, sveglia_3, sveglia_4],
    },
    {
      src: c10,
      title: 'Mi tingo i capelli',
      description: 'Esperimenti arcobalenici',
      paths: [raimbow_1, raimbow_2, raimbow_3, raimbow_4],
    },
  ];
  return { comicThumbs };
}

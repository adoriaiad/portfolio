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
import meditazione from './../assets/comics/meditazione.jpg';
import kaboom from './../assets/comics/kaboom.jpg';
import ninja from './../assets/comics/ninja.jpg';
import passeggiata1 from './../assets/comics/passeggiata1.jpg';
import passeggiata2 from './../assets/comics/passeggiata2.jpg';
import pipistrelli from './../assets/comics/pipistrelli.jpg';
import questaelavia from './../assets/comics/questaelavia.jpg';
import raimbow from './../assets/comics/raimbow.jpg';
import sveglia from './../assets/comics/sveglia.jpg';
import torta from './../assets/comics/torta.jpg';
import { ComicImageMenuType } from '../models/type';

export function useComic(){
    
    const comicThumbs: ComicImageMenuType[] = [
        {
          src: c01,
          title: 'Pace e tranquillità',
          description: 'Pace e tranquillità...o quasi!',
          path: meditazione,
        },
        {
          src: c02,
          title: 'Ma come fanno i pipistrelli?',
          description: 'Quando tuo figlio ti fa una domanda ma la risposta è già dentro di lui...',
          path: pipistrelli,
        },
        {
          src: c03,
          title: 'Passeggiate rilassanti 1',
          description: 'Quando vuoi fare una passeggiata rilassante ma hai un beagle',
          path: passeggiata1,
        },
        {
          src: c04,
          title: 'Passeggiate rilassanti 2',
          description: 'Passeggiando in città si incontra gente simpatica',
          path: passeggiata2,
        },
        {
          src: c05,
          title: 'La torta',
          description: 'I bambini non hanno filtri',
          path: torta,
        },
        {
          src: c06,
          title: 'Mi sono persa',
          description: 'Mi perdo, ma poi mi ritrovo',
          path: questaelavia,
        },
        {
          src: c07,
          title: 'Bimbo Ninja',
          description: 'Mio figlio "mi gioca"',
          path: ninja,
        },
        {
          src: c08,
          title: 'Kaboom!',
          description: 'Una ordinaria mattina come tante',
          path: kaboom,
        },
        {
          src: c09,
          title: 'Sveglia',
          description: 'Della serie: la mattina mi dovete parlare il pomeriggio',
          path: sveglia,
        },
        {
          src: c10,
          title: 'Mi tingo i capelli',
          description: 'Esperimenti arcobalenici',
          path: raimbow,
        },
      ];
    return {comicThumbs}
}
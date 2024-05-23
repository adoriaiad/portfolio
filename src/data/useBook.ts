import { BookItemType } from "../models/type";
import cover01 from '../../src/assets/img/books/cover_01.png';
import cover02 from '../../src/assets/img/books/cover_02.png';
import sentichemusica from '../../src/assets/img/books/sentichemusica2.jpg';

export function useBook(){
    const booksCover: BookItemType[] = [
        {
            src: cover01,
            description: "La passione LEGO® per principianti",
            edition: "Ed. libri SANDIT",
            externalUrl: "https://www.sanditlibri.it/la-passione-legor-per-principianti.html"
        },
        {
            src: cover02,
            description: "I robottoni giapponesi in mattoncini LEGO®",
            edition: "Ed. libri SANDIT",
            externalUrl: "https://www.sanditlibri.it/i-robottoni-giapponesi-in-mattoncini-legor.html"
        },
    ];

    const books: BookItemType[] = [
        {
            src: sentichemusica,
            description: "Senti che Musica!",
            edition: "Ed. Splen edizioni",
            externalUrl: "https://splen.it/prodotto/senti-che-musica"
        }
    ];

    return {booksCover, books};
}
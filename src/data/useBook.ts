import { BookItemType } from "../models/type";
import cover01 from '../../src/assets/img/books/cover_01.png';
import sentichemusica from '../../src/assets/img/books/sentichemusica.jpg';
import { useTranslation } from "react-i18next";

export function useBook(){
    const { t } = useTranslation();
    const booksCover: BookItemType[] = [
        {
            src: cover01,
            description: "La passione LEGO® per principianti",
            edition: "Ed. libri SANDIT",
            externalUrl: "https://www.sanditlibri.it/la-passione-legor-per-principianti.html"
        }
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
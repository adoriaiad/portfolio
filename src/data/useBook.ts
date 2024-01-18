import { BookItemType } from "../models/type";
import cover01 from '../../src/assets/img/books/cover_01.png';
import { useTranslation } from "react-i18next";

export function useBook(){
    const { t } = useTranslation();
    const books: BookItemType[] = [
        {
            src: cover01,
            description: t('BOOK.COVERDESCRIPTION'),
            externalUrl: "https://www.sanditlibri.it/la-passione-legor-per-principianti.html"
        }
    ];

    return {books};
}
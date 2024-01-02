import { BookItemType } from "../models/type";
import cover01 from '../../src/assets/img/books/cover_01.png';

export function useBook(){
    const books: BookItemType[] = [
        {
            src: cover01,
            description: "La passione LEGO&reg;<br/>per principianti<br/>Ed. Libri SANDIT"
        }
    ];

    return {books};
}
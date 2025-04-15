import { BookItemType } from "../models/type";
import cover01 from '../../src/assets/img/books/cover_01.png';
import cover02 from '../../src/assets/img/books/cover_02.png';
import sentichemusica from '../../src/assets/img/books/sentichemusica.png';
import aspassotraipianeti from '../../src/assets/img/books/aspassotraipianeti.png';

export function useBook(){
    const booksCover: BookItemType[] = [
        {
            src: cover01,
            description: "La passione LEGO® per principianti",
            edition: "Ed. libri SANDIT - 2023",
            illustrator: "Angelita Doria",
            author: "Francesco Frangioja",
            externalUrl: "#"
        },
        {
            src: cover02,
            description: "I robottoni giapponesi in mattoncini LEGO®",
            edition: "Ed. libri SANDIT - 2024",
            illustrator: "Angelita Doria",
            author: "Francesco Frangioja",
            externalUrl: "#"
        },
    ];

    const books: BookItemType[] = [
        {
            src: sentichemusica,
            description: "Senti che Musica!",
            edition: "Ed. Splen edizioni - 2024",
            illustrator: "Angelita Doria",
            externalUrl: "/sentichemusica"
        },
        {
            src: aspassotraipianeti,
            description: "A spasso tra i pianeti",
            edition: "Ed. Splen edizioni - 2025",
            author: "Clelia Lombardo",
            illustrator: "Angelita Doria",
            externalUrl: "#"
        }
    ];

    return {booksCover, books};
}
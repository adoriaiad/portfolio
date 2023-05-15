import isEmpty from "lodash.isempty";
import React, { useEffect, useMemo, useState } from "react";

import { useContext } from "react";

type LanguageProps = {
    languageMode: (lang: string) => void;
    selected: string;
}
const Language = React.createContext({} as LanguageProps );

export function useLanguage() {
    return useContext(Language);
}

const I18N = "i18nextLng";

const LanguageProvider: React.FC<{ children: React.ReactNode}> = (props) => {
    const [lang, setLang] = useState<string>(localStorage.getItem(I18N) || '');
    
    const langSelected = useMemo(() => ({
        languageMode: (lang: string) => {
            setLang(lang);
        },
        selected: lang
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }),[]);

    useEffect(() => {
        !isEmpty(lang) && localStorage.setItem(I18N, lang);
    }, [lang])

    return (
        <Language.Provider value={langSelected}>
            {props.children}
        </Language.Provider>
    )
}

export default LanguageProvider;
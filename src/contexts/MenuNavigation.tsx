import React, { useMemo, useState } from "react";

import { useContext } from "react";

type MenuNavigationProps = {
    selected: string;
    pageSelection: (page: string) => void;
}

const SelectedPage = React.createContext({} as MenuNavigationProps);

export function useMenuNavigation() {
    return useContext(SelectedPage);
}

const MenuNavigationProvider: React.FC<{ children: React.ReactNode}> = (props) => {
    const [page, setPage] = useState<string>('/');

    const pageSelected = useMemo(() => ({
        pageSelection: (page: string) => {
            setPage(page);
        },
        selected: page
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }),[page]);

    return (
        <SelectedPage.Provider value={pageSelected}>
            {props.children}
        </SelectedPage.Provider>
    )
}

export default MenuNavigationProvider;
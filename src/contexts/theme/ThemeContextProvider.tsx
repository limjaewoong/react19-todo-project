import React, {useMemo, useState} from 'react';
import {ThemeContext, ThemeContextAction} from "./ThemeContext.ts";

function ThemeContextProvider({children} :{children : React.ReactNode}) {

    const [theme, setTheme] = useState('light');

    const changeTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const memorization = useMemo(()=> ({changeTheme}),[theme]);

    return (
        <ThemeContextAction.Provider value={memorization}>
            <ThemeContext.Provider value={{theme}}>
                {children}
            </ThemeContext.Provider>
        </ThemeContextAction.Provider>
    );
}

export default ThemeContextProvider;
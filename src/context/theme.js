import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",  // Declaration of context
    lightTheme: () => {},
    darkTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider; // We will use this variable to provide the context.

export default function useTheme(){
    return useContext(ThemeContext);
}
// Like this we can create a HOOK and return context, and we can use it anywhere by calling this hook.
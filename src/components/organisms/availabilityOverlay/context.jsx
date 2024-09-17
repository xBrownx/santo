import { createContext, useContext, useState } from "react";

const HoverContext = createContext(null);
const ToggleHoverContext = createContext(null);
export const AvailabilityProvider = ({ children }) => {
    const [hoverKey, setHoverKey] = useState(null);

    return (
        <HoverContext.Provider value={hoverKey}>
            <ToggleHoverContext.Provider value={setHoverKey}>
                {children}
            </ToggleHoverContext.Provider>
        </HoverContext.Provider>

    );
}


// eslint-disable-next-line react-refresh/only-export-components
export const useHoverContext = () => {
    return useContext(HoverContext);
}

export const useToggleHoverContext = () => {
    return useContext(ToggleHoverContext);
}
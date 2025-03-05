import { useState, useEffect } from "react";

const useTheme = () => {
    const getInitialTheme = () => {
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};

export default useTheme;

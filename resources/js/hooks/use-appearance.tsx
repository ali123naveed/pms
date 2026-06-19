import { useEffect, useState } from 'react';

export type Appearance = 'light 🌕' | 'dark 🌑' | 'system 💻';
const DEFAULT_APPEARANCE: Appearance = 'system 💻';

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const normalizeAppearance = (value: string | null): Appearance => {
    switch (value) {
        case 'light':
        case 'light 🌕':
            return 'light 🌕';
        case 'dark':
        case 'dark 🌑':
            return 'dark 🌑';
        case 'system':
        case 'system 💻':
            return 'system 💻';
        default:
            return DEFAULT_APPEARANCE;
    }
};

const applyTheme = (appearance: Appearance) => {
    const isDark = appearance === 'dark 🌑' || (appearance === 'system 💻' && prefersDark());
    document.documentElement.classList.toggle('dark', isDark);
};

const handleSystemThemeChange = () => {
    const currentAppearance = normalizeAppearance(localStorage.getItem('appearance'));
    applyTheme(currentAppearance);
};

export function initializeTheme() {
    const savedAppearance = normalizeAppearance(localStorage.getItem('appearance'));

    applyTheme(savedAppearance);

    mediaQuery.addEventListener('change', handleSystemThemeChange);
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>(DEFAULT_APPEARANCE);

    const updateAppearance = (mode: Appearance) => {
        setAppearance(mode);
        localStorage.setItem('appearance', mode);
        applyTheme(mode);
    };

    useEffect(() => {
        updateAppearance(normalizeAppearance(localStorage.getItem('appearance')));

        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, []);

    return { appearance, updateAppearance };
}

/// <reference types="astro/client" />

declare global {
  interface Window {
    __themePreference?: {
      get: () => 'light' | 'dark';
      set: (theme: 'light' | 'dark') => void;
    };
  }
}

export {};

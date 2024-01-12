// translations.js

export function getTranslations(pathname: any) {
  return require(`../locales/${pathname === "/about" ? "ru" : "en"}.json`);
}

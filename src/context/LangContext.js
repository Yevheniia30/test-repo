import { useState, createContext, useContext } from 'react';

export const LangContext = createContext('ua');

// const useLang = useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('ua');

  const switchLang = () => setLang(prev => (prev === 'ua' ? 'en' : 'ua'));

  // const switchLang = e => {
  //   console.log('e target', e.target.textContent);
  //   const { textContent } = e.target;
  //   const text = textContent.toLowerCase();
  //   setLang(text);
  // };

  return <LangContext.Provider value={{ lang, switchLang }}>{children}</LangContext.Provider>;
};

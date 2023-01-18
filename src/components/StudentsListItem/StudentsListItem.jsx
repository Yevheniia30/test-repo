import { memo, useContext } from 'react';

import { LangContext } from 'context/LangContext';
import local from '../../local/local.json';

// мемо запамятовує які були пропси і що відмальовувалось, якщо пропси не змінились, то він не викликає функцію а одразу відмальвує те що і минулого разу
// інколи є сенс використовувати мемо якщо висока імовірність що батьківський компонент буде передавати дочірньому однакові пропси при нових рендерах
// якщо в дочірній компонент передається функція - наприклад видалення, то мемо не має сенсу, бо функція створюватиметься кожен раз нова і відповідно матиме нове посилання і сприйматиметься як новий проп - вирішується useCallback-ом

const StudentsListItem = ({ id, name, phone, onDelete }) => {
  // console.log('sum', sum);

  // console.log('render', name);
  const { lang } = useContext(LangContext);
  const del = local.del[lang];

  return (
    <>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => onDelete(id)}>
        {del}
      </button>
    </>
  );
};

export default memo(StudentsListItem);

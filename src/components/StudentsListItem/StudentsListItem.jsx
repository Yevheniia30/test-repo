import { memo, useContext } from 'react';

import { LangContext } from 'context/LangContext';
import local from '../../local/local.json';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import StudentsForm from 'components/StudentsForm/StudentsForm';

// мемо запамятовує які були пропси і що відмальовувалось, якщо пропси не змінились, то він не викликає функцію а одразу відмальвує те що і минулого разу
// інколи є сенс використовувати мемо якщо висока імовірність що батьківський компонент буде передавати дочірньому однакові пропси при нових рендерах
// якщо в дочірній компонент передається функція - наприклад видалення, то мемо не має сенсу, бо функція створюватиметься кожен раз нова і відповідно матиме нове посилання і сприйматиметься як новий проп - вирішується useCallback-ом
// є сенс використовувати якщо знаете що компонент буде багато разів перемальовуватися з однаковими пропсами
const StudentsListItem = ({ id, name, number, onDelete, onUpdate }) => {
  const [openModal, setOpenModal] = useState(false);

  // console.log('render', name);
  const { lang } = useContext(LangContext);
  const del = local.del[lang];
  const edit = local.edit[lang];

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => setOpenModal(true)}>
        {edit}
      </button>
      <button type="button" onClick={() => onDelete(id)}>
        {del}
      </button>
      {openModal && (
        <Modal onClose={closeModal}>
          <StudentsForm
            userToEdit={{ name, number }}
            id={id}
            onSubmit={onUpdate}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default memo(StudentsListItem);

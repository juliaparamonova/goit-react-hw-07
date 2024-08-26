import clsx from 'clsx';
import s from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={clsx(s.item)}>
      <div>
        <div className={clsx(s.line)}>
          <span>
            <FaUser />
          </span>
          <p className={clsx(s.text)}>{item.name}</p>
        </div>
        <div className={clsx(s.line)}>
          <span>
            <FaPhone />
          </span>
          <p className={clsx(s.text)}>{item.number}</p>
        </div>
      </div>
      <div className={clsx(s.btn)}>
        <button
          className={clsx(s.btn)}
          onClick={() => dispatch(deleteContact(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;

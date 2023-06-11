import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p className={styles.contactName}>{name}</p>
        <p className={styles.contactNumber}>{number}</p>
        <button
          className={styles.deleteButton}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

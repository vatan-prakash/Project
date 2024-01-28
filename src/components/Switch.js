// components/SwitchButton.js

import React, { useState } from 'react';
import styles from '@/styles/switch.module.css';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    </div>
  );
};

export default SwitchButton;

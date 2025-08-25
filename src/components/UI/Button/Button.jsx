import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
const Button = ({ primary, outline, className, children, ...rest }) => {
   const classes = clsx(styles.btn, outline && styles.outline, primary && styles.primary, className);

   return (
      <button className={classes} {...rest}>
         {children}
      </button>
   );
};

export default Button;

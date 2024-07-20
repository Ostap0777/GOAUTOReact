import React from 'react'
import styles from '../../UI/Button/Button.module.css'

export default function Button({children, ...props}) {
  return (
	 <button className={styles.button}>
		{children}
	 </button>
  )
}

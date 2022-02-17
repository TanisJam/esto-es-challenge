import React from 'react'
import {AiOutlineLoading} from 'react-icons/ai'
import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.container}>
      <AiOutlineLoading className={styles.small}/>
    </div>
  )
}

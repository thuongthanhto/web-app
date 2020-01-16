import React from 'react'
import NewLetterForm from '../NewLetterForm'
import styles from './styles.scss'

const NewLetterBlock = () => {
  return (
    <div className={styles.newLetterBlock}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-8">
            <h2 className={styles.title}>Coingeek Newsletters</h2>
            <NewLetterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLetterBlock

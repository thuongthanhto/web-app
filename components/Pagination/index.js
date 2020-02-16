import { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import _get from 'lodash/get'
import _times from 'lodash/times'
// import Pagination from 'react-bootstrap/Pagination'
import styles from './styles.scss'

const PaginationItem = ({
  number,
  isActive = false,
  handleChange = () => {},
}) => {
  return (
    <li
      className={isActive ? 'page-item active' : 'page-item'}
      onClick={() => handleChange(number)}
    >
      <span aria-current="page" className="page-link current">
        {number}
      </span>
    </li>
  )
}

const renderItems = (totalPages, activePage, onChange) => {
  let items = []

  if (activePage - 2 > 1) {
    items.push(<PaginationItem number={1} handleChange={onChange} />)
    items.push(<PaginationItem number="..." />)
  }

  for (let i = activePage - 2; i <= activePage + 2; i++) {
    if (i > 0 && i <= totalPages) {
      items.push(
        <PaginationItem
          number={i}
          isActive={i === activePage}
          handleChange={onChange}
        />
      )
    }
  }

  if (activePage + 2 < totalPages) {
    items.push(<PaginationItem number="..." />)
    items.push(<PaginationItem number={totalPages} handleChange={onChange} />)
  }

  return items
}

const Pagination = props => {
  const { page, totalPages, onChange } = props

  return (
    <nav className={styles.cgPagination}>
      <ul className="pagination pg-blue">
        {page > 1 && (
          <li className="page-item" onClick={() => onChange(page - 1)}>
            <a className="next page-link" href="#">
              &laquo;
            </a>
          </li>
        )}
        {renderItems(totalPages, page, onChange)}
        {page < totalPages && (
          <li className="page-item " onClick={() => onChange(page + 1)}>
            <a className="next page-link">&raquo;</a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination

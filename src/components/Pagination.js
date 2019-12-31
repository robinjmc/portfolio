import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

class Pagination extends Component {

  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 1, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 1;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords - this.pageLimit);

    this.state = { currentPage: 0 };
  }

  componentDidMount() {
    this.gotoPage(Math.floor(Math.random() * this.totalRecords));
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    if (page > this.totalPages) page = 0;
    if (page < 0) page = this.totalPages;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - 1);
  }

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + 1);
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    return range(1, totalPages + 1);
  }

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;
    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();
    return (
      <Fragment>
        <nav className="Pagination__nav" aria-label="Countries Pagination">
          <a className="Pagination__arrow" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>&#10094;</a>
            {pages.map((page, index) => {
              return (
                  <a className={`Pagination__page${currentPage === page - 1 ? ' Pagination--active' : ''}`} href="#" onClick={this.handleClick(page - 1)}></a>
              );
            })}
          <a className="Pagination__arrow" href="#" aria-label="Next" onClick={this.handleMoveRight}>&#10095;</a>
        </nav>
      </Fragment>
    );

  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;

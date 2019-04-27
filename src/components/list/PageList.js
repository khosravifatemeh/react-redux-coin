import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../../assets/css/PageList.css';

const PageList = (props) => {
  const { totalPages, page, handlePaginationClick } = props;

  return (
    <Pagination size="lg" className="PageList">
      <PaginationItem>
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={() => handlePaginationClick('prev')} disabled={page <= 1} />
      </PaginationItem>
      <PaginationItem className="PageList-info">
        <span>
          Page <b>{page}</b> of <b>{totalPages}</b>

        </span>

      </PaginationItem>
      <PaginationItem>
        <PaginationLink next disabled={page === totalPages} onClick={() => handlePaginationClick('next')} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last />
      </PaginationItem>
    </Pagination>

  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default PageList;

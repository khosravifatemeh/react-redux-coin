import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers/http';
import {getCoinList} from '../../services/coinApi'
import Pagination from './PageList';
import Loading from '../common/Loading';
import Items from './Items';
import PageList from './PageList';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      totalPages: 0,
      // NOTE: Don't set it greater than 50, because maximum perPage for API is 50
      perPage: 20,
      currencies: [],
      loading: false,
      error: '',
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentWillMount() {
    this.fetchCurrencies();
  }
putCurrenciesInState(data){
  const { totalPages, currencies } = data;

  this.setState({
    currencies,
    totalPages,
    error: '',
    loading: false,
  });
}
  fetchCurrencies() {
    const { page, perPage } = this.state;
    const cacheCurrenciesKey=('currencies').concat(page);
    // Set loading to true, while we are fetching data from server
    this.setState({ loading: true });
    if (localStorage.getItem(cacheCurrenciesKey)) {
      let cacheCurrencies=JSON.parse(localStorage.getItem(cacheCurrenciesKey));
      this.putCurrenciesInState(cacheCurrencies);
    
    }
    if(!localStorage.getItem(cacheCurrenciesKey)){
      // fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
      // .then(handleResponse)
      getCoinList({page,perPage})
      .then((data) => {
        // Set received data in components state
        // Clear error if any and set loading to false
      
        let responseCurrencies=JSON.stringify(data);
        localStorage.setItem(cacheCurrenciesKey,responseCurrencies);
        this.putCurrenciesInState(data);
      })
      .catch((error) => {
        // Show error message, if request fails and set loading to false
        this.setState({
          error: error.errorMessage,
          loading: false,
        });
      });

    }
    // Fetch crypto currency data from API with page and perPage parameters
      }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;

    // Increment nextPage if direction variable is next, otherwise decrement it
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    // Call fetchCurrencies function inside setState's callback
    // Because we have to make sure first page state is updated
    this.setState({ page: nextPage }, () => {
      this.fetchCurrencies();
    });
  }

  render() {
    const { currencies, loading, error, page, totalPages } = this.state;

    // Render only loading component, if it's set to true
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    // Render only error message, if error occured while fetching data
    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <div>
        <Items currencies={currencies} />

        <PageList
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;

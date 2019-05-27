import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { InputGroup, Input} from 'reactstrap';
import Loading from '../common/Loading';
import '../../assets/css/Search.css';
const Search = (props) => {
const { searchResults, searchQuery, query, loading, error, resetSearch,history }=props;
const handleChange = e => {
    const query = e.target.value;
    if (!query) {
      return false;
    }
    searchQuery(query);
  }
 const handleRedirect = (currencyId) => {
    resetSearch();
    history.push(`/currency/${currencyId}`);
  }
 const renderSearchResults = () => {
    if (!query || !searchResults) {
      return '';
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map(result =>
            <div
              key={result.id}
              className="Search-result"
              onClick={() => handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          )}
        </div>
      )
    }

    if (!loading||error) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">
            {error?error:"No results found."}
          </div>
        </div>
      )
    }
  }
  return (

    <div className='Search'>
      <div>

        <form>
          <InputGroup className="no-border">
            <Input className="Search-input" placeholder="Currency name" value={query} onChange={handleChange} />

            <span className="Search-icon" />

          </InputGroup>
        </form>

        {loading &&
          <div className="Search-loading">
            <Loading
              width="12px"
              height="12px"
            />
          </div>}
      </div>

      {renderSearchResults()}
    </div>
  );
}



// class Search extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       searchResults: [],
//       searchQuery: '',
//       loading: false,
//     }

//     this.handleRedirect = this.handleRedirect.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     const searchQuery = e.target.value;

//     this.setState({ searchQuery });

//     // If searchQuery isn't present, don't send request to server
//     if (!searchQuery) {
//       return false;
//     }

//     // Set loading to true, while we are fetching data from server
//     this.setState({ loading: true });

//     // fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
//     // .then(handleResponse)
//     searchCoin(searchQuery)
//       .then((result) => {
//         this.setState({
//           searchResults: result,
//           loading: false,
//         });
//       });
//   }

//   handleRedirect(currencyId) {
//     // Clear input value and close autocomplete container,
//     // by clearing searchQuery state
//     this.setState({
//       searchQuery: '',
//       searchResults: [],
//     });

//     // Redirect to currency page
//     this.props.history.push(`/currency/${currencyId}`);
//   }

//   renderSearchResults() {
//     const { searchResults, searchQuery, loading } = this.state;

//     if (!searchQuery) {
//       return '';
//     }

//     if (searchResults.length > 0) {
//       return (
//         <div className="Search-result-container">
//           {searchResults.map(result =>
//             <div
//               key={result.id}
//               className="Search-result"
//               onClick={() => this.handleRedirect(result.id)}
//             >
//               {result.name} ({result.symbol})
//             </div>
//           )}
//         </div>
//       )
//     }

//     // Send no result, only if loading is set to false
//     // To avoid showing no result, when actually there are ones
//     if (!loading) {
//       return (
//         <div className="Search-result-container">
//           <div className="Search-no-result">
//             No results found.
//           </div>
//         </div>
//       )
//     }
//   }

//   render() {
//     const { searchQuery, loading } = this.state;

//     return (

//       <div className='Search'>
//         <div>

//             <form>
//               <InputGroup className="no-border">
//                 <Input  className="Search-input" placeholder="Currency name"  value={searchQuery} onChange={this.handleChange} />

//                   <span className="Search-icon" />

//               </InputGroup>
//             </form>

//           {loading &&
//             <div className="Search-loading">
//               <Loading
//                 width="12px"
//                 height="12px"
//               />
//             </div>}
//         </div>

//         {this.renderSearchResults()}
//       </div>
//     );
//   }
// }

Search.propTypes = {
  history: PropTypes.object.isRequired,
  searchResults:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired,
  query:PropTypes.string.isRequired,
  error:PropTypes.string.isRequired,
  searchQuery:PropTypes.func.isRequired,
  resetSearch:PropTypes.func.isRequired
}

export default withRouter(Search);

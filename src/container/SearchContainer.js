import {connect} from 'react-redux';
import Search from '../components/common/Search';
import * as currencyActions from '../actions/currencyActions'

const mapStateToProps = state =>({
    searchResults:state.search.searchResults,
    loading:state.search.loading,
    query:state.search.query,
    error:state.search.error

    
});
const mapDispatchToProps = dispatch => ({
    searchQuery: (query) => {
        dispatch(currencyActions.searchQuery(query))
    },
    resetSearch: () => {
        dispatch(currencyActions.resetSearch())
    }
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Search)
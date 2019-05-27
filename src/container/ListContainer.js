import {connect} from 'react-redux';
import List from '../components/list/List';
import * as currencyActions from '../actions/currencyActions';

const mapStateToProps = state =>({
    totalPages:state.currency.totalPages,
    page:state.currency.page,
    perPage:state.currency.perPage,
    currencies:state.currency.currencies,
    loading:state.currency.loading,
    error:state.currency.error
});
const mapDispatchToProps = dispatch =>({
    getAll:(page,perPage)=>{
        dispatch(currencyActions.getAll(page,perPage))
    }
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(List)

import {connect} from 'react-redux';
import Detail from '../components/detail/Detail';
import * as currencyActions from '../actions/currencyActions'

const mapStateToProps = state =>({
    currency:state.currency.currency,
    loading:state.currency.loading,
    error:state.currency.error
});
const mapDispatchToProps = (dispatch) =>({
    getById:(currencyId)=>{
        dispatch(currencyActions.getById(currencyId))
    }
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Detail)
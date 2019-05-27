import React from 'react';
import { renderChangePercent } from '../../helpers/service';
import Loading from '../common/Loading';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'reactstrap';
import '../../assets/css/Detail.css';


class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    // Get id from url params
    const currencyId = this.props.match.params.id;
    // Fetch currency
    this.props.getById(currencyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Get id from new url params
      const currencyId = nextProps.match.params.id;
      // Fetch currency
      this.props.getById(currencyId);
    }
  }


  render() {
    const { currency, loading, error } = this.props;
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    if (error) {
      return <div className="error">{error}</div>
    }
    if (!currency) {
      return '';
    }
    return (
      <div className="Detail">
        <div className="Detail-container">
          <Card body>
            <CardTitle> {currency.name} ({currency.symbol})</CardTitle>

            <CardText> Price <span className="Detail-value">$ {currency.price}</span></CardText>
            <CardText>Rank <span className="Detail-value">{currency.rank}</span></CardText>
            <CardText>
              24H change
            <span className="Detail-value">
                {renderChangePercent(currency.percentChange24h)}
              </span>
            </CardText>
            <CardText>
              <span className="Detail-title">Market cap</span>
              <span className="Detail-dollar">$</span>
              {currency.marketCap}
            </CardText>
            <CardText>
              <span className="Detail-title">24H Volume</span>
              <span className="Detail-dollar">$</span>
              {currency.volume24h}
            </CardText>
            <CardText>
              <span className="Detail-title">Total supply</span>
              {currency.totalSupply}
            </CardText>
          </Card>

        </div>
      </div>
    );
  }
}
Detail.PropTypes = {
  currency: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  getById: PropTypes.func.isRequired,

}
export default Detail;

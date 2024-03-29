import React from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {renderChangePercent} from '../../helpers/service';
import '../../assets/css/Items.css';

const Items = (props) => {
  const { history, currencies } = props;
if(!currencies){
return '';
}
  return (
    <div className="Table-container">
      <Table className="Table" borderless>
        <thead className="Table-head">
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {currencies.map(currency =>
            <tr
              key={currency.id}
              onClick={() => history.push(`/currency/${currency.id}`)}
            >
              <td>
                <span className="Table-rank">{currency.rank}</span>
                {currency.name}
              </td>
              <td>
                <span className="Table-dollar">$</span>
                {currency.price}
              </td>
              <td>
                <span className="Table-dollar">$</span>
                {currency.marketCap}
              </td>
              <td>{renderChangePercent(currency.percentChange24h)}</td>
            </tr>)}
        </tbody>
      </Table>
    </div>
  );
}

Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(Items);

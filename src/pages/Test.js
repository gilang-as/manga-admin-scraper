import React from "react";
import {useQuery, gql} from '@apollo/client';
import "./test.css"

const EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

const TestPage = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES, {
        variables: {
            currency: "USD"
        }
    });
    const [show, setShow] = React.useState(false)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return(
        <>
            <label className="switch">
                <input type="checkbox" checked={show} onClick={()=>setShow(!show)} />
                <span className="slider"/>
            </label>
            {data.rates.map(({ currency, rate }) => (
                <div key={currency}>
                    <p>
                        {currency}: {show?rate:null}
                    </p>
                </div>
            ))}
        </>
    )
}

export default TestPage
import React from "react";
// import {useQuery, gql} from '@apollo/client';
import "./test.css"

// const EXCHANGE_RATES = gql`
//   query Manga($path: String!) {
//     manga @rest(type: "Manga", method:"GET", path: "/manga/91941", endpoint: "jikan_v3") {
//         title
//         image_url
//     }
//   }
// `;

const TestPage = () => {
    // const { loading, error, data } = useQuery(EXCHANGE_RATES);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    return(
        <>
            <h1>Hello WOrld</h1>
        </>
    )
}

export default TestPage
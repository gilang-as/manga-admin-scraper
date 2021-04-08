import {gql} from "@apollo/client";

export const GET_MANGA = gql`
    query getManga($skip: Int, $limit: Int) {
        getManga(skip: $skip, limit: $limit) {
            items {
                id
                title
                original_title
                english_title
                status
                volumes
                chapters
                publishing
                published_from
                published_to
                synopsis
                image_url
                created_at
            }
            count
        }
    }
`;
import {gql} from "@apollo/client";

export const GET_MANGA = gql`
  query manga($page: Int!, $size: Int!) {
    manga(page: $page, size: $size) {
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
    }
}
`;
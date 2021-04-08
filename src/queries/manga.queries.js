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

export const ADD_MANGA = gql`
    mutation addManga($title: String!, $original_title: String!, $english_title: String!, $status: String!, $volumes: Int!, $chapters: Int!, $publishing:Boolean!, $published_from: DateTime!, $published_to: DateTime!, $synopsis: String!, $image_url: String!) {
        addManga(title: $title, original_title: $original_title, english_title: $english_title, status: $status, volumes: $volumes, chapters: $chapters, publishing: $publishing, published_from: $published_from, published_to: $published_to, synopsis: $synopsis, image_url: $image_url) {
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
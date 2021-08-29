import React from 'react';
import useFetch from "../hooks/useFetch";

const url = "http://olacity.abc/wp-json/wp/posts";

export const getAll = () => {
    return useFetch(url);
}

export const get = (id) => {
    let itemURl = `${url}/${id}`;
    return useFetch(itemURl);
}
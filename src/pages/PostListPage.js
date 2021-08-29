import React from 'react';
import { Container } from 'react-bootstrap';
import PostList from '../components/PostList';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const PostListPage = () => {
    const {t} = useTranslation();
    let query = useQuery();
    const code = query.get('language');

    const languageMap = new Map();
    languageMap.set('vi', 36);
    languageMap.set('en', 34);
    
    let languageValue = languageMap.get(code)
    const language = languageValue && `&language=${languageValue}` || `&language=${34}`;

    const url = "http://olacity.abc/wp-json/wp/v2/posts?_embed=wp:featuredmedia" + language;
    let posts = useFetch(url);
    
    return (
        <Container>
            <h1 className="text-center my-5">{t('blog.title')}</h1>
            <PostList posts={posts} />
        </Container>
    )
}

export default PostListPage;
import React from 'react';
import { Row, Col, Card, CardColumns, Button } from 'react-bootstrap';
import HtmlParser from 'react-html-parser';
import Loading from './Loading';


const PostList = (props) => {
    const { posts } = props;

    if (!posts) {
        return <Loading />;
    }

    const cols = posts && posts.map((post) => {
        const _embedded = post._embedded

        const featuredImageUrl = _embedded && _embedded['wp:featuredmedia'][0].source_url

        return (
            
                <Card className="p-3" key={post.id}>
                    {
                        post.featured_media > 0 &&
                        <Card.Img variant="top" src={featuredImageUrl} />
                    }

                    <Card.Body>
                        <Card.Title>{post.title.rendered}</Card.Title>

                        {HtmlParser(post.excerpt.rendered)}
                    </Card.Body>
                </Card>
            
        )
    })

    return (
        <Row xs={12} sm={12} className="g-4">
            <CardColumns>
                {cols}
            </CardColumns>
        </Row>
    )
}

export default PostList;
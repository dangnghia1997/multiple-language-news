import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

const Loading = () => (
    <Row>
        <Col className="text-center">
            <Spinner animation="border" />
        </Col>
    </Row>
)

export default Loading;
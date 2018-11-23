import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import {  PRODUCT,  ROW_ITEMS_3 } from './constants';

const { STYLES: { CENTER, FLEX }, CLASSNAMES: { ROW_ITEMS } } = PRODUCT;

/*this the third on component anotherlist.js */
export default class Row3 extends Component {
    render() {
        return (
            <Row type={FLEX} justify={CENTER}>
                {
                    ROW_ITEMS_3.map(item =>
                        (<Col span={5} className={ROW_ITEMS} key={item.name}>
                            <Products
                                title={item.name}
                                pix={item.pix}
                                tag={item.cost}
                                email={item.email}
                                quantity={item.quantity}
                                location={item.location}
                                phone={item.phone}
                            />
                        </Col>)
                    )
                }
            </Row>
        );
    }
}

Row3.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};

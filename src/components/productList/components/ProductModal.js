import PropTypes from 'prop-types';
import React from 'react';
import { Card, Modal } from 'antd';

import { PRODUCT } from '../constants';

const { BUY, CANCEL, COST, EMAIL, LOCATION, PHONE, PRODUCERS_NAME, QUANTITY } = PRODUCT;

const generateDescription = data => {
    const { cost, email, location, quantity, phone, producerName } = data;
    const keyValuePairs = [
        { key: PRODUCERS_NAME, value: producerName },
        { key: LOCATION, value: location },
        { key: COST, value: cost },
        { key: QUANTITY, value: quantity },
        { key: PHONE, value: phone },
        { key: EMAIL, value: email },
    ];

    return keyValuePairs.map(({ key, value }) => <p key={key}><b>{key}</b> {value}</p>);
};

// React Component used to render the product detail information in a 'Modal'
class ProductModal extends React.Component {
    render() {
        const { data, handleCancel, visible } = this.props;
        const { image, title } = data;

        return (
            <Modal
                cancelText={CANCEL}
                closable={false}
                destroyOnClose
                onCancel={handleCancel}
                okText={BUY}
                onOk={handleCancel}
                title={title}
                visible={visible}
            >
                <Card cover={<img src={image} />}>
                    {generateDescription(data)}
                </Card>
            </Modal>
        );
    }
}

ProductModal.propTypes = {
    data: PropTypes.object,
    handleCancel: PropTypes.func,
    visible: PropTypes.bool,
};

export default ProductModal;

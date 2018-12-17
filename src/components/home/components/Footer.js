import React from 'react';
import { Layout } from 'antd';

import { FOOTER_DATA, FOOTER_STRINGS } from './constants';

const { Footer } = Layout;
const { CONTAINER, DYNAMIC_FOOTER, ROW } = FOOTER_STRINGS;

const footers = FOOTER_DATA.map(footer => (
    <div className={DYNAMIC_FOOTER} key={footer.key}>
        <h3>{footer.header}</h3>
        {
            footer.items.map(item => (
                <div key={item.title}>{item.title}</div>
            ))
        }
    </div>
));

class AppFoot extends React.Component {
    render () {
        return (
            <Footer className={CONTAINER}>
                <div className={ROW}>{footers}</div>
            </Footer>
        );
    }
}

export default AppFoot;

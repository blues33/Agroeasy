import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import ProfileContent from './ProfileContent';
import SideMenu from './SideMenu';
import { AddItem } from '../../addItem/components';
import { USER_PAGE } from '../constants';

const { Content, Sider } = Layout;
const {
    CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

class UserProfile extends React.Component {
    render() {
        console.log(this.props)
        const { match } = this.props;
        return(
            <Content className={BIG_CONTENT}>
                <Layout className={BIG_LAYOUT}>
                    <Sider width={200} className={SIDER}>
                        <SideMenu />
                    </Sider>
                    <Content className={SM_CONTENT}>
                        <Route path={'/profile'} exact strict component={ProfileContent} />
                        <Route
                            path={`${match.path}/items`}
                            component={AddItem}
                        />
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default UserProfile;

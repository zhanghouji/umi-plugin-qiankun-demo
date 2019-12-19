import React, { useEffect, Dispatch } from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import style from './main-index.less';

const { Header, Content, Footer } = Layout;
interface BasicLayoutPropsType {
  dispatch: Dispatch<any>;
  base: any;
  location: any;
}
const BasicLayout: React.FC<BasicLayoutPropsType> = props => {
  const { dispatch, base, location, children } = props;
  const { apps } = base;
  const selectKey = '/' + location.pathname.split('/')[1];
  useEffect(() => {
    dispatch({
      type: 'base/getApps',
    });
  }, []);
  console.log(base);
  return (
    <Layout className={style.main_layout}>
        <Header>
          <div className={style.main_logo}>{name}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            {apps.map((item: any) => (<Menu.Item key={item.base}><Link to={item.base}>{item.name}</Link></Menu.Item>))}
          </Menu>
        </Header>
        <Content className={style.main_content}>
          {selectKey === '/' ? children : null}
            {apps.length ? <div id="root-subapp-container"/> : null}
        </Content>
        <Footer className={style.main_footer}>Ant Design ©2019 Created by Ant UED</Footer>
      </Layout>
  );
};

export default connect(({ base }: { base: any }) => ({ base }))(BasicLayout);

import { Button,PageHeader } from 'antd';
import "./Header.css";
import React from 'react';
const Header = () => {
    return(
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Rental Website"
      extra={[
        <Button key="3" type="primary">Rent</Button>,
        <Button key="2">Buy</Button>,
        <Button key="3">Sell</Button>,
        <Button key="2">Manage Property</Button>,
        <Button key="3">Resources</Button>,
      ]}
    >
    </PageHeader>
  </div>);
};
export default Header;

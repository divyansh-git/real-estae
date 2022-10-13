import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;
const Card_ = (prop) => (
  <Card hoverable
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://media.istockphoto.com/photos/red-and-gray-row-houses-in-suburbia-picture-id1284635683?k=20&m=1284635683&s=612x612&w=0&h=6CRndnv_nuWhf_ghL_6-VqXUeYpIeXfKrHofCoUWdao="
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={`Rs.${prop.rent}`}
      description={`${prop.Area_Locality}(${prop.Area_Type})`}
    />

    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"10px"}}>
    <p>bedroom : {prop.bathroom}</p>
    <p>    area : {prop.area}</p>
    <p>   BHK:{prop.BHK}</p>
    </div>
  </Card>
);
export default Card_;
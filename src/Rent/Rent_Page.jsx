import React,{useState} from 'react';
import Card_ from "../Card/Card";
import {array} from "./Data"
import { Col, Row,Button } from 'antd';
import {
    Input,
    Select,
  } from 'antd';
  const { Option } = Select;


const Rent_Page= ()=>{
    const [array_,setArray]=useState(array);
    const [original_array,soa]=useState(array);
    const [currBHK,setBHK]=useState(null)
    const [currMinSize,setMinSize]=useState(0)
    const [currMaxSize,setMaxSize]=useState(400000)
    const [currMinRent,setMinRent]=useState(0)
    const [currMaxRent,setMaxRent]=useState(61239871)
    const [currLocality,setLocality]=useState("")

    const getData=()=>{
        setArray(original_array);
        console.log(currBHK);
        const newArray = array.filter((bhk)=>{
            return ((currBHK!=null ? bhk.BHK==currBHK :bhk.BHK) && bhk.Rent>=currMinRent && bhk.Rent<=currMaxRent && bhk.Size>=currMinSize && bhk.Size<=currMaxSize && (currLocality==""?bhk['Area Type']:bhk['Area Type']==currLocality));
        })
        setArray(newArray)
        console.log(array_);

    }
  
return(
    <>
     <Input.Group style={{
    display: "flex",
    justifyContent: "space-around",
    // backgroundColor:"red"
    marginTop:"20px"
}} >
      <Input placeholder='BHK' style={{width:"200px"}} onChange={(e)=>{
        console.log("hello1", parseInt(e.target.value))
        e.target.value!=""? setBHK(parseInt(e.target.value)):setBHK(null)
      }}></Input>
      <Select style={{width:"200px"}} defaultValue="Rent" onChange={(e)=>{
        if(e=="Option1")
        {
            setMinRent(0);
            setMaxRent(4999);
        }
        if(e=="Option2")
        {
            setMinRent(5000);
            setMaxRent(9999);
        }
        if(e=="Option3")
        {
            setMinRent(10000);
            setMaxRent(14999);
        }
        if(e=="Option4")
        {
            setMinRent(15000);
            setMaxRent(19999);
        }
        if(e=="Option5")
        {
            setMinRent(20000);
            setMaxRent(41762738137);
        }
         if(e=="none")
        {
            setMinRent(0);
            setMaxRent(400000);
        }
      }}>
        <Option value="none">none</Option>
        <Option value="Option1">less than 5000</Option>
        <Option value="Option2">5000-10000</Option>
        <Option value="Option3">10000-15000</Option>
        <Option value="Option4">15000-20000</Option>
        <Option value="Option5">greater than 20000</Option>
      </Select>
      <Select style={{width:"200px"}} defaultValue="Size" onChange={(e)=>{
        if(e=="Option1")
        {
            setMinSize(0);
            setMaxSize(499);
        }
        if(e=="Option2")
        {
            setMinSize(500);
            setMaxSize(999);
        }
        if(e=="Option3")
        {
            setMinSize(1000);
            setMaxSize(1499);
        }
        if(e=="Option4")
        {
            setMinSize(1500);
            setMaxSize(1999);
        }
        if(e=="Option5")
        {
            setMinSize(2000);
            setMaxSize(4176273813);
        }
        if(e=="none")
        {
            setMinSize(0);
            setMaxSize(4176273813);
        }
      }}>
        <Option value="none">none</Option>
        <Option value="Option1">less than 500</Option>
        <Option value="Option2">500-1000</Option>
        <Option value="Option3">1000-1500</Option>
        <Option value="Option4">1500-2000</Option>
        <Option value="Option5">greater than 2000</Option>
      </Select>
      <Select style={{width:"200px"}} defaultValue="Area" onChange={(e)=>{
       setLocality(e);
      }}>
        <Option value="">None</Option>
        <Option value="Carpet Area">Carpet Area</Option>
        <Option value="Super Area">Super Area</Option>
      </Select>
      <Button key="3" type="primary" onClick={getData}>Go</Button>
    </Input.Group>
    <Row style={{justifyContent:"space-around",marginTop:"20px"}} gutter={[24,24]}>
    {
        array_.map((el, idx)=>{
            return (<Col><Card_ key={idx} Area_Type={el['Area Type']} Area_Locality={el['Area Locality']} BHK={el.BHK} area= {el.Size} bathroom={el.Bathroom} rent={el.Rent}  /></Col>);
        })
    }
    </Row>
    </>
)
}
export default Rent_Page;
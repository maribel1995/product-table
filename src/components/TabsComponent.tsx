import {  Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

interface TabsProps{
  onTabChange: (key:'tenis' |'eletronicos' | 'maquiagens') => void
  tabs: {value: string, label:string}[]
  tab: string
}

function TabsComponent({onTabChange, tabs, tab}: TabsProps) {
  
  const handleTabChange = (e: any, value: 'tenis' |'eletronicos' | 'maquiagens') => {
    onTabChange(value);
  };

  return (
    <Tabs value={tab} onChange={handleTabChange} centered>
      {tabs.map((tab, index) => (
       <Tab component={Link} to={`/${tab.value}`} label={tab.label} value={tab.value} key={index} />
     
      ))}
    </Tabs>
  );
}

export default TabsComponent;

import {AppBar,Drawer,Toolbar,Typography,List,ListItem} from "@mui/material";
 import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
 import ContactCardGrid from "../Grid/ContactCardGrid";
 import ContactForm from "../Form/ContactForm";
 import ContactDataGrid from "../DataGrid/ContactDataGrid";
 import ContactTable from "../Table/ContactTable";


const list=[{text:"Input Form",route:"/form"},{text:"Contact Card Grid",route:"/grid"},{text:"Contact  Table",route:"/ContactTable"},{text:"Contact Data Grid",route:"/ContactDataGrid"}]

const drawerWidth=250;

const styleDrawer={
  drawer:{
    width:drawerWidth,
    "& .MuiBackdrop-root":{
      display:"none"
    }
  },
  drawerPaper:{
    width:drawerWidth,
    backgroundColor:"rgb(120,120,120,0.2)"
  }
}

function NavDrawer(){
  return (
<BrowserRouter>
<div>
<AppBar position="fixed" sx={{zIndex:9999}}>
<Toolbar>
  <Typography>
    Advance Material UI Styling
  </Typography>
</Toolbar>
</AppBar>
<Drawer variant="temporary" open={true} sx={styleDrawer.drawer}
PaperProps={{
  sx: simpleStyles.drawerPaper,
}}>
  <List>
{list.map((item,index)=>(
  <ListItem key={index}><Link to={item.route}>{item.text}</Link></ListItem>
))}
  </List>
  

</Drawer>
 <main>
  <Routes>
    <Route path={"/"} element={<ContactForm/>}/>
    <Route path={"/form"} element={<ContactForm/>}/>
    <Route path={"/grid"} element={<ContactCardGrid/>}/>
    <Route path={"/ContactTable"} element={<ContactTable/>}/>
    <Route path={"/ContactDataGrid"} element={<ContactDataGrid/>}/>
  </Routes>
  
  </main>   
    </div>
</BrowserRouter>
    
  )
}

export default NavDrawer;
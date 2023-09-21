import React from 'react';
import {  Route} from 'react-router-dom';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { TicketList, TicketEdit, TicketCreate } from './TicketList';
import { dataProvider } from "./dataProvider";
import Registrarse from "./registrarse";
import authProvider from './authProvider';



const App = () =>{
  return(
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="tickets" list={TicketList} edit={TicketEdit} create={TicketCreate} />
        <CustomRoutes>
          <Route path="/registrarse"  element={<Registrarse />}/>
        </CustomRoutes>
      </Admin>
          
        
  );
};
export default App;

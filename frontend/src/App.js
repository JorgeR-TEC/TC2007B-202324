import React from 'react';
import {  Route} from 'react-router-dom';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { TicketList, TicketEdit, TicketCreate } from './TicketList';
import { dataProvider } from "./dataProvider";
import NuevoTicket from './nuevoTicket';


const App = () =>{
  return(
      <Admin dataProvider={dataProvider}>
              <Resource name="tickets" list={TicketList} edit={TicketEdit} create={TicketCreate} />
      </Admin>
          
        
  );
};
export default App;

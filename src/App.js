import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate, PostShow } from './components/Post';
import { UserList, UserEdit, UserCreate, UserShow } from './components/users';
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { AppLayout } from './components/Layout';


const dataProvider = jsonServerProvider('https://testing-api1223-937f8da4b412.herokuapp.com')

function App() {
  return <Admin dataProvider={dataProvider} layout={AppLayout} >
    <Resource 
      name='posts' 
      list={PostList} 
      create={PostCreate} 
      edit={PostEdit}
      show={PostShow}
      icon={ArticleIcon}
    />
    <Resource 
      name='users' 
      list={UserList}
      create={UserCreate} 
      edit={UserEdit}
      show={UserShow}
      recordRepresentation={(user) => user.name}
      icon={PeopleIcon}
    />
  </Admin>
}

export default App;

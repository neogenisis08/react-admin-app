import React from 'react'
import { 
    List, 
    Create, 
    Edit,
    Show,
    SimpleForm, 
    TextInput, 
    DateInput,
    Datagrid,
    TextField, 
    DateField,
    EmailField, 
    NumberInput,
    PasswordInput,
    EditButton, 
    DeleteButton,
    SimpleShowLayout,
} from 'react-admin'

export const UserList = () => {
    return (
        <List>
            <Datagrid rowClick='show'>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source='email' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export const UserCreate = () => {
    return (
        <Create username='Create a User' >
            <SimpleForm>
                <NumberInput source='id' />
                <TextInput source='name'/>
                <TextInput source='username' />
                <TextInput source='email' />
                <PasswordInput source='password' />
                <DateInput label='D.O.B.' source='dob' />
            </SimpleForm>
        </Create>
    )
}

export const UserEdit = () => {
    return (
        <Edit title='Edit the user details'>
            <SimpleForm >
                <NumberInput disabled source='id' />
                <TextInput source='name'/>
                <TextInput source='username' />
                <TextInput source='email' />
                <PasswordInput source='password' />
                <DateInput label='D.O.B.' source='dob' />
            </SimpleForm>
        </Edit>
    )
}

export const UserShow = () => {
    return (
        <Show>
            <SimpleShowLayout >
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source='email' />
                <TextField source="password" />
                <DateField label='D.O.B.' source="dob" />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </SimpleShowLayout>
        </Show>
    )
}
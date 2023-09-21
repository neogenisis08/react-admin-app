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
    ReferenceInput,
    ReferenceField,
    AutocompleteInput,
    NumberInput,
    EditButton, 
    DeleteButton,
    SimpleShowLayout,
    RichTextField
} from 'react-admin'
import { PostPagination } from './MyPagination'

export const PostList = () => {
    return (
        <List pagination={<PostPagination/>}>
            <Datagrid rowClick='show'>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="date" />
                <ReferenceField source="author" label="Author" reference="users" link="show" />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}

export const PostCreate = () => {
    return (
        <Create title='Create a Post' >
            <SimpleForm>
                <NumberInput source='id' />
                <ReferenceInput source="author" reference="users">
                    <AutocompleteInput label="Author" />
                </ReferenceInput>
                <TextInput source='title' />
                <TextInput multiline source='content' />
                <DateInput label='Date Published' source='date' />
            </SimpleForm>
        </Create>
    )
}

export const PostEdit = () => {
    return (
        <Edit title='Edit the post'>
            <SimpleForm>
                <NumberInput disabled source='id' />
                <ReferenceInput source="author" reference="users">
                    <AutocompleteInput label="Author" />
                </ReferenceInput>
                <TextInput source='title'/>
                <TextInput multiline source='content' />
                <DateInput label='Date Published' source='date' />
            </SimpleForm>
        </Edit>
    )
}

export const PostShow = () => {
    return (
        <Show>
            <SimpleShowLayout >
                <TextField source="id" />
                <TextField source="title" />
                <RichTextField source="content" />
                <DateField label='Date Published' source="date" />
                <ReferenceField source="author" label="Author" reference="users" link="show" />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </SimpleShowLayout>
        </Show>
    )
}
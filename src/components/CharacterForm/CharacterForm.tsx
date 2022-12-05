import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import {
    chooseName,
    chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperpower
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { myServerCalls } from '../../api';


interface CharacterFormProps {
    id?: string;
    data?: {};
}

interface CharacterState {
    name: string;
    description: string;
    comics_appeared_in: number;
    super_power: string;
}

export const CharacterForm = (props: CharacterFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const {register, handleSubmit} = useForm({});

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)

        if (props.id!) {
            await myServerCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
            dispatch(chooseSuperpower(data.super_power))
            await myServerCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Input 
                        {...register('name')}
                        name = 'name'
                        placeholder = 'Name' 
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <Input 
                        {...register('description')}
                        name = 'description'
                        placeholder = 'Description' 
                    />
                </div>
                <div>
                    <label htmlFor='comics_appeared_in'>Comics Appeared In</label>
                    <Input 
                        {...register('comics_appeared_in')}
                        name = 'comics_appeared_in'
                        placeholder = 'Comics Appeared In' 
                    />
                </div>
                <div>
                    <label htmlFor='super_power'>Superpower</label>
                    <Input 
                        {...register('super_power')}
                        name = 'super_power'
                        placeholder = 'Superpower' 
                    />
                </div>
                <Button type='submit'>Submit</Button>
            </form>          
        </div>
    )
}


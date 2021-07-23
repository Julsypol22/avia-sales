import React from 'react'
import CheckBox from './Checkbox';
import { useEffect } from 'react';

type Props = {
    filters:  Record<string, boolean>,
    onChangeFilter: (target: string, checked: boolean) => void
   }

const СheckTransfer:React.FC<Props> = (props) =>  {

    const {all, noTransfer, oneTransfer, twoTransfers, threeTransfers} = props.filters

    useEffect(() => {
        if(noTransfer && oneTransfer && twoTransfers && threeTransfers && (!all)){
            props.onChangeFilter('all',true)
        }
    }, [props.filters])
    return(
        <>
            <CheckBox onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeFilter(event.target.name, event.target.checked)} 
                    check={all} 
                    name='all' 
                    title="Все" />
            <CheckBox onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onChangeFilter(event.target.name, event.target.checked)} 
                    check={noTransfer} 
                    name='noTransfer' 
                    title="Без пересадок"/>
            <CheckBox onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onChangeFilter(event.target.name, event.target.checked)} 
                    check={oneTransfer} 
                    name='oneTransfer' 
                    title="1 пересадка"/>
            <CheckBox onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onChangeFilter(event.target.name, event.target.checked)} 
                    check={twoTransfers} 
                    name='twoTransfers' 
                    title="2 пересадки"/>
            <CheckBox onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onChangeFilter(event.target.name, event.target.checked)} 
                    check={threeTransfers} 
                    name='threeTransfers' 
                    title="3 пересадки"/>
        </>
    )
}

export default СheckTransfer
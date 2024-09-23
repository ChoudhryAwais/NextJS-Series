import { myContext } from '@/context/MyContext'
import React, { useContext } from 'react'

export default function GrandChildComp() {
    const ourContext: any = useContext(myContext)
    const { nameState, setNameState } = ourContext
    return (
        <React.Fragment>
            <div>
                GrandChildComp Content :
                {nameState}

            </div>
            <button className='bg-slate-500' onClick={() => setNameState("Ali Ahmed")}>Click to change the state</button>
        </React.Fragment>
    )
}

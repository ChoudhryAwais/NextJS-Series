import React from 'react'
import GrandChildComp from '../GrandChildComp/GrandChildComp'

export default function ChildComp() {
    return (
        <div>
            ChildComp Content:
            <GrandChildComp/>
        </div>
    )
}

'use client'

import React, { useState } from 'react'
import ChildComp from '../ChildComp/ChildComp'

export default function ParentComp() {

    return (
        <div>
            ParentComp Content:
            <ChildComp/>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <ul>
                <li><Link href="/Property/Bahria">Bahria Town</Link></li>
                <li><Link href="/Property/Islamabad">Islamabad</Link></li>
                <li><Link href="/Property/Rawalpindi">Rawalpindi</Link></li>
            </ul>
        </div>
    )
}

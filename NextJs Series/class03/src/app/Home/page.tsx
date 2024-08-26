
import Button from '@/components/Button'
import React from 'react'

export default async function Home() {
    const delayHomePage = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Home page render")
        }, 5000)
    })

    return await delayHomePage
}

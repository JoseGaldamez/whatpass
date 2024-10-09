import Image from 'next/image'
import React from 'react'

export const HeaderTopBrand = () => {
    return (
        <div className="flex items-center justify-center m-3">
            <Image
                className="w-20 h-20 mr-4"
                alt="Logo WhatPass"
                src="/whatpass.png"
                width={250}
                height={250}
            />
            <div>
                <h1 className="text-3xl font-bold mb-0 text-slate-800">WhatPass</h1>
                <p className='text-slate-400'>Manage your passwords</p>
            </div>

        </div>
    )
}

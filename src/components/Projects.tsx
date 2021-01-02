import React from 'react'

export default function Projects() {
    return (
        <section id='projects' className='bg-light-gray py-32'>
            <div className='container mx-auto px-4'>
                <div className='bg-wonder-bot rounded-3xl font-semibold text-white p-10 mb-10'>
                    <span className='text-xl mb-2'>관리/도박/유틸리티</span>
                    <h1 className='text-6xl'>원더봇</h1>
                </div>
                <div className='bg-park-bot rounded-3xl font-semibold text-white p-10 mb-10'>
                    <span className='text-xl mb-2'>고성능 음악</span>
                    <h1 className='text-6xl'>파크봇</h1>
                </div>
                <div className='bg-school-bot rounded-3xl font-semibold text-white p-10 mb-10'>
                    <span className='text-xl mb-2'>학사일정/급식정보</span>
                    <h1 className='text-6xl'>스쿨봇</h1>
                </div>
                <div className='bg-kakao-bot rounded-3xl font-semibold text-black p-10 mb-10'>
                    <span className='text-xl mb-2'>코로나정보</span>
                    <h1 className='text-6xl'>코로나봇</h1>
                </div>
            </div>
        </section>
    )
}
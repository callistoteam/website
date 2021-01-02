import React from 'react'

export default function Projects() {
    return (
        <section id='projects' className='bg-light-gray py-32'>
            <div className='container mx-auto px-4'>
                {/* <h1 className='font-medium text-7xl mb-10'>프로젝트</h1> */}
                <div className='bg-wonder-bot rounded-3xl font-semibold text-white p-10 mb-10 flex sm:flex-row-reverse'>
                    <div className='w-full sm:w-2/5'>
                        <img className='w-full bottom-0' src='/assets/wonderbot.png' alt='원더봇'/>
                    </div>
                    <div className='w-full sm:w-3/5'>
                        <span className='text-xl mb-2'>관리/도박/유틸리티</span>
                        <h1 className='text-6xl'>원더봇</h1>
                        <p className='mt-3'>원더봇은 관리, 도박, 유틸리티 등 다양한 기능을 보유하고 있는 다목적봇입니다.<br/>당신의 서버를 위해 마법 한 줌을 뿌려보세요.</p>    
                    </div>
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
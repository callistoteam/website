import React from 'react'

export default function Hero() {
    return (
        <div className='relative z-10 h-screen mx-auto pt-20 sm:pt-44 sm:flex sm:flex-row-reverse'>
            <div className='w-full sm:w-3/5 text-center sm:text-right'>
                <img className='w-full' src='/assets/preview.png' />
            </div>
            <div className='w-full sm:w-2/5 text-center sm:text-left'>
                <div className='px-4 sm:px-6 md:px-8'>
                    <h1 className="text-3xl leading-none font-extrabold xtracking-tight mb-8">작은 움직임으로 세상을 바꿉니다.</h1>
                    <p className='text-base color-gray mb-10'>팀 칼리스토는 디스코드부터 카카오톡까지 다양한 챗봇 서비스를 제작하는 청소년으로 구성된 팀입니다.<br/>작은 변화가 모여 세상을 바꾸기 위해 열정으로 모였습니다.</p>
                    <a href='#projects' className="tw-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200">더 알아보기</a>
                </div>
            </div>
        </div>
    )
}
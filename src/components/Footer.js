import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4 px-0 border border-black z-50 sm:pt-20 sm:pb-32 bg-black">
            <div id="link" className="sm:w-2/5 w-1/2">
                <h1 className="text-white text-lg">넷플릭스 대한민국</h1>
                <div id="link-content" className="flex justify-between flex-wrap mt-3 sm:mt-1">
                    <a className="text-gray-500 text-xs no-underline hover:underline sm:mb-1"
                       href="https://help.netflix.com/ko/node/412">넷플릭스 소개</a>
                    <a className="text-gray-500 text-xs no-underline hover:underline sm:mb-1" href="#">고객 센터</a>
                    <a className="text-gray-500 text-xs no-underline hover:underline sm:mb-1" href="#">미디어 센터</a>
                    <a className="text-gray-500 text-xs no-underline hover:underline sm:mb-1" href="#">이용 약관</a>
                </div>
            </div>
            <div id="desc" className="mt-8 sm:mt-9 font-bold">
                <h2 className="text-white text-sm text-center">&copy; Netflix Right Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;

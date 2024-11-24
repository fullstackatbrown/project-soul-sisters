import React from 'react';

interface NewsBoxProps {
    title: string;
    dateTime: string;
    imageSrc: string;
    content: string;
}

const NewsBox: React.FC<NewsBoxProps> = ({title, dateTime, imageSrc, content}) => {
    return (
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg space-x-4 text-white">
            {/* HEADER BOX */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-sm">{dateTime}</span>
            </div>
            <div className="flex space-x-4">
                {/* IMAGE BOX */}
                <div className="bg-gray-500 w-1/3 h-32 justify-center items-center">
                    <img src={imageSrc} alt="news" className="object-cover w-full h-full"/>
                </div>
                {/* CONTENT BOX */}
                <div className="w-2/3">
                    <p className="leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsBox;
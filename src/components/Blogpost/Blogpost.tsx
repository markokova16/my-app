import React from 'react'


interface IBlogpostProps {
    className?: string;
    text:string;
    img?: string;
}

export const Blogpost : React.FC<IBlogpostProps> = ({text, img, className = ""} ) => {
  return (
    <div className={`${className}`}>
        <img src="//picsum.photos/600/400" alt="" />
        <p>{text}</p>
       
        </div>
  )
}


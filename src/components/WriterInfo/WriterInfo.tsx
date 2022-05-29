import React from "react";

interface IWriterInfoProps {
  className?: string;
}

const WriterInfo: React.FC<IWriterInfoProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img
        src="//picsum.photos/57/57"
        alt="writer"
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
      <p className="inline-block ml-5">
        John doe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        iusto deleniti sed explicabo quasi tenetur omnis beatae doloribus iure!
      </p>
    </div>
  );
};

export default WriterInfo;

import React, { useState, ChangeEvent } from "react";

interface INewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<INewsletterSignupProps> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${className}`}>
      <div className="w-11/12 my-2">
        <div className="font-bold text-3xl md:text-4xl">
          Sign up for the newsletter
        </div>
        <div className="my-2">
          If you wanto relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.
        </div>
      </div>

      <div className="border border-black w-11/12 md:w-9/12  flex flex-row justify-between">
        <input
          className="w-full"
          type="email"
          placeholder=" Enter your email here"
          onChange={handleInputChange}
        ></input>
        <button className="bg-black font-bold text-white p-2 text-base md:text-xl">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default NewsletterSignup;

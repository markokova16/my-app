import React from "react";

interface INewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<INewsletterSignupProps> = ({ className }) => {
  return <div className={`${className}`}>NewsletterSignup</div>;
};

export default NewsletterSignup;

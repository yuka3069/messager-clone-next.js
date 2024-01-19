import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      className="inline-flex items-center 
      justify-center 
      w-full 
      bg-white
      py-3 mb-3
     text-gray-500 
     ring-1 ring-inset 
     ring-gray-300 rounded-md 
      hover:bg-gray-50 
      focus:outline-none 
      focus:ring-2 
      focus:ring-inset 
      focus:ring-offset-0"
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;

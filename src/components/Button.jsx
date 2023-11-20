import { useNavigate} from "react-router-dom";

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    const navigate = useNavigate()
    return (
      <button
        onClick={() => navigate('/login')}
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-[#E77917] text-white border-[#E77917]"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;
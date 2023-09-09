import { useRouter } from "next/router";

const Button = ({
  type,
  children,
  action,
  link,
  className,
  buttonDescription,
  ...props
}) => {
  const { push } = useRouter();

  let typeClassName = "bg-gray-300";

  switch (type) {
    case "primary":
      typeClassName = "bg-primary text-white";
      break;
    case "linear-rainbow-1":
      typeClassName = "bg-linear-rainbow-1 text-white";
      break;
    case "linear-rainbow-2":
      typeClassName = "bg-linear-rainbow-2 text-white";
      break;
    case "linear-rainbow-3":
      typeClassName = "bg-linear-rainbow-3 text-white";
      break;
    case "linear-rainbow-4":
      typeClassName = "bg-linear-rainbow-4 text-white";
      break;
    case "linear-rainbow-5":
      typeClassName = "bg-linear-rainbow-5 text-white";
      break;
    case "linear-rainbow-6":
      typeClassName = "bg-linear-rainbow-6 text-white";
      break;
    case "linear-rainbow-7":
      typeClassName = "bg-linear-rainbow-7 text-white";
      break;
    case "linear-rainbow-8":
      typeClassName = "bg-linear-rainbow-8 text-white";
      break;
    case "linear-rainbow-9":
      typeClassName = "bg-linear-rainbow-9 text-white";
      break;
    case "linear-rainbow-10":
      typeClassName = "bg-linear-rainbow-10 text-white";
      break;
    case "radial-rainbow-1":
      typeClassName = "bg-radial-rainbow-1 text-white";
      break;
    case "radial-rainbow-2":
      typeClassName = "bg-radial-rainbow-2 text-white";
      break;
    case "radial-rainbow-3":
      typeClassName = "bg-radial-rainbow-3 text-white";
      break;
    case "radial-rainbow-4":
      typeClassName = "bg-radial-rainbow-4 text-white";
      break;
    case "radial-rainbow-5":
      typeClassName = "bg-radial-rainbow-5 text-white";
      break;
    case "radial-rainbow-6":
      typeClassName = "bg-radial-rainbow-6 text-white";
      break;
    case "radial-rainbow-7":
      typeClassName = "bg-radial-rainbow-7 text-white";
      break;
    case "radial-rainbow-8":
      typeClassName = "bg-radial-rainbow-8 text-white";
      break;
    case "radial-rainbow-9":
      typeClassName = "bg-radial-rainbow-9 text-white";
      break;
    case "radial-rainbow-10":
      typeClassName = "bg-radial-rainbow-10 text-white";
      break;
    case "conic-rainbow-1":
      typeClassName = "bg-conic-rainbow-1 text-white";
      break;
    case "conic-rainbow-2":
      typeClassName = "bg-conic-rainbow-2 text-white hover:bg-conic-rainbow-3";
      break;
    case "conic-rainbow-3":
      typeClassName = "bg-conic-rainbow-3 text-white";
      break;
    case "conic-rainbow-4":
      typeClassName = "bg-conic-rainbow-4 text-white";
      break;
    case "conic-rainbow-5":
      typeClassName = "bg-conic-rainbow-5 text-white";
      break;
    case "conic-rainbow-6":
      typeClassName = "bg-conic-rainbow-6 text-white";
      break;

    default:
      break;
  }

  return (
    <button
      onClick={() => {
        if (action) {
          action();
        } else if (link) {
          push(link);
        }
      }}
      aria-label={buttonDescription ? buttonDescription : "button"}
      className={`button-hover duration-300 relative disabled:bg-[#C0C0C0] overflow-hidden disabled:text-slate-400 flex py-2 px-5 rounded-md font-medium ${typeClassName} ${className}`}
      {...props}
    >
      {/* <span className="inline-flex bg-[rgba(255,255,255,.3)] w-full h-full absolute top-0 bottom-0 "></span> */}

      {children}
    </button>
  );
};

export default Button;

import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  to: string;
  label: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isActive: boolean;
};

const NavButton = ({ to, label, Icon, isActive }: NavButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (window.location.pathname === to) {
          window.location.reload();
        } else {
          navigate(to);
        }
      }}
      className="flex flex-col gap-4 items-center"
    >
      <Icon
        className={`w-24 h-24 ${isActive ? "text-mainBlue" : "text-font-darkgray fill-background-white stroke-font-darkgray"}`}
      />
      <div className={`text-caption-3 ${isActive ? "text-mainBlue" : "text-font-darkgray"}`}>{label}</div>
    </button>
  );
};

export default NavButton;

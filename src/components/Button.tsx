import React from "react";
import clsx from "clsx";
import { Marker } from "./Marker.jsx";

// 🛡️ Define common props for both link and button
interface CommonProps {
  icon?: string;
  children?: React.ReactNode;
  containerClassName?: string;
  markerFill?: string; // Correctly typed
}

// 🛡️ Define props when Button is a link
interface LinkProps extends CommonProps {
  href: string;
  onClick?: never; // Prevent onClick if href is present
}

// 🛡️ Define props when Button is a button
interface ButtonProps extends CommonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: never; // Prevent href if onClick is present
}

// 🛡️ Union type for props
type Props = LinkProps | ButtonProps;

const Button: React.FC<Props> = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          {/* ✅ Pass `markerFill` as `fill` */}
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;

// Vendor
import { MouseEventHandler, SVGProps } from "react";

// Style
import * as S from "./button.style";

export interface ButtonProps {
  /** OnClick handler */
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Data Test ID is needed for Jest */
  dataTestId?: string;
  /** Enable disabled state of the button */
  disabled?: boolean;
  /** Size of the button */
  size?: "small" | "normal" | "large" | "compact";
  /** Different color variants of the button */
  variant?: "default" | "borderless" | "primary" | "secondary";
  /** Text that will be displayed in the button*/
  text: string;
  /** Icon displayed in the button */
  icon?: SVGProps<SVGSVGElement>;
}

function Button({
  type = "button",
  onClick,
  dataTestId = "button",
  variant = "default",
  disabled = false,
  size = "normal",
  text = "Read more",
  icon,
}: ButtonProps) {
  return (
    <S.Button
      onClick={onClick}
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {icon}
      {text}
    </S.Button>
  );
}

export default Button;

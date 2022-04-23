// Vendor
import { AllHTMLAttributes, ChangeEvent, ReactElement } from "react";

// Style
import * as S from "./radioButton.style";

export interface RadioButtonProps extends AllHTMLAttributes<HTMLInputElement> {
  /** Handle change event */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  onChange,
  ...props
}: RadioButtonProps): ReactElement => {
  return (
    <S.RadioButton>
      <input type="radio" data-testid="radioButton" {...props} />
    </S.RadioButton>
  );
};

export default RadioButton;

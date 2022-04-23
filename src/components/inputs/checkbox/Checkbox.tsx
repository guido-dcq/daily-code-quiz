// Vendor
import { AllHTMLAttributes, ChangeEvent, ReactElement } from "react";

// Style
import * as S from "./checkbox.style";

export interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {
  /** Handle change event */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Label text */
  label: string;
}

const Checkbox = ({
  onChange,
  label,
  ...props
}: CheckboxProps): ReactElement => {
  return (
    <S.Checkbox>
      <input type="checkbox" data-testid="checkbox" {...props} />
      <div>
        <label htmlFor={props.id ? props.id : ""}>Do you like cheese?</label>
      </div>
    </S.Checkbox>
  );
};

export default Checkbox;

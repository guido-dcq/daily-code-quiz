// Vendor
import { AllHTMLAttributes, ChangeEvent, ReactElement, useState } from "react";

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
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <S.Checkbox
      className={isChecked ? "is-checked" : ""}
      onClick={() => setIsChecked(!isChecked)}
    >
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        data-testid="checkbox"
        {...props}
      />
      <div className="checkbox__label-wrapper">
        <label htmlFor={props.id ? props.id : ""}>Do you like cheese?</label>
      </div>
    </S.Checkbox>
  );
};

export default Checkbox;

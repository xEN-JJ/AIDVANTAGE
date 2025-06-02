import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const CustomDropDown = ({
  value,
  setValue,
  items,
  setItems,
  placeholder: propPlaceHolder,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      maxHeight={300}
      placeholder={propPlaceHolder}
      {...rest}
    />
  );
};

export default CustomDropDown;

import Select from "react-select";

export default function SelectTest({
  placeholder,
  options,
  defaultValue,
  onChange,
}) {
  return (
    <>
      <Select
        isSearchable={false}
        isClearable={true}
        placeholder={placeholder}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            background: "#282c48",
            color: "#fff",
            border: "2px solid #4d5376",
            boxShadow: "none",
            "&:hover": { borderColor: "#646cff" },
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#fff",
            // color: state.isSelected ? "#fff" : "#fff",
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            background: "#181b32",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isSelected ? "#fff" : "#fff",
            background: state.isSelected ? "transparent" : "#181b32",
            "&:hover": { background: "#4d5376" },
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#fff",
          }),
        }}
      />
    </>
  );
}

import classes from "./Select.module.scss";

const Select = (props) => {
  const { options, defaultValue, value, onChange } = props;

  return (
    <div className={classes.SelectWrapper}>
      <select
        className={classes.Select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

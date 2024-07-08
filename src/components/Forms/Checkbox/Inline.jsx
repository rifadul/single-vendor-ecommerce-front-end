export default function InlineCheckbox({
  legendText,
  option,
  isChecked,
  onChange,
}) {
  return (
    <fieldset className="">
      <legend className="sr-only">{legendText}</legend>
      <div className="relative flex items-start py-2">
        <div className="flex h-5 items-center">
          <input
            id={legendText}
            aria-describedby={`${legendText}-description`}
            name={legendText}
            type="checkbox"
            onChange={onChange}
            checked={isChecked}
            className="h-4 w-4 rounded border-neutral-100 text-neutral-300 focus:ring-neutral-600 accent-neutral-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={legendText} className="font-medium text-neutral-300">
            {option}
          </label>
        </div>
      </div>
    </fieldset>
  );
}

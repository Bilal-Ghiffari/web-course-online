export default function TextArea({
    isError,
    name,
    value,
    id,
    handleChange,
    defaultValue,
}) {
    return (
        <textarea
            name={name}
            value={value}
            id={id}
            onChange={(e) => handleChange(e)}
            rows="4"
            className={`block p-2.5 w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-[#1a1a1b] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                isError && "input-error"
            }`}
            placeholder="Your description"
            defaultValue={defaultValue}
        ></textarea>
    );
}

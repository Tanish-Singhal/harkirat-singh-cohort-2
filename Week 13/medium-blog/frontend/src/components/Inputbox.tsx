interface InputboxType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputbox = ({
  label,
  placeholder,
  type,
  onChange,
}: InputboxType) => {
  return (
    <div className="mt-4">
      <label className="block mb-2 text-md font-bold text-gray-900">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

interface Props {
    label: string;
    name: string;
    errors?: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
}

export const FormField = (props: Props) => {
    const {
        label,
        name,
        errors,
        type = 'text',
        placeholder = '',
        autoComplete = '',
    } = props;

    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                autoComplete={autoComplete}
                className="w-full rounded-xl bg-slate-100 px-4 py-3.5 text-sm transition outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-200"
                placeholder={placeholder}
            />
            {errors && <p className="text-red-500">{errors}</p>}
        </div>
    );
};

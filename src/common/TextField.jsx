export default function TextField({ placeholder, formik, name, type, onChange }) {
    return (
        <div className="w-full">
            <input
                type={type || "text"}
                className="input__textField"
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={onChange || formik.handleChange}
                onBlur={formik.handleBlur}
                name={name}
                autoComplete="off"
            />
            {
                formik.errors[name] && formik.touched[name] &&
                <span className="text-xs text-primary-200 font-bold block mt-2 mr-2">
                    {formik.errors[name]}
                </span>
            }
        </div>
    )
}
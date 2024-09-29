export default function TextArea({ placeholder, formik, name }) {
    return (
        <div className="w-full">
            <textarea 
                placeholder={placeholder} 
                className="input__textField !p-4 resize-none !h-auto" 
                rows="6"
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={name}
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
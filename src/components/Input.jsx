import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref){
    const id = useId();
    return (
        <div className="w-full">
            {label && <label 
            className='inline-block mb-1 pl-1'
            htmlFor={id}
            >
            {label}</label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref = {ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input;


/*
If you are using React-19, you don't need to use '' forwardRef '' anymore it is Deprecated in React-19, in this update, now you can treat "ref" directly as a prop,
Use this:
import React, { useId } from 'react';

function Input(
  { 
    label, 
    type = 'text', 
    className = '', 
    ref,        // pull in the ref  
    ...props    // everything else  
  }
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        {...props}
        className={`
          px-3 py-2 rounded-lg bg-white text-black 
          outline-none focus:bg-gray-50 duration-200 
          border border-gray-200 w-full ${className}
        `}
      />
    </div>
  );
}

export default Input;
*/

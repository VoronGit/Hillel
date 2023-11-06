interface MyInputProps {
    type: string;
    placeholder: string;
}

const Input = ({type,placeholder}:MyInputProps) => {
    return <input type={type} placeholder={placeholder}></input>
}

export default Input
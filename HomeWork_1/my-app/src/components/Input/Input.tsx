interface InputProps {
    label: string,
    type: string,
    placeholder: string,
    onChangeCallback: any
}

const Input = ({label,type,placeholder,onChangeCallback}:InputProps) => {
    return <label>{label}<input type={type} placeholder={placeholder} onChange={onChangeCallback}/></label>
}

export default Input;
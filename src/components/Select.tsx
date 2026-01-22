import {useLoadLanguages} from "../hooks/useLoadLanguages.ts";
import type {Language} from "../utils/models.ts";

type Props = {
    onChange: (value: string) => void;
}

const Select = ({onChange}: Props) => {
    const languages = useLoadLanguages();


    return (
        <select defaultValue="defualt" className="dropdown" onChange={(event) => onChange(event.target.value)}>
            <option value="defualt" disabled>Select a Language</option>
            {languages.map(({value, title}: Language) => (
                <option key={value} value={value}>{title}</option>
            ))}
        </select>
    )
}
export default Select;
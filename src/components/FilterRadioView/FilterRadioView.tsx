import * as React from 'react';
import RadioOption from '../../models/RadioOption';

interface RadioViewProps {
    radioOption: RadioOption,
    onRadioChange: (value: string) => void
}

const FilterRadioView = (props: RadioViewProps) => {
    const {radioOption, onRadioChange} = props
    
    const handleChange = () => onRadioChange(radioOption.title)

    return (
        <label>
            <input 
                type="radio"
                value={radioOption.title}
                checked={radioOption.selected}
                onChange={handleChange}/>
            {radioOption.title}
        </label>
    )
}

export default FilterRadioView;
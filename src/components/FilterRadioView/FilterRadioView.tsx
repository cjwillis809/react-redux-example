import * as React from 'react';
import RadioOption from '../../models/RadioOption';

interface RadioViewProps {
    radioOption: RadioOption,
    onRadioChange: (value: number) => void
}

const FilterRadioView = (props: RadioViewProps) => {
    const {radioOption, onRadioChange} = props
    
    const handleChange = () => onRadioChange(radioOption.id)

    return (
        <label>
            <input 
                type="radio"
                value={radioOption.id}
                checked={radioOption.selected}
                onChange={handleChange}/>
            {radioOption.title}
        </label>
    )
}

export default FilterRadioView;
import * as React from 'react';
import { FilterRadioLink } from '../../containers/FilterRadioLink';
import FilterCategory from '../../models/FilterCategory';
import './FilterOptionView.css';

interface Props {
    filterCategory: FilterCategory
}

const FilterOptionView = (props: Props) => {
    return (
        <div className="filter-option-view">
            <div className="filter-option-content">
                <p className="option-title">{props.filterCategory.name}</p>
                <p>+</p>
            </div>
            <form className="filter-radio-form">
            {
                props.filterCategory.options.map(opt =>
                    <FilterRadioLink
                        key={opt.id} 
                        radioOption={opt} />
                )
            }
            </form>
            <div className="filter-option-divider" />
        </div>
    );
}

export default FilterOptionView;
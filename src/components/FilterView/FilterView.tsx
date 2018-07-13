import * as React from 'react';
import FilterCategory from '../../models/FilterCategory';
import FilterOptionView from '../FilterOptionView/FilterOptionView';
import './FilterView.css';

interface Props {
    filters: FilterCategory[]
}

const FilterView = (props: Props) => {
    return (
        <div className="filter-view">
            <p className="filter-title"><b>Filter By</b></p>
            <div className="filter-divider" />
            <div className="filter-option-list">
            {
                props.filters.map(fo =>
                    <FilterOptionView 
                        key={fo.id}
                        filterCategory={fo}/>
                )
            }
            </div>
        </div>
    );
}

export default FilterView;
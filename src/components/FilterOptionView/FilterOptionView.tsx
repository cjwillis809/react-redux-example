import * as React from 'react';
import { FilterRadioLink } from '../../containers/FilterRadioLink';
import FilterCategory from '../../models/FilterCategory';
import './FilterOptionView.css';

interface Props {
    filterCategory: FilterCategory
}

interface OptionState {
    showOptions: boolean
}

export default class FilterOptionView extends React.Component<Props, OptionState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showOptions: false
        }
    }

    public toggleOptions = () => {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    public render() {
        return (
            <div className="filter-option-view">
                <div className="filter-option-content" onClick={this.toggleOptions}>
                    <p className="option-title">{this.props.filterCategory.name}</p>
                    <p>{this.state.showOptions ? '-' : '+'}</p>
                </div>
                { this.state.showOptions && 
                    <form className="filter-radio-form">
                    {
                        this.props.filterCategory.options.map(opt =>
                            <FilterRadioLink
                                key={opt.id} 
                                radioOption={opt} />
                        )
                    }
                    </form>
                }
                <div className="filter-option-divider" />
        </div>
        )
    }
}
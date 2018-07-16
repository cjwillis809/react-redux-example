import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCategoryFilter } from "../actions/FilterActions";
import FitlerRadioView from "../components/FilterRadioView/FilterRadioView";
import RadioOption from "../models/RadioOption";
import { State } from "../reducers/";

interface LinkProps {
    radioOption: RadioOption
}

const mapStateToProps = (state: State, ownProps: LinkProps) => ({
    radioOption: {
        id: ownProps.radioOption.id,
        selected: state.categoryFilter.categoryFilter === ownProps.radioOption.id,
        title: ownProps.radioOption.title
    }
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRadioChange: (chosenFilter: number) => dispatch(setCategoryFilter(chosenFilter))
})

export const FilterRadioLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(FitlerRadioView)
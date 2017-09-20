import { connect } from 'react-redux'

import { changeProp } from '../reducers/componentProps';
import PropertyEditor from '../components/PropertyEditor';

const mapStateToProps = (state, ownProps) => ({
    definedProps: state.componentProps[ownProps.componentPath]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPropertyChange: (propertyName, value) => dispatch(
        changeProp(ownProps.componentPath, propertyName, value))
})

const PropertyEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyEditor);

export default PropertyEditorContainer;
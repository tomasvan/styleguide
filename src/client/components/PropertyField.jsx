import React from 'react';

const PropertyStringField = ({
    name,
    value,
    onPropertyChange
}) => {
    const onChange = (e) => onPropertyChange(name, e.target.value);

    return (
        <div className="textbox">
            <label className="textbox__label">{name}</label>
            <input  onChange={onChange} value={value} className="textbox__input" type="text" id={name} />
        </div>
    )
}

const PropertyNumberField = ({
    name,
    value,
    onPropertyChange
}) => {
    const onChange = (e) => onPropertyChange(name, e.target.value);

    return (
        <div className="textbox">
            <label className="textbox__label">{name}</label>
            <input  onChange={onChange} value={value} className="textbox__input" type="number" id={name} />
        </div>
    )
}


const PropertyBooleanField = ({
    name,
    value,
    onPropertyChange
}) => {
    const onChange = (e) => onPropertyChange(name, e.target.checked);

    return (
        <label className="checkbox" style={{ marginBottom: 0, marginRight: 0, width: 280 }}>
            <input onChange={onChange} className="checkbox__input" id={name} type="checkbox" checked={value} />
            <span className="checkbox__label-text">{name}</span>
        </label>
    )
}

const PropertyField = ({
    type,
    name,
    value,
    onPropertyChange,
    description
}) => {
    let PropertyComponent = null;

    switch(type) {
        case 'bool': PropertyComponent = PropertyBooleanField; break;
        case 'string': PropertyComponent = PropertyStringField; break;
        case 'number': PropertyComponent = PropertyNumberField; break;
        case 'custom': PropertyComponent = PropertyStringField; break;
        default: return null;
    }

    return (
        <div className="sg-prop-field">
            <PropertyComponent
                type={type}
                name={name}
                value={value}
                onPropertyChange={onPropertyChange}
            />
            <p className="sg-prop-field__description">{description}</p>
        </div>
    )
}

export default PropertyField;
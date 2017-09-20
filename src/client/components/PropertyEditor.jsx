import React from 'react';

import PropertyField from './PropertyField';

const getDescription = (defaultValue, description, required) => {
    let result = '';

    if (description)
        result += `${description}`;

    if (defaultValue)
        result += ` (Default value: ${defaultValue})`;

    if (required)
        result += ` Required`;

    return result;
}

const PropertyEditor = ({
    onPropertyChange,
    component,
    exampleProps,
    definedProps,
    propertyDefinitions,
    description
}) => {
    const ComponentToRender = component;

    const propDefinitionList = Object.keys(propertyDefinitions || {})
        .filter(key => !!propertyDefinitions[key].type)
        .map(key => ({
            name: key,
            type: propertyDefinitions[key].type,
            defaultValue: (propertyDefinitions[key].defaultValue && propertyDefinitions[key].defaultValue.value),
            description: propertyDefinitions[key].description,
            required:  propertyDefinitions[key].required,
        }))

    const currentProps = {
        ...exampleProps,
        ...Object.keys(definedProps || {})
            .filter(e => definedProps[e] !== undefined && definedProps[e] !== null && definedProps[e] !== '')
            .reduce((prev, next) => ({ ...prev, [next]: definedProps[next] }), {})
    };

    return (
        <div>
            <section>
            {
                exampleProps.children
                ?   <ComponentToRender {...currentProps}>
                        <div dangerouslySetInnerHTML={{ __html: exampleProps.children }} />
                    </ComponentToRender>
                :   <ComponentToRender {...currentProps} />
            }
            </section>
            {!!propDefinitionList.length && <section className="sg-props">
                <h4 className="heading heading--level-4">Props:</h4>
                <div className="sg-props__content">
                {
                    propDefinitionList.map((e, index) => <PropertyField
                        key={index}
                        name={e.name}
                        type={e.type.name}
                        value={currentProps[e.name]}
                        description={getDescription(e.defaultValue, e.description, e.required)}
                        onPropertyChange={onPropertyChange}
                    />)
                }
                </div>
            </section>}
        </div>
    );
};

export default PropertyEditor;
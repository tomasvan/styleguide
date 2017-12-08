import React from 'react';

import AccordionList from '../../components/molecules/AccordionList/AccordionList';
import Header from '../../components/molecules/Header/Header';

const accordionListProps = [
    {
        "accordionItems": [
            {
                "id": "example-1",
                "title": "A closed accordion heading",
                "children": "This is the body of the accordion"
            },
            {
                "id": "example-2",
                "title": "An open accordion heading",
                "children": "This is the body of the accordion"
            }
        ],
        "isExpandedAccordionIndex": 1
    }
];

const InformationArticleSample1 = ({ colors }) =>
    <div>
        <Header
            iconUrl="./public/icons/ico_info.svg"
            runningTitle="Sample page"
            pageTitle="Information Article"
            withMask={false}
            withContentOverlap={false}>
            <p>
                On this page you can have a look at the template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="full-width-image full-width-image--with-mask full-width-image--with-content-overlap">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
        </div>
        <div className="container container--medium container--no-padding container--white-bg container--extra-padding-top">
            <div className="container container--small">
                <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
                    accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui.
                </p>
                <ul className="list">
                    <li className="list__item">First item in list</li>
                    <li className="list__item">Second link in list</li>
                    <li className="list__item">Third link in list</li>
                </ul>
            </div>
            <div className="focus-box">
                <div className="focus-box__content-outer">
                    <div className="container container--small container--no-margin">
                        <p>
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
                            nec, egestas non nisi.
                        </p>
                        <button className="button">Click me</button>
                    </div>
                </div>
            </div>
            <div className="container container--small">
                {accordionListProps.map((props, i) =>
                    <AccordionList key={i} {...props} />)}
            </div>
        </div>
    </div>;

export default InformationArticleSample1;
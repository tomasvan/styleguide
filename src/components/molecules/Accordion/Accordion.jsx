import React from 'react';

/**
 * Status: *finished*.
 *
 * An Accordion consists of a header and a panel. The header contains a button which
 * toggles the associated panel's visibility when <a href="#AccordionList">AccordionList</a> is used.
 *
 * The header is a `h3` tag due to the assumption that in most scenarios there will be
 * a `h1` on the page already, and the Accordion is likely to be a sub-section containing
 * its own `h2`. The `h3` can be swapped with a `h2` if necessary without affecting the
 * appearance.
 *
 * The `aria-expanded` and `aria-controls` attributes allow screen readers to recognize
 * the link between the header button and its associated panel content.
 *
 * Additional resources: [w3.org Accordion](https://www.w3.org/TR/wai-aria-practices/#accordion),
 * [w3.org Accordion example](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion1.html),
 * [Stack Overflow: ARIA / button role](https://stackoverflow.com/questions/26934719/do-i-need-role-button-on-a-button),[MDN: ARIA / button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
 *
 */

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.accordionHeaderClicked = this.accordionHeaderClicked.bind(this);

    }
    accordionHeaderClicked(){
        this.props.toggleIsExpanded();
        this.accordion.scrollIntoView({behavior: 'smooth'});
    }
    render() {
        return (
            <section className={`accordion${this.props.isExpanded ? ' accordion--open' : ''}`}
                     ref={(accordion) => { this.accordion = accordion; }}>
                <h3 className="accordion__header heading heading--level-3">
                    <button
                        className="accordion__header-button"
                        aria-expanded={this.props.isExpanded}
                        aria-controls={this.props.id}
                        onClick={this.accordionHeaderClicked}>
                        {this.props.title}
                    </button>
                </h3>
                <div className="accordion__panel rich-text-area" id={this.props.id}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Accordion;
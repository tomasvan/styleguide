import React from 'react';

function classNames(color, isShowingFeatures, isExpanded, isStandalone) {
    const classNames = ['subscription'];
    if (color) {
        classNames.push(`subscription--${color}`);
    }
    if (isShowingFeatures) {
        classNames.push('subscription--is-showing-features');
    }
    if (isExpanded) {
        classNames.push('subscription--is-expanded');
    }
    if (isStandalone) {
        classNames.push('subscription--is-standalone');
    }
    return classNames.join(' ');
}
/**
 * Status: *finished*.
 *
 */
export default class Subscription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: this.props.isExpanded ? this.props.isExpanded : false
        };

        this.subscriptionContainerClick = this.subscriptionContainerClick.bind(this);
        this.closeSubscriptionClick = this.closeSubscriptionClick.bind(this);
    }
    subscriptionContainerClick() {
        if (!this.state.isExpanded && !this.props.isStandalone) {
            this.setState({ isExpanded: true });
        }
    }
    closeSubscriptionClick(e) {
        e.stopPropagation();
        this.setState({ isExpanded: false });
    }
    render() {
        return (
            <article className={classNames(this.props.color, this.props.isShowingFeatures, this.state.isExpanded, this.props.isStandalone)} onClick={this.subscriptionContainerClick} aria-expanded={this.state.isExpanded} id={this.props.id}>
                {this.state.isExpanded ?
                    <button className="subscription__close-expanded-info" onClick={this.closeSubscriptionClick} aria-controls={this.props.id}>
                        <span className="subscription__close-text">LUKK</span>
                        <img className="subscription__close-image" src="/public/icons/ico_delete.svg" role="presentation" alt="Lukk ekspandert innhold" />
                    </button> : null}
                <section className="subscription__teaser">
                    <div className="subscription__teaser-content">
                        <h1 className="subscription__name">{this.props.name}</h1>
                        <span className="subscription__data-amount">{this.props.dataAmount}</span>
                        <span className="subscription__data-unit">{this.props.dataUnit}</span>
                        <span className="subscription__price">{this.props.price},-</span>
                        <span className="subscription__price-info">per mnd.</span>
                        <span className="subscription__price-info">Ingen bindingstid.</span>
                    </div>
                    <div className="subscription__teaser-links">
                        <div><a href="#" className="link" target="_self">Se alle priser</a></div>
                    </div>
                </section>
                {(this.state.isExpanded || this.props.isShowingFeatures) ?
                    <section className="subscription__features">
                        {this.props.speechBubbleText
                            ? <div className="subscription__speech-bubble">{this.props.speechBubbleText}</div>
                            : <div className="subscription__speech-bubble subscription__speech-bubble--empty"></div>}
                        {this.props.highlightedFeature ?
                            <div className="subscription__highlighted-feature">
                                <img className="subscription__highlighted-feature-icon" src={this.props.highlightedFeature.icon} role="presentation" alt="" />
                                <span className="subscription__highlighted-feature-text">{this.props.highlightedFeature.name}</span>
                            </div> : null}
                        {this.props.specialMessageText ? <strong className="special-message">{this.props.specialMessageText}</strong> : null}
                        <button className="button button--primary button--small">Gå videre</button>
                    </section> : null}
                {this.state.isExpanded ?
                    <section className="subscription__expanded-info">
                        <h2 className="heading heading--level-2">Om abonnement</h2>
                        <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
                        <p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?</p>
                        <h3 className="heading heading--level-3">Data</h3>
                        <p>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice." When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem card.</p>
                        <h3 className="heading heading--level-3">Utland</h3>
                        <p>We have so many things that we have to do better... and certainly ipsum is one of them. Despite the constant negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites.</p>
                        <ul className="list list--links">
                            <li className="list__item">
                                <a className="list__link" href="#" target="_self">Last ned abonnementsvilkår</a>
                            </li>
                        </ul>
                    </section> : null}
            </article>
        );
    }
}
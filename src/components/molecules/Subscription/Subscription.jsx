import React from 'react';

function classNames(color, isShowingFeatures, isExpanded) {
    const classNames = ['subscription'];
    if (color) {
        classNames.push(`subscription--${color}`);
    }
    if (isShowingFeatures) {
        classNames.push('subscription--is-showing-features');
    } else if (isExpanded) {
        classNames.push('subscription--is-expanded');
    }
    return classNames.join(' ');
}

const Subscription = ({ name, dataAmount, dataUnit, price, isShowingFeatures, isExpanded, color }) =>
    <div className={classNames(color, isShowingFeatures, isExpanded)}>
        {isExpanded ?
            <div className="subscription__close-expanded-info">
                Lukk
                <img className="" src="/public/icons/ico_delete.svg" role="presentation" alt="" />
            </div> : null}
        <div className="subscription__teaser">
            <div className="subscription__teaser-content">
                <h1 className="subscription__name">{name}</h1>
                <span className="subscription__data-amount">{dataAmount}</span>
                <span className="subscription__data-unit">{dataUnit}</span>
                <span className="subscription__price">{price},-</span>
                <span className="subscription__price-info">per mnd.</span>
                <span className="subscription__price-info">Ingen bindingstid.</span>
            </div>
            <div className="subscription__teaser-links">
                <div><a href="#" className="link">Utenlandspriser</a></div>
                <div><a href="#" className="link">Se alle priser</a></div>
            </div>
        </div>
        {(isExpanded || isShowingFeatures) ?
            <div className="subscription__features">
                <div className="subscription__speech-bubble">Some speech bubble text!</div>
                <div className="subscription__highlighted-feature">
                    <img className="subscription__highlighted-feature-icon" src="/public/icons/ico_music.svg" role="presentation" alt="" />
                    <span className="subscription__highlighted-feature-text">Music Freedom</span>
                </div>
                {isExpanded ?
                    <div>
                        <strong className="special-message">
                            Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.
                        </strong>
                        <button className="button button--action button--small">Gå videre</button>
                    </div>: null}
            </div> : null}
        {isExpanded ?
            <div className="subscription__expanded-info">
                <h2 className="heading heading--level-2">Om abonnement</h2>
                <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
                <p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?</p>
                <h3 className="heading heading--level-3">Data</h3>
                <p>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice." When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem card.</p>
                <h3 className="heading heading--level-3">Utland</h3>
                <p>We have so many things that we have to do better... and certainly ipsum is one of them. Despite the constant negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites.</p>
                <ul className="list list--links">
                    <li className="list__item">
                        <a className="list__link" href="#">Last ned abonnementsvilkår</a>
                    </li>
                </ul>
            </div> : null}
    </div>;

export default Subscription;
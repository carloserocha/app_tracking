import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

const Card_404 = () => {
    return (
        <div className="flex pt-4 px-4 py-3 bg-white mb-3 border shadow-sm rounded-md">
            <div className="px-1 flex-grow">
                <header>
                    <a className="text-black no-underline">
                        <span className="font-medium">
                        <Emoji symbol="⚠️" label="sheep" />
                         Desculpe, não encontramos sua encomenda.
                        </span>
                    </a>
                </header>
            </div>
        </div>
    )
}

export default Card_404
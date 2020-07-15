import React from 'react';
import Header from './Heading'
import package_img from './package.png'

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

const grid_img = {
  zoom: 1,
  opacity: 0.8,
  clear: 'both',
  position: 'relative'
}

const strong_style = {
  fontWeight: 700
}

const Heading = ({ packageEvents }) => {
  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-3xl">
        Cadê meu <span className="text-purple-600"><strong style={strong_style}>Pacote?</strong></span>
        <Emoji symbol="👻" label="sheep" />
      </h1>
      <span className="text-purple-600">
        {packageEvents.storeId} / {packageEvents.trackingId}
      </span>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-1">
          <img src={package_img} className="rounded-full"
            style={grid_img}
            height="30" alt="Pacote" />
        </div>
        <div className="col-span-2">
          <p className="mt-1">Carta Registrada</p>
          <p className="text-gray-600 text-xs">Quantidade: 1</p>
          <p className="text-gray-700 mt-2">Correios Brasil</p>
          <p className="text-gray-700 mt-1">support@correios.com</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
import React from 'react';
import dayjs from 'dayjs';

dayjs.locale('pt-BR')

const Emoji = props => (
    <span
        classNameName="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

const Card = ({ packageEvents }) => {
    let { events } = packageEvents
    events = events.sort((a,b) => (a.event_date - b.event_date) ? -1 : 1)

    return events.map(({ event_message, event_date }, index) => {
        const message = event_message.split(' ')
        return (
            <div className="flex pt-4 px-4 py-3 bg-white mb-3 border shadow-sm rounded-md">
                <div className="px-1 flex-grow">
                    <header>
                        <a href="#" className="text-black no-underline">
                            <span className="font-medium">
                                {index === 0 ? '👉 ' : ''}
                                {message[0]} {message[1]}
                            </span>
                        </a>

                        <div className="text-xs text-gray-800 flex items-center my-1">
                            <span className="">
                                {dayjs(event_date).format('DD/MM')} às {dayjs(event_date).format('HH:mm')}
                                </span>
                        </div>
                    </header>
                    <article className="py-3 text-grey-darkset text-sm text-gray-600">
                        {event_message}
                    </article>
                </div>
            </div>
        )
    })
}

export default Card
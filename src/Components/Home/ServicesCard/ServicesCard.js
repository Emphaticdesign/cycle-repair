import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServicesCard = ({ info }) => {
    const history = useHistory()
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 50 } }))

    const handleBook = (title) => {
        history.push(`/book/${title}`);
    }

    return (
        <animated.div
            className="col-md-4 text-white container"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <div className="infoCard-bgColor justify-content-center mt-3">
                <div>
                    <FontAwesomeIcon className="infoCard-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                    <p>${info.price}</p>
                    <Link onClick={() => handleBook(info.title)}>
                        <button className="btn btn-primary">Book</button>
                    </Link>
                </div>
            </div>
        </animated.div>
    );
};

export default ServicesCard;
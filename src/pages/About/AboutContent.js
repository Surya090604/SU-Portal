/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from "react-awesome-reveal";
import './AboutContent.css'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        marginBottom: '20vh',
    },
}));

export default function () {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about-content">
            <section className="about-section">
                <Fade direction="up" delay={300} triggerOnce>
                    <h2 className="about-content-heading"><span>SUC</span> BPHC</h2>

                </Fade>
                <div className="main">
                    <Fade direction="left" delay={300} triggerOnce>
                        <div className="about-text">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab qui voluptatem sapiente, mollitia beatae, voluptatibus iste illum architecto sed ipsum earum minus molestias reiciendis laborum veritatis dignissimos nostrum. Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum maiores veritatis omnis illo incidunt vitae quaerat, sed vel, nobis eos deleniti at adipisci ea? Totam sed facilis quas. Quo explicabo numquam provident blanditiis! Assumenda suscipit minima dolorem repudiandae labore!</p>
                        </div>
                    </Fade>
                    <div className = "vertical" />
                    <Fade direction="right" delay={300} triggerOnce>
                        <div className="about-text">
                            <ul className="list-items">
                                <li>The SUC</li>
                                <li>Our Vision</li>
                                <li>Our Responsibilities</li>
                                <li>SU Team</li>
                                <li>Batch Reps / Hostel Reps</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
}
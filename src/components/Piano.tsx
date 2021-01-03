import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Soundfont from 'soundfont-player';
import {io} from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const socket = io(ENDPOINT);


//STYLE

const StyledPiano = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    position: relative;

    .played {
        position: absolute;
        bottom: -30px;
        left: 0;
    }

    .keys {
        position: relative;

        .white-keys {
            display: flex;
            justify-content: center;
            .key {
                border-radius: ${props => props.theme.borderRadius};
                margin: 0 5px;
                width: 60px;
                height: 150px;
                background-color: white;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
            }
        }

        .black-keys {
            pointer-events: none;
            display: flex;
            width:100%;
            justify-content: flex-start;
            position: absolute;
            top: -10px;
            padding-left: 54px;
            .key {
                pointer-events: auto;
                border-radius: ${props => props.theme.borderRadius};
                width: 30px;
                height: 100px;
                background-color: #333333;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
            }
        }
    }
`;

// SOUND

const ac = new AudioContext();
const pianoinstrument = Soundfont.instrument(ac, 'marimba');



const Piano = () => {
    const [playedNotes, setNotes] = useState('')

    const playNote = (note: string) => {
        pianoinstrument.then( piano => {
            piano.play(note);
            socket.emit('note', note);
            setNotes(playedNotes + ' ' + note);
        })
    }
    useEffect(() => {
        socket.on("note", (note: any) => {
            pianoinstrument.then( piano => {
                piano.play(note);
                setNotes(playedNotes + ' ' + note);
            })
        });
      }, [playedNotes]);
    return (
        <StyledPiano>
            <div className="keys">
                <div className="white-keys">
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('C4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('D4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.3}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('E4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('F4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('G4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('A4')} />
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7}}  whileTap={{backgroundColor: '#dedede', transition:{duration: 0.01}}} onMouseDown={() => playNote('B4')} />
                </div>

                <div className="black-keys">
                    <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.3}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('C#4')}/>
                    <motion.div className="key" style={{ x: 40 }} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('D#4')}/>
                    <motion.div className="key" style={{ x: 150 }} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('F#4')}/>
                    <motion.div className="key" style={{ x: 190 }} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('G#4')}/>
                    <motion.div className="key" style={{ x: 230 }} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('A#4')}/>
                </div>
            </div>

            <div className="played">Played notes: {playedNotes}</div>
            
        </StyledPiano>)
    };


export default Piano;
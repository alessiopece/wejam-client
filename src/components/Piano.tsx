import styled from 'styled-components';
import { motion } from "framer-motion";
import Soundfont from 'soundfont-player';


//STYLE

const StyledPiano = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 100px;

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
            display: flex;
            width:100%;
            justify-content: flex-start;
            position: absolute;
            top: -10px;
            padding-left: 54px;
            .key {
                border-radius: ${props => props.theme.borderRadius};
                margin-right: 40px;
                width: 30px;
                height: 100px;
                background-color: #333333;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
            }

            .key:nth-child(2) {
                margin-right: 110px;
            }
        }
    }
`;

// SOUND

const ac = new AudioContext();
const pianoinstrument = Soundfont.instrument(ac, 'marimba');

const playNote = (note: string) => {
    pianoinstrument.then( piano => {
        piano.play(note);
    })
}

const Piano = () => (
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
                <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('D#4')}/>
                <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('F#4')}/>
                <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('G#4')}/>
                <motion.div className="key" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7}} whileTap={{backgroundColor: '#000', transition:{duration: 0.01}}} onMouseDown={() => playNote('A#4')}/>
            </div>
        </div>
        
    </StyledPiano>
);


export default Piano;
import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,

        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};
const Main = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="main">
          <h2>Точка — это свобода</h2>
          <h3 className="main2">от бухгалтерии</h3>
          {/*<h3 className="main3">от обработки документов</h3>*/}
          {/*<h3 className="main4">от подсчёта налогов</h3>*/}
          {/*<h3 className="main5">от сдачи отчётности</h3>*/}
            <p>Предпринимательская жизнь — это не только бизнес, но и семья, и спорт, и отпуск, и встречи с друзьями.
                <br></br>
                <br></br>
                Поэтому мы берём на себя учёт, отчётность, расчёт налогов и зарплаты, юридические вопросы, работу с банками, чтобы вы стали свободнее!</p>
            <button className="button-left">Попробовать бесплатно</button>
            <button className="button-right"  type="button" onClick={handleOpen}>Перезвоните мне</button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="spring-modal-title">Насрединова Валентина</h2>
                        <p id="spring-modal-description">
                        <div className="main-icon">
                            <div className="main-iconPhone"><PhoneIcon style={{ color: "white"}}/></div>
                            <div className="main-phone">0555458626</div>
                        </div>

                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default Main;

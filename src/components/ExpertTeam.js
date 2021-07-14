import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import dilbar1 from '../images/dilbar.1.jpg'
import dilbar2 from '../images/dilbar.10.jpg'
import dilbar3 from '../images/dilbar.11.jpg'
import dilbar4 from '../images/dilbar.12.jpg'

const useStyles = makeStyles((theme) => ({


    large: {
        width: theme.spacing(23),
        height: theme.spacing(23),
    },
}));
const ExpertTeam = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="ExpertTeam">
                <div>
                    <h2>Команда экспертов</h2>
                    <p>Работу в Точке за вас выполняет целая команда специалистов разных направлений.</p>
                </div>
                <div  className="ExpertTeam-two">
                    <div>
                        <div className="ExpertTeam-icon">
                            <Avatar alt="" src={dilbar1} className={classes.large}/>
                        </div>
                        <h4>
                            Ведущий бухгалтер
                        </h4>
                        <p>Спрогнозирует налоги, уменьшит их сумму, будет общаться с налоговой за вас.</p>
                    </div>
                    <div>
                        <div className="ExpertTeam-icon">
                            <Avatar alt="" src={dilbar2} className={classes.large}/>
                        </div>
                        <h4>
                            Ведущий бухгалтер
                        </h4>
                        <p>Спрогнозирует налоги, уменьшит их сумму, будет общаться с налоговой за вас.</p>
                    </div>
                    <div>
                        <div className="ExpertTeam-icon">
                            <Avatar alt="" src={dilbar3} className={classes.large}/>
                        </div>
                        <h4>
                            Ведущий бухгалтер
                        </h4>
                        <p>Спрогнозирует налоги, уменьшит их сумму, будет общаться с налоговой за вас.</p>
                    </div>
                    <div>
                        <div className="ExpertTeam-icon">
                            <Avatar alt="" src={dilbar4} className={classes.large}/>
                        </div>
                        <h4>
                            Ведущий бухгалтер
                        </h4>
                        <p>Спрогнозирует налоги, уменьшит их сумму, будет общаться с налоговой за вас.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertTeam;

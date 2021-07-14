import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import ceo from "../images/ceo.jpg";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles((theme) => ({


    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}));
const Ceo = () => {
    const classes = useStyles();
    return (
        <div className="ceo">
       <Container>
           <div className="ceo-container">
               <div>
                   <h2>Создаём лучшую бухгалтерию уже 10 лет</h2>
               </div>
               <div className="ceo-box">
                   <div className="ceo-text">
                       <p>
                           У нас есть мечта: создать самый лучший бизнес-сервис в Кыргызстане. Для этого мы собрали вместе бухгалтеров, юристов, бизнес-ассистентов.То, что мы находимся в Бишкеке, совершенно не мешает нам доставлять счастье нашим клиентам по всему Кыргызстану.
                       </p>
                   </div>

                   <div className="ceo-img">
                       <Avatar alt="" src={ceo} className={classes.large}/>
                       <h4>Насрединова Валентина</h4>
                       <p>Директор Точки</p>
                   </div>

               </div>
               <div className="ceo-awards">
                   <div className="ceo-awards-box">
                       <div className="ceo-icon1">
                           <InsertDriveFileIcon style={{ color: "white", fontSize: 60  }} />
                       </div>
                       <p>
                           Учёт, отчётность и обработку документов
                       </p>
                   </div>
                   <div className="ceo-awards-box">
                       <div className="ceo-icon2">
                           <InsertDriveFileIcon style={{ color: "white", fontSize: 60  }} />
                       </div>
                       <p>
                           Учёт, отчётность и обработку документов
                       </p>
                   </div>
                   <div className="ceo-awards-box">
                       <div className="ceo-icon3">
                           <InsertDriveFileIcon style={{ color: "white", fontSize: 60  }} />
                       </div>
                       <p>
                           Учёт, отчётность и обработку документов
                       </p>
                   </div>
                   <div className="ceo-awards-box">
                       <div className="ceo-icon4">
                           <InsertDriveFileIcon style={{ color: "white", fontSize: 60  }} />
                       </div>
                       <p>
                           Учёт, отчётность и обработку документов
                       </p>
                   </div>
               </div>
           </div>
       </Container>
        </div>
    );
};

export default Ceo;

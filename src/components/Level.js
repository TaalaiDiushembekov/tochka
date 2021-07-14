import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExposureIcon from '@material-ui/icons/Exposure';
import PollIcon from '@material-ui/icons/Poll';
import Container from "@material-ui/core/Container";

const Level = () => {
    return (
        <div className="level">
          <Container>
              <div className="level-one">
                  <div>
                      <h2>Новый уровень бухгалтерского сервиса</h2>
                      <p>За спиной Своего человека — десятки специалистов разных направлений, которые берут на себя:</p>
                  </div>
                  <div  className="level-two">
                      <div className="level-three">
                          <div className="level-icon">
                              <InsertDriveFileIcon style={{ color: "white", fontSize: 60  }} />
                          </div>
                          <p>
                              Учёт, отчётность и обработку документов
                          </p>
                      </div>
                      <div className="level-three">
                          <div className="level-icon2">
                              <ChatBubbleIcon style={{ color: "white", fontSize: 60  }} />
                          </div>
                          <p>
                              Учёт, отчётность и обработку документов
                          </p>
                      </div>
                      <div className="level-three">
                          <div className="level-icon3">
                              <ExposureIcon style={{ color: "white", fontSize: 60  }} />
                          </div>
                          <p>
                              Учёт, отчётность и обработку документов
                          </p>
                      </div>
                      <div className="level-three">
                          <div className="level-icon4">
                              <PollIcon style={{ color: "white", fontSize: 60  }} />
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

export default Level;

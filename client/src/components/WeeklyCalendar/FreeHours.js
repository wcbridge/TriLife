import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent, CardFooter, CardFooterItem} from 'bloomer';
import "./selectFunction.js";
import NotesBtn from "../../components/NotesBtn";
import Modal from "../../components/Modal";

export const FreeHours = props => (

  <Card className="free_hours">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Free Hours
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Media>
        <MediaContent>
        Self Actualization : {props.hours.selfA}
        </MediaContent>
      </Media>
      <Content>
      Esteem : {props.hours.esteem}
      </Content>
      <Content>
      Love : {props.hours.love}
      </Content>
    </CardContent>
    <CardFooter>
      <CardFooterItem />
      <NotesBtn onClick={props.toggle} />
      <Modal
        closeModal={props.toggle} 
        modalState={props.state} 
        title="My Notes"
      >
      <p>{props.hours.synopsis}</p>
      </Modal>
    </CardFooter>

  </Card>
)


import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent, CardFooter, CardFooterItem} from 'bloomer';
import NotesBtn from "../../components/NotesBtn";
import Modal from "../../components/Modal";

export const FreeHours = props => (

  <div>
    <p><span className="self_actualization brkdwn">Self Actualization : {props.hours && props.hours.selfA}</span> <span className="esteem brkdwn">Esteem : {props.hours && props.hours.esteem}</span> <span className="love brkdwn">Love : {props.hours && props.hours.love}</span>
    <NotesBtn onClick={props.toggle} />
    <Modal
      closeModal={props.toggle} 
      modalState={props.state} 
      title="My Notes"
    >
    <p>{props.hours && props.hours.synopsis}</p>
    </Modal></p>
  </div>
)


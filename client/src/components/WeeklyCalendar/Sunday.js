import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent} from 'bloomer';
import CreateBtn from "../../components/CreateBtn";
import "./selectFunction.js";

export const Sunday = props => (

  <Card className="sunday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Sunday
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Media>
        <MediaContent>
          <CreateBtn />
        </MediaContent>
      </Media>
      <Content>
        <CreateBtn />
      </Content>
      <Content>
        <CreateBtn />
      </Content>
    </CardContent>

  </Card>
)


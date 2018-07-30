import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent} from 'bloomer';
import CreateBtn from "../../components/CreateBtn";

export const Tuesday = () => (
  <Card className="tuesday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Tuesday
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


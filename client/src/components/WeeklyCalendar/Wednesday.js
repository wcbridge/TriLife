import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent} from 'bloomer';
import CreateBtn from "../../components/CreateBtn";

export const Wednesday = () => (
  <Card className="wednesday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Wednesday
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


import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, MediaContent} from 'bloomer';
import CreateBtn from "../../components/CreateBtn";

export const Thursday = () => (
  <Card className="thursday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Thursday
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


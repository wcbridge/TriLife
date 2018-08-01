import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, } from 'bloomer';
import UserGeneratedPills from "../../components/UserGeneratedPills";


export const Monday = () => (
  <Card className="monday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Monday
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Media>
      </Media>
      <Content>
        <UserGeneratedPills />
      </Content>
    </CardContent>
  </Card>
)


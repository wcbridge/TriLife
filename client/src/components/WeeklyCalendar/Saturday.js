import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, } from 'bloomer';
import UserGeneratedPills from "../../components/UserGeneratedPills";

export const Saturday = () => (
  <Card className="saturday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Saturday
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


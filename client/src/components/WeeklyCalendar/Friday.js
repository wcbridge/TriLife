import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, } from 'bloomer';
import UserGeneratedPills from "../../components/UserGeneratedPills";


export const Friday = () => (
  <Card className="friday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Friday
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


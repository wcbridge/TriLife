import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, } from 'bloomer';
import UserGeneratedPills from "../../components/UserGeneratedPills";

export const Wednesday = () => (
  <Card className="wednesday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Wednesday
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


import React from 'react';
import { Card, CardContent, Content, CardHeader, CardHeaderTitle, Media, } from 'bloomer';
import UserGeneratedPills from "../../components/UserGeneratedPills";

export const Thursday = () => (
  <Card className="thursday">
    <CardHeader>
      <CardHeaderTitle className="is-centered">
        Thursday
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


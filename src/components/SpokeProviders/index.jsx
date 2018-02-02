import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SpokeProviders = () => (
  <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content as={Link} to="/spoke-provider/b-n-rice">
          <List.Header>Book n Rice</List.Header>
          Selling in bulk all the time!
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content as={Link} to="/spoke-provider/b-n-pie">
          <List.Header>Book n Pie</List.Header>
          Selling best books
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content as={Link} to="/spoke-provider/b-n-booz">
          <List.Header>Book n Booz</List.Header>
          Offer poetic books from unheard authors
        </List.Content>
      </List.Item>
    </List>
  </Segment>
);
export default SpokeProviders;

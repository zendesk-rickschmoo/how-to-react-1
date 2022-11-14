import React, { useState } from 'react';
import { Main } from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import { Notification, Title } from '@zendeskgarden/react-notifications';
import { GlobalAlert, IGlobalAlertProps } from '@zendeskgarden/react-notifications';
import { Anchor } from '@zendeskgarden/react-buttons';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import Modal from './Modal';

export default () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (

    <div>
    <Notification>
    <Title>Example Title</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </Notification>
   {/* <GlobalAlertStory
      anchor="Anchor"
      ariaLabel="Label"
      button="Button"
      content="Content"
      hasClose
      title="Title"
      type="info"
    /> */}
  <GlobalAlert type="info">
    <GlobalAlert.Content>
      <Title>
          Title
      </Title>
      "Content"
      <Anchor href="#">
          Anchor
       </Anchor>
    </GlobalAlert.Content>
   <GlobalAlert.Button>Button 123</GlobalAlert.Button>
   <GlobalAlert.Close aria-label="test123" />
  </GlobalAlert>
  
  <Main style={{ padding: DEFAULT_THEME.space.md }}>
      <Button onClick={() => setModalVisible(true)}>Sign in</Button>
      {isModalVisible && <Modal onClose={() => setModalVisible(false)} />}

    </Main>

    </div>
);
};

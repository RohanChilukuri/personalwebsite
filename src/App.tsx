import React from 'react';
import './App.css';
import { Header, Tab, List, Image, Label, Divider, Grid } from 'semantic-ui-react';

function App() {
  const personalInfo = [
    {
      menuItem: 'About',
      render: () => <Tab.Pane attached={false}>
        Hi, I am a junior at UC Berkeley studying Computer Science and Applied Math.
        Feel free to browse around this website to learn more about me.
      </Tab.Pane>,
    },
    {
      menuItem: 'Work',
      render: () => <Tab.Pane attached={false}>
        My previous work experience consists of four internships at tech companies 
        (software, semiconductor inspection, and education technology companies), 
        as well as a personal project on stock market timing.
        </Tab.Pane>,
    },
    {
      menuItem: 'Extra',
      render: () => <Tab.Pane attached={false}>
        I am from Menlo Park, CA. In my free time I enjoy baking and 
        playing golf, tennis, tuba, and video games.
      </Tab.Pane>,

    },
    {
      menuItem: 'Contact',
      render: () => <Tab.Pane attached={false}>
        For work inquiries, you can contact me through email or LinkedIn.
      </Tab.Pane>,
    },
  ]
  return (
    <div className="App">
      <Header as='h1'>Rohan Chilukuri</Header>
      <Divider horizontal></Divider>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={12}>
            <Tab menu={{ secondary: true, pointing: true, style: {display: "flex", justifyContent: "center"} }} panes={personalInfo} />
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Header as='h1'>Links</Header>
      <List horizontal className='links'>
        <List.Item>
          <Image src={require('./icons/email.png')} size='tiny' as='a' href='mailto:rohan.chilukuri@gmail.com' target="_blank" />
          <br/>
          <Label basic>Email</Label>
        </List.Item>
        <List.Item>
          <Image src={require('./icons/github.png')} size='tiny' as='a' href='https://github.com/RohanChilukuri/' target="_blank"/>
          <br/>
          <Label basic>Github</Label>
        </List.Item>
        <List.Item>
          <Image src={require('./icons/linkedin.png')} size='tiny' as='a' href='https://www.linkedin.com/in/rohanchilukuri/' target="_blank"/>
          <br/>
          <Label basic>LinkedIn</Label>
        </List.Item>
        <List.Item>
          <Image src={require('./icons/resume.png')} size='tiny' as='a' href={require('./resume/Rohan Chilukuri - Resume.pdf')} target="_blank"/>
          <br/>
          <Label basic>Resume</Label>
        </List.Item>
      </List>
    </div>
  );
}

export default App;

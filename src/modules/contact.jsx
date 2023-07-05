import { React, useState } from 'react';
import axios from 'axios';
import { Grid, Stack } from '@mui/joy';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import * as dotenv from 'dotenv';
// dotenv.config()


const Contact = ({ showThanks }) => {

  const [toSend, setToSend] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
  });

  const openThanks = (e) => {
    e.preventDefault();
    showThanks();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    openThanks(e)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/joyparker1690@gmail.com', {
      name: toSend.name,
      subject: toSend.subject,
      message: toSend.message,
      replyto: toSend.email,
    })
      .then(res => {
        for (let key in toSend) {
          setToSend({ ...toSend, [key]: '' })
        }
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const theme = useTheme();

  return (
    <>
      <div style={{ padding: "10px", fontFamily: `${theme.typography.fontFamily}`, color: `${theme.palette.fifth.main}` }}>
        <h2 style={{ color: `${theme.palette.fourth.main}`, font: 'bold 30px "Cedarville Cursive"' }}>Contact Me</h2>
        <Stack container style={{ fontSize: "18px" }} spacing={2}>
          <form>
            <h3>Your Name</h3>
            <input
              type="text"
              name="name"
              size="64"
              placeholder="Your name"
              value={toSend.name}
              onChange={handleChange}
            />
            <h3>Your Email</h3>
            <input
              type="email"
              name="email"
              size="64"
              required
              placeholder="How can I reply to you?"
              value={toSend.email}
              onChange={handleChange}
            />
            <h3>Subject</h3>
            <input
              type="text"
              name="subject"
              size="64"
              placeholder="Subject Line"
              value={toSend.subject}
              onChange={handleChange}
            />
            <h3>Your Message</h3>
            <textarea
              type="textarea"
              name="message"
              cols="55"
              rows="10"
              placeholder="Please add your message here"
              value={toSend.message}
              onChange={handleChange}
            >
            </textarea>
            <Button type="submit" onClick={onSubmit} sx={{fontWeight: 'bold', fontSize: '20px', color: `${theme.palette.fifth.main}`, display: "block"}}>Send</Button>
          </form>
        </Stack>
      </div>


    </>
  )
}

export default Contact;
import { React, useState } from 'react';
import { send } from 'emailjs-com';
import { Grid, Stack } from '@mui/joy'
import { useTheme } from '@mui/material/styles';
// import * as dotenv from 'dotenv';
// dotenv.config()


const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Joy',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.SERVICEID,
    )
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
          <h3>Your Name</h3>
          <input
            type="text"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <h3>Your Email</h3>
          <input
            type="email"
            placeholder="How can I reply to you?"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <h3>Your Message</h3>
          <input
            type="textarea"
            placeholder="What would you like me to know about the position?"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </Stack>
      </div>


    </>
  )
}

export default Contact;
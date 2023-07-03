import { Button } from '@mui/material';

const Login = ({ showLogin }) => {

  return (
    <>
    <div>login</div>
    <Button onClick={showLogin}>Close</Button>
    </>
  );
};

export default Login;
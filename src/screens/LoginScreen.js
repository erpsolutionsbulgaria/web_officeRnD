import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import axios from "axios";
import AlertBox from "../components/AlertBox";
// import history from "../components/history";
// import apiAddress from "../globals/apiAddress";

const useStyles = makeStyles({
  paperStyle: { padding: 20, width: 280, margin: "10% auto" },
  btnstyle: {
    margin: "8px 0",
    backgroundColor: "#1bbd7e",
    "&:hover": {
      opacity: "0.5",
      backgroundColor: "#1bbd7e",
    },
  },
  textFieldStyle: {
    marginTop: "3%",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const sendLoginRequest = () => {
      console.log('sending Login request')
//     axios({
//       url: apiAddress,
//       method: "post",
//       data: {
//         query: `
//                 query login {
//                     login(username: "${user}", password: "${password}") {
//                     userId
//                     tokenExpiration
//                     token
//                     }
//                 }
//                 `,
//       },
//     })
//       .then((result) => {
//         if (result.data.errors) {
//           return setAlertMessage(result.data.errors[0].message);
//         }
//         if (result.data.data.login) {
//           localStorage.setItem("userId", result.data.data.login.userId);
//           localStorage.setItem("token", result.data.data.login.token);
//           history.push("/home");
//         }
//       })
//       .catch((error) => {
//         setAlertMessage(
//           "Could not perform login in. Please try again or contact us"
//         );
//       });
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Добре Дошли</h2>
        </Grid>
        <TextField
          label="Потребител"
          placeholder="Въведи потребител"
          fullWidth
          onChange={(text) => setUser(text.target.value)}
        />
        <TextField
          label="Парола"
          placeholder="Въведи парола"
          type="password"
          fullWidth
          className={classes.textFieldStyle}
          onChange={(text) => setPassword(text.target.value)}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={sendLoginRequest}
          className={classes.btnstyle}
          fullWidth
        >
          Влез
        </Button>
        <Typography>
          В случай, че си забравил своята парола, може да ни потърсиш.
        </Typography>
      </Paper>
      {alertMessage ? (
        <AlertBox
          success={false}
          text={alertMessage}
          display={setAlertMessage}
        />
      ) : null}
    </Grid>
  );
};

export default LoginForm;

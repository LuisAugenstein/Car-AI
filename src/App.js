
import React, {useState} from 'react'
import { Box, Container, makeStyles, Button, Grid, Typography } from '@material-ui/core'
import GameFrame from './GameFrame'

const useStyles = makeStyles(theme => ({
  main: {
    //width: "100vw",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default
  },
}))


function App() {
  const classes = useStyles()
  const [isLoopOn, setLoopOn] = useState(false)
  return (
    <main className={classes.main}>
      <Container>
        <Grid container justify="center">
          <Box m={2}>
            <Typography color="textPrimary" variant="h4" margin={40}>
              Car-AI
          </Typography>
          </Box>

          <GameFrame isLoopOn={isLoopOn}/>

          <Box m={2}>
            <Button onClick={() => setLoopOn(!isLoopOn)} variant="contained" color="primary">
              {isLoopOn ? "Stop Loop" : "Start Loop"}
            </Button>
          </Box>

        </Grid>
      </Container>
    </main>
  );
}

export default App;
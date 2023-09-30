import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import * as React from 'react'
import '../style/content.css'
import {
  Box,
  Button,
  Slider,
  TextField,
  Typography,
  Stack,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function showScore(value) {
  return `${value}`
}

function ScoreSlideButton() {
  const [score, setScore] = useState(0) // to show the number of slide bar

  function handleChange(event, newValue) {
    console.log('score update ? ', newValue)
    setScore(newValue)
  }

  return (
    <div className="ScoreSlide">
      <Typography variant="h3" align="center" gutterBottom>
        Rate the Festival
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        {score}
      </Typography>
      <Box
        position="relative"
        alignItems="center"
        sx={{ width: '50vw', left: '20vw' }}
      >
        <Slider
          defaultValue={0}
          aria-label="Default"
          alignSelf="center"
          getAriaValueText={showScore}
          onChange={handleChange}
          step={5}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  )
}

const Survey = () => {
  const navigate = useNavigate()

  console.log('Survey Page entered')

  function moveToHome() {
    console.log('Feedback Submitted')
    alert('Thanks to your feedback')
    navigate('../')
  }

  return (
    <div className="content">
      <ScoreSlideButton />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '70vw', align: 'center' },
        }}
        align="center"
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" align="center">
          How can we improve the festival?
        </Typography>
        <TextField
          id="feedbackText"
          label="Please write your Feedback here"
          multiline
          rows={6}
          placeholder="Please write your Feedback here"
        />
      </Box>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={moveToHome}
        >
          Submit
        </Button>
      </Stack>
    </div>
  )
}

export default Survey

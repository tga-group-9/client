import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AskQuestion.scss';

const AskQuestion = () => {
  const [questionTitle, setQuestionTitles] = useState('');


  return (
    <div className="ask-question">
      <div className="ask-question__heading">
        <h1>Ask a Question update pipeline</h1>
      </div>
      <form className="ask-question-form">
        <TextField
          id="questionTitle"
          name="questionTitle"
          label='Title'
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'ask-question__input-label',
          }}
          onChange={e => setQuestionTitles(e.target.value)}
          className="ask-question__input-title"
          value={questionTitle}
        />

        <TextField
          id="questionDesc"
          name="questionDesc"
          label='Description'
          placeholder="Enter your Question"
          multiline={true}
          rows={2}
          rowsMax={4}
          className="ask-question__input-desc"
        />
        <TextField
          id="questionTag"
          name="questionTag"
          label='Tags'
          placeholder="Enter Question Tags"
          className="ask-question__input-tags"
        />
        <Button type="submit" variant="outlined" color="primary" className="ask-question__button">
          Post Question
      </Button>
      </form>
    </div>
  )
}

export default AskQuestion;
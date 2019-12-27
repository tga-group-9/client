
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import './Card.scss';

const QuestionCard = () => {
  return (
    <a className="question-card">
      <Card className="question-card__container">
        <div className="question-card__likes-wrapper">
          <button className="question-card__like-btn" type="button"><ThumbUpIcon color="primary" /></button>
          <span className="question-card__likes-count">200</span>
          <button className="question-card__like-btn" type="button"> <ThumbDownAltIcon color="primary" /></button>
        </div>
        <div className="question-card__question-info">
          <h2 className="question-card__title">What vanilla javascript api can I use to determine if an image has finished loading?</h2>
          <h3 className="question-card__desc">The functionality of image.onload is what I'm looking for, but the method is deprecated: https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Attribute/image.onload</h3>
          <div className="question-card__user-info">
            <span>asked by username, 7 month ago</span>
          </div>
        </div>
      </Card>
    </a>

  )
}

export default QuestionCard;
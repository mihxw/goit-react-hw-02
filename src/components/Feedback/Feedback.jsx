import css from "./Feedback.module.css";
import React, { useState } from "react";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <>
      <h2>Feedback Statistics</h2>
      <p className={css.rezult}>Good: {feedback.good}</p>
      <p className={css.rezult}>Neutral: {feedback.neutral}</p>
      <p className={css.rezult}>Bad: {feedback.bad}</p>
      <p className={css.rezult}>Total: {totalFeedback}</p>
      <p className={css.rezult}>Positive feedback: {positiveFeedback}%</p>
    </>
  );
}

export default Feedback;
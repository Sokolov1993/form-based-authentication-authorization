import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseInstance } from '../../api/instances';

export const quizRequest = createAsyncThunk('home/quiz', async (payload) => {
  try {
    const req = await firebaseInstance.get('allQuestions.json');
    const quizData = await req.data;

    return quizData;
  } catch (err) {
    throw new Error(err);
  }
});

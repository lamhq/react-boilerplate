import React, { Suspense } from 'react';

export default function useErrorHandler(callBack) {
  try {
    await callBack();
  } catch (error) {
    if ()
  }
}

const getStepEndTime = (step, steps) => {
  let endTime = 0;

  const parentSteps = steps.filter(_step => {
    return _step.dependencies.includes(step.stepName);
  });
 
  if (!parentSteps.length) return endTime;
  
  const parentStartTimes = parentSteps.map(_step => {
    return getStepEndTime(_step, steps) + _step.duration;
  });
  return Math.max(...parentStartTimes);
};

export const getStepTimeRange = (step, steps) => {
  const endTime = getStepEndTime(step, steps);
  return {
    endTime,
    startTime: endTime + step.duration
  };
};

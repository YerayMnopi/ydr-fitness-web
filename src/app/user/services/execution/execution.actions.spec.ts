import * as fromExecution from './execution.actions';

describe('loadExecutions', () => {
  it('should return an action', () => {
    expect(fromExecution.loadExecutions().type).toBe('[Execution] Load Executions');
  });
});

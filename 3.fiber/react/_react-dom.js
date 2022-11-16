// 下一个功能单元
let nextUnitOfWork = null;

/**
 * 工作循环
 * @param {*} deadline 截止时间
 */
function workLoop(deadline) {
  // 停止循环标识
  let shouldYield = false;

  // 循环条件为存在下一个工作单元，且没有更高优先级的工作
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // 当前帧空余时间要没了，停止工作循环
    shouldYield = deadline.timeRemaining() < 1;
  }
  // 空闲时间应该任务
  requestIdleCallback(workLoop);
}
// 空闲时间执行任务
requestIdleCallback(workLoop);

// 执行当前单元事件，返回下一个单元事件
function performUnitOfWork(fiber) {
  // TODO
}

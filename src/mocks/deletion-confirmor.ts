/** Default delay in ms for mock awaiting delete (e.g. in Storybook). */
export const MOCK_AWAITING_DELETE_MS = 2000;

/**
 * Mocks an async delete: returns a function that resolves after a delay then calls onClose.
 * Used for Storybook to simulate confirm-button loading state.
 */
export const mockAwaitingDelete =
  (onClose: () => void, delayMs = MOCK_AWAITING_DELETE_MS) =>
  (): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        onClose();
        resolve();
      }, delayMs);
    });

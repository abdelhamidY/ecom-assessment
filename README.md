## Project Setup

1. Clone the repository:

2. Install dependencies:

npm install

3. Run the project:

npm run dev

4. Run Cypress

npm run cypress:open

## Performance Optimizations

This project optimizes a React component displaying a large list with expensive computations. The following optimizations were applied:

- **React.memo**: Prevents unnecessary re-renders of list items when their props do not change.
- **useMemo**: Memoizes the result of the expensive calculation, ensuring that it only runs when needed.
- **useCallback**: Memoizes the click handler to prevent re-creating the function on every render.

## Performance Comparison

Using React Profiler, we measured the performance before and after applying optimizations:

- **Before**: All list items re-rendered on each change, and the expensive calculation ran multiple times.
- **After**: Only the necessary list items re-render, and the expensive calculation runs only when required, leading to a significant reduction in rendering time.

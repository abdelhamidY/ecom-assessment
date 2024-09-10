## Project Setup

1. **Clone the repository**:

   Clone the project from the repository:

   ```bash
   git clone https://github.com/abdelhamidY/ecom-assessment.git
   cd your-repo-name

   ```

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

### Key Changes:

- **Components Overview Section**: Added a section explaining the `ListBeforeOptimization` and `ListAfterOptimization` components and how they demonstrate the performance difference.
- **Performance Optimizations Section**: Remains the same, explaining the optimizations applied.

This README now clearly indicates the comparison between the two components (`ListBeforeOptimization` and `ListAfterOptimization`) and explains their purpose in showcasing the performance differences.

Let me know if you need any further modifications!

// ./src/blogContent/BlogRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, RouteProps } from 'react-router-dom';

interface BlogRouterProps {
  components: React.ComponentType[];
}

const BlogRouter: React.FC<BlogRouterProps> = ({ components }) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Create links dynamically based on the imported components */}
            {components.map((Component, index) => (
              <li key={index}>
                <Link to={`../blogContent/${index + 1}`}>{`Post ${index + 1}`}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {/* Create routes dynamically based on the imported components */}
          {components.map((Component, index) => (
            <Route
              key={index}
              path={`/src/blogContent${index + 1}`}
              element={<Component />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default BlogRouter;

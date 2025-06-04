import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import DefaultLayout from "./layouts/DefaultLayout";
import PostDetailsPage from "./pages/PostDetailsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/posts">
              <Route path="" element={<PostPage />} />
              <Route path=":id" element={<PostDetailsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

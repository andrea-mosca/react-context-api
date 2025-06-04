import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import DefaultLayout from "./layouts/DefaultLayout";
import PostDetailsPage from "./pages/PostDetailsPage";
import { PostsProvider } from "./context/PostsContext";
function App() {
  return (
    <>
      <PostsProvider>
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
      </PostsProvider>
    </>
  );
}

export default App;

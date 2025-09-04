import { PostProvider } from "./postContext";

import DarkModeToggle from "./component/DarkModeToggle";
import Header from "./component/Header";
import Main from "./component/Main";
import Archive from "./component/Archive";
import Footer from "./component/Footer";

function App() {
  return (
    <section>
      <DarkModeToggle />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;

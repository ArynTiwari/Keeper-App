import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Notes from "./Components/Notes/Notes";
import notes from "./Components/Notes/notes";
function App() {
  return (
    <>
      <Header />
      {notes.map(notes =>(
        <Notes
          key = {notes.key}
          title = {notes.title}
          content = {notes.content}
          />
      ))}
      <Footer />
    </>
  );
}

export default App;

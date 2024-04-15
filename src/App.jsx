import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TranslationsProvider from "./contexts/TranslationProvider.jsx";
import { ThemeProvider } from "./contexts/theme";
import useLocalTheme from "./hooks/useLocalTheme";

function App() {
  const { themeMode, darkTheme, lightTheme } = useLocalTheme();

  return (
    <TranslationsProvider>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;

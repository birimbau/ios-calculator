import Calculator from './components/calculator/Calculator';
import GlobalStyles from './styles/global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Calculator />
        </ThemeProvider>
    );
};

export default App;

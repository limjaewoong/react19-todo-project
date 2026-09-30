import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/css/index.css'
import App from "./App.tsx";
// import Count2 from "./components/counter/Count2.tsx";
// import {Provider} from "react-redux";
// import App from "./App.tsx";
// import Count from "./components/counter/Count.tsx";
// import {Provider} from "react-redux";
// import {store} from "./store/store.ts";
// import App from './App.tsx'
// import ScrollComparison from "./components/scroll/ScrollComparison.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<Provider store={store}>
            <Count/>
        </Provider>*/}
        {/*<Provider store={store}>*/}
            <App />
        {/*</Provider>*/}
        {/*<Count2/>*/}
        {/*<ScrollComparison/>*/}
    </StrictMode>,
)

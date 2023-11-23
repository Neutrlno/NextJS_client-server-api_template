import { ContextProvider } from "./components/Context"
import { fetchDataFromServer } from "./components/utils"

console.log('variable');
const dataFromServer = await fetchDataFromServer('http://localhost:3000/api', false);

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
            </head>

            <body>
                <ContextProvider dataFromServer={dataFromServer}>
                    {children}
                </ContextProvider>
            </body>
        </html>
    );
};
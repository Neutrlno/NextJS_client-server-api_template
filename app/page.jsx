import Button from "./Button";
import ServerComponent from "./ServerComponent";

export default function Home({ children }) {
    return (
        <Button>
            <ServerComponent>
            </ServerComponent>
        </Button>
    );
};
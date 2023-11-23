'use client'
import { useContext, useEffect, useState } from "react";
import { Context } from "./components/Context";
import { fetchDataFromServer, fatchDataToServer } from "./components/utils"

export default function Home({children}) {
    const { data, setData } = useContext(Context);
    const [fromServer, setFromServer] = useState(data);
    useEffect(() => {
        fatchDataToServer(data, 'http://localhost:3000/api');
        async function getFromServer() {
            const fromServer = await fetchDataFromServer('http://localhost:3000/api', false);
            setFromServer(fromServer);
        };
        setTimeout(getFromServer, 2500);
    }, [data])

    return (
        <div >
            {fromServer.count}
            <button
                onClick={() => { setData((current) => { return { count: ++current.count } }) }}
            >
                {`increase count: ${data.count}`}
            </button>
            {children}
        </div>
    );
};
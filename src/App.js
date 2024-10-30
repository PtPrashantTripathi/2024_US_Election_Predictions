import React, { useEffect, useState } from "react";
import { Table, Error } from "./components";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                console.log(loading);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <Error message={error} />;

    return (
        <div className="App">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                    2024 Election Predictions
                </h1>
                <div className="overflow-x-auto">
                    <Table data={data} />
                </div>
            </div>
        </div>
    );
}

export default App;

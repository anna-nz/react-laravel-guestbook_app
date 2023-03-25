import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Form from "./../Form/Form";
import PaginationTable from "./../Pagination/PaginationTable";

function DefaultView() {
    const [quotes, setQuotes] = useState([]);

    const fetchData = async () => {
        await fetch("/api/quotes")
            .then((response) => response.json())
            .then((data) => {
                setQuotes(data.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateTable = () => {
        fetchData();
    };

    return (
        <Container>
            <Form updateTable={updateTable} />
            <PaginationTable rows={quotes} />
        </Container>
    );
}

export default DefaultView;

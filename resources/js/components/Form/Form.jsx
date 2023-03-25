import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

function Form({ updateTable }) {
    const siteKey = import.meta.env.VITE_REACT_APP_SITE_KEY;
    const captchaRef = useRef("");

    const [formFields, setFormFields] = useState({
        name: "",
        address: "",
        message: "",
        email: "",
    });

    useEffect(() => {
        window.addEventListener("load", () => {
            const $recaptcha = document.querySelector("#g-recaptcha-response");
            if ($recaptcha) {
                $recaptcha.setAttribute("required", true);
            }
        });
    }, []);

    const handleInputChange = (indexName, value) => {
        let scopedFormFields = { ...formFields };
        scopedFormFields[indexName] = value;
        setFormFields(scopedFormFields);
    };

    const clearInputs = () => {
        setFormFields({
            name: "",
            address: "",
            message: "",
            email: "",
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set("os", JSON.stringify(window.navigator.userAgent));

        const token = captchaRef.current.getValue();

        if (token) {
            let response = await fetch("api/quotes", {
                method: "POST",
                body: formData,
                "Content-type": "multipart/form-data",
            })
                .then((response) => response.json())
                .then((data) => {
                    clearInputs();
                    updateTable();
                    captchaRef.current.reset();
                });
        }
    };

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{ width: 600, mx: "auto" }}
            mb={5}
        >
            <Typography component={"h1"} variant={"h5"}>
                Guest Book
            </Typography>

            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="email"
                autoFocus
                value={formFields["name"]}
                onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
                value={formFields["address"]}
                onChange={(e) => handleInputChange("address", e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="E-Mail"
                id="email"
                autoComplete="email"
                value={formFields["email"]}
                onChange={(e) => handleInputChange("email", e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                autoComplete="message"
                value={formFields["message"]}
                onChange={(e) => handleInputChange("message", e.target.value)}
            />

            <ReCAPTCHA sitekey={siteKey} required={true} ref={captchaRef} />

            <Button
                fullWidth
                variant={"contained"}
                type={"submit"}
                sx={{ mt: 3, mb: 2 }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default Form;

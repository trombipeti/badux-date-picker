import { CssBaseline, Stack, Typography } from "@mui/material";
import BaduxDatePicker from "./BaduxDatePicker";
import { useState } from "react";
import { CookieBanner } from "./CookieBanner";

function App() {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
        <>
            <CssBaseline />
            <Stack p={2} spacing={2}>
                <CookieBanner />
                <BaduxDatePicker onChange={setDate} />
                <Typography>{date?.toDateString()}</Typography>
            </Stack>
        </>
    );
}

export default App;

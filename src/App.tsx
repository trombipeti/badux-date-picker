import { Button, CssBaseline, Stack, Typography } from "@mui/material";
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
                <BaduxDatePicker value={date} onChange={setDate} />
                <Typography>{date?.toDateString()}</Typography>
                <Button variant="contained" onClick={() => setDate(new Date())}>
                    UX Sucks, I wanna retry...
                </Button>
            </Stack>
        </>
    );
}

export default App;

import { Box, Button, CssBaseline, Stack, Typography } from "@mui/material";
import BaduxDatePicker from "./BaduxDatePicker";
import { useState } from "react";
import { CookieBanner } from "./CookieBanner";

function App() {
    const [date, setDate] = useState<Date | null>(null);
    return (
        <>
            <CssBaseline />
            <Stack p={2} spacing={2}>
                <CookieBanner />
                <BaduxDatePicker onChange={setDate} />
                <Typography>{date?.toDateString()}</Typography>
                <Box sx={{ pt: 3 }}>
                    <Typography variant="caption">
                        <Button
                            target="_blank"
                            href="https://github.com/trombipeti/badux-date-picker"
                        >
                            GitHub
                        </Button>
                    </Typography>
                </Box>
            </Stack>
        </>
    );
}

export default App;

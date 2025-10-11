import { Backdrop, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const CookieBanner = () => {
    const [accepted, setAccepted] = useState(false);
    const [wtf, setWtf] = useState(false);
    return (
        <Backdrop open={!accepted} sx={{ zIndex: 10000000 }}>
            <Stack p={3}>
                {!wtf ? (
                    <>
                        {" "}
                        <Typography>
                            This site doesn't use cookies. So you should not
                            accept that it stores cookies on your computer.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => setWtf(true)}
                        >
                            I accept
                        </Button>
                        <Button
                            variant="text"
                            onClick={() => setAccepted(true)}
                        >
                            I decline
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography>
                            You have accepted the cookie policy. The site still
                            won't use cookies though.
                        </Typography>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                setWtf(false);
                                setAccepted(true);
                            }}
                        >
                            UNDO
                        </Button>
                    </>
                )}
            </Stack>
        </Backdrop>
    );
};

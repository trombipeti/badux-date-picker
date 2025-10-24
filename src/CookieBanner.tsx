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
                        <Typography variant="caption">
                            To continue optimizing your overall awareness of
                            this digital environment, we may, from time to time,
                            engage in certain passive or active processes
                            designed to enhance, calibrate, or simply
                            acknowledge your presence. By remaining on this
                            page, you indicate a non-binding but entirely
                            appreciated affirmation of your general willingness
                            to coexist within the parameters of our interface
                            philosophy. We value your capacity for understanding
                            that some forms of stored, transmitted, or otherwise
                            ephemeral data may be utilized, synchronized, or
                            gently admired for purposes not entirely defined yet
                            theoretically beneficial to both you and the system.
                            These processes, while ongoing, are never fully
                            conclusive and may vary depending on your device,
                            disposition, or planetary alignment. Please note
                            that your comfort, consent, and general digital
                            harmony are of the utmost semi-priority to us. By
                            engaging with, scrolling through, or even glancing
                            in the approximate direction of this notice, you
                            tacitly express a form of passive acknowledgment
                            that allows us to continue doing whatever it is that
                            we’re doing, which might include, but is not limited
                            to, various interpretive data exchanges and abstract
                            optimizations.
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

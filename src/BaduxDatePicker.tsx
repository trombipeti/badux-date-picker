import { Stack, TextField, Button } from "@mui/material";
import { type FunctionComponent, useState } from "react";

export type BaduxDatePickerProps = {
    onChange: (date: Date | null) => void;
};

type NumberStepperAdornmentProps = {
    value: number;
    onStep: (step: number) => void;
};

const NumberStepperAdornment: FunctionComponent<
    NumberStepperAdornmentProps
> = ({ value, onStep }) => {
    const [clicksInSec, setClicksInSec] = useState(1);
    const [resetTimeout, setResetTimeout] = useState<number | undefined>(
        undefined,
    );

    const handleStep = (step: number) => {
        onStep(value + step * clicksInSec);
        clearTimeout(resetTimeout);
        setResetTimeout(
            setTimeout(() => {
                setClicksInSec(1);
            }, 1000),
        );
        setClicksInSec((c) => c + 1);
    };

    return (
        <Stack>
            <Button
                sx={{ minWidth: 0, padding: 0 }}
                onClick={() => handleStep(1)}
            >
                ▲
            </Button>
            <Button
                sx={{ minWidth: 0, padding: 0 }}
                onClick={() => handleStep(-1)}
            >
                ▼
            </Button>
        </Stack>
    );
};

const getRandomMonth = () => Math.floor(Math.random() * 12);
const getRandomYear = () => Math.floor(Math.random() * 3000) + 1000;
const getRandomDay = () => Math.floor(Math.random() * 12);

const BaduxDatePicker: FunctionComponent<BaduxDatePickerProps> = ({
    onChange,
}) => {
    const [day, setDay] = useState<string>(getRandomDay().toString());
    const [month, setMonth] = useState<string>(getRandomMonth().toString());
    const [year, setYear] = useState<string>(getRandomYear().toString());

    const handleChange = (date: Date) => {
        onChange(date);
        const newDay = date.getDate().toString();
        isNaN(+newDay) ? setDay(getRandomDay().toString()) : setDay(newDay);
        const newMonth = (date.getMonth() + 1).toString();
        isNaN(+newMonth)
            ? setMonth(getRandomMonth().toString())
            : setMonth(newMonth);
        const newYear = date.getFullYear().toString();
        isNaN(+newYear)
            ? setYear(getRandomYear().toString())
            : setYear(newYear);
    };

    return (
        <Stack direction={"column"} spacing={2}>
            <Stack direction={"row"} spacing={2}>
                <TextField
                    name="postal-code"
                    label="Nap"
                    value={day}
                    onChange={(e) => {
                        setDay(e.target.value);
                    }}
                />
                <TextField
                    name=""
                    label="Hó"
                    value={month}
                    onChange={(e) => {
                        setMonth(e.target.value);
                    }}
                />
                <TextField
                    label="Év"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <NumberStepperAdornment
                                    value={isNaN(+year) ? 0 : +year}
                                    onStep={(s) => setYear(s.toString())}
                                />
                            ),
                            readOnly: true,
                        },
                    }}
                    value={year}
                />
            </Stack>
            <Stack spacing={1} direction={"row"}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                        handleChange(new Date(+year, +month - 1, +day))
                    }
                >
                    Set Date
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => onChange(null)}
                >
                    Clear Date
                </Button>
            </Stack>
        </Stack>
    );
};

export default BaduxDatePicker;

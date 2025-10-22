import { Stack, TextField, Button } from "@mui/material";
import { type FunctionComponent, useState } from "react";

export type BaduxDatePickerProps = {
    onChange?: (date: Date | null) => void;
};

type NumberStepperAdornmentProps = {
	onStep: (step: number) => void;
}

const NumberStepperAdornment: FunctionComponent<NumberStepperAdornmentProps> = ({
	onStep
}) => {
	return <Stack>
		<Button sx={{minWidth: 0, padding: 0}} onClick={() => onStep(1)}>
			▲
		</Button>
		<Button sx={{minWidth: 0, padding: 0}} onClick={() => onStep(-1)}>
			▼
		</Button>
	</Stack>
}

const BaduxDatePicker: FunctionComponent<BaduxDatePickerProps> = ({
    onChange,
}) => {

    const getRandomMonth = () => Math.floor(Math.random() * 12);
    const getRandomYear = () => Math.floor(Math.random() * 3000) + 1000;
    const getRandomDay = () => Math.floor(Math.random() * 33);

	const [day, setDay] = useState<string>(getRandomDay().toString());
	const [month, setMonth] = useState<string>(getRandomMonth().toString());
	const [year, setYear] = useState<string>(getRandomYear().toString());

	const handleChange = (date: Date) => {
		onChange?.(date);
		setDay(date.getDate().toString());
		setMonth((date.getMonth() + 1).toString());
		setYear(date.getFullYear().toString());
	}

    return (<Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
            <TextField
                name="postal-code"
                label="Nap"
                value={day}
                onChange={(e) => {
                    e.target.value !== "" && !isNaN(+e.target.value) && handleChange(
                        new Date(
                            +year,
                            +month,
                            +e.target.value,
                        ),
                    );
                }}
            />
            <TextField
                name=""
                label="Hó"
                value={month}
                onChange={(e) => {
                    e.target.value !== "" && !isNaN(+e.target.value) && handleChange(
                        new Date(
                            +year,
                            +e.target.value - 1,
                            +day,
                        ),
                    );
                }}
            />
            <TextField
                name="postal-code"
                label="Év"
				slotProps={{
					input: {
						endAdornment: (
							<NumberStepperAdornment
								onStep={s => handleChange(new Date(+year + s, 0, 1))}
							/>
						),
						readOnly: true
					}
				}}
                value={year}
            />
        </Stack>
		<Button onClick={() => handleChange(new Date())} variant="contained">Set to current date</Button>
    </Stack>);
};

export default BaduxDatePicker;

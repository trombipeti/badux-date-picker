import { Stack, TextField } from "@mui/material";
import { type FunctionComponent } from "react";

export type BaduxDatePickerProps = {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
};

const BaduxDatePicker: FunctionComponent<BaduxDatePickerProps> = ({
    value,
    onChange,
}) => {

    const getMonth = () => value?.getMonth() ?? Math.floor(Math.random() * 12);
    const getYear = () => value?.getFullYear() ?? Math.floor(Math.random() * 3000) + 1000;
    const getDay = () => value?.getDate() ?? Math.floor(Math.random() * 33);

    return (
        <Stack direction={"row"} spacing={2}>
            <TextField
                name="postal-code"
                label="Nap"
                // value is the day of the month in the value prop
                value={value?.getDate() ?? ""}
                onChange={(e) =>
                    onChange?.(
                        new Date(
                            getYear(),
                            getMonth(),
                            +e.target.value,
                        ),
                    )
                }
            />
            <TextField
                name=""
                label="Hó"
                value={value?.getMonth() === undefined ? "" : value.getMonth() + 1}
                onChange={(e) =>
                    onChange?.(
                        new Date(
                            getYear(),
                            +e.target.value - 1,
                            getDay(),
                        ),
                    )
                }
            />
            <TextField
                name="postal-code"
                label="Év"
                value={value?.getFullYear() ?? ""}
                onChange={(e) =>
                    onChange?.(
                        new Date(
                            +e.target.value,
                            0,
                            1,
                        ),
                    )
                }
            />
        </Stack>
    );
};

export default BaduxDatePicker;

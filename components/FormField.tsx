import React from "react";
import {TextField} from "@material-ui/core";
import {useFormContext} from "react-hook-form";

interface FormFieldProps {
    name: string
    label: string
}

export const FormField: React.FC<FormFieldProps> = ({name, label}) => {
    const {register, formState} = useFormContext()

    return (
        <div>
            <TextField
                {...register(name)}
                className="mb-20"
                name={name}
                size="small"
                label={label}
                variant="outlined"
                fullWidth
                helperText={formState.errors[name]?.message}
                error={!!formState.errors[name]?.message}
            />
        </div>
    )
}
import {TextField, InputAdornment} from "@mui/material";

export const IconTextField = ({iconEnd, InputProps, ...props}) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? (
          <InputAdornment sx={{cursor: "pointer"}} position="end">
            {iconEnd}
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

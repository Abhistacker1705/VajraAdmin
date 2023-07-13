import {Box, TextField, Typography} from "@mui/material";

export const LabelTextField = ({label, InputProps, ...props}) => {
  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      <Typography variant="h4" fontWeight="400" color="primary.main">
        {label}
      </Typography>
      <TextField sx={{bgcolor: "#EFF5FE", color: "text.primary"}} {...props} />
    </Box>
  );
};

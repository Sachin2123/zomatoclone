import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

export const PhoneNumber = () => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="phone-input-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <FormControl
          variant="outlined"
          style={{ minWidth: "100px", marginRight: "-2px" }}
        >
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            label="Country"
            id="country"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgb(224, 53, 70)", // Border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(224, 53, 70)", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgb(28, 28, 28)", // Default label color
                "&.Mui-focused": {
                  color: "rgb(224, 53, 70)", // Label color when focused
                },
              },
            }}
          >
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+1">+1 (USA)</MenuItem>
            <MenuItem value="+44">+44 (UK)</MenuItem>
            <MenuItem value="+61">+61 (Australia)</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Type Here.."
          variant="outlined"
          style={{ flex: 1 }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(224, 53, 70)", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "rgb(224, 53, 70)", // Label color when focused
              },
            },
          }}
        />
      </div>

      <Button
        sx={{
          height: "53px",
          backgroundColor: "rgb(224, 53, 70)",
          color: "white",
          padding: "5px 20px",
          textTransform: "none",
          borderRadius: "5px",
          // marginRight: "3px",
        }}
      >
        <span className="block sm:hidden">Share</span>
        <span className="hidden sm:block">Share App Link</span>
      </Button>
    </div>
  );
};

export const EmailField = () => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="phone-input-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          id="email-input"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(224, 53, 70)",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "rgb(224, 53, 70)",
              },
            },
          }}
          label="Email"
          variant="outlined"
        />
      </div>

      <Button
        sx={{
          height: "53px",
          backgroundColor: "rgb(224, 53, 70)",
          color: "white",
          padding: "5px 20px",
          textTransform: "none",
          borderRadius: "5px",
        }}
      >
        <span className="block sm:hidden">Share</span>
        <span className="hidden sm:block">Share App Link</span>
      </Button>
    </div>
  );
};

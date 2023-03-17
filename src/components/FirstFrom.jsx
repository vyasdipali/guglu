import React from "react";
import "./FirstFrom.css";
import { TextField, InputAdornment, IconButton, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import { Clear, ArrowDropDownIcon } from '@mui/icons-material';y
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

const styles = {
  textField: {
    width: "600px",
    padding: "15px",
    "@media (max-width: 1200px)": {
      width: "400px",
    },
  },
};
const FirstFrom = () => {
  return (
    <div>
      <div className="all-des-div">
        <div>
          <h3>SUBJECT PROPERTY</h3>
        </div>
        <div className="address-div">
          <h4> ADDRESS</h4>
        </div>

        <div className="all-row-col-div">
          <div className="p-tag-div">
            <p>Unit/Apt No.</p>
            <TextField
              id="outlined-textarea"
              placeholder="Unit/Apt No. Here"
              sx={styles.textField}
              className="input-des"
            />
          </div>

          <div className="p-tag-div">
            <p>Street Name And House Number * </p>
            <TextField
              id="outlined-textarea"
              placeholder="Street Name And House Number * here"
              sx={styles.textField}
              className="input-des"
            />
          </div>

          <div className="p-tag-div">
            <p>Province *</p>
            <TextField
              id="outlined-textarea"
              placeholder=" Select Province *"
              sx={styles.textField}
              className="input-des"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="Clear"
                      >
                        <ClearIcon sx={{ mt: "-6px" }} />
                      </IconButton>
                      <ArrowDropDownIcon />
                    </Stack>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="p-tag-div">
            <p>City *</p>
            <TextField
              id="outlined-textarea"
              placeholder="Select City"
              sx={styles.textField}
              className="input-des"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="Clear"
                      >
                        <ClearIcon sx={{ mt: "-6px" }} />
                      </IconButton>
                      <ArrowDropDownIcon />
                    </Stack>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="p-tag-div">
            <p>Postal Code *.</p>
            <TextField
              id="outlined-textarea"
              placeholder=" Enter Postal Code here "
              sx={styles.textField}
              className="input-des"
            />
          </div>

          <div className="p-tag-div">
            <p>Province *</p>
            <TextField
              id="outlined-textarea"
              placeholder=" Select Province *"
              sx={styles.textField}
              className="input-des"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="Clear"
                      >
                        <ClearIcon sx={{ mt: "-6px" }} />
                      </IconButton>
                      <ArrowDropDownIcon />
                    </Stack>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div>
          <h3>LISTING INFORMATION</h3>
        </div>

        <div className="p-tag-div">
          <p>Sale / Rent *</p>
          <div className="Radio-btn-div">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value=" For Sale"
                control={<Radio />}
                label=" For Sale"
              />
              <FormControlLabel
                value="
                For Rent"
                control={<Radio />}
                label="
                For Rent"
              />
            </RadioGroup>
          </div>
        </div>

        <div className="p-tag-div">
          <p>Listed By *</p>
          <TextField
            id="outlined-textarea"
            placeholder="Select Listed By "
            sx={styles.textField}
            className="input-des"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="Clear"
                    >
                      <ClearIcon sx={{ mt: "-6px" }} />
                    </IconButton>
                    <ArrowDropDownIcon />
                  </Stack>
                </InputAdornment>
              ),
            }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default FirstFrom;

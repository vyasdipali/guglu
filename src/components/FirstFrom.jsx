import React, { useState } from "react";
import "./FirstFrom.css";
import {
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

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
  const [answer, setAnswer] = useState("no");

  const handleAnswerChange = (event, newAnswer) => {
    setAnswer(newAnswer);
  };
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
          <p style={{ marginTop: "25px" }}>Listed By *</p>
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

        <div className="p-tag-div">
          <p>Price *</p>
          <div className="btn-input-div">
            <Button
              variant="contained"
              size="small"
              className="no-focus-outline"
            >
              -
            </Button>
            <input className="input"></input>
            <Button variant="contained" size="small">
              +
            </Button>
          </div>
        </div>

        <div className="p-tag-div" style={{ marginTop: "25px" }}>
          <p>Designation *</p>
          <div className="toggle-div-btn ">
            <ToggleButtonGroup
              value={answer}
              exclusive
              onChange={handleAnswerChange}
              aria-label="yes or no"
            >
              <ToggleButton
                value="yes"
                aria-label="yes"
                sx={{ borderRadius: 30 }}
              >
                Residential
              </ToggleButton>
              <ToggleButton
                value="no"
                aria-label="no"
                className="toggle-btn-div"
                sx={{ borderRadius: 30 }}
              >
                Commercial
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="p-tag-div">
          <p>Property Type *</p>
          <TextField
            id="outlined-textarea"
            placeholder=" Select  Property Type *"
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
          <p>Ownership Type *</p>
          <TextField
            id="outlined-textarea"
            placeholder=" Select Ownership Type "
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
          <p>Community Name.</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Community Name here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Taxes</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Taxes here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Tax Year</p>
          <TextField
            id="outlined-textarea"
            placeholder="EnterTax Year here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Assessment</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Assessment here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Assessment Year</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Assessment Year here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Special Designation</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Special Designation here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="p-tag-div">
          <p>Pool Type</p>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Pool Type here "
            sx={styles.textField}
            className="input-des"
          />
        </div>

        <div className="address-div">
          <h4>DESCRIPTION *</h4>
        </div>
        <div>
          <div>
            <h3>DESCRIPTION *</h3>
          </div>

          <div>
            <TextField
              multiline
              rows={5}
              maxRows={4}
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <div className="btn-input-div">
         <button className="save-btn-div"><span className="span-div-btn">SAVE & NEXT</span> </button>
         <button className="save-btn-div-two"><span className="span-div-btn">CANCEL</span> </button>
        </div>
      </div>
    </div>
  );
};

export default FirstFrom;

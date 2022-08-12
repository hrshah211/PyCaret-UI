import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "../link/link";
import Preset from "../preset/preset";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { StyledFormControl } from "../../../styles";
import Upload from "../upload/upload";

function Options() {
  const [isPreset, setPreset] = useState(false);
  const [isLink, setLink] = useState(false);
  const [isUpload, setUpload] = useState(false);

  function handlePresetClick() {
    setPreset(true);
    setLink(false);
    setUpload(false);
  }

  function handleLinkClick() {
    setPreset(false);
    setLink(true);
    setUpload(false);
  }

  function handleUploadClick() {
    setPreset(false);
    setLink(false);
    setUpload(true);
  }

  return (
    <>
      <div>
        <StyledFormControl w="800">
          <RadioGroup row>
            <FormControlLabel
              value="Preset Data"
              control={<Radio onClick={handlePresetClick} />}
              label="Preset Data"
              style={{ paddingRight: "30px" }}
            />
            <FormControlLabel
              value="Provide the Link"
              control={<Radio onClick={handleLinkClick} />}
              label="Provide the Link"
              style={{ paddingRight: "30px" }}
            />
            <FormControlLabel
              value="Upload File"
              control={<Radio onClick={handleUploadClick} />}
              label="Upload File"
              style={{ paddingRight: "30px" }}
            />
          </RadioGroup>
        </StyledFormControl>
      </div>
      {isPreset && (
        <div style={{ paddingTop: "30px" }}>
          <Preset />
        </div>
      )}
      {isLink && (
        <div style={{ paddingTop: "30px" }}>
          <Link />
        </div>
      )}
      {isUpload && (
        <div style={{ paddingTop: "30px" }}>
          <Upload />
        </div>
      )}
    </>
  );
}

export default Options;

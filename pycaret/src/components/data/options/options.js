import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "../link/link";
import Preset from "../preset/preset";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { StyledFormControl } from "../../../Styles";
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
        <StyledFormControl w="500">
          <RadioGroup row name="row-radio-buttons-group">
            <FormControlLabel
              value="Preset Data"
              control={<Radio onClick={handlePresetClick} />}
              label="Preset Data"
            />
            <FormControlLabel
              value="Provide the Link"
              control={<Radio onClick={handleLinkClick} />}
              label="Provide the Link"
            />
            <FormControlLabel
              value="Upload File"
              control={<Radio onClick={handleUploadClick} />}
              label="Upload File"
            />
          </RadioGroup>
        </StyledFormControl>
      </div>
      {isPreset && <Preset />}
      {isLink && <Link />}
      {isUpload && <Upload />}
    </>
  );
}

export default Options;

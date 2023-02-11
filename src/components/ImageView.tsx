import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

type ImageViewProps = {
  src: string;
  closeHandler: () => void;
};
function ImageView(props: ImageViewProps) {
  const { src, closeHandler } = props;
  return (
    <Paper elevation={4} square className="Paper-view">
      <img src={src} alt={""} width={"90%"} style={{ margin: "20px" }} />
        <IconButton onClick={() => closeHandler()}><CloseIcon /></IconButton>
    </Paper>
  );
}

export default ImageView;

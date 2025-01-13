import React, { useState } from "react";
import { Modal, Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const VideoModal = ({ videoId }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    navigate(-1)
};

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="youtube-video-modal"
        aria-describedby="watch-youtube-video"
      >
        <Box
          sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxHeight: "90%",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 2,
      borderRadius: 2,
      overflow:'hidden'
    }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              width="100%"
              height="80%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                border: "none",
              }}
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VideoModal;

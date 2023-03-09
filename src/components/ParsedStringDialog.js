import React from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function ParseStringDialog({
  loading,
  open,
  result,
  handleClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Result"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your parsed string is:{" "}
          <p>
            <b>{result}</b>
          </p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

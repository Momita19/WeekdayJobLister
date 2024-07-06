import { Dialog, DialogTitle, DialogContent, Button, Typography } from '@mui/material';
import { FC } from 'react';

// Define props with correct types
interface DescriptionDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string; // Or any other appropriate type
}

const DescriptionDialog: FC<DescriptionDialogProps> = ({ open, onClose, title, description }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <Typography variant="body1">{description}</Typography>
      <Button onClick={onClose} sx={{ marginTop: '10px' }}>
        Close
      </Button>
    </DialogContent>
  </Dialog>
);

export default DescriptionDialog;

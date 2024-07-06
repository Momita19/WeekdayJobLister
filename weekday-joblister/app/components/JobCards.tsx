"use client";
import { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Tooltip } from '@mui/material';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import DescriptionDialog from './DescriptionDialog';

interface DescriptionDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string; // Or any other appropriate type
}
const JobCard = ({logoSrc, companyName, jobTitle, location, minSalary,maxSalary, experience, description, onApply } : any) => {

  const [hover, setHover] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => {
    setDialogOpen(true);
    // setShowFullDescription(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleEasyApply = () => {
    window.location.href = 'https://www.weekday.works/';
  };

  return (
    <Card 
    elevation={3}
    sx={{
      transition: 'transform 0.2s ease-in-out', 
      transform: hover ? 'scale(1.01)' : 'scale(1)', 
      borderRadius: '16px',
    }}
    onMouseEnter={() => setHover(true)} 
    onMouseLeave={() => setHover(false)} 
    >
      <CardContent>
        <Box>
          <Box sx={{height: 60, display: 'flex', gap: "10px",}} >
            <img src={logoSrc} alt="Company Logo" className='rounded-md' />
            <Box sx={{display: 'column', marginBottom:10,}}>
            <Typography sx={{color:'#8b8b8b', fontSize:'13px', fontWeight:'600', letterSpacing:'1px', marginBottom:'3px'}} variant="body1">{companyName}</Typography>
            <Typography sx={{ fontSize:'14px', letterSpacing:'1px', lineHeight:'1.5'}}  variant="body1">{jobTitle}</Typography>
            <Typography sx={{display:'flex', flex:'flex-inline', fontSize:'12px', fontWeight:'500', marginTop:'5px'}} variant="body1">{location}</Typography>
            </Box>
            </Box>
          <Box>
            
            
          </Box>
        </Box>
        <Box sx={{display:"flex", gap:'10px'}}>
        <Typography sx={{marginTop:3,marginBottom:1, fontWeight:"400", fontSize:'14px'}} variant="body1">Estimated Salary: ₹{minSalary} - {maxSalary} LPA </Typography>
        <Tooltip
      title={
        <Box
        >
          Offered salary range
        </Box>
      }
      arrow // This adds an arrow to the tooltip
    >
      <Typography sx={{ marginTop: 3, marginBottom: 1, fontWeight: '400', fontSize: '14px' }}>
        ✅
      </Typography>
    </Tooltip>
        {/* <CheckCircleTwoToneIcon sx={{ marginTop:2.7, color: hover ? '#4943da' : 'rgb(85, 239, 196)' }} /> */}
        </Box>
        <Typography sx={{fontSize:'1rem', fontWeight:"500", lineHeight:1.5}} variant="body2">About Company:</Typography>
        {/* <Typography variant="body2">About us</Typography> */}
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="body1"
            sx={{
              WebkitLineClamp: showFullDescription ? 'none' : 10, // If showing full description, no clamping
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {description}
          </Typography>

          {!showFullDescription && ( // Apply the blurred overlay if not showing the full description
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '20px',
                background: 'linear-gradient(to bottom, transparent, white)',
              }}
            />
          )}
        </Box>
        <Box
        sx={{
          display: 'flex', // Use flex layout
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically if needed
        }}
        >
        {!showFullDescription && ( 
          <Button onClick={handleShowMore} sx={{ marginTop: '10px', color: '#4943da', textTransform: 'none', }}>
            Show More
          </Button>
        )}
        </Box>
        <DescriptionDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title="Job Description"
          description={description}
        />
        <Typography  sx={{color:'#8b8b8b', fontSize: "13px", fontWeight: '600', letterSpacing: '1px', marginBottom: '3px'}} variant="body2">Minimum Experience:</Typography>
        <Typography  sx={{color:'#8b8b8b', fontSize: "13px", fontWeight: '600', letterSpacing: '1px', marginBottom: '3px'}} variant="body2">{experience} years</Typography>
        <Box
        sx={{
          display: 'flex', // Use flex layout
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically if needed
        }}
        >
          <Button
          
            style={{
              padding: '0.4rem 5.2rem',
              border: '0px',
              borderRadius: '4px',
              backgroundColor: 'rgb(85, 239, 196)',
              fontWeight: '600',
              fontSize: '16px',
              letterSpacing: '1px',
              cursor: 'pointer',
              color:'black',
              textTransform: 'none',
              marginTop:"20px",
            }}
            onClick={handleEasyApply}
          >
            ⚡ Easy Apply
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;

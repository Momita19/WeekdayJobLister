"use client"
import React, {useState, useEffect} from 'react';
import { Grid, CircularProgress, Box , Typography} from '@mui/material';
import JobCard from './JobCards'; 
import { API_URL, getJobFetchOptions } from '../api/apiConstants';

const LIMIT = 10;

const JobGrid = ({  filters, onApply }: any) => {

    const [jobs, setJobs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (limit :any, offset :any, filters: any) => {
    setLoading(true);

    const requestOptions = getJobFetchOptions(limit, offset, filters);

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json(); 
      console.log(response,"resoposihfoihandoi fa")
      console.log(data, "ljkdfoiha9ifhcnhdataaaaaaaaaaaaaaaa")
      const jobList = data.jdList || [];
      console.log(jobList, "Jdlist")
      setJobs(offset === 0 ? jobList : [...jobs, ...jobList]);
      setTotalCount(data.totalCount || jobList.length);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(LIMIT, 0, filters); // Fetch jobs with filters on mount
  }, [filters]); 

  useEffect(() => {
    if (offset > 0) {
      fetchJobs(LIMIT, offset, filters); // Fetch more jobs when offset changes
    }
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        if (!loading && jobs.length < totalCount) {
          setOffset((prevOffset) => prevOffset + LIMIT); // Trigger fetch when scrolled to bottom
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, jobs, totalCount]);

  // useEffect(() => {
  //   if (offset > 0) {
  //     fetchJobs(LIMIT, offset); // Fetch more jobs when offset changes
  //   }
  // }, [offset]);

  return (
    <Box style={{ padding: '56px' }}>
      <Grid container spacing={5}>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} 
            sx={{
              paddingRight: index % 3 === 3 ? '0px' : '10px', // Horizontal gap except for the last item in the row
              marginBottom: '1px', // Vertical gap
            }}
            >
              {/* {console.log('Rendering Grid item:', index)} */}
              <JobCard
                logoSrc={job.logoUrl || '/placeholder.png'} 
                companyName={job.companyName || 'Unknown'}
                jobTitle={job.jobRole || 'Unknown'}
                location={job.location || 'Unknown'}
                minSalary={job.minJdSalary || 'N/A'}
                maxSalary={job.maxJdSalary || 'N/A'}
                // salary={job.maxJdSalary || 'N/A'}
                experience={job.minExp || 'N/A'}
                description={job.jobDetailsFromCompany || 'No description available'}
                onApply={() => onApply && onApply(job.jdLink)} 
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No jobs found.</Typography> // Fallback if jobs are empty
        )}
      </Grid>

      {loading && (
        <Box style={{ textAlign: 'center', marginTop: '1rem' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default JobGrid;

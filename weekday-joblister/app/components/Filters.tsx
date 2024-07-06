import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setRole, setCompanyName, setLocation, setKeyword } from '../redux/store'; // Path to Redux setup

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const roleOptions = [
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'IOS', label: 'IOS' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'flutter', label: 'Flutter' },
  ];

  const locationOptions = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'remote', label: 'Remote' },
    { value: 'onsite', label: 'Onsite' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  const handleRoleChange = (selectedOptions) => {
    if (selectedOptions) {
      const roles = selectedOptions.map((opt) => opt.value);
      dispatch(setRole(roles));
    }
  };

  const handleLocationChange = (selectedOptions) => {
    if (selectedOptions) {
      const locations = selectedOptions.map((opt) => opt.value);
      dispatch(setLocation(locations));
    }
  };

  const handleCompanyNameChange = (event) => {
    if (event && event.target) {
      dispatch(setCompanyName(event.target.value));
    }
  };

  const handleKeywordChange = (event) => {
    if (event && event.target) {
      dispatch(setKeyword(event.target.value));
    }
  };
  return (
    <div>
      <Select
        placeholder="Select Role"
        onChange={handleRoleChange}
        options={roleOptions}
        isMulti
      />
      <Select
        placeholder="Select Location"
        onChange={handleLocationChange}
        options={locationOptions}
        isMulti
      />
      <input
        type="text"
        placeholder="Company Name"
        onChange={handleCompanyNameChange}
        // value={filters.companyName}
      />
      <input
        type="text"
        placeholder="Search by keyword..."
        onChange={handleKeywordChange}
        // value={filters.keyword}
      />
    </div>
  );
};

export default Filters;

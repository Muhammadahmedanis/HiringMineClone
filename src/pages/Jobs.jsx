import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import axios from "axios";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

function timeElapsed(data){
  const nom = new Date();
  const updDate = new Date(data);
  const diff = nom - updDate;
  const days = Math.floor(diff / (1000 * 3600));
  return days
}

function Jobs() {
  const[jobsData, setJobsData] = useState([]);
  const[keyword, setKeyword] = useState([]);
  const[filters, setFilter] = useState()

  useEffect(() => {
    const jobsApiCall = async() => {
        try {
          const res = await axios.get(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=20&pageNo=1&keyWord=${keyword}&category=`)
          setJobsData(res.data);
        } catch (error) {
          console.log(error);
        }
      } 
      jobsApiCall();
    }, [keyword])

    useEffect(() => {
      const getCategories = async() => {
        try {
          const res = await axios.get('https://backend-prod.app.hiringmine.com/api/filterations/all');
          setFilter(res.data.data.filteration);
        } catch (error) {
          console.log(error);
        }
      }
      getCategories()
    }, [])
  return (
    <>
      <Navbar setKeyword={setKeyword} />
      <div className='pt-[118px] h-50 flex justify-center'>
        {
          filters?.map((val) => {
            return <MultipleSelectCheckmarks key={val._id} filterName={val.filterationName} /> 
          })
        }
      </div>
      <div className={`text-white bg-white flex flex-wrap justify-center gap-4 px-6 p-2 my-6`}>
        {
            jobsData.data?.map((val) => {
            let time = timeElapsed(val.updatedAt);
            return <Cards type={'jobDetail'} key={val._id} position={val.position} skills={val.skills} desc={val.category.description} email={val.applyEmail} phone={val.applyPhone} jobType={val.jobType} experience={val.experience} companyName={val.companyName} time={time} views={val.views} designation={val.designation} city={val.city} 
            salaryStart={val.payRangeStart} salaryEnd={val.payRangeEnd} width={"600"} />
          })
        }
      </div>
    </>
  )
}

export default Jobs;

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const MultipleSelectCheckmarks = ({filterName}) => {
const [personName, setPersonName] = React.useState([]);
console.log(filterName);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 160 }}>
        <InputLabel id="demo-multiple-checkbox-label">{filterName}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
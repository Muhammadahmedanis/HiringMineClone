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
import Button from '@mui/material/Button';

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
      <div className='pt-[118px] dark:bg-gray-700 h-50 flex justify-center'>
        {
          filters?.map((val) => {
            return <MultipleSelectCheckmarks key={val._id} filterName={val.filterationName} filterOptions={val.filterationOptions} /> 
          })
        }
      </div>
      <div className='dark:bg-gray-700 text-white bg-white flex flex-wrap justify-center gap-4 px-6 p-2 py-6'>
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectCheckmarks = ({filterName, filterOptions}) =>  {
  const [personName, setPersonName] = useState([]);
  // const[categorys, setCategory] = useState();
  // console.log(categorys);
  // useEffect(() => {
  //   const [a] = personName
  //   if(!a) return;
  //     const categoryCall = async() => {
  //       try {
  //         console.log(a);
  //         const res = await axios.get(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&category=${a}&keyWord=&category=`)
  //         console.log(res)
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     categoryCall();
  //   }, [personName])
  
  const handleChange = (event) => {
    const {
      target:{value },
    } = event;
    const a = value.split(',').map((t) => t);
    console.log(a);
    
    // setPersonName(
    //   typeof value === 'string' ? value.split(',') : value,
    // );
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, width: 160 }}>
        <InputLabel className='dark:text-gray-300' id="demo-multiple-checkbox-label">{filterName}</InputLabel>
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
          {filterOptions.map((name) => (
            <MenuItem key={name.title} value={name.title}>
              <Checkbox checked={personName.includes(name.title)} />
              <ListItemText primary={name.title} />
            </MenuItem>
          ))}
          <div className='text-center'>
            <Button size='small' variant='contained' sx={{backgroundColor: "rgb(104,81,255)", fontWeight: 700, fontSize: '13px'}}>Show results</Button>
          </div>
        </Select>
      </FormControl>
    </div>
  );
}
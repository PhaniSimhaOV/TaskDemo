import logo from './logo.svg';
import './App.css';
import { mockData } from './mockData/mock';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const App = () => {
  //console.log("====",mockData);
  const onCheckboxChange = async (event) => {
    console.log("event ====", event.target)
    if(event.target.parentElement.nextElementSibling && event.target.parentElement.nextElementSibling.tagName === 'LI') {
      let ele = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < ele.length; i++ ){
        allChecked.push(ele[i].checked);
      };
      if(!allChecked.includes(false)){event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = true;}
      else {event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;}
    } else if(event.target.parentElement.nextElementSibling && event.target.parentElement.nextElementSibling.tagName === 'UL'){
      let ele = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < ele.length; i++ ){
        if(i !== 0)allChecked.push(ele[i].checked);
      };
      for(let i=0; i < ele.length; i++ ){
        ele[i].checked = (allChecked.includes(false)) ? true : false;
      };
    } else if(!event.target.parentElement.nextElementSibling) {
      let ele = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < ele.length; i++ ){
        allChecked.push(ele[i].checked);
      };
      if(!allChecked.includes(false)){event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = true;}
      else {event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;}
    }
  }
  const generateLi = (data) => {
    console.log("data =====", data.name);
    
    return (
      <>
      
        {data.nodes.map((item) => {
          if(item.nodes.length > 0) {
            return (
              <>
              <Accordion><AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography><input type='checkbox' onChange={onCheckboxChange}/>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.nodes.map((ele) => {
                  return (
                    <><input type='checkbox' onChange={onCheckboxChange}/>{ele.name}</>
                  )
                })}
                </AccordionDetails>
                </Accordion>
              </>
            )
          } else {
            return (
              <><Accordion><AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography><input type='checkbox' onChange={onCheckboxChange}/>{item.name}</Typography>
            </AccordionSummary></Accordion></>
            )
          }
        })}
      </>
    )
  }
  return (
    <div className="App">
      <section>
      
          
        
        {
          mockData && mockData.map((data) => {
            console.log("nodes ----", data.nodes)
            if(data.nodes.length > 0) {
              return (
                <>
                <Accordion><AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><input type='checkbox' onChange={onCheckboxChange}/>{data.name}</Typography>
        </AccordionSummary>
              
              <AccordionDetails>{generateLi(data)}</AccordionDetails></Accordion>
              </>)
            } else {
              return (
                <>
                <Accordion><AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><input type='checkbox' onChange={onCheckboxChange}/>{data.name}</Typography>
        </AccordionSummary>
              
              </Accordion>
                </>
              )
            }
            
          })
        }
      </section>
      <section></section>
    </div>
  );
}

export default App;

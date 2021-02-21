import React  from 'react';

import "./Accrord.css";

const Accordian = ({title,active,setActive})=>{

    const content = ["Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard dummy ext ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centu","ext ever since the 1500s, when an ummy text of the printing and typesettin dustry. Lorem mmy text of the printing and typesettin dustry. Lorem mmy text of the printing and typesettin dustry. t Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatur"];
    return(
     <div className = "accordian">
         <div className = "accordianHeading">
             <div className = "container">
                 <p>{title}</p>
                 <span
                    onClick = {()=> setActive(title)}
                 >X</span>
             </div>
         </div>

         {/* <div className = {(active === title ? "show": "") +"accordianContent"}> */}
         <div className = {(active === title) ? "showAccordianContent":"accordianContent"}>
                    {title.includes("1")||title.includes("3")||title.includes("10") ||title.includes("8")? content[0]: content[1]}
         </div>
     </div>

    )
}

export default Accordian;
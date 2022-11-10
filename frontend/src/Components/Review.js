import React, { useState} from "react";
import AddReview from "./AddReview";

const Review = () => {
   
  let params = useParams();
  const[reviewDetails, setReviewDetails] = useState()
  useEffect(()=>{
      fetch(`http://localhost:8000/reviews`)
      .then((res)=> res.json())
      .then((data) =>{
          setReviewDetails(data)
      })
  },[]);

return(
  <div><h2>reviews</h2></div>
)
}
export default Review


import {useState} from 'react'
import AddReview from './AddReview';

const Review = () => {
 
    const [comment, setComment] = useState("");
    const [submittedReview, setSubmittedReview] = useState([]);
  
    function handleReviewComment(event) {
      setComment(event.target.value);
    }
  
  
  
    function handleSubmit(event) {
      event.preventDefault();
      const ReviewComment = { review: comment};
      const postArray = [...submittedReview, ReviewComment];
      setSubmittedReview(postArray);
      setComment("");
     
    }
  
    const listOfSubmissions = submittedReview.map((data, index) => {
      return <div key={index}>{data.review}</div>;
    });
  
    return (
      <div>
        <center>
          <h3>Share your experience about the product</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your review here" onChange={handleReviewComment} value={comment}/><br/><br/>
            <button type="submit">Post</button>
          </form><br/>
          <h3>Professional reviews</h3>
          <ul>
            <li>{listOfSubmissions}</li>
          </ul>
        </center>
        <AddReview />
      </div>
    
    );
  }
 

export default Review
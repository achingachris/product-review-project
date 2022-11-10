import React from 'react'

const AddReview = () => {
    function NewReview({onAddNewReview, id, onUpdateNewReview}){
        const [comment, setComment] = useState("")
        const [isEdit, setIsEdit] = useState(false)
        
         function handleAddNewReview(e){
          e.preventDefault()
      
          const addNewReview = {
            user_id: id,
            comment: comment
          }
          
            fetch(`http://localhost:8000/reviews`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newReview)
          })
          .then((resp) => resp.json())
          .then((data) => onAddReview(data))
           
             const updateReview = {
            comment: comment,
             }
             
             fetch(`http://localhost:8000/reviews/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify(updateReview)
            })
            .then((resp) => resp.json())
            .then((updatedReview) => onUpdateNewReview(updatedReview))
      
        }
        
        return (
         <div></div> 
        )
}
}

export default AddReview
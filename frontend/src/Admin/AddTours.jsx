import React, { useState } from 'react'
import { Button, ButtonContainer, CancelButton, FormContainer, FormGroup, Input, Label, TextArea, Title } from './AddTours.styles';
import axios from 'axios';

const AddTour = (props)=>{

    const url = 'http://localhost:8000/api/admin/package'
    const [formData, setFormData] = useState({
        name : '',
        description : '',
        price : '',
        destinations : [],
        availableDates : []
    })

    const [destination, setDestination] = useState('');

    const handleSubmit = async (event, id)=>{
        event.preventDefault();
        const arrayDestination = (destination.length>0 && destination.trim()?.split(',')) || props.editablePkg.destinations || []
        const updatedFormData = {
    ...formData,
    destinations: arrayDestination, // directly overwrite with new array
  };

  if(props.isEdit){
    const updatedEditData = {
        name : formData.name || props.editablePkg.name,
        description : formData.description || props.editablePkg.description,
        price : formData.price || props.editablePkg.price,
        destinations : arrayDestination,
        availableDates : formData.availableDates.length > 0 ? formData.availableDates : props?.editablePkg?.availableDates.map((date)=>getDateFormat(date)) 
    }
    console.log("check formValues", updatedFormData, id)
    try{
 const res = await axios.patch(`${url}/${id}`,updatedEditData)
     alert(res.data.message)
    }
    catch(error){

    console.log("Check PUT error:", error.response.data);
    }
    
  }
  else{
    try{
 const res = await axios.post(`${url}`,updatedFormData)
  alert(res.data.message)
    }
    catch(err){
console.log("Post error", err.response.data)
    }
   
  }
  
  
console.log("check formData", updatedFormData)
    }
    const handleChange = (e, index)=>{
         const {name, value} = e.target
         if(name==='availableDates'){
            setFormData(prev=>{
              const updatedDates = [...prev.availableDates]
              updatedDates[index] = value
              return {...prev, availableDates: updatedDates}
            }
            )
        }
        else if(name==='destinations'){
            setDestination(value)
        }
        else{
setFormData({...formData, [name] : value})
        }
         
    }

    const getDateFormat=(d)=>{
        const date = new Date(d)
        const year = date.getFullYear()
        const month = String(date.getMonth()+1).padStart(2, 0)
        const day = String(date.getDate()).padStart(2,0)
        return `${year}-${month}-${day}`
    }
    console.log("showDates", props?.editablePkg?.availableDates)
    if(props.isEdit){
      return(
        <FormContainer>
      <Title>Edit Tour Package</Title>
      <form onSubmit={(e)=>handleSubmit(e, props.editablePkg._id)}>
        <FormGroup>
          <Label>Package Name</Label>
          <Input type="text" name="name" value={formData.name || props.editablePkg.name} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <TextArea name="description" value={formData.description || props.editablePkg.description} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Price (in ₹)</Label>
          <Input type="number" name="price" value={formData.price || props.editablePkg.price} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Destinations (comma-separated)</Label>
          <Input type="text" name="destinations" value={destination || props.editablePkg.destinations.join(', ')} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Available Dates</Label>
          {[0, 1, 2].map((index) => (
            <Input
              key={index}
              type="date"
              name="availableDates"
              value={formData.availableDates[index] || getDateFormat(props.editablePkg.availableDates[index])}
              onChange={(e) => handleChange(e, index)}
              style={{ marginBottom: '8px' }}
            />
          ))}
        </FormGroup>
        <ButtonContainer>
        <CancelButton onClick={()=>props.setIsEditable(false)}>Cancel</CancelButton>
        <Button fromEdit={true} type="submit">Save Changes</Button>
        </ButtonContainer>
      </form>
    </FormContainer>
      )
    }
    return (
    <FormContainer>
      <Title>Add New Tour Package</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Package Name</Label>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <TextArea name="description" value={formData.description} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Price (in ₹)</Label>
          <Input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Destinations (comma-separated)</Label>
          <Input type="text" name="destinations" value={destination} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Available Dates</Label>
          {[0, 1, 2].map((index) => (
            <Input
              key={index}
              type="date"
              name="availableDates"
              value={formData.availableDates[index]}
              onChange={(e) => handleChange(e, index)}
              style={{ marginBottom: '8px' }}
            />
          ))}
        </FormGroup>

        <Button type="submit">Add Package</Button>
      </form>
    </FormContainer>
  );
}

export default AddTour
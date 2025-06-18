import React, { useEffect , useState} from 'react'
import { ActionButton, ButtonRow, Card, Container, Description, InfoRow, Title } from './ManageTour.styles'
import axios from 'axios'
import { Button, FormContainer, FormGroup, Input, Label, TextArea } from './AddTours.styles';
import AddTour from './AddTours';
import DeleteModal from './DeleteModal';

const ManageTour = ()=>{
    const [packages, setPackages] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [editablePkg, setEditablePkg] = useState('');
    const [openDeleteModal, setOpenDeleteModal] = useState('');
const url = 'http://localhost:8000/api/admin/package'
    useEffect(()=>{
getPackageData()
    },[])

    const getPackageData =async ()=>{
const res = await axios.get(`${url}`)
console.log('res', res?.data?.getPackage)
setPackages(res?.data?.getPackage)

    }

    const handleEdit = (pkg)=>{
setEditablePkg(pkg);
setIsEditable(true);
    }

    const handleDelete = async(pkg)=>{
      try{
const res = await axios.delete(`${url}/${pkg._id}`)
alert(res.data.message)
getPackageData();
      }
      catch(err){
console.log("delete", err.response.data)
      }
      setOpenDeleteModal('');
      console.log("check package name", pkg)
    }
return(
  
    <Container>
    {openDeleteModal && <DeleteModal onConfirm={handleDelete} itemName={openDeleteModal} onCancel={()=>setOpenDeleteModal(false)}  />}
      <h2>Manage Tour Packages</h2>
      {!isEditable && Array.isArray(packages) && packages.map((pkg) => (
        <Card key={pkg._id}>
          <Title>{pkg.name}</Title>
          <Description>{pkg.description}</Description>
          <InfoRow><strong>Price:</strong> ₹{pkg.price}</InfoRow>
          <InfoRow><strong>Destinations:</strong> {pkg.destinations.join(', ')}</InfoRow>
          <InfoRow>
            <strong>Available Dates:</strong> {pkg.availableDates.map(date => new Date(date).toLocaleDateString()).join(', ')}
          </InfoRow>
          <ButtonRow>
            <ActionButton onClick={() => setOpenDeleteModal(pkg)} danger>
              Delete
            </ActionButton>
            <ActionButton onClick={() => handleEdit(pkg)}>
              Edit
            </ActionButton>
          </ButtonRow>
        </Card>
      ))}
      {
        isEditable && <AddTour setIsEditable={setIsEditable} isEdit={true} editablePkg={editablePkg} />
      }
    </Container>
)
}

export default ManageTour
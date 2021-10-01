import React,{useState} from 'react'
import SignUpMain from '../components/SignUp/SignUpMain'

const Signup = () => {
 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (i) => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

    return (
    
        <SignUpMain showModal={showModal} handleCloseModal={handleCloseModal} />
    )
}

  export default Signup;

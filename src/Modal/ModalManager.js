
 import { useModal } from '../Context/ModalContext'
 import ViewPostModal  from './ViewPostModal/ViewPostModal'

const ModalLookup = {
    ViewPostModal: ViewPostModal
  };

const ModalManager = () => {
    const { modal, closeModal } = useModal();
  
    if (!modal) return null;
    const Modal = ModalLookup[modal.name];
  
    return <Modal onClose={closeModal} {...modal.props} />;
  };
  
  export default ModalManager;
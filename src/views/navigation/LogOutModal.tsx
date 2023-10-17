import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

interface Props {
  onLogout: () => void;
}

export const LogOutModal = ({ onLogout }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="danger" className="font-bold">
        Cerrar sessión
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          <>
            <ModalHeader>¿Estás seguro de cerrar sesión?</ModalHeader>
            <ModalBody>
              <div className="flex items-center justify-evenly">
                <Button onPress={onLogout} color="danger">
                  Cerrar sesión
                </Button>
                <Button onPress={onClose} color="primary" variant="bordered">
                  Cancelar
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

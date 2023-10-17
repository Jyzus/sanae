import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  handleNewCourse: (value: FieldValues) => void;
}

export const ModalAddCourse = ({ handleNewCourse }: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const { handleSubmit, register } = useForm();
  return (
    <>
      <Button color="primary" onPress={onOpen}>
        +
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Añadir un nuevo curso</ModalHeader>
          <ModalBody>
            <form action="POST" onSubmit={handleSubmit(handleNewCourse)}>
              <Input
                {...register("newCourse")}
                name="newCourse"
                label="Nombre del nuevo curso"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onPress={handleNewCourse} type="submit" color="primary">
              Añadir
            </Button>
            <Button
              type="button"
              onPress={onClose}
              variant="bordered"
              color="danger"
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

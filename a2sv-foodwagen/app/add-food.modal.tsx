"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./add-food.modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
    
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modal_overlay} />
        <Dialog.Content className={styles.modal_content}>
          {/* <Dialog.Title className={styles.modal_title}>Add Food</Dialog.Title> */}
          {/* <Dialog.Description className={styles.modal_description}>
            Fill in the details to add a new food item.
          </Dialog.Description> */}

          {/* Modal Form */}
          {/* <div> */}
          <form className={styles.modal_form}>
            <input name="food_name" type="text" placeholder="Food name" />

            <input name="food_rating" type="number" placeholder="Food rating (e.g., 4.5)" />

            <input name="food_image" type="text" placeholder="Food image(link)" />
            <input name="restaurant_name" type="text" placeholder="Restaurant Name" />
            <input name="restaurant_logo" type="text" placeholder="Restaurant Logo(link)" />
            <input name="restaurant_status" placeholder="Restaurant status(open/close)" />

            <div className={styles.btn_container}>
                <button type="submit" className={styles.submit_btn}>
                Save Food
                </button>
                <Dialog.Close asChild>
                <button className={styles.close_btn}>Cancel</button>
                </Dialog.Close>
            </div>
          </form>
          {/* </div> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

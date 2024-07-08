'use client';
import { useRef, useState } from 'react';
import classes from './imagePicker.module.css';
import Image from 'next/image';

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();
  function handlePickClick() {
    imageInputRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt='The image selected by user' fill />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) {
              return;
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
              setPickedImage(fileReader.result);
            };
            fileReader.readAsDataURL(file);
          }}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;

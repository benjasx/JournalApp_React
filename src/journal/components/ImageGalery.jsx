import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const ImageGalery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90vw',
        maxHeight: '90vh',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 0,
    };

    return (
        <>
            <ImageList sx={{ width: '100%', height: 500 }} cols={5} rowHeight={164}>
                {images.map((image) => (
                    <ImageListItem 
                        key={image} 
                        onClick={() => handleOpenModal(image)}
                        sx={{ cursor: 'pointer' }}
                    >
                        <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            alt='Imagen de la nota'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Modal
                open={!!selectedImage}
                onClose={handleCloseModal}
                aria-labelledby="modal-image"
            >
                <Box sx={modalStyle}>
                    <img
                        src={selectedImage}
                        alt="Modal view"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
}
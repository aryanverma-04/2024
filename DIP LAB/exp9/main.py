import cv2
import numpy as np
import matplotlib.pyplot as plt

def apply_morphological_operations(input_path, output_path_prefix):
    try:
        # Read the input image
        img = cv2.imread(input_path, cv2.IMREAD_GRAYSCALE)
        if img is None:
            raise FileNotFoundError("Image not found or could not be read")
        
        # Define a kernel for morphological operations
        kernel = np.ones((5, 5), np.uint8)
        
        # Erosion
        erosion = cv2.erode(img, kernel, iterations=1)
        cv2.imwrite(f"{output_path_prefix}_erosion.jpg", erosion)
        
        # Dilation
        dilation = cv2.dilate(img, kernel, iterations=1)
        cv2.imwrite(f"{output_path_prefix}_dilation.jpg", dilation)
        
        # Opening (erosion followed by dilation)
        opening = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)
        cv2.imwrite(f"{output_path_prefix}_opening.jpg", opening)
        
        # Closing (dilation followed by erosion)
        closing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)
        cv2.imwrite(f"{output_path_prefix}_closing.jpg", closing)
        
        # Display the original and processed images
        plt.figure(figsize=(10, 5))
        plt.subplot(1, 5, 1)
        plt.imshow(img, cmap='gray')
        plt.title('Original Image')
        plt.subplot(1, 5, 2)
        plt.imshow(erosion, cmap='gray')
        plt.title('Erosion')
        plt.subplot(1, 5, 3)
        plt.imshow(dilation, cmap='gray')
        plt.title('Dilation')
        plt.subplot(1, 5, 4)
        plt.imshow(opening, cmap='gray')
        plt.title('Opening')
        plt.subplot(1, 5, 5)
        plt.imshow(closing, cmap='gray')
        plt.title('Closing')
        plt.show()
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Example usage
    input_path = r"C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\exp9\\input_image.jpg"
    output_path_prefix = r"C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\exp9\\input_image.jpg"
    
    # Apply morphological operations
    apply_morphological_operations(input_path, output_path_prefix)

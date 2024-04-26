import cv2
import numpy as np
import matplotlib.pyplot as plt

def apply_morphological_operations(input_path, output_path_prefix):
    try:
        img = cv2.imread(input_path)
        if img is None:
            raise FileNotFoundError("Image not found or could not be read")
        
        kernel = np.ones((5, 5), np.uint8)
        
        erosion = cv2.erode(img, kernel, iterations=1)
        cv2.imwrite(f"{output_path_prefix}_erosion.jpg", erosion)
        
        dilation = cv2.dilate(img, kernel, iterations=1)
        cv2.imwrite(f"{output_path_prefix}_dilation.jpg", dilation)
        
        opening = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)
        cv2.imwrite(f"{output_path_prefix}_opening.jpg", opening)
        
        closing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)
        cv2.imwrite(f"{output_path_prefix}_closing.jpg", closing)
        
        plt.figure(figsize=(10, 5))
        plt.subplot(1, 5, 1)
        plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))

        plt.title('Original Image')
        plt.subplot(1, 5, 2)
        plt.imshow(cv2.cvtColor(erosion, cv2.COLOR_BGR2RGB))

        plt.title('Erosion')
        plt.subplot(1, 5, 3)
        plt.imshow(cv2.cvtColor(dilation, cv2.COLOR_BGR2RGB))

        plt.title('Dilation')
        plt.subplot(1, 5, 4)
        plt.imshow(cv2.cvtColor(opening, cv2.COLOR_BGR2RGB))

        plt.title('Opening')
        plt.subplot(1, 5, 5)
        plt.imshow(cv2.cvtColor(closing, cv2.COLOR_BGR2RGB))
        
        plt.title('Closing')
        plt.show()
        
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    # Example usage
    input_path = r"C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\exp9\\input_image.jpg"
    output_path_prefix = r"C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\exp9\\output"
    
    apply_morphological_operations(input_path, output_path_prefix)

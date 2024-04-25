import cv2 
import numpy as np 
 
def threshold_image(input_path, output_path_template, threshold_values): 
    try: 
        # Read the input image 
        img = cv2.imread(input_path, cv2.IMREAD_GRAYSCALE) 

        # Apply thresholding with three different values 
        
        thresholded_images = []  # Create an empty list to store thresholded images
        for threshold in threshold_values:  # Iterate over each threshold value in the list
            _, thresholded_img = cv2.threshold(img, threshold, 255, cv2.THRESH_BINARY)
            thresholded_images.append(thresholded_img)  # Add the thresholded image to the list

        # Loop through thresholded images
        for i in range(len(thresholded_images)):
            thresholded_img = thresholded_images[i]  # Get current thresholded image
            
            # Display thresholded image
            cv2.imshow(f"Threshold {i+1}", thresholded_img)
            
            # Save thresholded image
            cv2.imwrite(output_path_template.format(i+1), thresholded_img)

        cv2.waitKey(0) 
        cv2.destroyAllWindows() 
        
    except Exception as e: 
        print(f"Error: {e}") 

if __name__ == "__main__": 
    # Example usage 
    r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp2\image.jpg"
    input_path = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp5\image.jpg"
    output_path_template = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp5\thresholded_image{}.jpg"
    threshold_values = [100, 150, 200] 

    # Threshold the image with three different values 
    threshold_image(input_path, output_path_template, threshold_values) 

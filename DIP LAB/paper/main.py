# from skimage import io
# img = io.imshow('image.png')
# io.ishow(img)


# from skimage import io
# import matplotlib.pyplot as plt

# # Read the image
# img = io.imread('C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\paper\\image.png')

# # Display the image
# io.imshow(img)
# plt.show()

# from skimage import io
# import matplotlib.pyplot as plt

# # Read the image
# img = io.imread('C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\paper\\image.png')

# # Display the image
# # Display the image shape
# print(img.shape)

# from skimage import io
# import pandas as pd

# # Read the image
# img = io.imread('C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\paper\\image.png')

# # Flatten the image array
# flat_img = img.flatten()

# # Create a DataFrame
# df = pd.DataFrame({'Pixel Values': flat_img})

# # Specify the file path
# filepath = 'pixel_values.xlsx'

# # Write the DataFrame to an Excel file
# df.to_excel(filepath, index=False)

# print(f"Pixel values saved to {filepath}")



from skimage import io
import matplotlib.pyplot as plt

# Read the image
img = io.imread('C:\\Users\\aryan verma\\Documents\\aryanverma_04\\DIP LAB\\paper\\image.png')

# Flatten the image array
flat_img = img.flatten()

# Plot the pixel values
plt.plot(flat_img)
plt.xlabel('Pixel Index')
plt.ylabel('Pixel Value')
plt.title('Pixel Values of the Image')
plt.grid(True)
plt.show()

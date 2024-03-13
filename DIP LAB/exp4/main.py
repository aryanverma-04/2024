from PIL import Image

def generate_grayscale(input_path, output_path):
  try:
    # Open the input image
    with Image.open(input_path) as img:
      # Convert the image to grayscale
      grayscale_img = img.convert("L")
      # Save the grayscale image
      grayscale_img.save(output_path)
      print(f"Grayscale image generated and saved to {output_path}.")
  except Exception as e:
    print(f"Error: {e}")


def generate_negative(input_path, output_path):
  try:
    # Open the grayscale image
    with Image.open(input_path) as grayscale_img:
      # Generate the negative of the grayscale image
      negative_img = Image.eval(grayscale_img, lambda x: 255 - x)
      # Save the negative image
      negative_img.save(output_path)
      print(f"Negative image generated and saved to {output_path}.")
  except Exception as e:
    print(f"Error: {e}")


if __name__ == "__main__":
  # Example usage
  # input_path = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp3\Exp3.txt"

  input_path = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp4\image.jpeg"
  grayscale_output_path = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp4\grayscale_image.jpeg"
  negative_output_path = r"C:\Users\aryan verma\Documents\aryanverma_04\DIP LAB\exp4\negative_image.jpeg"

  # Generate grayscale image
  generate_grayscale(input_path, grayscale_output_path)

  # Generate negative of grayscale image
  generate_negative(grayscale_output_path, negative_output_path)

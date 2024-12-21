from pdf2image import convert_from_path
import os
from pathlib import Path

def convert_pdfs_to_images(input_folder, output_folder):
    Path(output_folder).mkdir(parents=True, exist_ok=True)
    
    pdf_files = [f for f in os.listdir(input_folder) if f.lower().endswith('.pdf')]
    counter = 1
    
    for pdf_file in pdf_files:
        try:
            pdf_path = os.path.join(input_folder, pdf_file)
            images = convert_from_path(pdf_path, first_page=1, last_page=1)
            
            if images:
                image_path = os.path.join(output_folder, f"{counter}.png")
                images[0].save(image_path, 'PNG')
                print(f"Converted {pdf_file} to {counter}.png")
                counter += 1
                
        except Exception as e:
            print(f"Error converting {pdf_file}: {str(e)}")

# Usar la ruta completa donde están tus PDFs
input_folder = r"C:\Users\asco4\OneDrive\Documentos\Upana\Estadística I\portafolio\pdfs"
output_folder = r"C:\Users\asco4\OneDrive\Documentos\Upana\Estadística I\portafolio\images"

convert_pdfs_to_images(input_folder, output_folder)
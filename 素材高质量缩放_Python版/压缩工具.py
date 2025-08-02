from PIL import Image
import os

# 配置路径
input_folder = "Actors/Archer"             # 原始图片所在文件夹
output_folder = "Actors/Archer/0"      # 新文件夹，自动创建
scale = 0.094                        # 缩小比例，植物0.2，僵尸0.26

# 创建输出文件夹（如果不存在）
os.makedirs(output_folder, exist_ok=True)

# 遍历输入文件夹中的所有 PNG 文件
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".png"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        img = Image.open(input_path)
        width, height = img.size
        new_size = (int(width * scale), int(height * scale))

        # 使用高质量缩放算法（保留透明度）
        img_resized = img.resize(new_size, Image.LANCZOS)
        img_resized.save(output_path, "PNG", optimize=True)

        print(f"✔ 已保存：{output_path}")

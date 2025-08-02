from PIL import Image
import os

# 配置路径
input_folder = "Zombies/Normal_Zombie/Normal_Zombie_small"            # 原始图片所在文件夹
output_folder = "Zombies/Normal_Zombie/Normal_Zombie_small_flipped"      # 新文件夹，自动创建

# 创建输出文件夹（如果不存在）
os.makedirs(output_folder, exist_ok=True)

# 遍历所有 PNG 图片
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".png"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        # 打开图像并进行水平翻转
        img = Image.open(input_path)
        img_flipped = img.transpose(Image.FLIP_LEFT_RIGHT)

        # 保存新图像
        img_flipped.save(output_path, "PNG", optimize=True)
        print(f"✔ 已左右翻转保存：{output_path}")

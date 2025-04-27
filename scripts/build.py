import os
import sys
import re


def main() -> None:
    sass_dir = "./sass"
    css_dir = "./build/css"

    if not os.path.isdir(sass_dir):
        sys.stderr.write(f"Could not find directory {sass_dir}\n")
        sys.exit(1)

    if not os.path.isdir(css_dir):
        print(f"Creating directory {css_dir}")
        os.makedirs(css_dir)

    files = os.listdir(sass_dir)
    filter(lambda file_name: re.match("\.*\.(sass|scss)", file_name) is not None, files)
    
    for file in files:
        css_file = ""

        if file.endswith("sass"):
            css_file = file.replace(".sass", ".css")
        else:
            css_file = file.replace(".scss", ".css")

        res = os.system(f"sass {os.path.join(sass_dir, file)} {os.path.join(css_dir, css_file)}")
        if res == 0:
            print(f"Compiled {file}")


if __name__ == "__main__":
    main()

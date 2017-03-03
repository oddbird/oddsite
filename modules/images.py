from PIL import Image
from rstblog.programs import CopyProgram


class ImageProgram(CopyProgram):
    def run(self):
        self.context.make_destination_folder()
        img = Image.open(self.context.full_source_filename)
        img.save(
            self.context.full_destination_filename,
            optimize=True,
            progressive=True,
        )


def setup(builder):
    builder.programs['image'] = ImageProgram

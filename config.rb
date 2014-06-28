# Compass CSS framework config file

require 'susy'
require 'modular-scale'
require 'breakpoint'
require 'accoutrement'

project_type = :stand_alone
# Set this to the root of your project when deployed:
http_path = "/"
sass_dir = "sass"
css_dir = "content/static/css"
images_dir = "content/static/images"
fonts_dir = "content/static/fonts"
javascripts_dir = "content/static/js"
line_comments = false
preferred_syntax = :scss
output_style = :expanded
relative_assets = true

require 'digest/sha1'

asset_cache_buster do |path, file|
  Digest::SHA1.file(file.path).hexdigest
end

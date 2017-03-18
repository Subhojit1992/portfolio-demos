# Require any additional compass plugins here.
require 'breakpoint'


#Folder settings
relative_assets = true      #because we're not working from the root
css_dir = "../css"          #where the CSS will saved
sass_dir = "sass"           #where our .scss files are
images_dir = "../images"    #the folder with your images

# You can select your preferred output style here (can be overridden via the command line):
output_style = :compressed # After dev :compressed prod:expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Obviously
preferred_syntax = :scss

# no need cache
asset_cache_buster = :none
cache = true



# note for brakepoint install
# sudo gem install breakpoint -v
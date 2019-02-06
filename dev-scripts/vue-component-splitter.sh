#For everything between <template> tags, move to a file called filename.html with lowercase first letter

#For everything between <script> tags, move to a file called filename.js with lowercase first letter

#For everything between <style> tags, move to a file called filename.js with lowercase first letter

#get filename
filename=$(basename -- "$1")
dirname=$(dirname -- "$1")
extension="${filename##*.}"
base_filename="${filename%.*}"
cd $dirname
sed -n '0,/<template>/ d; /<\/template>/,$ d; /^$/d; p' $filename > ${base_filename,}.html
sed -n '0,/<script>/ d; /<\/script>/,$ d; /^$/d; p' $filename > ${base_filename,}.js
sed -n '0,/<style>/ d; /<\/style>/,$ d; /^$/d; p' $filename > ${base_filename,}.css

#check wether filename is a vue file
#error() {
#  echo "not a vue file"
#  exit ""
#}
